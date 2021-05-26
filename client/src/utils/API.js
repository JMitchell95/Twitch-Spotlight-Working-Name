
import { ApiClient } from 'twitch';
import { AccessToken, RefreshableAuthProvider, StaticAuthProvider } from 'twitch-auth';

require('dotenv').config();
// const request = require("ajax-request");





const clientId = "s4fmk8dipzizjyev5rsfk299ddf1a7";
const accessToken = "4v0iz3fv75xufomdl29djn1dtko33o";
const clientSecret = "4v0iz3fv75xufomdl29djn1dtko33o";
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

// request({

//     url: 'https://api.twitch.tv/helix/streams/',
//     method: 'GET',
//     header: {
//         'Authorization': 'Bearer 4v0iz3fv75xufomdl29djn1dtko33o',
//         'Client-Id': 's4fmk8dipzizjyev5rsfk299ddf1a7'
//     },
//     success: function(data){
//         console.log(data)
//        return data;
//     },
    
    
// });

export const apiClient = new ApiClient({ authProvider });


