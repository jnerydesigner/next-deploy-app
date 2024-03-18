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

        stage("Stop Prod"){
            steps{
                sh 'pm2 stop NextDeployNew'
            }            
        }

        stage("Deploy Prod Start"){
            steps{
                sh 'pm2 start "npm run start" --name NextDeployNew'
            }            
        }

    }
}

// pm2 start app.js -i
