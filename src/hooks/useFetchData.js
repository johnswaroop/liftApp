import { useEffect, useState } from 'react'


const useFetchData = () => {


    const [data, setData] = useState({});

    useEffect(() => {

        fetch('https://api.steinhq.com/v1/storages/60979616d9e29121dfda964e/sheet1').then(Response => Response.json()).then((rows) => {

            setData((p) => {

                return { ...rows }

            })
        })



    }, []);


    return data;

}

export default useFetchData;