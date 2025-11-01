'use client'
import Link from 'next/link'
import { useState } from "react"

export default function Section3() {
    const [isTab, setIsTab] = useState(1)
    const handleTab = (i: number) => {
        setIsTab(i)
    }
    return (
        <>

            <div className="event1-section-area sp1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 m-auto">
                            <div className="event-header heading2 space-margin60 text-center">
                                <h5 data-aos="fade-left" data-aos-duration={800}>About Us</h5>
                                <div className="space16" />
                                <h2 className="text-anime-style-3">TrainingPlacementNetwork.com</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div data-aos="fade-up" data-aos-duration={900}>
                                <ul className="nav nav-pills space-margin60" id="pills-tab" role="tablist" style={{ justifyContent: 'center' }}>
                                    <li className="nav-item" onClick={() => handleTab(1)}>
                                        <button className={isTab == 1 ? "nav-link active" : "nav-link"} id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true" style={{ 
                                            padding: '12px 24px', 
                                            fontSize: '16px', 
                                            fontWeight: '600',
                                            margin: '0 8px',
                                            minWidth: '150px'
                                        }}>
                                            Our Mission
                                        </button>
                                    </li>
                                    <li className="nav-item" onClick={() => handleTab(2)}>
                                        <button className={isTab == 2 ? "nav-link active" : "nav-link"} id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false" style={{ 
                                            padding: '12px 24px', 
                                            fontSize: '16px', 
                                            fontWeight: '600',
                                            margin: '0 8px',
                                            minWidth: '150px'
                                        }}>
                                            What We Do
                                        </button>
                                    </li>
                                    <li className="nav-item" onClick={() => handleTab(3)}>
                                        <button className={isTab == 3 ? "nav-link active" : "nav-link"} id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false" style={{ 
                                            padding: '12px 24px', 
                                            fontSize: '16px', 
                                            fontWeight: '600',
                                            margin: '0 8px',
                                            minWidth: '150px'
                                        }}>
                                            Our Vision
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <div className="tab-content" id="pills-tabContent">
                                <div className={isTab == 1 ? "tab-pane fade show active" : "tab-pane fade"} id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex={0}>
                                    <div className="tabs-widget-boxarea" data-aos="fade-up" data-aos-duration={800}>
                                        <div className="row align-items-center">
                                            <div className="col-lg-4">
                                                <div className="img1">
                                                    <img src="/assets/img/all-images/about/about-img1.png" alt="Our Mission" />
                                                </div>
                                            </div>
                                            <div className="col-lg-8">
                                                <div className="content-area">
                                                    <h3>Our Mission</h3>
                                                    <div className="space16" />
                                                    <p>At TrainingPlacementNetwork.com, we are dedicated to empowering India's youth by connecting them with top IT employers through our exclusive offline hiring events. Our mission is to foster a dynamic ecosystem where students receive guidance, colleges enhance their reputation, employers find the best talent, and sponsors gain unmatched visibility.</p>
                                                    <div className="space32" />
                                                    <div className="btn-area1">
                                                        <Link href="/#students" className="vl-btn1">Join as Student</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={isTab == 2 ? "tab-pane fade show active" : "tab-pane fade"} id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex={0}>
                                    <div className="tabs-widget-boxarea" data-aos="fade-up" data-aos-duration={800}>
                                        <div className="row align-items-center">
                                            <div className="col-lg-4">
                                                <div className="img1">
                                                    <img src="/assets/img/all-images/event/event-img1.png" alt="What We Do" />
                                                </div>
                                            </div>
                                            <div className="col-lg-8">
                                                <div className="content-area">
                                                    <h3>What We Do</h3>
                                                    <div className="space16" />
                                                    <p>We organize large-scale offline hiring events across 20 major IT cities in India, including Bangalore, Hyderabad, Chennai, Delhi, Mumbai, Pune, Kolkata, Ahmedabad, and more. These events feature:</p>
                                                    <div className="space16" />
                                                    <ul className="list-style">
                                                        <li><strong>Job Fairs:</strong> Direct interactions between students and employers.</li>
                                                        <li><strong>Career Workshops:</strong> Guidance on resume building, interview skills, and industry trends.</li>
                                                        <li><strong>Networking Sessions:</strong> Opportunities to connect with industry leaders, college representatives, and peers.</li>
                                                        <li><strong>Sponsorship Opportunities:</strong> Branding and visibility for companies supporting our events.</li>
                                                    </ul>
                                                    <div className="space32" />
                                                    <div className="btn-area1">
                                                        <Link href="/#events" className="vl-btn1">View Events</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={isTab == 3 ? "tab-pane fade show active" : "tab-pane fade"} id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabIndex={0}>
                                    <div className="tabs-widget-boxarea" data-aos="fade-up" data-aos-duration={800}>
                                        <div className="row align-items-center">
                                            <div className="col-lg-4">
                                                <div className="img1">
                                                    <img src="/assets/img/all-images/about/about-img3.png" alt="Our Vision" />
                                                </div>
                                            </div>
                                            <div className="col-lg-8">
                                                <div className="content-area">
                                                    <h3>Our Vision</h3>
                                                    <div className="space16" />
                                                    <p>To become India's leading platform for IT hiring events, creating a seamless bridge between education and employment while fostering innovation and growth in the IT sector.</p>
                                                    <div className="space32" />
                                                    <div className="btn-area1">
                                                        <Link href="/#about" className="vl-btn1">Learn More</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}