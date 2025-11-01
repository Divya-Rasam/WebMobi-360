'use client'
import Link from 'next/link'
import { useState } from "react"

export default function Section8() {
    const [activeTab, setActiveTab] = useState('colleges')

    return (
        <>

            <div className="blog1-section-area sp2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 m-auto">
                            <div className="blog-header text-center heading2 space-margin60">
                                <h5 data-aos="fade-left" data-aos-duration={900}>Partnership Opportunities</h5>
                                <div className="space16" />
                                <h2 className="text-anime-style-3">For Colleges & Employers</h2>
                            </div>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="tab-navigation" data-aos="fade-up" data-aos-duration={800} style={{ display: 'flex', justifyContent: 'center', marginBottom: '40px' }}>
                                <button 
                                    className={`tab-btn ${activeTab === 'colleges' ? 'active' : ''}`}
                                    onClick={() => setActiveTab('colleges')}
                                    style={{ 
                                        padding: '12px 30px', 
                                        margin: '0 10px',
                                        fontSize: '16px',
                                        fontWeight: '600',
                                        border: 'none',
                                        borderRadius: '30px',
                                        backgroundColor: activeTab === 'colleges' ? '#2563eb' : '#f3f4f6',
                                        color: activeTab === 'colleges' ? 'white' : '#333',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease'
                                    }}
                                >
                                    For Colleges
                                </button>
                                <button 
                                    className={`tab-btn ${activeTab === 'employers' ? 'active' : ''}`}
                                    onClick={() => setActiveTab('employers')}
                                    style={{ 
                                        padding: '12px 30px', 
                                        margin: '0 10px',
                                        fontSize: '16px',
                                        fontWeight: '600',
                                        border: 'none',
                                        borderRadius: '30px',
                                        backgroundColor: activeTab === 'employers' ? '#2563eb' : '#f3f4f6',
                                        color: activeTab === 'employers' ? 'white' : '#333',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease'
                                    }}
                                >
                                    For Employers
                                </button>
                            </div>
                        </div>
                    </div>

                    {activeTab === 'colleges' && (
                        <div className="row" data-aos="fade-up" data-aos-duration={900}>
                            <div className="col-lg-6">
                                <div className="partnership-content">
                                    <h3>Elevate Your Placement Success</h3>
                                    <div className="space16" />
                                    <p>Partner with TrainingPlacementNetwork.com to showcase your students to leading IT employers and enhance your institution's placement record.</p>
                                    <div className="space24" />
                                    <h4>Why Partner with Us?</h4>
                                    <div className="space16" />
                                    <ul>
                                        <li><strong>Increased Visibility:</strong> Promote your college to top IT companies and thousands of attendees</li>
                                        <li><strong>Higher Placements:</strong> Connect your students with employers actively seeking fresh talent</li>
                                        <li><strong>Exclusive Workshops:</strong> Provide your students with access to career guidance and skill-building sessions</li>
                                        <li><strong>Networking Opportunities:</strong> Build relationships with industry leaders and other institutions</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="partnership-fees">
                                    <h4>College Participation Fee</h4>
                                    <div className="space20" />
                                    <div className="fee-box">
                                        <h5>Standard Package</h5>
                                        <p>₹50,000 per event</p>
                                        <p>Includes booth space, branding, and access for up to 50 students</p>
                                    </div>
                                    <div className="space16" />
                                    <div className="fee-box">
                                        <h5>Premium Package</h5>
                                        <p>₹1,00,000 per event</p>
                                        <p>Includes larger booth, priority branding, and access for up to 100 students</p>
                                    </div>
                                    <div className="space16" />
                                    <div className="fee-box">
                                        <h5>Customized Packages</h5>
                                        <p>Contact us for multi-city or annual partnerships</p>
                                    </div>
                                    <div className="space32" />
                                    <div className="text-center">
                                        <Link href="/#colleges" className="vl-btn1">Partner With Us</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'employers' && (
                        <div className="row" data-aos="fade-up" data-aos-duration={900}>
                            <div className="col-lg-6">
                                <div className="partnership-content">
                                    <h3>Hire Top IT Talent with Ease</h3>
                                    <div className="space16" />
                                    <p>TrainingPlacementNetwork.com offers a unique platform to connect with pre-screened, job-ready candidates from top colleges across India.</p>
                                    <div className="space24" />
                                    <h4>Why Hire with Us?</h4>
                                    <div className="space16" />
                                    <ul>
                                        <li><strong>Access to Talent:</strong> Meet thousands of motivated students from B.Tech, M.Tech, MCA, and other IT-related programs</li>
                                        <li><strong>Streamlined Hiring:</strong> Conduct interviews, assessments, and on-the-spot hiring during our events</li>
                                        <li><strong>Branding Opportunities:</strong> Showcase your company to students, colleges, and sponsors</li>
                                        <li><strong>Customized Solutions:</strong> Tailored recruitment packages to meet your hiring needs</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="partnership-fees">
                                    <h4>Employer Participation Fee</h4>
                                    <div className="space20" />
                                    <div className="fee-box">
                                        <h5>Standard Booth</h5>
                                        <p>₹2,00,000 per event</p>
                                        <p>Includes booth space, branding, and access to candidate resumes</p>
                                    </div>
                                    <div className="space16" />
                                    <div className="fee-box">
                                        <h5>Premium Booth</h5>
                                        <p>₹3,50,000 per event</p>
                                        <p>Includes larger booth, priority branding, and pre-event resume screening</p>
                                    </div>
                                    <div className="space16" />
                                    <div className="fee-box">
                                        <h5>Title Sponsorship</h5>
                                        <p>₹10,00,000 per event</p>
                                        <p>Exclusive branding, keynote session, and priority hiring slots</p>
                                    </div>
                                    <div className="space32" />
                                    <div className="text-center">
                                        <Link href="/#employers" className="vl-btn1">Hire Talent</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

        </>
    )
}