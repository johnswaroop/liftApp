import useFetchData from '../hooks/useFetchData'
import { DataContext } from '../hooks/DataContext'
import useFuzzySearch from '../hooks/useFuzzySearch'
import { useContext, useState } from 'react'
const Search = () => {

    const [data, setData] = useContext(DataContext);

    const [activeBtn, setActiveBtn] = useState('liftNo');
    const [searchKey, setSearchKey] = useState('');

    const [result, setResult] = useState(data);

    useFuzzySearch(data, searchKey, activeBtn, setResult)

    let size = Object.keys(result).length

    const results = new Array();

    for (let i = 0; i < size; i++) {
        results.push(<div className='search-result'>
            <span>
                <h1 className='q'>Date :</h1>
                <h1 className='result-date' type="date" >{result[i].date}</h1>
            </span>
            <span>
                <h1 className='q'>Lift No :</h1>
                <h1 className='result-lift-no' type="text" >{result[i].liftNo}</h1>
            </span>
            <span>
                <h1 className='q'>Name :</h1>
                <h1 className='result-lift-customer' type="text" >{result[i].customerName}</h1>
            </span>
        </div>
        )
    }


    function buttonProvider() {

        if (activeBtn === 'liftNo') {

            return (
                <div className='search-option'>
                    <button name='liftNo' style={{ borderBottom: "5px solid orange" }} onClick={changeActivebtn}>Lift No</button>
                    <button name='name' onClick={changeActivebtn}>Name</button>
                </div >
            )
        }
        else {
            return (
                <div className='search-option'>
                    <button name='liftNo' onClick={changeActivebtn}>Lift No</button>
                    <button name='name' style={{ borderBottom: "5px solid orange" }} onClick={changeActivebtn}>Name</button>
                </div>
            )
        }

    }

    function changeActivebtn(e) {
        setActiveBtn(e.target.name);
    }

    function searchHandler(e) {

        setSearchKey(e.target.value);
    }

    function updateSearchResult() {
        if (activeBtn === 'liftNo') {

        }

    }






    return (
        <div className='search-container'>
            <div className='search-nav'>

                <h1>Search By</h1>
                {buttonProvider()}
                <div className='search-bar'>
                    <input type="text" value={searchKey} onChange={searchHandler} />
                    <button onClick={updateSearchResult} >Search</button>
                </div>


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