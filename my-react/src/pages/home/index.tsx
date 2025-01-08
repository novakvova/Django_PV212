import {useEffect} from "react";
import axios from "axios";
import {APP_ENV} from "../../env";
import {useGetListQuery} from "../../services/apiCategory.ts";

const HomePage = () => {


    const { data, isLoading, error } = useGetListQuery();
    console.log("DATA REDUX", data);
    console.log("isLoading REDUX", isLoading);
    console.log("error REDUX", error);
    //RTK Query

    useEffect(() => {
        console.log("Loading data ...", Date.now());
        axios.get(`${APP_ENV.REMOTE_BASE_URL}/api/categories`)
            .then(resp=> {
                console.log("Результат запиту", resp);
                console.log("Loading data completed :)", Date.now());
            });
    }, []);

    return (
        <>
            <h1>Home Page</h1>
        </>
    )
}

export default HomePage;