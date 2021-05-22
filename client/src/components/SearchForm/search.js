import React from "react";


function Search() {
  return(
<select class="form-select" aria-label="Default select example">
  <option selected>Viewer count</option>
  <option value="1">0-1000</option>
  <option value="2">1000-3000</option>
  <option value="3">3000-5000</option>
</select>
    
  );
}


export default Search;