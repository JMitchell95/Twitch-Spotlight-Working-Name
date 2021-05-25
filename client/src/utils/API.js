// import { ApiClient } from 'twitch';
// import { StaticAuthProvider } from 'twitch-auth';
import { ApiClient } from 'twitch';
import { AccessToken, RefreshableAuthProvider, StaticAuthProvider } from 'twitch-auth';

require('dotenv').config();


// import axios from "axios";

// const BASEURL = "https://api.giphy.com/v1/gifs/search?q=";
// const APIKEY = "&api_key=dc6zaTOxFJmzC&limit=20";

// // Export an object with a "search" method that searches the Giphy API for the passed query
// export default {
//   search: function(query) {
//     return axios.get(BASEURL + query + APIKEY);
//   }
// };



// const clientId = 'k133360udrgb5e8hgfzod5y7yy8zfi';
// const clientSecret = 'hah4yapl6ws3n98ukkfc3gojk5ppwy';
// export const authProvider = new StaticAuthProvider(clientId, accessToken);
// export const apiClient = new ApiClient({ authProvider });





const clientId = process.env.REACT_APP_CLIENT_ID;
const accessToken = process.env.REACT_APP_ACCESS_TOKEN;
const clientSecret = process.env.REACT_APP_CLIENT_SECRET;
const refreshToken = '999999';
const authProvider = new RefreshableAuthProvider(
    new StaticAuthProvider(clientId, accessToken),
    {
        clientSecret,
        refreshToken,
        onRefresh: (token) => {
	        // do things with the new token data, e.g. save them in your database
        }
    }
);

export const apiClient = new ApiClient({ authProvider });
