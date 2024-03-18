// Import các thư viện cần thiết
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import CSS của Bootstrap

// Import các thư viện JavaScript
// import 'jquery/dist/jquery.min.js';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'wowjs/dist/wow.min.js';
import 'easing-js/easing.min.js';
import 'waypoints/lib/noframework.waypoints.min.js';
import 'counterup/jquery.counterup.min.js';
import 'owl.carousel/dist/owl.carousel.min.js';
import 'moment/min/moment.min.js';
import 'moment-timezone/moment-timezone.min.js';
import 'tempusdominus-bootstrap-4/build/js/tempusdominus-bootstrap-4.min.js';



export default function CatalogRoom({third}) {
    return(
        <div className="col-md-9">
        <div className="row g-4" id="roomList">
            {/* <!-- Room items will be dynamically populated here --> */}
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <div className="room-item shadow rounded overflow-hidden">
                    <div className="position-relative">
                        <img className="img-fluid" src="img/room-1.jpg" alt=""/>
                            <small
                                className="position-absolute start-0 top-100 translate-middle-y bg-primary  text-white rounded py-1 px-3 ms-4">$100/Night</small>
                    </div>
                    <div className="p-4 mt-2">
                        <div className="d-flex justify-content-between mb-3">
                            <h5 className="mb-0">Junior Suite</h5>
                            <div className="ps-2">
                                <small className="fa fa-star text-primary"></small>
                                <small className="fa fa-star text-primary"></small>
                                <small className="fa fa-star text-primary"></small>
                                <small className="fa fa-star text-primary"></small>
                                <small className="fa fa-star text-primary"></small>
                            </div>
                        </div>
                        <div className="d-flex mb-3">
                            <small className="border-end me-3 pe-3"><i className="fa fa-bed text-primary me-2"></i>3
                                Bed</small>
                            <small className="border-end me-3 pe-3"><i
                                className="fa fa-bath text-primary me-2"></i>2 Bath</small>
                            <small><i className="fa fa-wifi text-primary me-2"></i>Wifi</small>
                        </div>
                        <p className="text-body mb-3">Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                            lorem sed diam stet diam sed stet lorem.</p>
                        <div className="d-flex justify-content-between">
                            <a className="btn btn-sm btn-primary rounded py-2 px-4" href="room_detail.html">View Detail</a>
                            <a className="btn btn-sm btn-dark rounded py-2 px-4" href="">Book Now</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                <div className="room-item shadow rounded overflow-hidden">
                    <div className="position-relative">
                        <img className="img-fluid" src="img/room-2.jpg" alt=""/>
                            <small
                                className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">$100/Night</small>
                    </div>
                    <div className="p-4 mt-2">
                        <div className="d-flex justify-content-between mb-3">
                            <h5 className="mb-0">Executive Suite</h5>
                            <div className="ps-2">
                                <small className="fa fa-star text-primary"></small>
                                <small className="fa fa-star text-primary"></small>
                                <small className="fa fa-star text-primary"></small>
                                <small className="fa fa-star text-primary"></small>
                                <small className="fa fa-star text-primary"></small>
                            </div>
                        </div>
                        <div className="d-flex mb-3">
                            <small className="border-end me-3 pe-3"><i className="fa fa-bed text-primary me-2"></i>3
                                Bed</small>
                            <small className="border-end me-3 pe-3"><i
                                className="fa fa-bath text-primary me-2"></i>2 Bath</small>
                            <small><i className="fa fa-wifi text-primary me-2"></i>Wifi</small>
                        </div>
                        <p className="text-body mb-3">Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                            lorem sed diam stet diam sed stet lorem.</p>
                        <div className="d-flex justify-content-between">
                            <a className="btn btn-sm btn-primary rounded py-2 px-4" href="">View Detail</a>
                            <a className="btn btn-sm btn-dark rounded py-2 px-4" href="">Book Now</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
                <div className="room-item shadow rounded overflow-hidden">
                    <div className="position-relative">
                        <img className="img-fluid" src="img/room-3.jpg" alt=""/>
                            <small
                                className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">$100/Night</small>
                    </div>
                    <div className="p-4 mt-2">
                        <div className="d-flex justify-content-between mb-3">
                            <h5 className="mb-0">Super Deluxe</h5>
                            <div className="ps-2">
                                <small className="fa fa-star text-primary"></small>
                                <small className="fa fa-star text-primary"></small>
                                <small className="fa fa-star text-primary"></small>
                                <small className="fa fa-star text-primary"></small>
                                <small className="fa fa-star text-primary"></small>
                            </div>
                        </div>
                        <div className="d-flex mb-3">
                            <small className="border-end me-3 pe-3"><i className="fa fa-bed text-primary me-2"></i>3
                                Bed</small>
                            <small className="border-end me-3 pe-3"><i
                                className="fa fa-bath text-primary me-2"></i>2 Bath</small>
                            <small><i className="fa fa-wifi text-primary me-2"></i>Wifi</small>
                        </div>
                        <p className="text-body mb-3">Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                            lorem sed diam stet diam sed stet lorem.</p>
                        <div className="d-flex justify-content-between">
                            <a className="btn btn-sm btn-primary rounded py-2 px-4" href="">View Detail</a>
                            <a className="btn btn-sm btn-dark rounded py-2 px-4" href="">Book Now</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
                <div className="room-item shadow rounded overflow-hidden">
                    <div className="position-relative">
                        <img className="img-fluid" src="img/room-3.jpg" alt=""/>
                            <small
                                className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">$100/Night</small>
                    </div>
                    <div className="p-4 mt-2">
                        <div className="d-flex justify-content-between mb-3">
                            <h5 className="mb-0">Super Deluxe</h5>
                            <div className="ps-2">
                                <small className="fa fa-star text-primary"></small>
                                <small className="fa fa-star text-primary"></small>
                                <small className="fa fa-star text-primary"></small>
                                <small className="fa fa-star text-primary"></small>
                                <small className="fa fa-star text-primary"></small>
                            </div>
                        </div>
                        <div className="d-flex mb-3">
                            <small className="border-end me-3 pe-3"><i className="fa fa-bed text-primary me-2"></i>3
                                Bed</small>
                            <small className="border-end me-3 pe-3"><i
                                className="fa fa-bath text-primary me-2"></i>2 Bath</small>
                            <small><i className="fa fa-wifi text-primary me-2"></i>Wifi</small>
                        </div>
                        <p className="text-body mb-3">Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                            lorem sed diam stet diam sed stet lorem.</p>
                        <div className="d-flex justify-content-between">
                            <a className="btn btn-sm btn-primary rounded py-2 px-4" href="">View Detail</a>
                            <a className="btn btn-sm btn-dark rounded py-2 px-4" href="">Book Now</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <div className="room-item shadow rounded overflow-hidden">
                    <div className="position-relative">
                        <img className="img-fluid" src="img/room-1.jpg" alt=""/>
                            <small
                                className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">$100/Night</small>
                    </div>
                    <div className="p-4 mt-2">
                        <div className="d-flex justify-content-between mb-3">
                            <h5 className="mb-0">Junior Suite</h5>
                            <div className="ps-2">
                                <small className="fa fa-star text-primary"></small>
                                <small className="fa fa-star text-primary"></small>
                                <small className="fa fa-star text-primary"></small>
                                <small className="fa fa-star text-primary"></small>
                                <small className="fa fa-star text-primary"></small>
                            </div>
                        </div>
                        <div className="d-flex mb-3">
                            <small className="border-end me-3 pe-3"><i className="fa fa-bed text-primary me-2"></i>3
                                Bed</small>
                            <small className="border-end me-3 pe-3"><i
                                className="fa fa-bath text-primary me-2"></i>2 Bath</small>
                            <small><i className="fa fa-wifi text-primary me-2"></i>Wifi</small>
                        </div>
                        <p className="text-body mb-3">Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                            lorem sed diam stet diam sed stet lorem.</p>
                        <div className="d-flex justify-content-between">
                            <a className="btn btn-sm btn-primary rounded py-2 px-4" href="">View Detail</a>
                            <a className="btn btn-sm btn-dark rounded py-2 px-4" href="">Book Now</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                <div className="room-item shadow rounded overflow-hidden">
                    <div className="position-relative">
                        <img className="img-fluid" src="img/room-2.jpg" alt=""/>
                            <small
                                className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">$100/Night</small>
                    </div>
                    <div className="p-4 mt-2">
                        <div className="d-flex justify-content-between mb-3">
                            <h5 className="mb-0">Executive Suite</h5>
                            <div className="ps-2">
                                <small className="fa fa-star text-primary"></small>
                                <small className="fa fa-star text-primary"></small>
                                <small className="fa fa-star text-primary"></small>
                                <small className="fa fa-star text-primary"></small>
                                <small className="fa fa-star text-primary"></small>
                            </div>
                        </div>
                        <div className="d-flex mb-3">
                            <small className="border-end me-3 pe-3"><i className="fa fa-bed text-primary me-2"></i>3
                                Bed</small>
                            <small className="border-end me-3 pe-3"><i
                                className="fa fa-bath text-primary me-2"></i>2 Bath</small>
                            <small><i className="fa fa-wifi text-primary me-2"></i>Wifi</small>
                        </div>
                        <p className="text-body mb-3">Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                            lorem sed diam stet diam sed stet lorem.</p>
                        <div className="d-flex justify-content-between">
                            <a className="btn btn-sm btn-primary rounded py-2 px-4" href="">View Detail</a>
                            <a className="btn btn-sm btn-dark rounded py-2 px-4" href="">Book Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    )
}