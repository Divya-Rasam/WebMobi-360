import Link from 'next/link'

export default function Section1() {
    return (
        <>

            <div className="hero1-section-area">
                <div className="bg1">
                    <img src="/assets/img/bg/header-bg2.png" alt="" className="header-bg1" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="hero1-header heading1">
                                <h5 data-aos="fade-left" data-aos-duration={800}>Connecting Talent, Opportunity, and Success</h5>
                                <div className="space16" />
                                <h1 className="text-anime-style-3">
                                    Welcome to <br className="d-lg-block d-none" />
                                    TrainingPlacementNetwork.com
                                </h1>
                                <div className="space16" />
                                <p data-aos="fade-left" data-aos-duration={900}>
                                    Your premier platform for bridging the gap between ambitious students, top-tier colleges, and leading IT employers. Our offline hiring events, hosted across 20 major IT cities in India, bring together students, colleges, employers, and sponsors to create unparalleled opportunities for career growth, networking, and professional development.
                                </p>
                                <div className="space32" />
                                <div className="btn-area1" data-aos="fade-left" data-aos-duration={1100}>
                                    <Link href="/#students" className="vl-btn1">Student Registration</Link>
                                    <Link href="/#about" className="vl-btn2">Learn More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="header-images">
                                <div className="img1" data-aos="zoom-in" data-aos-duration={1000}>
                                    <img src="/assets/img/all-images/hero/hero-img1.png" alt="IT Hiring Event" />
                                </div>
                                <div className="images-content-area" data-aos="fade-up" data-aos-duration={900}>
                                    <h3>INDIA'S PREMIER IT HIRING PLATFORM</h3>
                                    <div className="space12" />
                                    <Link href="/#events">Events in 20+ Major Cities</Link>
                                    <div className="space12" />
                                    <Link href="/#">Connecting Students, Colleges & Employers</Link>
                                    <div className="space16" />
                                    <p>Join us at our next event in cities like Bangalore, Hyderabad, Chennai, Delhi, Mumbai, and more!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}