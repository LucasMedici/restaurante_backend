import amqp from 'amqplib';

const queue = 'orders_queue'

async function startConsumer() {
    try{
        const connection = await amqp.connect('amqp://localhost')
        const channel = await connection.createChannel();

        await channel.assertQueue(queue, { durable: true });

        channel.consume(queue, (msg) => {
            if(msg != null) {
                console.log('Mensagem recebida: ', msg.content.toString())
                channel.ack(msg)
            }
        })
    }catch(error){
        console.error('Erro ao conectar o Consumer no RabbitMQ: ', error)
    }
}

export default startConsumer;
