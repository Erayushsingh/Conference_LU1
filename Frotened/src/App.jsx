import { Route, Routes } from 'react-router-dom'
import Header from './Components/Header'
import ConferencePage from './Pages/ConferencePage'
import PublicationPage from './Pages/PublicationPage'
import AwardPage from './Pages/AwardPage'
import AboutUsPage from './Pages/AboutUsPage'
import ResearchPage from './Pages/ResearchPage'
import AbstractSubmission from './Pages/AbstractSubmission'
import SignInForm from './Pages/SignInForm'
import ProtectedRoute from './Components/ProtectedRoute'



const App=()=>{
  return (
   <Routes>
    <Route path='/' element={<Header/>}/>
    <Route path='/conference' element={<ConferencePage/>} /> 
    <Route path='/publications' element={<PublicationPage/>} /> 
    <Route path='/research' element={<ResearchPage/>} /> 
    <Route path='/awards' element={<AwardPage/>} /> 
    <Route path='/about-us' element={<AboutUsPage/>} /> 
    <Route path="/login" element={<SignInForm/>} />

     {/* Protected Route */}
     <Route path="/abstract-submission" element={<ProtectedRoute element={<AbstractSubmission />} />} />
 
   </Routes>
  )
}
  
export default App
