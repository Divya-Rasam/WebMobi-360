'use client'
import Link from 'next/link'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.owl-next',
        prevEl: '.owl-prev',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints:{
        320: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        575: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        767: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    }
}

export default function Section6() {
    return (
        <>

            <div className="memory1-section-area sp1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 m-auto">
                            <div className="memory-header text-center heading2 space-margin60">
                                <h5 data-aos="fade-left" data-aos-duration={800}>For Students</h5>
                                <div className="space16" />
                                <h2 className="text-anime-style-3">Launch Your IT Career</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 memory-slider-area">
                            <Swiper {...swiperOptions} className=" owl-carousel">
                                <SwiperSlide className="memory-boxarea">
                                    <div className="img1 image-anime">
                                        <img src="/assets/img/all-images/event/event-img1.png" alt="Direct Access to Employers" />
                                    </div>
                                    <div className="content-area">
                                        <img src="/assets/img/icons/logo1.svg" alt="" className="logo1 keyframe5" />
                                        <div className="arrow">
                                            <Link href="/#students"><i className="fa-solid fa-arrow-right" /></Link>
                                        </div>
                                        <div className="space18" />
                                        <p>Student Benefits</p>
                                        <div className="space12" />
                                        <Link href="/#students">Direct Access to Employers</Link>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="memory-boxarea">
                                    <div className="img1 image-anime">
                                        <img src="/assets/img/all-images/event/event-img2.png" alt="Career Guidance" />
                                    </div>
                                    <div className="content-area">
                                        <img src="/assets/img/icons/logo1.svg" alt="" className="logo1 keyframe5" />
                                        <div className="arrow">
                                            <Link href="/#students"><i className="fa-solid fa-arrow-right" /></Link>
                                        </div>
                                        <div className="space18" />
                                        <p>Student Benefits</p>
                                        <div className="space12" />
                                        <Link href="/#students">Career Guidance</Link>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="memory-boxarea">
                                    <div className="img1 image-anime">
                                        <img src="/assets/img/all-images/event/event-img3.png" alt="Networking Opportunities" />
                                    </div>
                                    <div className="content-area">
                                        <img src="/assets/img/icons/logo1.svg" alt="" className="logo1 keyframe5" />
                                        <div className="arrow">
                                            <Link href="/#students"><i className="fa-solid fa-arrow-right" /></Link>
                                        </div>
                                        <div className="space18" />
                                        <p>Student Benefits</p>
                                        <div className="space12" />
                                        <Link href="/#students">Networking Opportunities</Link>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="memory-boxarea">
                                    <div className="img1 image-anime">
                                        <img src="/assets/img/all-images/event/event-img1.png" alt="Job Opportunities" />
                                    </div>
                                    <div className="content-area">
                                        <img src="/assets/img/icons/logo1.svg" alt="" className="logo1 keyframe5" />
                                        <div className="arrow">
                                            <Link href="/#students"><i className="fa-solid fa-arrow-right" /></Link>
                                        </div>
                                        <div className="space18" />
                                        <p>Student Benefits</p>
                                        <div className="space12" />
                                        <Link href="/#students">Job Opportunities</Link>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                                                    

                            <div className="owl-nav">
                                <button type="button" role="presentation" className="owl-prev h1p">
                                    <i className="fa-solid fa-angle-left" />
                                </button>
                                <button type="button" role="presentation" className="owl-next h1n">
                                    <i className="fa-solid fa-angle-right" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="space60" />
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="student-registration-info">
                                <h3 data-aos="fade-up" data-aos-duration={800}>Student Participation Fee</h3>
                                <div className="space24" />
                                <div className="row">
                                    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration={900}>
                                        <div className="fee-box">
                                            <h4>Early Bird Registration</h4>
                                            <div className="space12" />
                                            <p>₹500 (valid until 2 weeks before the event)</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration={1000}>
                                        <div className="fee-box">
                                            <h4>Regular Registration</h4>
                                            <div className="space12" />
                                            <p>₹750</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration={1100}>
                                        <div className="fee-box">
                                            <h4>On-Spot Registration</h4>
                                            <div className="space12" />
                                            <p>₹1,000</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="space24" />
                                <p data-aos="fade-up" data-aos-duration={1200}>Note: Fees include access to all event sessions, workshops, and networking opportunities. Limited scholarships available for deserving candidates.</p>
                                <div className="space32" />
                                <div className="text-center" data-aos="fade-up" data-aos-duration={1200}>
                                    <Link href="/#students" className="vl-btn1">Register Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}