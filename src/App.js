import Form from './components/Form'
import Search from './components/Search'
import { DataContext } from './hooks/DataContext'
import useFetchData from './hooks/useFetchData'
import { useState } from 'react'


function App() {

  const [update, setUpdate] = useState(0);

  let [data, setData] = useFetchData(update);
  console.log(typeof data);

  if (data) {
    console.log(data)
    return (
      <div className='container'>
        <DataContext.Provider value={[data, setData]}>
          <div className='phone'>
            {/* <Form /> */}
            <Search />
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
