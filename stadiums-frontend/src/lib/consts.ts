const production = true;
const baseUrl = "http://lap:3000";
const productionUrl = "https://stadiums.onrender.com";

export function getUrl() {
    return production ? productionUrl : baseUrl;
}

