// import Logo from '../../assets/icons/Exclude.svg'
import '../Styles/header.css'
export default function Header() {
  return (
    <header>
      <div className="logoSide">
        {/* <img src={Logo} alt="logo" /> */}
        <p className="logoHeader">GreenBank</p>
      </div>
      <nav>
        <ul>
          <li><a href="#">Why Us</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Our Process</a></li>
          <li><a href="#">Payments</a></li>
          <li><a href="#">FAQs</a></li>
        </ul>
      </nav>
      <button className="headerBtn">Contact</button>
    </header>
  )
}