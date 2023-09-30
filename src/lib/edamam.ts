const edamakey = "sadfafsdafds"
import { env } from '$env/dynamic/private';




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

export const recipeGen = () => {
    

}


export const foodSearch = () => {

}


export const barcodeScan = () => {


};
