pipeline {
    agent any
    tools { nodejs 'node' }
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
