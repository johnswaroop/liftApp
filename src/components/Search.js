import useFetchData from '../hooks/useFetchData'
import { DataContext } from '../hooks/DataContext'
import { useContext } from 'react'
const Search = () => {



    const [data, setData] = useContext(DataContext);

    let size = Object.keys(data).length

    const results = new Array();

    for (let i = 0; i < size; i++) {
        results.push(<div className='search-result'>
            <span>
                <h1 className='q'>Date :</h1>
                <h1 className='result-date' type="date" >{data[i].date}</h1>
            </span>
            <span>
                <h1 className='q'>Lift No :</h1>
                <h1 className='result-lift-no' type="text" >{data[i].liftNo}</h1>
            </span>
            <span>
                <h1 className='q'>Name :</h1>
                <h1 className='result-lift-customer' type="text" >{data[i].customerName}</h1>
            </span>
        </div>
        )
    }








    return (
        <div className='search-container'>
            <div className='search-nav'>

            </div>
            <div className='search-results-view'>
                <div className='y-scroll-search'>

                    {results}
                </div>

            </div>
        </div>
    )
}

export default Search