
import { ApiClient } from 'twitch';
import { AccessToken, RefreshableAuthProvider, StaticAuthProvider } from 'twitch-auth';
import axios from "axios";
require('dotenv').config();


// const request = require("ajax-request");





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


export default {
    // Get's Users
    getUser: function() {
      return axios.get("/api/user");
    },
    // Get's User Categories
    getCategory: function(userData) {
      return axios.get("/api/user/", userData);
    },

    // Saves a categories to user to the database
    saveCategory: function(userData) {
      return axios.post("/api/user", userData);
    },

    loginUser: function(loginEmail, loginPassword) {
        return axios.get("/api/user", loginEmail, loginPassword);
    },

    signUppUser: function(email, password){
        return axios.post("/api/user", email, password);
    }

  };
  


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


