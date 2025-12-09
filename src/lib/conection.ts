const strapiUrl = import.meta.env.STRAPI_API_URL || 'https://app-strapi-xfml.onrender.com/api';

export const STRAPI_BASE_URL = strapiUrl.replace('/api', '');

export const STRAPI_URL = strapiUrl;

export const fetchFromAPI = async (slag: string) => {
    try {
        const response = await fetch(`${STRAPI_URL}/${slag}?populate=*`);
        const json = await response.json();
        // Si tiene results, es una lista, si no, es un objeto individual
        return json.data;
    } catch (error) {
        console.error(error);
    }
};