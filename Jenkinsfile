pipeline{
    agent any
    tools{
        nodejs 'Node'
    }
    stages{
        stage("Verifield Path"){
            steps{
                sh 'pwd'
            }            
        }

        stage("Install Dependencies"){
            steps{
                sh 'npm ci'
            }            
        }

        stage("Build Project"){
            steps{
                sh 'npm run build'
            }            
        }  

        stage("Deploy Prod Start Initial"){
            steps{
                sh 'pm2 start "npm run start" --name NextDeployNew'
            }            
        }     

        stage("Stop Prod"){
            steps{
                sh 'pm2 stop NextDeployNew'
            }            
        }

        stage("Deploy Prod Start Final"){
            steps{
                sh 'pm2 start "npm run start" --name NextDeployNew'
            }            
        }

    }
}

// pm2 start app.js -i
