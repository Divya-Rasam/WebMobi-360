import Link from 'next/link'

export default function Footer1() {
    return (
        <>
            <div className="footer1-sertion-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-logo-area">
                                <img src="/assets/img/logo/logo2.png" alt="TrainingPlacementNetwork.com" />
                                <div className="space16" />
                                <p>Connecting Talent, Opportunity, and Success in India's IT Hub</p>
                                <div className="space24" />
                                <ul>
                                    <li>
                                        <Link href="/#"><i className="fa-brands fa-facebook-f" /></Link>
                                    </li>
                                    <li>
                                        <Link href="/#"><i className="fa-brands fa-instagram" /></Link>
                                    </li>
                                    <li>
                                        <Link href="/#"><i className="fa-brands fa-linkedin-in" /></Link>
                                    </li>
                                    <li>
                                        <Link href="/#" className="m-0"><i className="fa-brands fa-twitter" /></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <div className="link-content">
                                <h3>Quick Links</h3>
                                <ul>
                                    <li><Link href="/#home">Home</Link></li>
                                    <li><Link href="/#about">About Us</Link></li>
                                    <li><Link href="/#events">Event Schedule</Link></li>
                                    <li><Link href="/#students">For Students</Link></li>
                                    <li><Link href="/#colleges">For Colleges</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="link-content2">
                                <h3>For Participants</h3>
                                <ul>
                                    <li><Link href="/#employers">For Employers</Link></li>
                                    <li><Link href="/#sponsors">For Sponsors</Link></li>
                                    <li><Link href="/#">How It Works</Link></li>
                                    <li><Link href="/#">Success Stories</Link></li>
                                    <li><Link href="/#">FAQ</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="link-content2">
                                <h3>Contact Us</h3>
                                <ul>
                                    <li>
                                        <Link href="/tel:+911234567890"><img src="/assets/img/icons/phn1.svg" alt="" /> +91 12345 67890</Link>
                                    </li>
                                    <li>
                                        <Link href="/#"><img src="/assets/img/icons/location1.svg" alt="" /> Bangalore, India</Link>
                                    </li>
                                    <li>
                                        <Link href="/mailto:info@trainingplacementnetwork.com"><img src="/assets/img/icons/mail1.svg" alt="" /> info@trainingplacementnetwork.com</Link>
                                    </li>
                                    <li>
                                        <Link href="/#"> <img src="/assets/img/icons/world1.svg" alt="" /> www.trainingplacementnetwork.com</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="space60" />
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="copyright">
                                <p>© Copyright {new Date().getFullYear()} TrainingPlacementNetwork.com. All Right Reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}