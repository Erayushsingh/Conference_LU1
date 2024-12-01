import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import your components and pages
import Header from './Components/Header';
import ConferencePage from './Pages/ConferencePage';
import PublicationPage from './Pages/PublicationPage';
import AwardPage from './Pages/AwardPage';
import AboutUsPage from './Pages/AboutUsPage';
import ResearchPage from './Pages/ResearchPage';
import AbstractSubmission from './Pages/AbstractSubmission';
import ProtectedRoute from './Components/ProtectedRoute';
import AdminNavBar from './Pages/AdminSection/AdminNavBar.jsx';
import RegisteredCandidates from './Pages/AdminSection/RegisteredCandidates.jsx';
import AbstractSubmitted from './Pages/AdminSection/AbstractSubmitted.jsx';
import RegisterButton from './Pages/RegisterButton/index.jsx';
import LoginForm from './Pages/SignInForm';
import RegisterLink from './Pages/RegisterPage/index.jsx';
import LoginLink from './Pages/LoginLink/index.jsx';



const  App=()=> {
  return (
    <Router>
      <Routes>
        {/* Main Routes */}
        <Route path="/" element={<Header />} />
        <Route path="/conference" element={<ConferencePage />} />
        <Route path="/publications" element={<PublicationPage />} />
        <Route path="/research" element={<ResearchPage />} />
        <Route path="/awards" element={<AwardPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />

        {/*Register Routes */}
        <Route path="/auth" element={<RegisterLink />} >
        <Route path="rashee2025register" element={<RegisterButton />} />
        </Route>

        {/*Login Routes*/}
        <Route path="/lko" element={<LoginLink/>} >
        <Route path="rashee2025login" element={<LoginForm />} />
        </Route>

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminNavBar />}>
          <Route path="registered-candidates" element={<RegisteredCandidates />} />
          <Route path="abstract-submitted" element={<AbstractSubmitted />} />
        </Route>

        {/* Protected Routes */}
        <Route path="/abstract-submission" element={<ProtectedRoute element={<AbstractSubmission />} />} />

      </Routes>


      {/* Optionally, you can add a RegisterLink anywhere in your app */}
      
    </Router>
  );
}

export default App;
