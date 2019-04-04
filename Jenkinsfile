pipeline {
    agent any

    stages {
        stage('Install') {
            steps {
				powershell 'yarn install --frozen-lockfile'
            }
        }
        stage('Clean') {
            steps {
				powershell 'yarn run clean'
            }
        }
        stage('Build - Vendor') {
            steps {
				powershell 'yarn run wp:vendor'
            }
        }
        stage('Build - App') {
            steps {
				powershell 'yarn run wp:app'
            }
        }
		stage('Deploy To Stage') {
			when {
				branch 'develop'
			}
			environment {
				PUBLISH_SITE = credentials('Stage_SiteName')
				PUBLISH_MACHINE = credentials('DevPublishMachine')
				PUBLISH_CREDENTIALS = credentials('DevPublishCredentials')
			}
			steps {
				powershell './build.ps1 -Script deploy.cake'
			}
		}
    }
	post {
        always {
            archiveArtifacts artifacts: 'release/release.zip', onlyIfSuccessful: true
        }
    }
}