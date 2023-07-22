import "../styles/navbar.css";
const Nav = () => {
  return (
    <div className="navbar">
      <div className="navbar-section navbar-section-1">
        <span className="material-symbols-outlined icon">face_3</span>
        <span className="material-symbols-outlined icon">search</span>
      </div>
      <div className="navbar-section navbar-section-2">
        <span className="material-symbols-outlined icon icon-active">home</span>
        <span className="material-symbols-outlined icon">library_books</span>
        <span className="material-symbols-outlined icon">list_alt</span>
        <span className="material-symbols-outlined icon">person</span>
      </div>
      <div className="navbar-section navbar-section-3">
        <span className="material-symbols-outlined icon">
          notifications_active
        </span>
        <span className="material-symbols-outlined icon">logout</span>
      </div>
    </div>
  );
};

const NavMobile = () => {
  return (
    <>
      <span id="notification-icon" className="material-symbols-outlined icon">
        notifications_active
      </span>
      <div className="navbar-mobile">
        <span className="material-symbols-outlined icon icon-active">home</span>
        <span className="material-symbols-outlined icon">list_alt</span>
        <span className="material-symbols-outlined icon">library_books</span>
        <span className="material-symbols-outlined icon">person</span>
        <span className="material-symbols-outlined icon">search</span>
      </div>
    </>
  );
};
const Navbar = () => {
  const width = window.innerWidth;
  return width <= 800 ? <NavMobile /> : <Nav />;
};

export default Navbar;
