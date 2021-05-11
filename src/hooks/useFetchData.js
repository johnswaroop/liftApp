import { useEffect, useState } from 'react'


const useFetchData = () => {


    const [data, setData] = useState(null);
    console.log('data init');
    useEffect(() => {

        fetch('https://api.steinhq.com/v1/storages/60979616d9e29121dfda964e/sheet1').then(Response => Response.json()).then((rows) => {

            setData((p) => {


                return { ...rows.reverse() }

            })
        })



    }, []);

    function trigger() {


        console.log("trigger");
        fetch('https://api.steinhq.com/v1/storages/60979616d9e29121dfda964e/sheet1').then(Response => Response.json()).then((rows) => {

            setData((p) => {


                return { ...rows.reverse() }

            })
        })


    }


    return [data, setData, trigger];

}

export default useFetchData;