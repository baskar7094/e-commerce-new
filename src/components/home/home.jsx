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
                    <div className='py-4'>

                        <h1>Eflyer</h1>
                        <div className='py-4'>
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
                <div className='row justify-content-between align-items-center  mx-4 '>


                    <div className='col-6 row order-1  order-lg-1 align-items-center    '>

                        {/* navbar-button */}
                        <div className='col-6 '>
                            <button className="btn  " data-bs-toggle="offcanvas" data-bs-target="#offtarget"><span className='bi bi-list '></span></button>
                            <Navbar />
                        </div>
                        {/* datalist - search  */}
                        <div className=' datalist  list-group order-2   col-6  '>
                            <input type="text" placeholder='enter your value' className='border-0 form-control-sm  ' />
                            <button className='border-0 form-control-sm '><span className='bi bi-search  '></span></button>
                        </div>
                    </div>

                    <div className='col-6 row order-2 order-lg-2 align-items-center   '>

                        {/* language select */}
                        <div className='contry-div col-6 d-none'>
                            <select className=' form-select-sm ' >
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
                        <div className='cards-div col-12 d-flex justify-content-center align-items-center mx-5 gap-2  '>
                            <Link to={'/'} className='nav-link'>
                                <span className='bi bi-cart'></span>
                                cart </Link>
                            <Link to={'/'} className='nav-link'>
                                <span className='bi bi-person'></span>
                                login</Link>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

function TopBar() {
    return (
        <section className='topbar-sec'>

            <div className='w-full '>
                <div className=' d-lg-flex gap-2 w-75 mx-auto rounded-4  justify-content-lg-center align-items-center bg-dark py-lg-4  text-capitalize    '>
                    <Link to={'/'} >best sellers</Link>
                    <Link to={'/'} >gift ideas</Link>
                    <Link to={'/'} >new release</Link>
                    <Link to={'/'} >today's deals</Link>
                    <Link to={'/'} >customer service</Link>
                </div>
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
                <div className=' offcanvas-body '>
                    body
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