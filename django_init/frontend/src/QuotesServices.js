import axios from 'axios';
const API_URL = 'http://localhost:8000/api/';


// export default class QuotesServices{

const axiosInstance = axios.create({

        baseURL: API_URL,
        // timeout: 5000,
        headers: {
            Authorization: localStorage.getItem('access_token')
                ? 'JWT ' + localStorage.getItem('access_token')
                : null,
            'Content-Type': 'application/json',
            accept: 'application/json',
        },

});
export default axiosInstance;

//     constructor(){}


//     getQuotes() {
//         const url = `${API_URL}/api/quotes/`;
//         return axios.get(url).then(response => response.data);
//     }
//     getQuotesByURL(link){
//         const url = `${API_URL}${link}`;
//         return axios.get(url).then(response => response.data);
//     }
//     getQuote(pk) {
//         const url = `${API_URL}/api/quotes/${pk}`;
//         return axios.get(url).then(response => response.data);
//     }
//     deleteQuote(quote){
//         const url = `${API_URL}/api/quotes/${quote.pk}`;
//         return axios.delete(url);
//     }
//     createQuote(quote){
//         const url = `${API_URL}/api/quotes/`;
//         return axios.post(url,quote);
//     }
//     updateQuote(quote){
//         const url = `${API_URL}/api/quotes/${quote.pk}`;
//         return axios.put(url,quote);
//     }
// }
