const API_BASE_URL = 'https://anime-db.p.rapidapi.com';

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'e4cddd9948msh9834d1463b7340bp1d4fd0jsn53049e202097',
        'X-RapidAPI-Host': 'anime-db.p.rapidapi.com',
    },
};

export async function apiGet(queryString) {
    const response = await fetch(`${API_BASE_URL}${queryString}`, options).then(
        r => r.json()
    );

    return response;
}
