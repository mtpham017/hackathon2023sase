import { env } from '$env/dynamic/private';


const baselink = 'https://api.openfoodrepo.org/v1/';
const options =  ( 
    method="GET",
    body?: any
) => ({
    method,    
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${env.EDAMAM_KEY}`
    },
    body: body
} satisfies RequestInit);

export const getFood = (query: string) => {
   return fetch(baselink+"products"+query, options()) 
        .then(res => res.json()); 
}

export const foodSearch = () => {

}


export const barcodeScan = () => {


};
