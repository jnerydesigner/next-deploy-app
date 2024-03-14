pipeline{
    agent any
    tools{
        nodejs 'Node'
    }
    stages{
        stage("Git remote"){
            steps{
                sh 'npm ci'
            }
            
        }
    }
}