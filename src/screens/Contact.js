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
export default function Contact() {
    return (
        <>
            {/* <!--================Breadcrumb Area =================--> */}
            <section class="breadcrumb_area">
                <div class="overlay bg-parallax" data-stellar-ratio="0.8" data-stellar-vertical-offset="0" data-background=""></div>
                <div class="container">
                    <div class="page-cover text-center">
                        <h2 class="page-cover-tittle">Contact Us</h2>
                        <ol class="breadcrumb">
                            <li><a href="index.html">Home</a></li>
                            <li class="active">Contact Us</li>
                        </ol>
                    </div>
                </div>
            </section>
            {/* <!--================Breadcrumb Area =================-->
        
        <!--================Contact Area =================--> */}
            <section class="contact_area section_gap">
                <div class="container">
                    <div id="mapBox" class="mapBox"
                        data-lat="40.701083"
                        data-lon="-74.1522848"
                        data-zoom="13"
                        data-info="PO Box CT16122 Collins Street West, Victoria 8007, Australia."
                        data-mlat="40.701083"
                        data-mlon="-74.1522848">
                    </div>
                    <div class="row">
                        <div class="col-md-3">
                            <div class="contact_info">
                                <div class="info_item">
                                    <i class="lnr lnr-home"></i>
                                    <h6>California, United States</h6>
                                    <p>Santa monica bullevard</p>
                                </div>
                                <div class="info_item">
                                    <i class="lnr lnr-phone-handset"></i>
                                    <h6><a href="#">00 (440) 9865 562</a></h6>
                                    <p>Mon to Fri 9am to 6 pm</p>
                                </div>
                                <div class="info_item">
                                    <i class="lnr lnr-envelope"></i>
                                    <h6><a href="#">support@colorlib.com</a></h6>
                                    <p>Send us your query anytime!</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-9">
                            <form class="row contact_form" action="contact_process.php" method="post" id="contactForm" novalidate="novalidate">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input type="text" class="form-control" id="name" name="name" placeholder="Enter your name" />
                                    </div>
                                    <div class="form-group">
                                        <input type="email" class="form-control" id="email" name="email" placeholder="Enter email address" />
                                    </div>
                                    <div class="form-group">
                                        <input type="text" class="form-control" id="subject" name="subject" placeholder="Enter Subject" />
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <textarea class="form-control" name="message" id="message" rows="1" placeholder="Enter Message"></textarea>
                                    </div>
                                </div>
                                <div class="col-md-12 text-right">
                                    <button type="submit" value="submit" class="btn theme_btn button_hover">Send Message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--================Contact Area =================--> */}
        </>
    );
}