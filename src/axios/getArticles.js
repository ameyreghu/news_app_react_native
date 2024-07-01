import axios from "axios";
import { apiKey } from "../constants/constants";

async function getArticles({country,category}) {
    try {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}`);
        console.log(response.data);
        return { sucess:true,data:response.data.articles}
    } catch (e) {
        console.log("Error");
        console.log(e.response);
        return{sucess:false,error:e.response.data.message};
    }

}

export default getArticles;