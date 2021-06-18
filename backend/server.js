Deployment completed, but with errors: During an aborted deployment, some instances may have deployed the new application version.
To ensure all instances are running the same version, re-deploy the appropriate application version. 
Failed to deploy application. Unsuccessful command execution on instance id(s) 'i-079bb8c16b44abed3'.
Aborting the operation. [Instance: i-079bb8c16b44abed3] Command failed on instance.
Return code: 1 Output: /elasticbeanstalk/hooks/appdeploy/enact/03start-task.sh failed. For more detail, check /var/log/eb-activity.log using
console or EB CLI. Failed to start ECS task after retrying 2 times. ECS task stopped due to: Essential container in task exited. (backend: nginx: )
Failed to start ECS task: arn:aws:ecs:us-east-2:901988871193:task/awseb-Strapiapp-env-5xztjd28qu/41322642edbd484cb45f6c72c1f11565 is STOPPED.
ECS task stopped due to: Essential container in task exited. (nginx: backend: ) 
Failed to start ECS task: arn:aws:ecs:us-east-2:901988871193:task/awseb-Strapiapp-env-5xztjd28qu/72ab06456bbd47b2bf3c8a89e565c774 is STOPPED.