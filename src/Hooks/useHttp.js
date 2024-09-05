import axios from "axios";
import { useState, useEffect } from "react";
axios.defaults.baseURL = process.env.REACT_APP_BASE_URL || "http://localhost:8000";

const useHttp = (request) => {
    const [httpResponse, sethttpResponse] = useState(null)
    const [httpError, setHttpError] = useState(null)
    const [httpLoader, setHttpLoader] = useState(true)

    const ajax = () => {
        axios(request)
            .then((response) => {
                sethttpResponse(response.data)
            }).catch((error) => {
                setHttpError(error.response)
            }).finally(()=>{
                setHttpLoader(false)
            })
    }

    // call auto ajax request
      useEffect(()=>{
      if(request){
          ajax()
      }
    },[request])
return [httpResponse , httpError ,httpLoader]


}

export default useHttp  
