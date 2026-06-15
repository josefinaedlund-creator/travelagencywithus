// Script for framtida analys, UTM-spårning och formulärhantering
document.addEventListener('DOMContentLoaded', () => {
    console.log('Xplore Travel Site Loaded. Redo för GA4, HubSpot och Mailchimp integrationer.');

    // Funktion för att extrahera UTM-parametrar (användbart i kursen senare)
    const getQueryParam = (param) => {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
    };

    // Exempel: Logga UTM-taggar om de finns i URL:en
    const utmSource = getQueryParam('utm_source');
    const utmMedium = getQueryParam('utm_medium');
    const utmCampaign = getQueryParam('utm_campaign');
    
    if (utmSource) {
        console.log(`Funnelanalys - Källa: ${utmSource}, Medium: ${utmMedium}, Kampanj: ${utmCampaign}`);
        // Här kan studenten senare spara UTM i sessionStorage eller dolda formulärfält
    }
});
