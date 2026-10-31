import { Link } from 'react-router-dom'
import schoolLogo from '../assets/images/school/brand/yes-ds-school-logo.jpg'

function SchoolBrand({ onClick }) {
  return (
    <Link
      aria-label="YES DS High School home"
      className="school-brand"
      onClick={onClick}
      to="/"
    >
      <img
        alt=""
        className="school-brand__logo"
        height={241}
        src={schoolLogo}
        width={472}
      />
    </Link>
  )
}

export default SchoolBrand
