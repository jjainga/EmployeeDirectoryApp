import axios from "axios";

// Export an object with a "search" 
const API = {
  search: function() {return axios.get("https://randomuser.me/api/?results=50&nat=us");}
}

export default API