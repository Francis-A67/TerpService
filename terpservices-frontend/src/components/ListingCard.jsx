// ListingCard displays the details of one single service listing
// It receives a "listing" prop from HomePage containing the listing's data

function ListingCard({ listing }) {
    // { listing } is destructuring - pulling the listing prop out of what was passed in
    // HomePage passed listing={listing} and we're receiving it here

    return (
        // Container for one listing card
        <div className="listing-card">

            {/* Display the listing title - {} means we're using JavaScript inside JSX */}
            <h2>{listing.title}</h2>

            {/* Display the category */}
            <p>Category: {listing.category}</p>

            {/* Display the price */}
            <p>Price: {listing.price}</p>

            {/* Display the location */}
            <p>Location: {listing.location}</p>

        </div>
    )
}

// Export ListingCard so HomePage can use it
export default ListingCard