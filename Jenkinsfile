pipeline {
    agent {
        docker { image 'node:14-alpine' }
    }
    stages {
        stage('Deploy') {
            when {
                buildingTag()
            }
            steps {
                echo 'Detected a tag'
                sh 'node ./release.js'
                echo "${TAG_NAME}"
                sh '''
                echo $TAG_NAME
                echo "${TAG_NAME}"
                '''
            }
        }
    }
}
