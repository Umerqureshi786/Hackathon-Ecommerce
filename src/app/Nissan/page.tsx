import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Cars from '../Cars/page'
const Nissan = () => {
    return (
        <div>
            <Navbar />
            <div className='grid grid-cols-3 '>
                {/* Form for type */}
                <div>
                    <form className='ml-10 mt-6'>
                        <p className='text-slate-400 '>TYPE</p> <br /> <br />
                        <input type="checkbox" />Sport (10) <br /> <br />
                        <input type="checkbox" />SUV (12) <br /> <br />
                        <input type="checkbox" />MPV (16) <br /> <br />
                        <input type="checkbox" />Sedan (20) <br /> <br />
                        <input type="checkbox" />Coupe (14) <br /> <br />
                        <input type="checkbox" />Hatchback (14) <br /> <br />

                    </form>

                </div>

                {/* right side Car with details */}

                <div className=''>
                    <img src="View.png" alt="carimage" />

                    <div className='grid grid-cols-3 gap-3 mt-2 '>
                        <div>
                            <img src="View 1.png" alt="Carr" />
                        </div>

                        <div>
                            <img src="View 2.png" alt="interior car" />
                        </div>

                        <div>
                            <img src="View 3.png" alt="interior car" />
                        </div>

                    </div>

                </div>

                <div className=' p-7'> <h1 className='text-xl font-bold'>NISSAN GT-R</h1>
`   `
                    <div className='flex gap-2 h-3'>
                        <img src="Star.png" alt="star" />
                        <img src="Star.png" alt="star" />
                        <img src="Star.png" alt="star" />
                        <img src="Star.png" alt="star" />
                        <img src="Satr 2.png" alt="star" />
                        <p className='text-slate-500 text-xs'>440+ Reviewer</p>

                    </div>
                    <br /><br />

                    <p> BRNISMO has become the embodiment of Nissan&apos;s outstanding performance, inspired by the most <br /> unforgiving proving ground, the &quot;race track&quot;.
                    </p>

                    <br />
                    <br />

                    <div className='flex justify-evenly'>
                        <p className='text-slate-400'>Type Car</p>
                        <p>Sport</p>
                        <p className='text-slate-400'>Capacity</p>
                        <p>2Person</p>
                    </div>


                    <br />

                    <div className='flex justify-evenly'>
                        <p className='text-slate-400'>Steering</p>
                        <p>Manual</p>
                        <p className='text-slate-400'>Gasoline</p>
                        <p>70L</p>
                    </div>

                    <br /> <br />



                    <div className='flex justify-around'>
                        <div ><p className='text-lg font-bold'>$80.00/ days</p> <p className='text-xs text-slate-400'> <del>$100.00</del></p>
                        </div>

                        <div><button className="bg-blue-700 w-28 h-12 rounded-md text-slate-50">Rent Now</button></div>
                    </div>

                </div>

            </div>


            <br /> 


            <div >
                <p className='mb-4 font-bold ml-12'>Reviews</p>
                <div className='flex gap-4  ml-6'> <img src="Profil.png" alt="profile" /> <p className='mt-2'>Alex Stanton</p>
                </div>
                <p className='ml-20 text-slate-500'>We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.</p>
            </div>

            <br />


            <div >

                <div className='flex gap-4  ml-6'> <img src="Profill.png" alt="profile" className='w-11' /> <p className='mt-2'>Skylar Dias</p>
                </div>
                <p className='ml-20 text-slate-500'>We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.</p>
            </div>
            <br /> <br />

            <Cars />
            <br /> <br /> <br />
            <Footer />

        </div>

    )
}
export default Nissan
