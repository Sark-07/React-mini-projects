import React, { useEffect, useReducer, useState } from 'react'
import Loading from './Loading'
import Error from './Error'
import SideBar from './SideBar'
import Duties from './Duties'
import Info from './Info'
import { reducer } from './reducer'

const url = 'https://course-api.com/react-tabs-project'
const initialState = {
  isError: false,
  errMessage: '',
  errCode: 200,
  isLoading: true,
  mainData: []
}

function App() {

  const [state, dispatch] = useReducer(reducer, initialState)
  const [value, setvalue] = useState(0)


  const fetchData = async () => {
    try {
      const req = await fetch(url);
      if (req.status >= 200 && req.status <= 299) {
        const res = await req.json();
        dispatch({ type: 'DATAFETCHED', res })
      } else {

        console.log(req.status);
        dispatch({ type: 'ERROR', err: req.statusText, errCode: req.status })
      }
    } catch (error) {
      console.log(error.message);

    }
  }
  useEffect(() => {
    fetchData()
  }, [])

  if (state.isError) {
    return (<>
      <Error error={state.errMessage} errCode={state.errCode} />
    </>)
  }
  if (state.isLoading) {
    return (<>
      <Loading />
    </>)
  }

  return (
    <main>
      <div className="headline">
        <h2>Experience</h2>
        <div className="border"></div>

      </div>
      <section className='main-container'>
        <div className="sidebar left">
          {state.mainData.map((company, index) => {
            return <SideBar key={company.id} company={company.company} index={index} value={value}
              hello={{ a: 'hi', b: 'there' }}
              setvalue={setvalue} />
          })}

        </div>

        <div className="right">


          <Info key={state.mainData[value].id} {...state.mainData[value]} />

          {state.mainData[value].duties.map((duties, index) => {
            return <Duties key={index} duties={duties} />
          })}


        </div>
      </section>
    </main>);
}

export default App
