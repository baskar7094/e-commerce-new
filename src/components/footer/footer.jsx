import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div>
      <section className='footer-sec bg-dark text-white'>
        <article>
            <h2>flyer</h2>

            <form action="">
                <input type="text" />
                <button type="submit" ><Link className='nav-link'>SUBSCRIBE</Link></button>
            </form>
            <div className=' flex-lg-row  justify-content-center '>
                <Link className='nav-link' to="">best sellers</Link>
                <Link className='nav-link' to="">gidt ideas</Link>
                <Link className='nav-link' to="">new release</Link>
                <Link className='nav-link' to="">today' deleas</Link>
                <Link className='nav-link' to="">customers service</Link>
            </div>
            <address>
                help line number : +1 1800 1200 1200
            </address>

        </article>
        <footer>
            &copy; All Rights Reserved. Design by html Templates
        </footer>
      </section>
    </div>
  )
}
