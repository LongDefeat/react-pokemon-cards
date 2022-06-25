import {useState} from "react";
import axios from "axios";

const useAxios = (baseUrl, path="") => {
    const [responses, setResponses] = useState([]);
    const addResponseData = async (formatter = data => data) => {
        const response = await axios.get(`${baseUrl}${path}`);
        setResponses(data => [...data, formatter(response.data)]);

    }
    return [responses, addResponseData]
}
export default useAxios;