const { awscdk } = require('projen');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'JP Wesselink',
  authorAddress: 'jpwesselink@gmail.com',
  cdkVersion: '2.1.0',
  defaultReleaseBranch: 'main',
  name: 'cdk-sqs-to-eventbridge',
  repositoryUrl: 'https://github.com/jpwesselink/cdk-sqs-to-eventbridge.git',
  bundledDeps: ['change-case', '@aws-sdk/client-eventbridge', '@types/aws-lambda'],
  peerDeps: ['aws-cdk-lib@^2.88.0', 'constructs@^10.2.69'],
  devDeps: ['aws-cdk-lib@^2.88.0', 'constructs@^10.2.69'],
  deps: ['aws-cdk-lib@^2.88.0', 'constructs@^10.2.69'],
  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
  lambdaOptions: {
    // target node.js runtime
    runtime: awscdk.LambdaRuntime.NODEJS_18_X,
  },
});
project.synth();