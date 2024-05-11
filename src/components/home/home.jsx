import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../cards/card'
import Footer from '../footer/footer'
export default function Home() {
    return (
        <div>
            <section className='bg-color'>
                <header>
                    <TopBar />
                </header>
                <section className='content-sec  '>
                    <div className=''>

                        <h1>Eflyer</h1>
                        <div className=''>
                            <Content />
                            <CarousalItem />
                        </div>
                    </div>

                </section>

            </section>
            <section>
                <Card />
                <Footer />
            </section>

        </div>
    )
}

function Content() {
    return (
        <>
            <section className='content-main-sec'>
                <div className=' responsive d-grid '>



                    {/* navbar-button */}
                    <div className='nav-btn  '>
                        <button className="btn  " data-bs-toggle="offcanvas" data-bs-target="#offtarget"><span className='bi bi-list '></span></button>
                        <Navbar />
                    </div>
                    {/* datalist - search  */}
                    <div className=' datalist    '>
                        <input list='browsers' name='browsers' placeholder='enter your value' className='border-0 form-control-sm   ' />
                        <button type="submit" className='border-0 form-control-sm '><span className='bi bi-search  '></span></button>
                    
                    <datalist id="browsers" >
                        <data value="mobiles">mobile</data>
                        <data value="bags">bags</data>
                        <data value="tablets">tablets</data>
                        <data value="kitchen items">kicthen items</data>
                        <data value="fashion"></data>
                        <data value="dress"></data>
                    </datalist>               
                                         
                              </div>


                    {/* language select */}
                    <div className=''>
                        <select className=' form-select-sm d-none d-md-flex ' >
                            <option>
                                <img className='w-25 h-25 img-fluid '
                                    src="https://cdn.countryflags.com/thumbs/united-states-of-america/flag-square-250.png" alt="ddddd" />
                                english </option>
                            <option>
                                <img src="https://cdn.countryflags.com/thumbs/united-kingdom/flag-square-250.png" alt="fransh img" />
                                franch </option>
                        </select>
                    </div>

                    {/* account & service list */}
                    <div className='cards-div d-flex gap-4 d-none d-md-flex  '>
                        <Link to={'/'} className='nav-link'>
                            <span className='bi bi-cart'></span>
                            cart </Link>
                        <Link to={'/'} className='nav-link'>
                            <span className='bi bi-person'></span>
                            login</Link>
                    </div>

                </div>
            </section>
        </>
    )
}

function TopBar() {
    return (
        <section className='topbar-sec '>

            <div className='   d-flex justify-content-center  align-items-center text-white-50  text-capitalize   '>
                <Link to={'/'} className='nav-link' >best sellers</Link>
                <Link to={'/'} className='nav-link' >gift ideas</Link>
                <Link to={'/'} className='nav-link' >new release</Link>
                <Link to={'/'} className='nav-link' >today's deals</Link>
                <Link to={'/'} className='nav-link' >customer service</Link>
            </div>
        </section>
    )
}

function Navbar() {
    return (
        <>
            <div className='offcanvas offcanvas-start ' id="offtarget" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1">
                <div className=' offcanvas-header '>
                    <button type="button" className='btn-close' data-bs-dismiss="offcanvas"></button>
                </div>
                <div className=' offcanvas-body'> 
                   {/* 475 px show */}
                   <select className=' form-select-sm  d-md-none ' >
                            <option>
                                <img className='w-25 h-25 img-fluid '
                                    src="https://cdn.countryflags.com/thumbs/united-states-of-america/flag-square-250.png" alt="ddddd" />
                                english </option>
                            <option>
                                <img src="https://cdn.countryflags.com/thumbs/united-kingdom/flag-square-250.png" alt="fransh img" />
                                franch </option>
                        </select>

                   <div className='cards-div d-flex gap-4  d-md-none  '>
                        <Link to={'/'} className='nav-link '>
                            <span className='bi bi-cart text-black '></span>
                            cart </Link>
                        <Link to={'/'} className='nav-link'>
                            <span className='bi bi-person'></span>
                            login</Link>
                   </div>

                   {/* 547 show item */}
                   <div>
                    <ul className='navbar-nav'>
                        <li className='nav-item'><Link className='nav-link'> mobiles</Link></li>
                        <li className='nav-item'><Link className='nav-link'> men's dress</Link></li>
                        <li className='nav-item'><Link className='nav-link'> woman's dress</Link></li>
                        <li className='nav-item'><Link className='nav-link'> eletric items</Link></li>
                        <li className='nav-item'><Link className='nav-link'> kichan items</Link></li>
                        <li className='nav-item'><Link className='nav-link'> toys</Link></li>
                        <li className='nav-item'><Link className='nav-link'> laptops</Link></li>
                    </ul>
                   </div>
                
                </div>

            </div>
        </>
    )
}

function CarousalItem() {
    return (
        <>
            <section className='py-5 carousel-item-sec'>

                <div id="carouselitem" className=' carousel  slide' data-bs-ride="slide">
                    <div className=" carousel-inner ">
                        <div className=' carousel-item active'>
                            <h2>get start <br /> your favriot shoping</h2>
                            <Link to={'/'} className='nav-link'>buy now</Link>
                        </div>
                        <div className='carousel-item '>
                            <h2>get start <br /> your favriot shoping</h2>
                            <Link to={'/'} className='nav-link'>buy now</Link>
                        </div>
                    </div>

                    <button className=' carousel-control-prev ' data-bs-target="#carouselitem" data-bs-SLide="prev"><span className=' carousel-control-prev-icon '></span></button>
                    <button className=' carousel-control-next ' data-bs-target="#carouselitem" data-bs-Slide="next" ><span className=' carousel-control-next-icon '></span></button>
                </div>
            </section>
        </>
    )


}

function MobileDesign() {
    return (
        <>
            <nav className='navbar- navbar-expand-lg '>
                <Link className='navbar-brand'>
                    Eflyer
                </Link>
                <Navbar />
                <div className='collapse navbar-collapse' id="tigger">
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <Link className='van-link'></Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}