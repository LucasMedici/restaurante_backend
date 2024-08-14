import amqp from 'amqplib'

export default class QueueService {

    async createANewBuyInQueue(order: any, product: any) {
        try {
           amqp.connect('amqp://localhost').then(async (connection) => {
                connection.createChannel().then(async (channel) => {

                    
                    const queue = 'buy_queue';
                    const msg = JSON.stringify({ order, product });

                    channel.assertQueue(queue, {
                        durable: false
                    });

                    channel.sendToQueue(queue, Buffer.from(msg));
                    console.log(" [x] Sent %s", msg);
                }).catch((error) => {
                    console.error("Erro enviando a mensagem a fila:", error);
                    throw error;
                });
            }).catch((error) => {
                console.error("Erro criando a conexão com o channel do rabbitmq:", error);
                throw error;
            });
            
        } catch (error) {
            console.error("Erro criando a conexão com o amqp/rabbitmq", error);
            throw error;
        }
    }

}