pipeline{
    agent any
    tools{
        nodejs 'Node'
    }
    stages{
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

        stage("Deploy Prod"){
            steps{
                sh 'pm2 start ecosystem.config.js'
            }            
        }
    }
}