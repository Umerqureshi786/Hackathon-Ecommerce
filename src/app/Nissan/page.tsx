import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Cars from '../Cars/page'
const Nissan = () => {
    return (
        <div>
            <Navbar />
            <div className='grid grid-cols-3 '>
                <div></div>

                <div><img src="View.png" alt="carimage" /> </div>
                <div className=' p-7'> <h1 className='text-xl font-bold'>NISSAN GT-R</h1> <br />  BRNISMO has become the embodiment of Nissan's outstanding performance, inspired by the most <br /> unforgiving proving ground, the "race track".</div>
            </div>
            <br /> <br /> <br />

            <Cars />
            <br /> <br /> <br />
            <Footer />

        </div>

    )
}
export default Nissan
