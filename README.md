# cdk-sqs-to-eventbridge

This is a CDK construct library that allows you to easily put messages from an SQS queue to an EventBridge event bus

## Installation

```bash
npm i cdk-sqs-to-eventbridge
```

## Usage

```typescript
import { SqsToEventbridge } from 'cdk-sqs-to-eventbridge'

new SqsToEventbridge(this, 'SqsToEventbridge', {
  eventBus: eventBus,
  queue: queue,
})
```