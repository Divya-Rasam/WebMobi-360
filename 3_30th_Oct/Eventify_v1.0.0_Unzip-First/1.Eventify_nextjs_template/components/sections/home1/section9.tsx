import Countdown from '@/components/elements/Countdown'
import Link from 'next/link'

export default function Section9() {
    return (
        <>

            <div className="cta1-section-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 m-auto">
                            <div className="cta1-main-boxarea">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="event-schedule">
                                            <h3>Upcoming Events in 2025-2026</h3>
                                            <div className="space24" />
                                            <p>Our offline hiring events will take place across 20 IT cities in India. Join us at a location near you!</p>
                                            <div className="space32" />
                                            <div className="row">
                                                <div className="col-lg-6 col-md-6">
                                                    <div className="city-list">
                                                        <ul>
                                                            <li><i className="fa-solid fa-location-dot"></i> Bangalore</li>
                                                            <li><i className="fa-solid fa-location-dot"></i> Hyderabad</li>
                                                            <li><i className="fa-solid fa-location-dot"></i> Chennai</li>
                                                            <li><i className="fa-solid fa-location-dot"></i> Delhi</li>
                                                            <li><i className="fa-solid fa-location-dot"></i> Mumbai</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6">
                                                    <div className="city-list">
                                                        <ul>
                                                            <li><i className="fa-solid fa-location-dot"></i> Pune</li>
                                                            <li><i className="fa-solid fa-location-dot"></i> Kolkata</li>
                                                            <li><i className="fa-solid fa-location-dot"></i> Ahmedabad</li>
                                                            <li><i className="fa-solid fa-location-dot"></i> Chandigarh</li>
                                                            <li><i className="fa-solid fa-location-dot"></i> Coimbatore</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="space24" />
                                            <p>And more cities across India! Stay tuned for updates.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="timer-btn-area text-center">
                                            <Countdown />
                                            <div className="space32" />
                                            <div className="btn-area1" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px' }}>
                                                <Link href="/#students" className="vl-btn1">Student Registration</Link>
                                                <Link href="/#colleges" className="vl-btn1">College Partnership</Link>
                                                <Link href="/#employers" className="vl-btn1">Employer Registration</Link>
                                                <Link href="/#sponsors" className="vl-btn1">Sponsorship</Link>
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