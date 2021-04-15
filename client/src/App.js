import React, { createContext,useReducer } from 'react'
import Headquater from './Components/HeadQuater'
import Home from './Components/Home'
import { Route,Switch } from 'react-router-dom'
import AdminStoreForm from './Components/AdminStoreForm.js'
import Display from './Components/Display.js'
import Signup from './Components/Signup.js'
import Login from './Components/Login.js'
import SystemStore from './Components/SystemStore'
import MaterialMaster from './Components/MaterialMaster'
import Logout from './Components/Logout'
import {initialState,reducer} from '../src/Reducer/UseReducer'

export const UserContext = createContext();

const Routing=()=>{
  return(
    <Switch>
        <Route path="/login" component={Login}>
        </Route>
        <Route path="/headquater" component={Headquater}>
        </Route>
        <Route path="/display" component={Display}>
        </Route>
        <Route path="/inputAdmin" component={AdminStoreForm}>
        </Route>
        <Route path="/system" component={SystemStore}>
        </Route>
        <Route path="/material" component={MaterialMaster}>
        </Route>
        <Route path="/Signup" component={Signup}>
        </Route>
        <Route path="/Logout" component={Logout}>
        </Route>
        <Route  path="/" component={Home}>
        </Route>
        </Switch>
  )
}


const App = () => {

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <>
        <UserContext.Provider value={{state,dispatch}}>
          <Routing />
        </UserContext.Provider>
    </>
  )
}

export default App

