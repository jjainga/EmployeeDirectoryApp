import axios from "axios";

// Export an object with a "search" 
export default {
  search: function() {return axios.get("https://randomuser.me/api/");}
}
