Exit Code       Meaning
1	            catchall for general errors
2	            misuse of shell builtins (missing keyword or command)
126	            Command invoked cannot execute	(potential permission problem or command not executable)
127	            "command not found"	(possible problem with $PATH or could be a typo)
128	            Invalid argument to exit (exit only permits integer args in the range 0 - 255)
255             Exit status out of range (exit only permits integer args in the range 0 - 255)