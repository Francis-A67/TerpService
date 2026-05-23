// Import routing tools from React Router
// BrowserRouter: enables routing in the app
// Routes: container that holds all our routes
// Route: defines one path and what component to show
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Import the Navbar component so it shows on every page
import Navbar from './components/Navbar'

// Import the HomePage component to show on the "/" route
import HomePage from './pages/HomePage'

// App is the root component - the first thing React loads
function App() {
  return (
    // BrowserRouter wraps everything to enable routing
    <BrowserRouter>

      {/* Navbar is outside Routes so it shows on every page */}
      <Navbar />

      {/* Routes holds all our page routes */}
      <Routes>

        {/* When the URL is "/" show the HomePage component */}
        <Route path="/" element={<HomePage />} />

      </Routes>
    </BrowserRouter>
  )
}

// Export App so main.jsx can use it
export default App