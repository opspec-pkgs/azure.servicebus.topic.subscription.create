const msRestAzure = require('ms-rest-azure');
const AzureArmSb = require('azure-arm-sb');
const process = require('process');

const login = async () => {
    console.log('logging in');

    const loginType = process.env.loginType;
    const loginId = process.env.loginId;
    const loginSecret = process.env.loginSecret;
    const loginOpts = {domain: process.env.loginTenantId};

    let response;
    if (loginType === 'sp') {
        // https://github.com/Azure/azure-sdk-for-node/blob/master/runtime/ms-rest-azure/index.d.ts#L397
        response = await msRestAzure.loginWithServicePrincipalSecret(loginId, loginSecret, loginOpts);
    } else {
        // https://github.com/Azure/azure-sdk-for-node/blob/master/runtime/ms-rest-azure/index.d.ts#L356
        response = await msRestAzure.loginWithUsernamePassword(loginId, loginSecret, loginOpts);
    }

    console.log('login successful');

    return response;
};

const createOrUpdate = async (credentials) => {
    console.log('creating/updating subscription');

    const azureArmSb = new AzureArmSb(credentials, process.env.subscriptionId);

    // see https://github.com/Azure/azure-sdk-for-node/blob/master/lib/services/serviceBusManagement2/lib/operations/subscriptions.js#L1164
    const options = {
        location: process.env.location,
        autoDeleteOnIdle: process.env.autoDeleteOnIdle,
        defaultMessageTimeToLive: process.env.defaultMessageTimeToLive,
        deadLetteringOnFilterEvaluationExceptions: (process.env.deadLetteringOnFilterEvaluationExceptions === 'true'),
        deadLetteringOnMessageExpiration: (process.env.deadLetteringOnMessageExpiration === 'true'),
        enableBatchedOperations: (process.env.enableBatchedOperations === 'true'),
        isReadOnly: (process.env.isReadOnly === 'true'),
        lockDuration: process.lockDuration,
        maxDeliveryCount: parseInt(process.env.maxDeliveryCount),
        requiresSession: (process.env.requiresSession === 'true'),
    };

    await azureArmSb.subscriptions.createOrUpdate(
        process.env.resourceGroup,
        process.env.namespace,
        process.env.topic,
        process.env.name,
        options
    );

    console.log('creating/updating subscription successful');
};

login().then(createOrUpdate).catch(error => {
    console.log(error);
    process.exit(1)
});