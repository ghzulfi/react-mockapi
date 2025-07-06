import "../styles/style.css";

function Navbar() {
  return (
    <header className="header">
      <nav className="nav-header">
        <img src="/images/logo.png" alt="" className="logo" />
      </nav>
      <div className="navbar">
        <a href="/admin" className="dmsans">
          Go to Admin Page
        </a>
        <div className="prof">
          <img src="/images/profile.png" alt="" className="profile" />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
