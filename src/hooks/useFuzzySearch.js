import FuzzySet from 'fuzzyset.js'
import { useEffect, useState } from 'react'

const useFuzzySearch = (data, searchKey, activeBtn, setResult) => {


    useEffect(() => {


        let size = Object.keys(data).length;
        let searchArray = new Array();
        let resultObj = {};

        // console.log(size);


        for (let i = 0; i < size; i++) {
            searchArray.push(data[i].liftNo);
        }


        let fs = FuzzySet(searchArray);
        //console.log(fs.get(searchKey, 'none', 0.1))
        let fuzzyarray = new Array();

        fuzzyarray = fs.get(searchKey, ['none'], 0.1)

        var x = 0;


        fuzzyarray.forEach((ele) => {

            let z = searchArray.indexOf(ele[1]);


            resultObj[x] = data[z];

            x = x + 1;
        })

        console.log(resultObj)

        if (Object.keys(resultObj).length >= 1) {


            if (resultObj[0]) {
                setResult({ ...resultObj })
            }
            else {
                setResult(data)
            }


        }
        else {



        }

    }, [searchKey, data])



}


export default useFuzzySearch;