import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import servicos from './pages/servicos';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import ArticleDetail from './pages/ArticleDetail';
import ServiceDetail from './pages/ServiceDetail';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/servicos" element={<servicos />} />
        <Route path="/servicos/:id" element={<ServiceDetail />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<ArticleDetail />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  );
}

export default App;