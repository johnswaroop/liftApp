import Form from './components/Form'
import Search from './components/Search'
import { DataContext } from './hooks/DataContext'
import useFetchData from './hooks/useFetchData'
import { useState } from 'react'


function App() {



  let [data, setData, trigger] = useFetchData();



  if (data) {

    return (
      <div className='container'  >
        <DataContext.Provider value={[data, setData, trigger]}>
          <div className='phone'>
            <Form />
            {/* <Search /> */}
          </div>
        </DataContext.Provider>

      </div>
    );
  }
  else {
    return null
  }
}

export default App;
