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

        stage("Deploy in VPS"){
            steps{
                sh './deploy.sh'
            }            
        }

        stage("Navigate Folder Project"){
            steps{
                sh 'cd /root/next-deploy-app/'
            }            
        }

         stage("Verifield Path"){
            steps{
                sh 'pwd'
            }            
        }

        stage("Verifield Files in Folder"){
            steps{
                sh 'ls -la'
            }            
        }

        stage("Stop Prod"){
            steps{
                sh 'pm2 stop ecosystem.config.js'
            }            
        }

        stage("Verifield PID Project"){
            steps{            
                sh 'PID=$(lsof -t -i:3040)'
                sh '''
                    if [ -n "$PID" ]; then 
                        echo "Process is running"; 
                    else 
                        echo "Process is not running"; 
                    fi
                    '''                
            }            
        }

        stage("Deploy Prod Start"){
            steps{
                sh 'pm2 start ecosystem.config.js'
            }            
        }

    }
}