exports.handler = async function(event, context) {
    const hour = new Date().getUTCHours() - 3;
    const adjustedHour = (hour + 24) % 24;

    let saudacao;

    if (adjustedHour >= 6 && adjustedHour < 12) {
        saudacao = "Bom dia, tenho interesse em adquirir um plano na DALTV";
    } else if (adjustedHour >= 12 && adjustedHour < 18) {
        saudacao = "Boa tarde, tenho interesse em adquirir um plano na DALTV";
    } else if (adjustedHour >= 0 && adjustedHour < 6) {
        saudacao = "Boa madrugada, tenho interesse em adquirir um plano na DALTV";
    } else {
        saudacao = "Boa noite, tenho interesse em adquirir um plano na DALTV";
    }

    const numbers = ["558894492159", "558892063359", "558892532304"];
    const randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
    const whatsappUrl = `https://wa.me/${randomNumber}?text=${encodeURIComponent(saudacao)}`;

    return {
        statusCode: 301,
        headers: {
            Location: whatsappUrl
        }
    };
};
