
import { ApiClient } from 'twitch';
import { AccessToken, RefreshableAuthProvider, StaticAuthProvider } from 'twitch-auth';

require('dotenv').config();



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

export const apiClient = new ApiClient({ authProvider });


