import './SearchRestaurant.css'

const SearchRestaurant = () => {
    return(
        <div className="search-wrapper">
            <h1>Search Restaurants</h1>
            <div className="search-box-2">
                <input type="text" className="form-control" placeholder="Enter Address" />
                <button className="btn btn-primary">Search</button>
            </div>
        </div>
    )
}

export default SearchRestaurant;