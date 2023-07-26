import { EventBus } from 'aws-cdk-lib/aws-events';
import { Runtime } from 'aws-cdk-lib/aws-lambda';
import { SqsEventSource } from 'aws-cdk-lib/aws-lambda-event-sources';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { Queue } from 'aws-cdk-lib/aws-sqs';
import { paramCase } from 'change-case';
import { Construct } from 'constructs';

export interface EventbridgeToSqsProps {
  readonly eventBus: EventBus;
  readonly logRetention?: number;
  readonly sqsQueue: Queue;
}

export class SqsToEventbridge extends Construct {
  eventSourceMappingId: string;
  constructor(scope: Construct, id: string, props: EventbridgeToSqsProps) {
    super(scope, id);
    const { eventBus, logRetention, sqsQueue } = props;

    const idName = paramCase(id);
    // sqs to lambda which forwards events to the private event backbone bus
    const sqsToEventBridgeLambda = new NodejsFunction(
      this,
      'sqsToEventbridgeLambda',
      {
        functionName: `${idName}-sqs-to-event-bridge-lambda`,
        runtime: Runtime.NODEJS_18_X,
        entry:
          'src/lambdas/sqsToEventbridgeLambda.ts',
        handler: 'handler',
        logRetention,
      },
    );
    sqsToEventBridgeLambda.addEnvironment(
      'EVENT_BUS_NAME',
      eventBus.eventBusName,
    );
    // allow the lambda forwarder to put events on the private event backbone bus
    eventBus.grantPutEventsTo(sqsToEventBridgeLambda);
    const eventSource = new SqsEventSource(sqsQueue);

    sqsToEventBridgeLambda.addEventSource(eventSource);

    this.eventSourceMappingId = eventSource.eventSourceMappingId;
  }
}
