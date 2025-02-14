var assert = require('assert');
var AWS = require('aws-sdk');
var http = require('http');

exports.handler = function(event, context) {

    var codepipeline = new AWS.CodePipeline();
    
    // retrieve the Job ID from the Lambda action
    var jobId = event["CodePipeline.job"].id;
    
    // retrieve the value of UserParameters from the Lambda action configuration in CodePipeline
    // This is a URL (or IP address) that can be used to health check the deployment
    var url = event["CodePipeline.job"].data.actionConfiguration.configuration.UserParameters; 
    
    // tell CodePipeline that the job was successful
    var putJobSuccess = function(message) {
        var params = {
            jobId: jobId
        };
        codepipeline.putJobSuccessResult(params, function(err, data) {
            if(err) {
                context.fail(err);      
            } else {
                context.succeed(message);      
            }
        });
    };
    
    //  tell CodePipeline that the job failed
    var putJobFailure = function(message) {
        var params = {
            jobId: jobId,
            failureDetails: {
                message: JSON.stringify(message),
                type: 'JobFailed',
                externalExecutionId: context.awsRequestId
            }
        };
        codepipeline.putJobFailureResult(params, function(err, data) {
            context.fail(message);      
        });
    };
    
    // validate the URL or IP address passed in UserParameters
    if(!url || url.indexOf('http://') === -1) {
        putJobFailure('The UserParameters field must contain a valid URL address to test, including http:// or https://');  
        return;
    }
    
    // this is a helper function to make a GET request of the URL or IP address and test the response 
    var getPage = function(url, callback) {
        var pageObject = {
            body: '',
            statusCode: 0,
            contains: function(search) {
                return this.body.indexOf(search) > -1;    
            }
        };
        http.get(url, function(response) {
            pageObject.body = '';
            pageObject.statusCode = response.statusCode;
            
            response.on('data', function (chunk) {
                pageObject.body += chunk;
            });
            
            response.on('end', function () {
                callback(pageObject);
            });
            
            response.resume(); 
        }).on('error', function(error) {
            // if our request fails, then fail the job
            putJobFailure(error);    
        });           
    };
    
    getPage(url, function(returnedPage) {
        try {
            // check the HTTP response for a 200 status code
            assert(returnedPage.statusCode === 200);
            // check whether the page contains the text "CodePipeline"
            assert(returnedPage.contains('CodePipeline'));  
            // everything worked so succeed the job
            putJobSuccess("validation successfully passed!");
        } catch (ex) {
            // if any assertions fail, then fail the job
            putJobFailure(ex);    
        }
    });     
};