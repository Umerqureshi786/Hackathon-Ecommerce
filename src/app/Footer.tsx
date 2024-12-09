import React from 'react'

const Footer = () => {
    return (
        <div>

            <div className='flex m-2'>

                <div className='mt-2' >
                    <div className="w-full md:w-auto flex justify-center  md:justify-start mb-2 md:mb-0"> <img src="Logo.png" alt="logo image" className='ml-16' />
                    </div>  <br />
                    <p className="px-10 ml-5 text-gray-500">Our vision is to provide convenience <br /> and help increase your sales business.</p>
                </div>
                <br />



                <div className='flex gap-12 ml-72'>

                    <div className='flex flex-col gap-6  mr-6 text-gray-500'> <h2 className='text-xl font-bold text-black'>About</h2>  <a href="#">How it works</a><a href="#">Featured </a><a href="#">partnership</a> <a href="#">Busimness Relation</a>
                    </div>


                    <div className='flex flex-col gap-6  mr-12 text-gray-500'> <h2 className='text-xl font-bold text-black'>Community</h2>  <a href="#">Events</a><a href="#">Blogs</a><a href="#"> Podcast</a><a href="#">Invite a freind</a></div>


                    <div className='flex flex-col gap-6  mr-12 text-gray-500'><h2 className='text-xl font-bold text-black'>Socials</h2> <a href="#">Discord</a><a href="#">Instagram </a> <a href="#">Twitter </a> <a href="#">Facebook </a>
                    </div>

                </div>


            </div>

            <br /> <br />


            <div className='flex justify-between'>
                <div className='ml-16 text-black font-semibold'>©2022 MORENT. All rights reserved</div>

                <div className='flex gap-20 mr-16 text-black font-semibold'>
                    <div> Privacy & Policy </div>
                    <div>Terms & Condition</div>
                </div>

            </div>


            <br /> <br /> <br />


        </div>
    )
}

export default Footer
