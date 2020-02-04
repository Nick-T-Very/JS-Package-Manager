//Points to either mock API or our real API that's being served by Express
export default function getBaseUrl() {
    return getQueryStringParameterByName('useMockApi') ? 'http://localhost:3001/' : 'https://stark-stream-64952.herokuapp.com/';
}

function getQueryStringParameterByName (name, url) { 
    if (!url) url = window.location.href;
    name = name.replace('/[\]]/g, "\\$&"');
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}