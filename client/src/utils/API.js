
import { ApiClient } from 'twitch';
import { AccessToken, RefreshableAuthProvider, StaticAuthProvider } from 'twitch-auth';

require('dotenv').config();



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


