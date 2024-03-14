pipeline{
    agent any
    tools{
        nodejs 'Node'
    }
    stages{
        stage("Verifield Files"){
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

        stage("Copy Files"){
            steps{
                sh 'cp /var/lib/jenkins/workspace/NextDeploy/ /root/next-deploy-app/ -r'
            }            
        }

        stage("Deploy Prod Start"){
            steps{
                sh 'pm2 restart ecosystem.config.js'
            }            
        }

        // stage("Deploy Prod Restart"){
        //     steps{
        //         sh 'pm2 reload ecosystem.config.js'
        //     }            
        // }
    }
}