import { lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout.jsx'

const About = lazy(() => import('./pages/About.jsx'))
const Academics = lazy(() => import('./pages/Academics.jsx'))
const Contact = lazy(() => import('./pages/Contact.jsx'))
const Facilities = lazy(() => import('./pages/Facilities.jsx'))
const GalleryPage = lazy(() => import('./pages/GalleryPage.jsx'))
const Home = lazy(() => import('./pages/Home.jsx'))
const NotFound = lazy(() => import('./pages/NotFound.jsx'))

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route element={<Home />} index />
          <Route element={<About />} path="about" />
          <Route element={<Academics />} path="academics" />
          <Route element={<Facilities />} path="facilities" />
          <Route element={<GalleryPage />} path="gallery" />
          <Route element={<Contact />} path="contact" />
          <Route element={<NotFound />} path="*" />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
