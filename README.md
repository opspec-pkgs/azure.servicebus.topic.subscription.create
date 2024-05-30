[![Build Status](https://azure.servicebus.topic.subscription.create/workflows/build/badge.svg?branch=main)](https://azure.servicebus.topic.subscription.create/actions?query=workflow%3Abuild+branch%3Amain)

<img src="icon.svg" alt="icon" height="100px">

# Problem statement

creates an azure servicebus topic subscription (if it doesn't already exist)

# Example usage

## Visualize

```shell
opctl ui azure.servicebus.topic.subscription.create#2.1.0
```

## Run

```
opctl run azure.servicebus.topic.subscription.create#2.1.0
```

## Compose

```yaml
op:
  ref: azure.servicebus.topic.subscription.create#2.1.0
  inputs:
    loginId:  # 👈 required; provide a value
    loginSecret:  # 👈 required; provide a value
    loginTenantId:  # 👈 required; provide a value
    name:  # 👈 required; provide a value
    namespace:  # 👈 required; provide a value
    resourceGroup:  # 👈 required; provide a value
    subscriptionId:  # 👈 required; provide a value
    topic:  # 👈 required; provide a value
  ## uncomment to override defaults
  #   autoDeleteOnIdle: "10675199.02:48:05.4775807"
  #   deadLetteringOnFilterEvaluationExceptions: "false"
  #   deadLetteringOnMessageExpiration: "false"
  #   defaultMessageTimeToLive: "14.00:00:00"
  #   enableBatchedOperations: "true"
  #   isReadOnly: "false"
  #   location: "westus"
  #   lockDuration: "00:00:30"
  #   loginType: "user"
  #   maxDeliveryCount: 10
  #   requiresSession: "false"
```

# Support

join us on
[![Slack](https://img.shields.io/badge/slack-opctl-E01563.svg)](https://join.slack.com/t/opctl/shared_invite/zt-51zodvjn-Ul_UXfkhqYLWZPQTvNPp5w)
or
[open an issue](https://azure.servicebus.topic.subscription.create/issues)

# Releases

releases are versioned according to
[![semver 2.0.0](https://img.shields.io/badge/semver-2.0.0-brightgreen.svg)](http://semver.org/spec/v2.0.0.html)
and [tagged](https://git-scm.com/book/en/v2/Git-Basics-Tagging); see
[CHANGELOG.md](CHANGELOG.md) for release notes

# Contributing

see
[project/CONTRIBUTING.md](https://github.com/opspec-pkgs/project/blob/main/CONTRIBUTING.md)
