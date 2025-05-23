import { app, InvocationContext } from "@azure/functions";

export async function ShippingProcessor(message: any, context: InvocationContext): Promise<void> {
    context.log('Service bus topic function processed message:', message);

    // const parsed = typeof message === 'string' ? message : JSON.parse(message);
    // context.log('Parsed message:', parsed);
    console.log("typeof message:", typeof message);
    console.log("message:", message.productId);

}

app.serviceBusTopic('ShippingProcessor', {
    connection: 'SERVICEBUS_CONNECTIONSTRING',
    topicName:'jehnsen-ecom-test',
    subscriptionName: 'billing-sub',
    handler: ShippingProcessor
});
