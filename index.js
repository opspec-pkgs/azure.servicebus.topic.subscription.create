const azureSb = require('azure-sb');

const serviceBusService = azureSb.createServiceBusService(process.env.connectionString);

// see https://github.com/Azure/azure-sdk-for-node/blob/master/lib/services/serviceBus/lib/servicebusservice.js#L859
const options = {
    DefaultMessageTimeToLive: process.env.defaultMsgTtl,
    LockDuration: process.env.lockDuration,
    RequiresSession: (process.env.enableSessions === 'true'),
    DeadLetteringOnMessageExpiration: (process.env.enableDeadLetteringOnMsgExp === 'true'),
    EnableDeadLetteringOnFilterEvaluationExceptions: (process.env.enableDeadLetteringOnFilterEvalException === 'true')
};

serviceBusService.createSubscriptionIfNotExists(
    process.env.topicName,
    process.env.subscriptionName,
    options,
    error => {
        if (error) {
            throw error;
        }
        // Subscription was created or exists
        console.log('subscription created or exists.');
    }
);