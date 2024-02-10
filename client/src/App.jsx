
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import ErrorPage from "./pages/ErrorPage"
import SignUp from "./pages/SignUp"
import Dashboard from "./pages/Dashboard"
import Signin from "./pages/Signin"
import Projects from "./pages/Projects"

function App() {

  return (

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About />} />
      <Route path="/signin" element= {<Signin/>}/>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/prjects" element={<Projects/>}/>
      <Route path="/*" element={<ErrorPage />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
