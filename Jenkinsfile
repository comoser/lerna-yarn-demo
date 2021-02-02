pipeline {
    agent {
        docker {
            image 'node:14-alpine'
        }
    }
    environment {
        CI = 'true'
    }
    stages {
        stage('Deploy') {
            when {
                buildingTag()
            }
            steps {
                sh 'node ./release.js'
            }
        }
    }
}
