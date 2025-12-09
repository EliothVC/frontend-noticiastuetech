const strapiUrl = import.meta.env.STRAPI_API_URL || 'https://app-strapi-xfml.onrender.com/api';

// se usa para las imagenes
export const STRAPI_BASE_URL = strapiUrl.replace('/api', '');

export const STRAPI_URL = strapiUrl;

//Funcion para obtener datos de la API - slug (parametro) es la ruta de la API
export const fetchFromAPI = async (slug: string) => {
    // Validación
    try {
        // fetch a la API
        const response = await fetch(`${STRAPI_URL}/${slug}?populate=*`);
        // convertir a JSON
        const json = await response.json();
        // Si tiene results, es una lista, si no, es un objeto individual
        return json.data;
    } catch (error) {
        console.error(error);
    }
};