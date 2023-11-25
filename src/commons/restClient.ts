import Axios from "axios";

export { restClient }
const restClient = Axios.create({
    baseURL: "/",
})