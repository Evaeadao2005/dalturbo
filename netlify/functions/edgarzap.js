exports.handler = async function(event, context) {
    const hour = new Date().getHours();
    let saudacao;

    if (hour >= 6 && hour < 12) {
        saudacao = "Bom dia, tenho interesse em adquirir um plano na EDGARTV";
    } else if (hour >= 12 && hour < 18) {
        saudacao = "Boa tarde, tenho interesse em adquirir um plano na EDGARTV";
    } else {
        saudacao = "Boa noite, tenho interesse em adquirir um plano na EDGARTV";
    }

    const numbers = ["558896285650"];
    const randomNumber = numbers[Math.floor(Math.random() * numbers.length)];

    const whatsappUrl = `https://wa.me/${randomNumber}?text=${encodeURIComponent(saudacao)}`;

    return {
        statusCode: 301,  // Código de redirecionamento
        headers: {
            Location: whatsappUrl
        }
    };
};

