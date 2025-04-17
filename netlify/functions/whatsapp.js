exports.handler = async function(event, context) {
    const hour = new Date().getUTCHours() - 3;
    const adjustedHour = (hour + 24) % 24;

    let saudacao;

if (adjustedHour >= 6 && adjustedHour < 12) {
    saudacao = "Bom dia! Tenho interesse em um plano da DALTV e gostaria de fazer um teste.";
} else if (adjustedHour >= 12 && adjustedHour < 18) {
    saudacao = "Boa tarde! Tenho interesse em um plano da DALTV e queria saber se posso fazer um teste.";
} else if (adjustedHour >= 0 && adjustedHour < 6) {
    saudacao = "Boa madrugada! Me interessei por um plano da DALTV e queria fazer um teste antes.";
} else {
    saudacao = "Boa noite! Tenho interesse em um plano da DALTV e gostaria de testar antes de contratar.";
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
