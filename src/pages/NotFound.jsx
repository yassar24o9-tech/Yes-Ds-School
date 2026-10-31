import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <section className="not-found">
      <div className="not-found__inner">
        <p className="section-heading__eyebrow">404 · PAGE NOT FOUND</p>
        <h1 className="section-heading__title">We couldn’t find that page.</h1>
        <Link className="button button--primary" to="/">Return home</Link>
      </div>
    </section>
  )
}

export default NotFound
