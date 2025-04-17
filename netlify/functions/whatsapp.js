exports.handler = async function(event, context) {
    const hour = new Date().getUTCHours() - 3;
    const adjustedHour = (hour + 24) % 24;

    let saudacao;

if (adjustedHour >= 6 && adjustedHour < 12) {
    saudacao = "Bom dia! Tenho interesse em um plano da DALTV e gostaria de fazer um teste. (2)";
} else if (adjustedHour >= 12 && adjustedHour < 18) {
    saudacao = "Boa tarde! Tenho interesse em um plano da DALTV e queria saber se posso fazer um teste. (2)";
} else if (adjustedHour >= 0 && adjustedHour < 6) {
    saudacao = "Boa madrugada! Me interessei por um plano da DALTV e queria fazer um teste antes. (2)";
} else {
    saudacao = "Boa noite! Tenho interesse em um plano da DALTV e gostaria de testar antes de contratar. (2)";
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
<!-- Meta Pixel Code -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '3999710053677941');
fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=3999710053677941&ev=PageView&noscript=1"
/></noscript>
<!-- End Meta Pixel Code -->
