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
    }
}