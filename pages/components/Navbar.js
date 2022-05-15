import Link from "next/link"

const Navbar = () => {
    return (
         <div className="container">
      <header className="header">
        <h1>ST.</h1>
      </header>

    <nav className="navbar">
        <ul>
        <li><a href="default.asp">Home</a></li>
        <li><a href="news.asp">About</a></li>
        <li><a href="contact.asp">Projects</a></li>
        <li><a href="contact.asp">Published</a></li>
        <li><a href="about.asp">Contact</a></li>
        </ul>
    </nav>
    </div>
    )
}

export default Navbar

