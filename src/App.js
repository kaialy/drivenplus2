import { BrowserRouter, Routes, Route } from "react-router-dom"
import UserContext from "./context/UserContext"
//import DataProvider from "./context/UserContext"
import Login from "./components/authentication/Login"
import SignUp from "./components/authentication/SignUp"
import PlanInfo from "./components/onboard/subscription/PlanInfo"
import Home from "./components/onboard/homepage/Home"
import Subscription from "./components/onboard/subscription/Subscription"
import { useState } from "react"


export default function App () {
  const [user,setUser] = useState({token:"",plan:undefined,membership:undefined,userName:""})
  return(
      <UserContext.Provider value={{user,setUser}}>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Login/>} />
                  <Route path="/sign-up" element={<SignUp/>} />
                  <Route path="/subscriptions" element={<Subscription/>} />
                  <Route path="/subscriptions/:planID" element={<PlanInfo/>} />
                  <Route path="/home" element={<Home/>} />
              </Routes>
          </BrowserRouter>
      </UserContext.Provider>
  )
}