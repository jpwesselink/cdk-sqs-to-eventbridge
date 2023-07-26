import { env } from 'process';
import {
  EventBridge,
  EventBridgeClient,
  PutEventsCommand,
  PutEventsCommandInput,
} from '@aws-sdk/client-eventbridge';
import { SQSEvent, SQSHandler } from 'aws-lambda';

let eventBridgeClient: EventBridgeClient;

export const handler: SQSHandler = async (event: SQSEvent) => {
  if (!eventBridgeClient) {
    eventBridgeClient = new EventBridge({
      region: process.env.AWS_REGION || process.env.DEFAULT_REGION,
    });
  }
  for (const record of event.Records) {
    const { body } = record;
    const sqsEvent = JSON.parse(body);

    const params: PutEventsCommandInput = {
      Entries: [
        {
          Detail: JSON.stringify(sqsEvent.detail),
          DetailType: sqsEvent['detail-type'],
          Resources: sqsEvent.resources,
          Source: sqsEvent.source,
          EventBusName: env.EVENT_BUS_NAME,
          /* @ts-ignore */
          ReplayName: event['replay-name'],
        },
      ],
    };

    await eventBridgeClient.send(new PutEventsCommand(params));
  }
};
