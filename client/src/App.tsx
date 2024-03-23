import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import MyProjects from "./pages/MyProjects";
import { SampleProjects } from "./pages/SampleProjects";
import AppPage from "./pages/AppPage";
import { IntroPage } from "./pages/IntroPage";
import HelpSupport from "./pages/helpSupport";
import Home from "./pages/Home";
import Feedback from './pages/feedback';
import React from 'react';

const App = () => {
  return (
    <div className="sm:-8 px-4 min-h-screen flex flex-row ">
  {/* Sidebar */}
    <Sidebar />

  {/* Main Content */}
  <div className="">
    <Navbar />

    {/* Router setup for different pages */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/my-projects" element={<MyProjects />} />
      <Route path="/sample-projects" element={<SampleProjects />} />
      <Route path="/apps" element={<AppPage />} />
      <Route path="/intro" element={<IntroPage />} />
      <Route path="/help-support" element={<HelpSupport />} />
      <Route path="/feedback" element={<Feedback />} />
    </Routes>
  </div>
</div>

  )
}

export default App;
