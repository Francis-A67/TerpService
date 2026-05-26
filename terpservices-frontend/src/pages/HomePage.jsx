// Import the ListingCard component to display each service listing
import ListingCard from '../components/ListingCard'

// HomePage is the main page component that shows all listings
function HomePage() {

    // Dummy data - a list of service listings
    // Each object represents one listing with 5 properties
    // Later this will come from the backend instead of being hardcoded
    const listings = [
        { id: 1, title: 'Math Tutoring', category: 'Tutoring', price: '$20/hr', location: 'College Park' },
        { id: 2, title: 'Lawn Mowing', category: 'Home Services', price: '$35/hr', location: 'College Park' },
        { id: 3, title: 'Guitar Lessons', category: 'Music', price: '$25/hr', location: 'College Park' },
    ]

    return (
        // Main container for the home page
        <div className="home-page">

            {/* Page heading */}
            <h1>Available Services</h1>

            {/* Grid container that holds all the listing cards */}
            <div className="listings-grid">

                {/* Loop through each listing and render a ListingCard for it */}
                {/* .map() goes through every item in the listings array */}
                {/* key helps React track each card efficiently */}
                {/* listing={listing} passes the data into each ListingCard as a prop */}
                {listings.map(listing => (
                    <ListingCard key={listing.id} listing={listing} />
                ))}

            </div>
        </div>
    )
}

// Export HomePage so App.jsx can use it
export default HomePage