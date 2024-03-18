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
                sh 'pm2 stop ecosystem.config.js'
            }            
        }

        stage("Deploy Prod Start"){
            steps{
                sh 'pm2 start ecosystem.config.js'
            }            
        }

    }
}