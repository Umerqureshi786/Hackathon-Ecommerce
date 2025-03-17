import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Image from 'next/image'

const Billinginfo = () => {
    return (
        <div>
            <Navbar />

            <div className='bg-red-200 px-10 mt-4 flex gap-6 w-full h-auto'>

                <div className='bg-white p-3 w-3/4 ml-5 h-72'>
                    <h1 className='font-semibold'>Billing Info</h1>

                    <div className='flex justify-between'>
                        <p className='text-slate-400 font-thin text-sm'>Please enter your billing info</p>
                        <p className='text-slate-400 font-thin text-sm'>Step 1 of 4</p>

                    </div>



                    <br />


                    <div className='flex justify-between '>


                        <div>
                            <h1> Name</h1> <br />
                            <div className='mr-52'><input type="text" placeholder='Your name' /></div>
                        </div>


                        <div className='mr-20'>
                            <h1 >Phone Number</h1> <br />
                            <input type="text" placeholder='Phone number' className='' />

                        </div>


                    </div>

                    <br /> <br />




                    <div className='flex justify-between '>


                        <div>
                            <h1> Address</h1> <br />
                            <div className='mr-52'><input type="text" placeholder='Address' /></div>
                        </div>


                        <div className='mr-20'>
                            <h1 >Town/City</h1> <br />
                            <input type="text" placeholder='Town or city' className='' />

                        </div>


                    </div>










                </div>


                <div className='bg-sky-200 p-3 w-auto h-auto '>
                    <h1 className='font-semibold'>Rental Summary </h1>


                    <p className='text-slate-400 font-thin text-sm'>Prices may change depending on the length of the rental and the price of your rental car.

                    </p>
                    <br />

                    <div className='flex gap-4 mt-2'>
                        <div>
                            <img src="View 1.png" alt="Carr" />
                        </div>

                        <div className='mt-4'>
                            <h1 className='font-medium text-3xl'> Nissan GT - R</h1>
                            <div className='flex gap-2 h-3 mt-2'>
                                <img src="Star.png" alt="star" />
                                <img src="Star.png" alt="star" />
                                <img src="Star.png" alt="star" />
                                <img src="Star.png" alt="star" />
                                <img src="Satr 2.png" alt="star" />
                                <p className='text-slate-500 text-xs'>440+ Reviewer</p>

                            </div>


                        </div>



                    </div>

                    <br />
                    <br />

                    <div className='flex justify-between'>
                        <p className='text-slate-400'>Subtotal</p>
                        <p className='font-semibold'>$80.00</p>
                    </div>



                    <div className='flex justify-between mt-4'>
                        <p className='text-slate-400'>Tax</p>
                        <p className='font-semibold'>$0</p>
                    </div>



                    <div className='flex justify-between mt-4 '>
                        <input type="text" placeholder='Apply promo code' className='ml-8' />
                        <p className='font-semibold mr-8'>Apply now</p>
                    </div>




                    <br />




                    <div className='flex justify-between mt-4 '>
                        <div><p className='font-bold text-xl'>Total Rental Price</p>
                            <p className='-mt-2 text-slate-400'>Overall price and includes rental discount</p>
                        </div>

                        <div><p className='font-semibold text-3xl mt-1'>$80.00</p> </div>
                    </div>


                </div>


            </div>



            <div className='mb-max'>

                <div className='bg-red-200 px-10  flex gap-6 h-max -mt-28'>

                    <div className='bg-white p-3  ml-5 h-72'>


                        <h1 className='font-semibold'>Rental Info</h1>

                        <div className='flex justify-between'>
                            <p className='text-slate-400 font-thin text-sm'>Please select your rental date</p>
                            <p className='text-slate-400 font-thin text-sm'>Step 2 of 4</p>

                        </div>



                        <br />


                        <div>
                            <input type="radio" /> Pick-Up
                        </div> <br />

                        <div className='flex justify-between '>


                            <div>
                                <h1> Locations</h1> <br />
                                <div className='mr-52'><input type="text" placeholder='Select your location' /></div>
                            </div>


                            <div className='mr-20'>
                                <h1 >Date</h1> <br />
                                <input type="text" placeholder='Select your date' className='' />

                            </div>


                        </div>

                        <br /> <br />




                        <div className='flex justify-between '>


                            <div>
                                <h1> Time</h1> <br />
                                <div className='mr-52'><input type="text" placeholder='Select your time' /></div>
                            </div>





                        </div>





                        <br />


                        <br />

                        <div>
                            <input type="radio" /> Drop-of
                        </div> <br />

                        <div className='flex justify-between '>


                            <div>
                                <h1> Locations</h1> <br />
                                <div className='mr-52'><input type="text" placeholder='Select your location' /></div>
                            </div>


                            <div className='mr-20'>
                                <h1 >Date</h1> <br />
                                <input type="text" placeholder='Select your date' className='' />

                            </div>


                        </div>

                        <br /> <br />




                        <div className='flex justify-between '>


                            <div>
                                <h1> Time</h1> <br />
                                <div className='mr-52'><input type="text" placeholder='Select your time' /></div>
                            </div>

                        </div>
                        <br /> <br />




                        <h1 className='font-semibold'>Payment Method</h1>

                        <div className='flex justify-between'>
                            <p className='text-slate-400 font-thin text-sm'>Please enter your payment method</p>
                            <p className='text-slate-400 font-thin text-sm'>Step 3 of 4</p>

                        </div>



                        <br />


                        <div className='flex justify-between'>
                            <div> <input type="radio" /> Credit card </div>


                            <div> <img src="/Visa.png" alt="visa card" /> </div>

                        </div>

                        <br />

                        <div className='flex justify-between '>


                            <div>
                                <h1> Card Number</h1> <br />
                                <div className='mr-52'><input type="text" placeholder='Card Number' /></div>
                            </div>


                            <div className='mr-20'>
                                <h1 >Expiration Date</h1> <br />
                                <input type="text" placeholder='DD / MM / YY' className='' />

                            </div>


                        </div>

                        <br /> <br />




                        <div className='flex justify-between '>


                            <div>
                                <h1> Card Holder</h1> <br />
                                <div className='mr-52'><input type="text" placeholder='Card holder' /></div>
                            </div>

                            <div>
                                <h1> CVC</h1> <br />
                                <div className='mr-52'><input type="text" placeholder='CVC' /></div>
                            </div>



                        </div>














                    </div>






                </div>



            </div>






            {/* <Footer /> */}
        </div>
    )
}

export default Billinginfo
