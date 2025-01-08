pipeline {
    agent any
    
    environment {
        DOCKER_IMAGE = "abdullahtarar222/demo-node-app"
    }

    triggers {
        githubPush()
    }

    stages {
        stage('Clone Repository') {
            steps {
                sh 'cd ~/jenkins-pipeline-test'
                sh 'rm -r dockerized-node-app'
                echo 'Cloning the GitHub repository...'
                git branch: 'main', url: 'https://github.com/AbdullahTarar/dockerized-node-app.git'
            }
        }

    }

    post {
        success {
            echo 'Pipeline executed successfully.'
        }
        failure {
            echo 'Pipeline execution failed.'
        }
    }
}
