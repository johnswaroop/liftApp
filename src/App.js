import Form from './components/Form'
import Search from './components/Search'
import { DataContext } from './hooks/DataContext'
import useFetchData from './hooks/useFetchData'
import { useState } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'


function App() {



  let [data, setData, trigger] = useFetchData();



  if (data) {

    return (
      <Router>
        <div className='container'  >
          <DataContext.Provider value={[data, setData, trigger]}>
            <div className='phone'>
              <div className='ui'>
                <Switch>
                  <Route exact path='/add'>
                    <Form />
                  </Route>

                  <Route exact path='/'>
                    <Search />
                  </Route>




                </Switch>
              </div>
              <div className='bottom-nav'>


                <Link to='/add' className='routeBtn' >
                  <img className='routeIcon' src="images/icons/add.png" alt="" />
                </Link>

                <Link to='/' className='routeBtn' >
                  <img className='routeIcon' src="images/icons/search.png" alt="" />
                </Link>


              </div>
            </div>
          </DataContext.Provider>

        </div>
      </Router>
    );
  }
  else {
    return null
  }
}

export default App;
