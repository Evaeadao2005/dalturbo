exports.handler = async function(event, context) {
    const hour = new Date().getHours();
    let saudacao;

    if (hour >= 6 && hour < 12) {
        saudacao = "Bom dia, tenho interesse em adquirir um plano na DALTV";
    } else if (hour >= 12 && hour < 18) {
        saudacao = "Boa tarde, tenho interesse em adquirir um plano na DALTV";
    } else {
        saudacao = "Boa noite, tenho interesse em adquirir um plano na DALTV";
    }

    const numbers = ["558894492159"];
    const randomNumber = numbers[Math.floor(Math.random() * numbers.length)];

    const whatsappUrl = `https://chat.whatsapp.com/Hn68i1MtfzEGnui7kumB5r`;

    return {
        statusCode: 301,  // Código de redirecionamento
        headers: {
            Location: whatsappUrl
        }
    };
};
