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
    console.log('record', JSON.stringify({ record }, null, 2));
    const { body } = record;
    const sqsEvent = JSON.parse(body);

    const params: PutEventsCommandInput = {
      Entries: [
        {
          Detail: JSON.stringify(sqsEvent.detail),
          DetailType: sqsEvent['detail-type'],
          Resources: sqsEvent.resources,
          // ReplayName: event["replay-name"],
          Source: sqsEvent.source,
          EventBusName: env.EVENT_BUS_NAME,
          // "arn:aws:events:eu-west-1:337129175967:event-bus/event-backbone-private-bus",
          // EventBusName: config.eventBusName,
          /* @ts-ignore */
          ReplayName: event['replay-name'],
          // ",
        },
      ],
    };

    await eventBridgeClient.send(new PutEventsCommand(params));
    // console.log("Success, event sent; requestID:", data);
  }
};
