import { Route, Routes } from 'react-router-dom'
import Header from './Components/Header'
import ConferencePage from './Pages/ConferencePage'
import PublicationPage from './Pages/PublicationPage'
import AwardPage from './Pages/AwardPage'
import AboutUsPage from './Pages/AboutUsPage'
import ResearchPage from './Pages/ResearchPage'


const App=()=>{
  return (
   <Routes>
    <Route path='/' element={<Header/>}/>
    <Route path='/conference' element={<ConferencePage/>} /> 
    <Route path='/publications' element={<PublicationPage/>} /> 
    <Route path='/research' element={<ResearchPage/>} /> 
    <Route path='/awards' element={<AwardPage/>} /> 
    <Route path='/about-us' element={<AboutUsPage/>} /> 
   </Routes>
  )
}
  
export default App
