import './styles/App.css';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import Header from '/src/components/layout/Header';
import Footer from '/src/components/layout/Footer';
import Home from '/src/routes/Home';
import React from 'react';
import BlogsList from '/src/routes/PostsList';
import Post from '/src/components/post/Post';

export default function App() {
  return (
    <body>
      <BrowserRouter>
        <Header />
        <div class="content">
          <div className='container-fluid col-md-10 mt-3'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/posts" element={<BlogsList />}></Route>
              <Route path="/posts/:id" element={<Post />}></Route>
              <Route path="*" element={<h1>Not Found</h1>}></Route>
            </Routes>
          </div>
        </div>
        <Footer />
      </BrowserRouter>
    </body>
  );
}