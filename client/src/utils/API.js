// import axios from "axios";

// const BASEURL = "https://api.giphy.com/v1/gifs/search?q=";
// const APIKEY = "&api_key=dc6zaTOxFJmzC&limit=20";

// // Export an object with a "search" method that searches the Giphy API for the passed query
// export default {
//   search: function(query) {
//     return axios.get(BASEURL + query + APIKEY);
//   }
// };

import { ApiClient } from 'twitch';
import { StaticAuthProvider } from 'twitch-auth';

const clientId = 'k133360udrgb5e8hgfzod5y7yy8zfi';
const accessToken = 'v24pfyckv571r7ea35tmzka091lkta';
export const authProvider = new StaticAuthProvider(clientId, accessToken);
export const apiClient = new ApiClient({ authProvider });
