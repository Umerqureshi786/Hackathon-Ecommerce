import React from 'react'

const Navbar = () => {
    return (
        // Main div.....Working
        <div className="flex flex-wrap justify-between items-center  w-[95%] mx-auto py-4">

            {/* logo placement working */}
            <div className="w-full md:w-auto flex justify-center md:justify-start mb-2 md:mb-0">
                <img src="Logo.png" alt="logo image" className='ml-10' />
            </div>

            {/* Searchbar placement */}
            <div className="w-full md:w-auto flex items-center gap-2 px-4 py-2 mr-80">
                <img src="search.png" alt="search" className="w-8 h-8" />
                <input
                    type="search"
                    placeholder="Search something here"
                    className="outline-none  md:w-64"
                />
            </div>


            {/* profile and notification working */}
            <div className="flex items-center gap-6 mt-2 md:mt-0 w-full md:w-auto justify-center md:justify-end">
                <img src="heart.png" alt="likes" className="w-6 h-6" />
                <img src="Notification.png" alt="notification" className="w-12 h-12" />
                <img src="setting.png" alt="setting" className="w-6 h-6" />
                <img src="Profil.png" alt="profile" className="w-10 h-10 rounded-full" />
            </div>
        </div>

    )
}
export default Navbar
