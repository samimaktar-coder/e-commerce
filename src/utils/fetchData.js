const BASE_URL = 'https://strapi-store-server.onrender.com/api';

export const fetchData = async (endpoint) => {
    const data = await fetch(`${BASE_URL}/${endpoint}`);
    return data.json();
};