exports.handler = async function(event, context) {
    const hour = new Date().getHours();
    let saudacao;

    if (hour >= 6 && hour < 12) {
        saudacao = "Bom dia, vim por indicação do Influenciador @kauan_ariel_oficial, tenho interesse em adquirir um plano na DALTV";
    } else if (hour >= 12 && hour < 18) {
        saudacao = "Boa tarde, vim por indicação do Influenciador @kauan_ariel_oficial, tenho interesse em adquirir um plano na DALTV";
    } else {
        saudacao = "Boa noite, vim por indicação do Influenciador @kauan_ariel_oficial, tenho interesse em adquirir um plano na DALTV";
    }

    const whatsappUrl = `https://wa.me/558893509111?text=${encodeURIComponent(saudacao)}`;
    
    return {
        statusCode: 301,  // Código de redirecionamento
        headers: {
            Location: whatsappUrl
        }
    };
};
