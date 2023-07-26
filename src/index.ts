import { EventBus } from 'aws-cdk-lib/aws-events';
import { FunctionOptions } from 'aws-cdk-lib/aws-lambda';
import { SqsEventSource, SqsEventSourceProps } from 'aws-cdk-lib/aws-lambda-event-sources';
import { Queue } from 'aws-cdk-lib/aws-sqs';
import { paramCase } from 'change-case';
import { Construct } from 'constructs';
import { SqsToEventbridgeFunction } from './sqsToEventbridge-function';

export interface EventbridgeToSqsProps {
  readonly eventBus: EventBus;
  readonly logRetention?: number;
  readonly sqsQueue: Queue;
  readonly sqsEventSourceProps?: SqsEventSourceProps;
  readonly functionOptions?: FunctionOptions;

};

export class SqsToEventbridge extends Construct {
  eventSourceMappingId: string;
  constructor(scope: Construct, id: string, props: EventbridgeToSqsProps) {
    super(scope, id);
    const { eventBus, logRetention, sqsQueue, sqsEventSourceProps, functionOptions } = props;

    const idName = paramCase(id);
    // sqs to lambda which forwards events to the private event backbone bus
    const sqsToEventBridgeLambda = new SqsToEventbridgeFunction(
      this,
      'sqsToEventbridgeLambda',
      {
        functionName: `${idName}-sqs-to-event-bridge-lambda`,
        logRetention,
        ...functionOptions,
      },
    );
    sqsToEventBridgeLambda.addEnvironment(
      'EVENT_BUS_NAME',
      eventBus.eventBusName,
    );
    // allow the lambda forwarder to put events on the private event backbone bus
    eventBus.grantPutEventsTo(sqsToEventBridgeLambda);
    const eventSource = new SqsEventSource(sqsQueue, sqsEventSourceProps);

    sqsToEventBridgeLambda.addEventSource(eventSource);

    this.eventSourceMappingId = eventSource.eventSourceMappingId;
  }
}
