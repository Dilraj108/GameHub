import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:"b3031d1b05fe485aa7335b1d0678395a"
    }
})