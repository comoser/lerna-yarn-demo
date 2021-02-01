pipeline {
    agent any
    stages {
        stage('Deploy') {
            when {
                buildTags()
            }
            steps {
                echo 'Detected a tag'
                echo $TAG_NAME
                echo ${TAG_NAME}
                sh '''
                echo ${TAG_NAME}
                '''
            }
        }
    }
}
