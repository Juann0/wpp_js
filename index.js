const qrcode = require('qrcode-terminal');

const { Client } = require('whatsapp-web.js');
const client = new Client();

client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.initialize();

client.on('message', message => {
    if (message.body === 'Hola' || message.body === "hola") {
        message.reply('Bienvenido al Bot 🤖 de grado Sexto \n_Diseñado por Juan José Trujillo_');
    }
});

client.on('message', message => {
    if (message.body === 'hora') {
        let date = new Date();
        client.sendMessage(message.from, `La fecha y la hora actual es ${date}`);
    }
});

