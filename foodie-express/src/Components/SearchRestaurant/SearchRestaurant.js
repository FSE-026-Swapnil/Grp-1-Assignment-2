import React,{useRef,useState} from 'react';
import './SearchRestaurant.css'
import { BASE_URL } from '../../Constants/APIConstants'
import hotelImage from '../../Asset/Hotel-1.avif';

const SearchRestaurant = () => {
    const [restData, setRestData] = useState();
    const addressRef = useRef('');

    const searchHandler = () => {
        fetch(BASE_URL + 'restaurants?address_like=' + addressRef.current.value, {
            method: "GET"
          }).then((response) => {
            return response.json();
          })
          .then((resp) => {
            setRestData(resp);
            console.log(restData)
            // if(resp.length > 0){
            //   if(resp[0].password === passRef.current.value){
            //     setUserSession(resp[0].id, resp[0].email);
            //     ctx.login();
            //     toast.success("Logged in successfully.");
            //     navigate(`/dashboard`);
            //   }else{
            //     toast.error("Invalid credentials. Email or password does not match.");
            //   }
            // }else{
            //   toast.warn("User does not exists.");
            // }
          });
    }

    return(
        <div className="search-wrapper">
            <h1>Search Restaurants</h1>
            <div className="search-box-2">
                <input type="text" className="form-control" placeholder="Enter Address" ref={addressRef}/>
                <button className="btn btn-primary" onClick={searchHandler}>Search</button>
            </div>
            { restData && 
            <div className='results'>
                <h3>Search Results</h3>
                <hr />
                {restData.map((item,index)=>{
                     return (
                        <div key={index} className="restCard">
                            <img src={hotelImage} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <p className="card-text">{item.bestFor}</p>
                                <p className="card-text">{item.address}</p>
                                <a href="#" className="btn btn-primary menuBtn">View Menu</a>
                            </div>
                        </div>
                     );
                })}
            </div>}
        </div>
    )
}

export default SearchRestaurant;