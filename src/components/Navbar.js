import "../styles/navbar.css";
const Navbar = () => {
  return (
    <div className="navbar flex-column">
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

export default Navbar;
