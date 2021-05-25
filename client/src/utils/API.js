import axios from "axios";

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
  