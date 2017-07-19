# Problem statement
creates an azure servicebus topic subscription (if it doesn't already exist)

# Example usage

> note: in examples, VERSION represents a version of the azure.servicebus.topic.subscription.create pkg

## install

```shell
opctl pkg install github.com/opspec-pkgs/azure.servicebus.topic.subscription.create#VERSION
```

## run

```
opctl run github.com/opspec-pkgs/azure.servicebus.topic.subscription.create#VERSION
```

## compose

```yaml
op:
  pkg: { ref: github.com/opspec-pkgs/azure.servicebus.topic.subscription.create#VERSION }
  inputs: 
    subscriptionId:
    location:
    loginId:
    loginSecret:
    loginTenantId:
    name:
    namespace:
    resourceGroup:
    topic:
    # begin optional args
    autoDeleteOnIdle:
    defaultMessageTimeToLive:
    deadLetteringOnFilterEvaluationExceptions:
    deadLetteringOnMessageExpiration:
    enableBatchedOperations:
    isReadOnly:
    lockDuration:
    loginType:
    maxDeliveryCount:
    requiresSession:
    # end optional args
```

# Support

join us on [![Slack](https://opspec-slackin.herokuapp.com/badge.svg)](https://opspec-slackin.herokuapp.com/)
or [open an issue](https://github.com/opspec-pkgs/azure.servicebus.topic.subscription.create/issues)
