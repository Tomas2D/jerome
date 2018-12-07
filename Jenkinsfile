PipelineReact {
    slackChannel = '#ci-web'
    buildCommand = [
        master: 'npm run clean && npm test && npm run lint && npm i && npm run build',
        development: 'npm run clean && npm test && npm run lint && npm i && npm run build'
    ]
    buildDir = 'lib'

    bucketURL = [
    ]
    nodeEnv = '-e NODE_PATH=./app:./config'
    nodeImage = 'node:8'
    excludeDir = '.git'
}
