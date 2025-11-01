import Link from 'next/link'

export default function Section2() {
    return (
        <>

            <div className="about1-section-area sp1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 m-auto">
                            <div className="about-header-area heading2 text-center space-margin60">
                                <h5 data-aos="fade-left" data-aos-duration={800}>Why Choose Us?</h5>
                                <div className="space16" />
                                <h2 className="text-anime-style-3">Benefits for All Stakeholders</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-duration={800}>
                            <div className="about-box">
                                <div className="icon">
                                    <img src="/assets/img/icons/about-icon1.svg" alt="" />
                                </div>
                                <div className="space20" />
                                <h3>For Students</h3>
                                <div className="space16" />
                                <p>Gain direct access to top IT employers, personalized career guidance, and skill-building workshops to kickstart your career.</p>
                                <div className="space24" />
                                <Link href="/#students" className="vl-btn2">Learn More</Link>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-duration={900}>
                            <div className="about-box">
                                <div className="icon">
                                    <img src="/assets/img/icons/about-icon2.svg" alt="" />
                                </div>
                                <div className="space20" />
                                <h3>For Colleges</h3>
                                <div className="space16" />
                                <p>Showcase your talent pool, enhance placement records, and build partnerships with industry leaders.</p>
                                <div className="space24" />
                                <Link href="/#colleges" className="vl-btn2">Learn More</Link>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-duration={1000}>
                            <div className="about-box">
                                <div className="icon">
                                    <img src="/assets/img/icons/about-icon3.svg" alt="" />
                                </div>
                                <div className="space20" />
                                <h3>For Employers</h3>
                                <div className="space16" />
                                <p>Connect with pre-screened, job-ready candidates from top colleges, streamlining your hiring process.</p>
                                <div className="space24" />
                                <Link href="/#employers" className="vl-btn2">Learn More</Link>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-duration={1100}>
                            <div className="about-box">
                                <div className="icon">
                                    <img src="/assets/img/icons/about-icon4.svg" alt="" />
                                </div>
                                <div className="space20" />
                                <h3>For Sponsors</h3>
                                <div className="space16" />
                                <p>Gain visibility among thousands of students, colleges, and employers while supporting India's next generation of IT professionals.</p>
                                <div className="space24" />
                                <Link href="/#sponsors" className="vl-btn2">Learn More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="space60" />
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="btn-area1" data-aos="fade-up" data-aos-duration={1200} style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px' }}>
                                <Link href="/#students" className="vl-btn1">Students: Register now</Link>
                                <Link href="/#colleges" className="vl-btn1">Colleges: Partner with us</Link>
                                <Link href="/#employers" className="vl-btn1">Employers: Hire top talent</Link>
                                <Link href="/#sponsors" className="vl-btn1">Sponsors: Elevate your brand</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}