import React, { useState, useEffect } from "react";
import { apiClient } from "../../utils/API.js";
require('dotenv').config();



function Search() {
  async function isStreamLive(userName) {
    const user = await apiClient.helix.users.getUserByName(userName);
    if (!user) {
      return false;
    }
    return await apiClient.helix.streams.getStreamByUserId(user.id) !== null;
  }
  
  // const [searchState, setSearchState] = useState({
    
  // });
    
  //   useEffect(() => {
  //     fetch("/streams")
  //   });


  return(
<select class="form-select" aria-label="Default select example">
  <option selected>Viewer count</option>
  <option value="0-1000">0-1000</option>
  <option value="1000-3000">1000-3000</option>
  <option value="3000-5000">3000-5000</option>
  <option value="5001-10000">5001-10000</option>
  <option value="10001-15000">10001-15000</option>
  <option value="15001-50000">15001-50000</option>
</select>
    
  );

}


export default Search;