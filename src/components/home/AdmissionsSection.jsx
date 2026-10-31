import { Link } from 'react-router-dom'

function AdmissionsSection() {
  return (
    <section aria-labelledby="admissions-title" className="home-section admissions-section" id="admissions">
      <div className="home-container admissions-section__inner">
        <div className="admissions-section__ornament" aria-hidden="true">YES DS</div>
        <p className="admissions-section__eyebrow">Admissions</p>
        <h2 id="admissions-title">Admissions information.</h2>
        <p>
          For current admissions information, please contact YES DS High School directly.
        </p>
        <Link className="hero-button hero-button--gold" to="/contact">
          View school location
          <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </section>
  )
}

export default AdmissionsSection
