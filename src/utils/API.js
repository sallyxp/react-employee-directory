import axios from "axios";
//const BASEURL = "https://randomuser.me/api/?results=100&nat=gb";
//const APIKEY = "&apikey=trilogy";

export default {
      getUsers: () => axios.get("https://randomuser.me/api/?results=100&nat=gb")
};
