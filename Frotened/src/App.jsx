import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Components/Header/index.jsx';
import ConferencePage from './Pages/ConferencePage/index.jsx';
import PublicationPage from './Pages/PublicationPage/index.jsx';
import AwardPage from './Pages/AwardPage/index.jsx';
import AboutUsPage from './Pages/AboutUsPage/index.jsx';
import AbstractSubmission from './Pages/AbstractSubmission/index.jsx';
import ProtectedRoute from './Components/ProtectedRoute/index.jsx';

import AdminNavBar from './Pages/AdminSection/AdminNavBar.jsx';
import RegisteredCandidates from './Pages/AdminSection/RegisteredCandidates.jsx';
import AbstractSubmitted from './Pages/AdminSection/AbstractSubmitted.jsx';
import RegisterButton from './Pages/RegisterButton/index.jsx';
import LoginForm from './Pages/SignInForm/index.jsx';
import RegisterLink from './Pages/RegisterPage/index.jsx';
import LoginLink from './Pages/LoginLink/index.jsx';
import AlreadySubmitted from './Pages/AlreadySubmitted/index.jsx';
import Developers from './Pages/Developers/index.jsx';
import AboutFoet from './Pages/AboutFoet/index.jsx';
import AboutConference from './Pages/AboutConference/index.jsx';
import Gallery from './Pages/Gallery/index.jsx';



const  App=()=> {
  return (
    <Router>
      <Routes>
        {/* Main Routes */}
        <Route path="/" element={<Header />} />
        <Route path="/home/aboutfoet" element={<AboutFoet/>}/>
        <Route path="/home/aboutconference" element={<AboutConference/>}/>

        
        <Route path="/conference" element={<ConferencePage />} />
        <Route path="/publications" element={<PublicationPage />} />
        <Route path="/awards" element={<AwardPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/allreadySubmitted" element={<AlreadySubmitted />} />
        {/*Register Routes */}
        <Route path="/auth" element={<RegisterLink />} >
          <Route path="rashee2025register" element={<RegisterButton />} />
        </Route>

        {/*Login Routes*/}
        <Route path="/lko" element={<LoginLink />} >
          <Route path="rashee2025login" element={<LoginForm />} />
        </Route>

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminNavBar />}>
          <Route path="registered-candidates" element={<RegisteredCandidates />} />
          <Route path="abstract-submitted" element={<AbstractSubmitted />} />
        </Route>

        {/* Protected Routes */}
        <Route path="/abstract-submission" element={<ProtectedRoute element={<AbstractSubmission />} />} />

        <Route path="/techteam" element={<Developers/>}/>

        <Route path="/raasheegallery2025" element={<Gallery/>}/>

      </Routes>
    </Router>
  );
}

export default App;
