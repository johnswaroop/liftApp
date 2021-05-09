import useFetchData from '../hooks/useFetchData'
const Search = () => {



    const data = useFetchData();
    console.log(data);

    const results = new Array();

    for (let i = 0; i < 15; i++) {
        results.push(<div className='search-result'>
            <span>
                <h1 className='q'>Date :</h1>
                <h1 className='result-date' type="date" >28/10/2021</h1>
            </span>
            <span>
                <h1 className='q'>Lift No :</h1>
                <h1 className='result-lift-no' type="text" >1025xx</h1>
            </span>
            <span>
                <h1 className='q'>Name :</h1>
                <h1 className='result-lift-customer' type="text" >name take</h1>
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