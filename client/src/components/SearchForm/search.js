import React, { useState } from "react";


function Search() {
  const [searchState, setSearchState] = useState({
    
  });

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