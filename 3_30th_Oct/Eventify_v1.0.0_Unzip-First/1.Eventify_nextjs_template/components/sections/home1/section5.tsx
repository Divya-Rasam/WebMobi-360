'use client'
import { useState } from 'react'
import ModalVideo from 'react-modal-video'
import "@/node_modules/react-modal-video/css/modal-video.css"
import Link from 'next/link'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
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
}

export default function Section5() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>

            <div className="testimonials1-section-area sp1">
                <div className="testimonial-img2">
                    <img src="/assets/img/all-images/testimonials/testimonial-img2.png" alt="" />
                </div>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="testimonial-header heading2">
                                <h5 data-aos="fade-left" data-aos-duration={1000}>Success Stories</h5>
                                <div className="space16" />
                                <h2 className="text-anime-style-3">What Our Participants Say</h2>
                            </div>
                            <div className="space32" />
                            <Swiper {...swiperOptions} className="testimonial-content-slider owl-carousel">
                                <SwiperSlide className="testimonial-widget-box">
                                    <div className="list-display">
                                        <ul>
                                            <li><i className="fa-solid fa-star" /></li>
                                            <li><i className="fa-solid fa-star" /></li>
                                            <li><i className="fa-solid fa-star" /></li>
                                            <li><i className="fa-solid fa-star" /></li>
                                            <li><i className="fa-solid fa-star" /></li>
                                        </ul>
                                        <div className="icons">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={28} height={24} viewBox="0 0 28 24" fill="none">
                                                <path d="M15.3469 5.73963C15.3469 7.2063 15.7303 8.43797 16.4969 9.43463C17.0403 10.1213 17.7775 10.5724 18.7086 10.788C19.6253 11.0013 20.4919 11.0163 21.2753 10.8346C21.5419 12.418 21.1086 14.0946 20.0086 15.8713C18.9064 17.6469 17.4853 18.9819 15.7453 19.8763L18.3803 23.668C19.7136 23.008 20.9803 22.1713 22.1469 21.1596C23.3303 20.148 24.3803 18.9846 25.3136 17.6696C26.2469 16.3546 26.9469 14.8696 27.3969 13.1863C27.8469 11.503 27.9719 9.7863 27.7569 8.01963C27.4769 5.6863 26.7236 3.81963 25.4969 2.4363C24.2714 1.03519 22.7447 0.334633 20.9169 0.334633C19.3086 0.334633 17.9736 0.817966 16.9169 1.79797C15.8714 2.75797 15.3492 4.07352 15.3503 5.74463L15.3469 5.73963ZM0.140263 5.73963C0.140263 7.2063 0.523598 8.43797 1.29026 9.43463C1.83471 10.1346 2.57193 10.5885 3.50193 10.7963C4.43526 11.0019 5.29082 11.0141 6.06859 10.833C6.33526 12.3996 5.9186 14.083 4.81526 15.8663C3.71526 17.633 2.29526 18.9663 0.555264 19.8663L3.1836 23.668C4.51804 23.008 5.7736 22.1719 6.95026 21.1596C8.14426 20.1329 9.20475 18.9604 10.1069 17.6696C11.0336 16.353 11.7236 14.8696 12.1736 13.1863C12.6307 11.5043 12.7536 9.74894 12.5353 8.01963C12.2586 5.6863 11.5086 3.81963 10.2853 2.4363C9.06304 1.04519 7.53915 0.349634 5.7136 0.349634C4.10248 0.347412 2.76804 0.834633 1.71026 1.8113C0.664705 2.7713 0.141375 4.08685 0.140263 5.75797V5.73963Z" fill="#FFBA00" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="space22" />
                                    <p>"TrainingPlacementNetwork.com helped me land my dream job at a top IT company. The direct interaction with employers was invaluable, and the career workshops gave me the confidence to ace my interviews."</p>
                                    <div className="space24" />
                                    <div className="auhtor-area">
                                        <div className="name-area">
                                            <div className="img1">
                                                <img src="/assets/img/all-images/testimonials/testimonial-img1.png" alt="" />
                                            </div>
                                            <div className="text">
                                                <Link href="/#">Rahul Sharma</Link>
                                                <div className="space12" />
                                                <p>IT Graduate, Placed at Infosys</p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="testimonial-widget-box">
                                    <div className="list-display">
                                        <ul>
                                            <li><i className="fa-solid fa-star" /></li>
                                            <li><i className="fa-solid fa-star" /></li>
                                            <li><i className="fa-solid fa-star" /></li>
                                            <li><i className="fa-solid fa-star" /></li>
                                            <li><i className="fa-solid fa-star" /></li>
                                        </ul>
                                        <div className="icons">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={28} height={24} viewBox="0 0 28 24" fill="none">
                                                <path d="M15.3469 5.73963C15.3469 7.2063 15.7303 8.43797 16.4969 9.43463C17.0403 10.1213 17.7775 10.5724 18.7086 10.788C19.6253 11.0013 20.4919 11.0163 21.2753 10.8346C21.5419 12.418 21.1086 14.0946 20.0086 15.8713C18.9064 17.6469 17.4853 18.9819 15.7453 19.8763L18.3803 23.668C19.7136 23.008 20.9803 22.1713 22.1469 21.1596C23.3303 20.148 24.3803 18.9846 25.3136 17.6696C26.2469 16.3546 26.9469 14.8696 27.3969 13.1863C27.8469 11.503 27.9719 9.7863 27.7569 8.01963C27.4769 5.6863 26.7236 3.81963 25.4969 2.4363C24.2714 1.03519 22.7447 0.334633 20.9169 0.334633C19.3086 0.334633 17.9736 0.817966 16.9169 1.79797C15.8714 2.75797 15.3492 4.07352 15.3503 5.74463L15.3469 5.73963ZM0.140263 5.73963C0.140263 7.2063 0.523598 8.43797 1.29026 9.43463C1.83471 10.1346 2.57193 10.5885 3.50193 10.7963C4.43526 11.0019 5.29082 11.0141 6.06859 10.833C6.33526 12.3996 5.9186 14.083 4.81526 15.8663C3.71526 17.633 2.29526 18.9663 0.555264 19.8663L3.1836 23.668C4.51804 23.008 5.7736 22.1719 6.95026 21.1596C8.14426 20.1329 9.20475 18.9604 10.1069 17.6696C11.0336 16.353 11.7236 14.8696 12.1736 13.1863C12.6307 11.5043 12.7536 9.74894 12.5353 8.01963C12.2586 5.6863 11.5086 3.81963 10.2853 2.4363C9.06304 1.04519 7.53915 0.349634 5.7136 0.349634C4.10248 0.347412 2.76804 0.834633 1.71026 1.8113C0.664705 2.7713 0.141375 4.08685 0.140263 5.75797V5.73963Z" fill="#FFBA00" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="space22" />
                                    <p>"Partnering with TrainingPlacementNetwork.com has significantly improved our college's placement record. Our students now have direct access to top IT employers, and the networking opportunities have been exceptional."</p>
                                    <div className="space24" />
                                    <div className="auhtor-area">
                                        <div className="name-area">
                                            <div className="img1">
                                                <img src="/assets/img/all-images/testimonials/testimonial-img1.png" alt="" />
                                            </div>
                                            <div className="text">
                                                <Link href="/#">Dr. Priya Singh</Link>
                                                <div className="space12" />
                                                <p>Placement Officer, Engineering College</p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="testimonial-widget-box">
                                    <div className="list-display">
                                        <ul>
                                            <li><i className="fa-solid fa-star" /></li>
                                            <li><i className="fa-solid fa-star" /></li>
                                            <li><i className="fa-solid fa-star" /></li>
                                            <li><i className="fa-solid fa-star" /></li>
                                            <li><i className="fa-solid fa-star" /></li>
                                        </ul>
                                        <div className="icons">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={28} height={24} viewBox="0 0 28 24" fill="none">
                                                <path d="M15.3469 5.73963C15.3469 7.2063 15.7303 8.43797 16.4969 9.43463C17.0403 10.1213 17.7775 10.5724 18.7086 10.788C19.6253 11.0013 20.4919 11.0163 21.2753 10.8346C21.5419 12.418 21.1086 14.0946 20.0086 15.8713C18.9064 17.6469 17.4853 18.9819 15.7453 19.8763L18.3803 23.668C19.7136 23.008 20.9803 22.1713 22.1469 21.1596C23.3303 20.148 24.3803 18.9846 25.3136 17.6696C26.2469 16.3546 26.9469 14.8696 27.3969 13.1863C27.8469 11.503 27.9719 9.7863 27.7569 8.01963C27.4769 5.6863 26.7236 3.81963 25.4969 2.4363C24.2714 1.03519 22.7447 0.334633 20.9169 0.334633C19.3086 0.334633 17.9736 0.817966 16.9169 1.79797C15.8714 2.75797 15.3492 4.07352 15.3503 5.74463L15.3469 5.73963ZM0.140263 5.73963C0.140263 7.2063 0.523598 8.43797 1.29026 9.43463C1.83471 10.1346 2.57193 10.5885 3.50193 10.7963C4.43526 11.0019 5.29082 11.0141 6.06859 10.833C6.33526 12.3996 5.9186 14.083 4.81526 15.8663C3.71526 17.633 2.29526 18.9663 0.555264 19.8663L3.1836 23.668C4.51804 23.008 5.7736 22.1719 6.95026 21.1596C8.14426 20.1329 9.20475 18.9604 10.1069 17.6696C11.0336 16.353 11.7236 14.8696 12.1736 13.1863C12.6307 11.5043 12.7536 9.74894 12.5353 8.01963C12.2586 5.6863 11.5086 3.81963 10.2853 2.4363C9.06304 1.04519 7.53915 0.349634 5.7136 0.349634C4.10248 0.347412 2.76804 0.834633 1.71026 1.8113C0.664705 2.7713 0.141375 4.08685 0.140263 5.75797V5.73963Z" fill="#FFBA00" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="space22" />
                                    <p>"As an HR manager at a leading IT company, I've found TrainingPlacementNetwork.com to be an excellent platform for recruitment. The quality of candidates is exceptional, and the streamlined hiring process saves us valuable time and resources."</p>
                                    <div className="space24" />
                                    <div className="auhtor-area">
                                        <div className="name-area">
                                            <div className="img1">
                                                <img src="/assets/img/all-images/testimonials/testimonial-img1.png" alt="" />
                                            </div>
                                            <div className="text">
                                                <Link href="/#">Amit Patel</Link>
                                                <div className="space12" />
                                                <p>HR Manager, Tech Solutions Ltd.</p>
                                            </div>
                                        </div>
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
                        <div className="col-lg-6">
                            <div className="video-play-btn">
                                <a onClick={() => setOpen(true)} className="popup-youtube"><svg xmlns="http://www.w3.org/2000/svg" width={20} height={24} viewBox="0 0 20 24" fill="none">
                                    <path d="M19.5185 11.1463L1.52146 0.147702C1.36988 0.0550624 1.19634 0.0044781 1.01872 0.0011519C0.8411 -0.00217431 0.665798 0.041878 0.510849 0.128777C0.3559 0.215677 0.226898 0.342285 0.137113 0.495581C0.0473273 0.648876 8.00178e-08 0.823322 0 1.00098V22.9981C8.00178e-08 23.1758 0.0473273 23.3502 0.137113 23.5035C0.226898 23.6568 0.3559 23.7834 0.510849 23.8703C0.665798 23.9572 0.8411 24.0013 1.01872 23.998C1.19634 23.9946 1.36988 23.944 1.52146 23.8514L19.5185 12.8528C19.6647 12.7635 19.7855 12.6381 19.8693 12.4887C19.9531 12.3393 19.9971 12.1709 19.9971 11.9996C19.9971 11.8282 19.9531 11.6598 19.8693 11.5104C19.7855 11.361 19.6647 11.2356 19.5185 11.1463Z" fill="#1A1719" />
                                </svg></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ModalVideo channel='youtube' isOpen={isOpen} videoId="JXMWOmuR1hU" onClose={() => setOpen(false)} />
        </>
    )
}