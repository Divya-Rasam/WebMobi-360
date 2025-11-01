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

    breakpoints: {
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


export default function Section4() {
    return (
        <>

            <div className="team1-section-area sp1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="team-header space-margin60 heading2">
                                <h5 data-aos="fade-left" data-aos-duration={800}>What We Do</h5>
                                <div className="space16" />
                                <h2 className="text-anime-style-3">Our Event Features</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 position-relative">
                            <Swiper {...swiperOptions} className="team-slider-area ">
                                <SwiperSlide className="team-widget-boxarea">
                                    <div className="img1 image-anime">
                                        <img src="/assets/img/all-images/event/event-img1.png" alt="Job Fairs" />
                                    </div>
                                    <div className="space20" />
                                    <div className="text-area">
                                        <Link href="/#events">Job Fairs</Link>
                                        <div className="space16" />
                                        <p>Direct interactions between students and employers from top IT companies.</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="team-widget-boxarea">
                                    <div className="img1 image-anime">
                                        <img src="/assets/img/all-images/event/event-img2.png" alt="Career Workshops" />
                                    </div>
                                    <div className="space20" />
                                    <div className="text-area">
                                        <Link href="/#events">Career Workshops</Link>
                                        <div className="space16" />
                                        <p>Guidance on resume building, interview skills, and emerging IT skills.</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="team-widget-boxarea">
                                    <div className="img1 image-anime">
                                        <img src="/assets/img/all-images/event/event-img3.png" alt="Networking Sessions" />
                                    </div>
                                    <div className="space20" />
                                    <div className="text-area">
                                        <Link href="/#events">Networking Sessions</Link>
                                        <div className="space16" />
                                        <p>Connect with industry leaders, college representatives, and peers.</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="team-widget-boxarea">
                                    <div className="img1 image-anime">
                                        <img src="/assets/img/all-images/event/event-img1.png" alt="Sponsorship Opportunities" />
                                    </div>
                                    <div className="space20" />
                                    <div className="text-area">
                                        <Link href="/#sponsors">Sponsorship</Link>
                                        <div className="space16" />
                                        <p>Branding and visibility for companies supporting our events.</p>
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
                </div>
            </div>

        </>
    )
}