
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import ErrorPage from "./pages/ErrorPage"
import Signup from "./pages/SignUp"
import Dashboard from "./pages/Dashboard"
import SignIn from "./pages/Signin"
import Projects from "./pages/Projects"
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {

  return (

    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About />} />
      <Route path="/signin" element= {<SignIn/>}/>
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/*" element={<ErrorPage />} />
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
