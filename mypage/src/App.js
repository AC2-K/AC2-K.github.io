import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import React from 'react';
import BlogList from './components/BlogList';
import BlogPost from './components/BlogPost';

const App = () => {
  return (
    <body>
    <BrowserRouter>
        <Header />
        <div class="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:id" element={<BlogPost />} />
        </Routes>
         </div>
      <Footer/>
      </BrowserRouter>
    </body>
  );
}

export default App;
