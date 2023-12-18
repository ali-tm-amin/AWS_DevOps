import json
import boto3

cl = boto3.client('codecommit')

def lambda_handler(event, context):
    #Log the updated references from the event
    references = { reference['ref'] for reference in event['Records'][0]['codecommit']['references'] }
    print("References: "  + str(references))
    
    #Get the repository from the event and show the repo name
    repository = event['Records'][0]['eventSourceARN'].split(':')[5]
    try:
        response = cl.get_repository(repositoryName=repository)
        print("Repository trigger active: " +response['repositoryMetadata']['repositoryName'])
        return response['repositoryMetadata']['repositoryName']
    except Exception as e:
        print(e)
        print('Error getting repository {}. Contact your sys admin'.format(repository))
        raise e