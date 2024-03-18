import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Button from "../components/Button/Button";

import "bootstrap/dist/css/bootstrap.min.css";
import "eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.min.css";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../assets/css/style.css";
import "../assets/css/style.css.map";
import "../assets/css/responsive.css";
import imgs from "../assets/image";
export default function Room() {
    return (
        <>
            {/* // <!--================Breadcrumb Area =================--> */}
            <section className="breadcrumb_area">
                <div className="overlay bg-parallax" data-stellar-ratio="0.8" data-stellar-vertical-offset="0" data-background="">
                </div>
                <div className="container">
                    <div className="page-cover text-center">
                        <h2 className="page-cover-tittle">Accomodation</h2>
                        <ol className="breadcrumb">
                            <li><a href="index.html">Home</a></li>
                            <li className="active">Accomodation</li>
                        </ol>
                    </div>
                </div>
            </section>
            {/* // <!--================Breadcrumb Area =================-->

    // <!--================ Accomodation Area  =================-->

    <!--================ Accomodation Area  =================-->
    <!--================Booking Tabel Area =================--> */}
            <section className="hotel_booking_area">
                <div className="container">
                    <div className="row hotel_booking_table">
                        <div className="col-md-3">
                            <h2>Book
                                {/* <br> */}
                                Your Room</h2>
                        </div>
                        <div className="col-md-9">
                            <div className="boking_table">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="book_tabel_item">
                                            <div className="form-group">
                                                <div className='input-group date' id='datetimepicker11'>
                                                    <input type='text' className="form-control" placeholder="Arrival Date" />
                                                    <span className="input-group-addon">
                                                        <i className="fa fa-calendar" aria-hidden="true"></i>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className='input-group date' id='datetimepicker1'>
                                                    <input type='text' className="form-control" placeholder="Departure Date" />
                                                    <span className="input-group-addon">
                                                        <i className="fa fa-calendar" aria-hidden="true"></i>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="book_tabel_item">
                                            <div className="input-group">
                                                <select className="wide">
                                                    <option data-display="Adult">Adult</option>
                                                    <option value="1">Old</option>
                                                    <option value="2">Younger</option>
                                                    <option value="3">Potato</option>
                                                </select>
                                            </div>
                                            <div className="input-group">
                                                <select className="wide">
                                                    <option data-display="Child">Child</option>
                                                    <option value="1">Child</option>
                                                    <option value="2">Baby</option>
                                                    <option value="3">Child</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="book_tabel_item">
                                            <div className="input-group">
                                                <select className="wide">
                                                    <option data-display="Child">Number of Rooms</option>
                                                    <option value="1">Room 01</option>
                                                    <option value="2">Room 02</option>
                                                    <option value="3">Room 03</option>
                                                </select>
                                            </div>
                                            <a className="book_now_btn button_hover" href="#">Book Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--================Booking Tabel Area  =================-->
    <!--================ Accomodation Area  =================-->
    <!-- Room Start --> */}
            <div className="container-xxl py-5">
                <div className="container py-4">


                    <div className="row">
                        <div className="col-md-3">
                            <form id="roomFilterForm">
                                <div className="mb-3">

                                    <h5 className="title_color">Sắp xếp theo giá</h5>
                                    <div className="default-select" id="default-select">
                                        <select>
                                            <option value="asc">Thấp đến cao</option>
                                            <option value="desc">Cao đến thấp</option>
                                        </select>
                                    </div>
                                </div>
                                {/* <br> */}
                                <div className="mb-3">
                                    <label className="form-label">
                                        <h5 className="title_color">Loại phòng</h5>
                                    </label>
                                    {/* <br> */}
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" id="default-checkbox"
                                            value="Junior Suite"/>
                                            <label className="form-check-label" for="inlineCheckbox1">Junior Suite</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" id="inlineCheckbox2"
                                            value="Executive Suite"/>
                                            <label className="form-check-label" for="inlineCheckbox2">Executive Suite</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" id="inlineCheckbox3"
                                            value="Super Deluxe"/>
                                            <label className="form-check-label" for="inlineCheckbox3">Super Deluxe</label>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">
                                        <h5>Đánh giá</h5>
                                    </label>
                                    {/* <br> */}
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" id="inlineCheckbox4" value="5"/>
                                            <label className="form-check-label" for="inlineCheckbox4">
                                                <div className="ps-2">
                                                    <small className="fa fa-star text-primary"></small>
                                                    <small className="fa fa-star text-primary"></small>
                                                    <small className="fa fa-star text-primary"></small>
                                                    <small className="fa fa-star text-primary"></small>
                                                    <small className="fa fa-star text-primary"></small>
                                                </div>
                                            </label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" id="inlineCheckbox5" value="4"/>
                                            <label className="form-check-label" for="inlineCheckbox5">
                                                <div className="ps-2">
                                                    <small className="fa fa-star text-primary"></small>
                                                    <small className="fa fa-star text-primary"></small>
                                                    <small className="fa fa-star text-primary"></small>
                                                    <small className="fa fa-star text-primary"></small>

                                                </div>
                                            </label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" id="inlineCheckbox6" value="3"/>
                                            <label className="form-check-label" for="inlineCheckbox6">
                                                <div className="ps-2">
                                                    <small className="fa fa-star text-primary"></small>
                                                    <small className="fa fa-star text-primary"></small>
                                                    <small className="fa fa-star text-primary"></small>
                                                </div>
                                            </label>
                                    </div>
                                </div>

                            </form>
                        </div>
                        <div className="col-md-9">
                            <div className="row g-4" id="roomList">
                                {/* <!-- Room items will be dynamically populated here --> */}
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
                    </div>
                </div>
            </div>
            <nav className="blog-pagination justify-content-center d-flex">
                <ul className="pagination">
                    <li className="page-item">
                        <a href="#" className="page-link" aria-label="Previous">
                            <span aria-hidden="true">
                                <span className="lnr lnr-chevron-left"></span>
                            </span>
                        </a>
                    </li>
                    <li className="page-item"><a href="#" className="page-link">01</a></li>
                    <li className="page-item active"><a href="#" className="page-link">02</a></li>
                    <li className="page-item"><a href="#" className="page-link">03</a></li>
                    <li className="page-item"><a href="#" className="page-link">04</a></li>
                    <li className="page-item"><a href="#" className="page-link">09</a></li>
                    <li className="page-item">
                        <a href="#" className="page-link" aria-label="Next">
                            <span aria-hidden="true">
                                <span className="lnr lnr-chevron-right"></span>
                            </span>
                        </a>
                    </li>
                </ul>
            </nav>
            {/* <!-- Room End --> */}
            {/* <!--================ Accomodation Area  =================--> */}
        </>
    );
}