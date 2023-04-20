import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {

  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);
  const [data, setData] = useState([]);

  const removeTour = (id) => {
    const newData = data.filter((item) => { return item.id !== id })
    setData(newData)
  }
  const fetchData = async () => {
    try {

      const getdata = await fetch(url);
      const response = await getdata.json()
      setData(response);
      setLoading(false);
    } catch (error) {
      setLoading(false)
      setError(true)
    }
  }
  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return (<>
      <Loading />
    </>)
  }
  if (isError) {
    return (<>
      <h3>Some error occured!!;</h3>
    </>)
  }
  if (data.length === 0) {
    return (<>

      <h1 style={{ margin: 'auto', textAlign: 'center' }}>No tours left</h1>
      <p style={{ cursor: 'pointer', fontWeight: '900', margin: 'auto', textAlign: 'center' }} className='tour-price' onClick={fetchData}>Refresh</p>
    </>);

  }
  return (<>
    <Tours data={data} removeTour={removeTour} />
  </>);
}

export default App
