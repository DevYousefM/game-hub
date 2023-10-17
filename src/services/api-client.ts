import axios from "axios";
 
export default axios.create({
  baseURL:"https://api.rawg.io/api",
  params:{
    key:"9c6ec07c0fca4390a595a4b8b2921332"
  }
})