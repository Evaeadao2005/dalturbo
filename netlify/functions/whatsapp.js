const getSaudacao = (adjustedHour) => {
    // Definir as mensagens de saudação com base na hora do dia
    const saudações = {
        morning: "Bom dia! Tenho interesse em assinar a DALTV",
        afternoon: "Boa tarde! Tenho interesse em assinar a DALTV",
        night: "Boa noite! Tenho interesse em assinar a DALTV",
        earlyMorning: "Boa madrugada! Tenho interesse em assinar a DALTV",
    };

    // Determina a saudação com base no horário
    if (adjustedHour >= 6 && adjustedHour < 12) return saudações.morning;
    if (adjustedHour >= 12 && adjustedHour < 18) return saudações.afternoon;
    if (adjustedHour >= 0 && adjustedHour < 6) return saudações.earlyMorning;
    
    return saudações.night;
};

const getRandomNumber = () => {
    // Array de números de WhatsApp para redirecionamento
    const numbers = ["558894492159", "558892063359", "558892532304"];
    // Seleciona um número aleatório
    return numbers[Math.floor(Math.random() * numbers.length)];
};

exports.handler = async (event, context) => {
    try {
        // Calcula a hora ajustada para o fuso horário (-3 UTC)
        const hour = new Date().getUTCHours() - 3;
        const adjustedHour = (hour + 24) % 24;
        
        // Obtém a saudação correta com base na hora
        const saudacao = getSaudacao(adjustedHour);
        
        // Obtém um número de WhatsApp aleatório
        const randomNumber = getRandomNumber();
        
        // Gera a URL para o WhatsApp com a saudação
        const whatsappUrl = `https://wa.me/${randomNumber}?text=${encodeURIComponent(saudacao)}`;
        
        // Retorna o redirecionamento para o WhatsApp
        return {
            statusCode: 301,
            headers: {
                Location: whatsappUrl
            }
        };
    } catch (error) {
        // Se ocorrer algum erro, loga e retorna um erro 500
        console.error('Erro ao processar a requisição:', error);
        return {
            statusCode: 500,
            body: 'Ocorreu um erro ao processar sua requisição.'
        };
    }
};
