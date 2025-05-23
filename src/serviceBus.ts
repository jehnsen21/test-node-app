import { ServiceBusClient } from "@azure/service-bus";
import 'dotenv/config';

const connectionString: string | undefined = process.env.SERVICEBUS_CONNECTIONSTRING
const topicName = 'jehnsen-ecom-test'

if (!connectionString) {
  throw new Error("Missing Service Bus connection string");
}
const sbClient = new ServiceBusClient(connectionString)
const sender = sbClient.createSender(topicName)

export const sendOrderMessage = async (order: any) => {
    await sender.sendMessages({
        body: order,
        subject: "order.created",
    })
}