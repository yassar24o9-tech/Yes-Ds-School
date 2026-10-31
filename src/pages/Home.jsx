import Hero from '../components/Hero.jsx'
import AboutSection from '../components/home/AboutSection.jsx'
import AcademicsSection from '../components/home/AcademicsSection.jsx'
import AdmissionsSection from '../components/home/AdmissionsSection.jsx'
import ContactPreview from '../components/home/ContactPreview.jsx'
import EventsSection from '../components/home/EventsSection.jsx'
import FacilitiesSection from '../components/home/FacilitiesSection.jsx'
import GallerySection from '../components/home/GallerySection.jsx'

function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <AcademicsSection />
      <FacilitiesSection />
      <EventsSection />
      <GallerySection imageLimit={8} />
      <AdmissionsSection />
      <ContactPreview />
    </>
  )
}

export default Home
