import axios from "axios";

const Route = async () => {
    try {
       const data = axios.get("https://api.escuelajs.co/api/v1/products")  ;
        return data;
      } catch (error) {
          return error
      }
}

export default Route
