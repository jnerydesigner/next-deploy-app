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
        stage("Deploy Prod Start"){
            steps{
                sh 'pm2 start ecosystem.config.js'
            }            
        }

        // stage("Deploy Prod Restart"){
        //     steps{
        //         sh 'pm2 reload ecosystem.config.js'
        //     }            
        // }
    }
}