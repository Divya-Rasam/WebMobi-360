import Link from 'next/link'

export default function Header1({ scroll, isMobileMenu, handleMobileMenu, isSearch, handleSearch }: any) {
    return (
        <>
            <header>
                <div className={`header-area homepage1 header header-sticky d-none d-lg-block ${scroll ? 'sticky' : ''}`} id="header">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="header-elements">
                                    <div className="site-logo">
                                        <Link href="/"><img src="/assets/img/logo/logo1.png" alt="TrainingPlacementNetwork.com" /></Link>
                                    </div>
                                    <div className="main-menu" style={{ marginLeft: '20px' }}>
                                        <ul style={{ display: 'flex', alignItems: 'center' }}>
                                            <li style={{ marginRight: '15px' }}>
                                                <Link href="/#home" style={{ fontSize: '14px', fontWeight: '500' }}>Home</Link>
                                            </li>
                                            <li style={{ marginRight: '15px' }}>
                                                <Link href="/#about" style={{ fontSize: '14px', fontWeight: '500' }}>About Us</Link>
                                            </li>
                                            <li style={{ marginRight: '15px' }}>
                                                <Link href="/#students" style={{ fontSize: '14px', fontWeight: '500' }}>For Students</Link>
                                            </li>
                                            <li style={{ marginRight: '15px' }}>
                                                <Link href="/#colleges" style={{ fontSize: '14px', fontWeight: '500' }}>For Colleges</Link>
                                            </li>
                                            <li style={{ marginRight: '15px' }}>
                                                <Link href="/#employers" style={{ fontSize: '14px', fontWeight: '500' }}>For Employers</Link>
                                            </li>
                                            <li style={{ marginRight: '15px' }}>
                                                <Link href="/#sponsors" style={{ fontSize: '14px', fontWeight: '500' }}>For Sponsors</Link>
                                            </li>
                                            <li style={{ marginRight: '15px' }}>
                                                <Link href="/#events" style={{ fontSize: '14px', fontWeight: '500' }}>Event Schedule</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="btn-area" style={{ marginLeft: 'auto' }}>
                                        <div className="search-icon header__search header-search-btn" onClick={handleSearch}>
                                            <a><img src="/assets/img/icons/search1.svg" alt="" /></a>
                                        </div>
                                        <ul style={{ display: 'flex', alignItems: 'center', marginLeft: '15px' }}>
                                            <li style={{ marginRight: '10px' }}>
                                                <Link href="/#"><i className="fa-brands fa-facebook-f" /></Link>
                                            </li>
                                            <li style={{ marginRight: '10px' }}>
                                                <Link href="/#"><i className="fa-brands fa-instagram" /></Link>
                                            </li>
                                            <li style={{ marginRight: '10px' }}>
                                                <Link href="/#"><i className="fa-brands fa-linkedin-in" /></Link>
                                            </li>
                                            <li style={{ marginRight: '0' }}>
                                                <Link href="/#" className="m-0"><i className="fa-brands fa-twitter" /></Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className={`header-search-form-wrapper ${isSearch ? 'open' : ''}`}>
                                        <div className="tx-search-close tx-close" onClick={handleSearch}><i className="fa-solid fa-xmark" /></div>
                                        <div className="header-search-container">
                                            <form role="search" className="search-form">
                                                <input type="search" className="search-field" placeholder="Search …" name="s" />
                                                <button type="submit" className="search-submit"><img src="/assets/img/icons/search1.svg" alt="" /></button>
                                            </form>
                                        </div>
                                    </div>
                                    {isSearch && <div className="body-overlay active" onClick={handleSearch} />}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        </>
    )
}