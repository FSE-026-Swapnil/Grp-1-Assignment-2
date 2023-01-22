import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import brand from '../src/Asset/brand.png';
import banner from '../src/Asset/banner.jpg';
import dish from '../src/Asset/dish.png';
import mobPayment from '../src/Asset/mobile-payment.png';
import offer from '../src/Asset/offer.jpg';
import railway from '../src/Asset/railway.png';
import trainSeat from '../src/Asset/train-seat.png';


function App() {
  return (
    <div class="container-fluid p-0">
        <header>
            <div class="header">
                <img src={brand} class="brand-logo" width="260" height="80" alt="App Logo" />
                <ul>
                    <li><a href="">LOGIN</a></li>
                    <li><a href="">RAIL TOOLS</a></li>
                    <li><a href="">GROUP ORDER</a></li>
                    <li><a href="">TRACK ORDER</a></li>
                </ul>
            </div>
        </header>
        <main class="main-container">
            <div class="banner">
                <img src={banner} alt="Banner"/>
                <div class="content-wrapper">
                    <label class="banner-text">Order Delicious Food On Trains</label>
                    <div class="search-box">
                        <input type="number" class="form-control" placeholder="Enter PNR Number To Order" />
                        <button class="btn btn-primary">Search</button>
                    </div>
                    
                </div>
            </div>
            <div class="order-steps">
                <div>
                    <label class="text-header">Get Food in Train with easy steps</label>
                    <label>Order Delicious food in Train from pre-approved restaurants across 400+ stations in india</label>
                </div>
                <div>
                    <img src={railway} width="80" height="80" alt="" />
                    <label class="text-header">Enter PNR Number</label>
                </div>
                <div>
                    <img src={dish} width="80" height="80" alt="" />
                    <label class="text-header">Choose Food You Love</label>
                </div>
                <div>
                    <img src={mobPayment} width="80" height="80" alt="" />
                    <label class="text-header">Place Order Via Online / COD</label>
                </div>
                <div>
                    <img src={trainSeat} width="80" height="80" alt="" />
                    <label class="text-header">Get Food On Your Seat</label>
                </div>
            </div>
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel" data-bs-interval="2600">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <div class="cards-wrapper">
                        <div class="card">
                        <img src={offer} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">FREE DELIVERY</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">View Offer</a>
                        </div>
                        </div>
                        <div class="card d-none d-md-block">
                        <img src={offer} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">FLAT ₹.50 OFF</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">View Offer</a>
                        </div>
                        </div>
                        <div class="card d-none d-md-block">
                        <img src={offer} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">BIG HUNGER FEST</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">View Offer</a>
                        </div>
                        </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="cards-wrapper">
                      <div class="card">
                        <img src={offer} class="card-img-top" alt="..."/>
                        <div class="card-body">
                          <h5 class="card-title">GET ₹.30 OFF</h5>
                          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          <a href="#" class="btn btn-primary">View Offer</a>
                        </div>
                      </div>
                      <div class="card d-none d-md-block">
                        <img src={offer} class="card-img-top" alt="..."/>
                        <div class="card-body">
                          <h5 class="card-title">15% OFF ON GROUP ORDER</h5>
                          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          <a href="#" class="btn btn-primary">View Offer</a>
                        </div>
                      </div>
                      <div class="card d-none d-md-block">
                        <img src={offer} class="card-img-top" alt="..."/>
                        <div class="card-body">
                          <h5 class="card-title">FIRST USER</h5>
                          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          <a href="#" class="btn btn-primary">View Offer</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="cards-wrapper">
                        <div class="card">
                        <img src={offer} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">FIRST 3 ORDERS FREE DELIVERY</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">View Offer</a>
                        </div>
                        </div>
                        <div class="card d-none d-md-block">
                        <img src={offer} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">FLAT ₹.100 OFF</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">View Offer</a>
                        </div>
                        </div>
                        <div class="card d-none d-md-block">
                        <img src={offer} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">BIG DIWALI FEST</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">View Offer</a>
                        </div>
                        </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="cards-wrapper">
                      <div class="card">
                        <img src={offer} class="card-img-top" alt="..."/>
                        <div class="card-body">
                          <h5 class="card-title">CHRISTMAS OFFER</h5>
                          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          <a href="#" class="btn btn-primary">View Offer</a>
                        </div>
                      </div>
                      <div class="card d-none d-md-block">
                        <img src={offer} class="card-img-top" alt="..."/>
                        <div class="card-body">
                          <h5 class="card-title">5% OFF ON GROUP ORDER</h5>
                          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          <a href="#" class="btn btn-primary">View Offer</a>
                        </div>
                      </div>
                      <div class="card d-none d-md-block">
                        <img src={offer} class="card-img-top" alt="..."/>
                        <div class="card-body">
                          <h5 class="card-title">NEW YEAR OFFER</h5>
                          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          <a href="#" class="btn btn-primary">View Offer</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            <div class="partner">
                <div>
                    <label>Are you a Restaurant Owner ?</label>
                    <legend>Partner with us and Grow your business fastly by providing food service through our website...</legend>
                </div>
                <div>
                    <button class="btn btn-lg">SIGN UP AS A PARTNER</button>
                </div>
            </div>
        </main>
        <footer class="container-fluid p-0">
            <div class="d-flex justify-content-between p-3">
                <div class="flex-item">
                    <ul>    
                        <label>COMPANY</label>
                        <li>HOME</li>
                        <li>ABOUT US</li>
                        <li>FAQ</li>
                        <li>CAREER</li>
                        <li>T & C</li>
                    </ul>
                </div>
                <div class="flex-item">
                    <ul>    
                        <label>HELP & SUPPORT</label>
                        <li>CALLBACK REQUEST</li>
                        <li>CANCELLATION REQUEST</li>
                        <li>FEEDBACK / COMPLAINT</li>
                        <li>CONTACT US</li>
                    </ul>
                </div>
                <div class="flex-item">
                    <ul>    
                        <label>PARTNERSHIP</label>
                        <li>RESTAURANT SIGNUP</li>
                        <li>LINKED RESTAURANTS</li>
                        <li>FAQ</li>
                        <li>CAREER</li>
                        <li>T & C</li>
                    </ul>
                </div>
                <div class="flex-item">
                    <ul>    
                        <label>SOCIAL LINKS</label>
                        <li>FACEBOOK</li>
                        <li>INSTAGRAM</li>
                        <li>LINKEDIN</li>
                        <li>TWITTER</li>
                        <li>YOUTUBE</li>
                    </ul>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default App