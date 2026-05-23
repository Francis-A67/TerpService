// Import Link from React Router
// Link works like an <a> tag but without reloading the page
// It just swaps the component - that's what makes this a Single Page Application
import { Link } from 'react-router-dom'

// Navbar displays the navigation bar at the top of every page
function Navbar() {
    return (
        // <nav> is a semantic HTML element that means "this is a navigation section"
        <nav className="navbar">

            {/* Left side - app name/logo that links back to homepage */}
            <div className="navbar-logo">
                <Link to="/">TerpServices</Link>
            </div>

            {/* Right side - navigation links */}
            <div className="navbar-links">

                {/* to="/" means clicking this goes to the homepage */}
                <Link to="/">Home</Link>

                {/* Login and Sign Up pages don't exist yet - we'll build them later */}
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign Up</Link>

            </div>
        </nav>
    )
}

// Export Navbar so App.jsx can use it
export default Navbar