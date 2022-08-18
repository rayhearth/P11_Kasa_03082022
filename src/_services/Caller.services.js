import axios from 'axios'

// Paramétrage Axios
const Axios = axios.create({
    baseURL: 'URL_API_BASEPOINT'
})

/**
 * Récupération des Appartement
 */
const AllAppart = () => {
    return Axios.get('ENDPOINT') 
}


export const Caller = {
    Axios, AllAppart
}