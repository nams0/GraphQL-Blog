import AuthorPage from "./components/author/AuthorPage"
import BlogPage from "./components/blog/BlogPage"
import HomePage from "./components/home/HomePage"
import Layout from "./components/layout/LayoutIndex"

import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blogs/:slug" element={<BlogPage />} />
        <Route path="/authors/:slug" element={<AuthorPage />} />
      </Routes>
    </Layout>
  )
}

export default App
