import React from 'react'
import { Link } from 'react-router-dom'

export default function Card() {
    return (
        <section className='card--section'>
            <div className=''>
                <h2>man's & woman fashion</h2>
                <FashionItem />
            </div>
            <div className=' p-2'>
                <h2>electoric item</h2>
                <ElectoricItem/>
            </div>
            <div>
               <h2> jellewally items</h2>
               <JewellaryItem/>
            </div>
        </section>
    )
}

function FashionItem() {
    return (
        <section className='  carousel-item-sec position-relative  '>
            <div className='  carousel slide  w-100' id="iddef" >
                <div className='carousel-inner  fashion-item   '>
                    <div value="carousel-item active ">
                        <CardItem
                            brandname="brand - shoe"
                            price={20}
                            img={'https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/6/t/s/m-plain-shirt-for-mens-shiv-fashion-original-imagfwd8nqk8rmqz.jpeg?q=70'}
                            alt="shoe img"
                        />
                    </div>
                    <div value="carousel-item ">
                        <CardItem
                            brandname="brand - shoe"
                            price={20}
                            img={'https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/n/i/h/s-r-stbrg-stoneberg-original-imaggjymvpnxz6re.jpeg?q=70'}
                            alt="shoe img"
                        />
                    </div>
                    <div value="carousel-item  ">
                        <CardItem
                            brandname="brand - shoe"
                            price={50}
                            img={'https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/b/d/f/3xl-13-lstr-wine-vtexx-original-imagnzbummhkgr7p.jpeg?q=70'}
                            alt="shoe img"
                        />
                    </div>
                    <div value="carousel-item  ">
                        <CardItem
                            brandname="brand - shoe"
                            price={50}
                            img={'https://rukminim2.flixcart.com/image/612/612/xif0q/sweater/w/q/l/s-ttsw000159-tokyo-talkies-original-imaguecydbaw96cy.jpeg?q=70'}
                            alt="shoe img"
                        />
                    </div>
                </div>
                <div className='carousel-btn-response '>

                    <button className='carousel-control-prev btn btn-danger '><span className=' carousel-control-prev-icon '></span></button>
                    <button className='carousel-control-next btn btn-dark '><span className=' carousel-control-next-icon '></span></button>

                </div>
            </div>
        </section>
    )
}
function ElectoricItem() {
    return (
        <section className=' carousel-item-sec position-relative '>
            <div className=' carousel slide w-100 ' id="iddef" >
                <div className='carousel-inner eletric-item '>
                    <div value="carousel-item active">
                        <CardItem
                            brandname="brand - shoe"
                            price={20}
                            img={'https://rukminim2.flixcart.com/image/612/612/k0e66q80/digital-thermometer/b/a/d/airomart-digismart-thermometer-white-black-digismart-original-imaffj9uef5bgkgp.jpeg?q=70'}
                            alt="shoe img"
                        />
                    </div>
                    <div value="carousel-item ">
                        <CardItem
                            brandname="brand - shoe"
                            price={20}
                            img={'https://blog.eleczo.com/wp-content/uploads/2020/12/Led-light-bulbs-1.png'}
                            alt="shoe img"
                        />
                    </div>
                    <div value="carousel-item ">
                        <CardItem
                            brandname="brand - shoe"
                            price={20}
                            img={'https://cdn.moglix.com/p/l0x2jT3pVQe3W-large.jpg'}
                        />
                    </div>
                    <div value="carousel-item ">
                        <CardItem
                            brandname="brand - shoe"
                            price={20}
                            img={'https://cdn.moglix.com/p/bU2USZF32q0UM-large.jpg'}
                            alt="shoe img"
                        />
                    </div>
                </div>
                <div className='carousel-btn-response '>

                    <button className='carousel-control-prev btn btn-danger '><span className=' carousel-control-prev-icon '></span></button>
                    <button className='carousel-control-next btn btn-dark '><span className=' carousel-control-next-icon '></span></button>

                </div>
            </div>
        </section>
    )
}
function JewellaryItem() {
    return (
        <section className=' carousel-item-sec position-relative '>
            <div className=' carousel slide w-100  ' id="iddef" >
                <div className='carousel-inner jew-item  '>
                    <div value="carousel-item ">
                        <CardItem
                            brandname="brand - shoe"
                            price={20}
                            img={'https://rukminim2.flixcart.com/image/612/612/l55nekw0/jewellery-set/o/r/n/na-na-jw-523-laforword-original-imagfvkg6tf2gzm8.jpeg?q=70'}
                        />
                    </div>
                    <div value="carousel-item ">
                        <CardItem
                            brandname="brand - shoe"
                            price={20}
                            img={'https://rukminim2.flixcart.com/image/612/612/xif0q/jewellery-set/k/o/4/na-na-10-g8-s11-s2-cmb-zhouse-original-imagryzkbg9ns7kw.jpeg?q=70'}
                            alt="shoe img"
                        />
                    </div>
                    <div value="carousel-item ">
                        <CardItem
                            brandname="brand - shoe"
                            price={20}
                            img={'https://rukminim2.flixcart.com/image/612/612/kg2l47k0/jewellery-set/j/g/f/nm-2619-silver-shine-original-imafwebn3cgzd4nm.jpeg?q=70'}
                            alt="shoe img"
                        />
                    </div>
                    <div value="carousel-item ">
                        <CardItem
                            brandname="brand - shoe"
                            price={20}
                            img={'https://rukminim2.flixcart.com/image/612/612/xif0q/jewellery-set/d/t/y/na-d-1-combo-of-matha-patti-vijapadi-brado-jewellery-original-imagwy5azyan9byw.jpeg?q=70'}
                            alt="shoe img"
                        />
                    </div>
                </div>
                <div className='carousel-btn-response '>

                    <button className='carousel-control-prev btn btn-danger '><span className=' carousel-control-prev-icon '></span></button>
                    <button className='carousel-control-next btn btn-dark '><span className=' carousel-control-next-icon '></span></button>

                </div>
            </div>
        </section>
    )
}


export function CardItem(props) {
    return (
        <>
            <div className='card  '>
                <div className=" card-header  ">

                    <h4>{props.brandname}</h4>
                    <p className='text-danger'>price <span className='text-black'>${props.price}</span></p>
                </div>
                <div className=" card-body ">
                    <Link to='/product'>

                        <img src={props.img} alt={props.alt} className=' img-thumbnail   object-fit-cover   ' />
                    </Link>
                </div>
                <div className=' card-footer '>

                    <div className=' card-group d-flex  justify-content-between '>
                        <Link className='nav-link' >buy now</Link>
                        <Link className='nav-link'>save more</Link>
                    </div>
                </div>
            </div>

        </>
    )
}