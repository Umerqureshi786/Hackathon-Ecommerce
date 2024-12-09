import Navbar from "./Navbar";
import Footer from "./Footer";
import Link from "next/link";
export default function Home() {
  return (
    <div>
      <Navbar />

      {/* Left car card */}
      <div className="grid grid-cols-2 gap-8 p-6">
        <div className="p-4 bg-sky-500 rounded-lg">
          <h1 className="text-3xl text-white">The Best Platform <br /> for Car Rental </h1>   <br />    <p className="text-white">Ease of doing a car rental safely <br /> and reliably. Of course at a low price.</p>
          <br />
          <button className="bg-blue-700 w-28 h-10 rounded-md text-slate-50">Rental Car</button>

          <img src="image 7.png" alt="Car1" className="ml-24" />

        </div>

        {/* Right car card */}
        <div className="p-4 bg-sky-600 rounded-lg">
          <h1 className="text-3xl text-white">Easy way to rent a <br /> car at  a  low price </h1>   <br />
          <p className="text-white">Providing cheap car rental services <br /> and safe and comfortable facilities.</p>
          <br />
          <button className="bg-sky-500 w-28 h-10 rounded-md text-slate-50">Rental Car</button>

          <img src="image 8.png" alt="Car1" className="ml-36" />

        </div>

      </div>




      {/* Pick up and drop off */}
      {/* Pick-Up */}
      <div className="grid grid-cols-2 gap-36 py-4 px-7">
        <div> <input type="radio" /> Pick-Up <br />

          <div className="flex gap-12">

            <div>
              <label>
                <p className="text-xl font-semibold"> Locations </p><select className="text-slate-400"><option>  Select your city </option></select>
              </label>
            </div>

            <div>
              <label>
                <p className="text-xl font-semibold">Date </p><select className="text-slate-400"><option>  Select your Date </option></select>
              </label>
            </div>

            <div>
              <label>
                <p className="text-xl font-semibold"> Time </p><select className="text-slate-400"><option>  Select your Time </option></select>
              </label>
            </div>

          </div>

        </div>

        {/* <button className="bg-sky-800">^</button> */}

        {/* Drop-Off */}
        <div> <input type="radio" className="text-2xl" /> Drop-Off


          <div className="flex gap-12">

            <div>
              <label>
                <p className="text-xl font-semibold"> Locations </p><select className="text-slate-400"><option>  Select your city </option></select>
              </label>
            </div>

            <div>
              <label>
                <p className="text-xl font-semibold">Date </p><select className="text-slate-400"><option>  Select your Date </option></select>
              </label>
            </div>

            <div>
              <label>
                <p className="text-xl font-semibold"> Time </p><select className="text-slate-400"><option>  Select your Time </option></select>
              </label>
            </div>

          </div>

        </div>



      </div>

      <p className="ml-8 text-slate-500">Popular Car</p>
      <div className="grid grid-cols-4 gap-3 px-4 mt-12">

        {/* Car1 */}
        <div className="px-4 hover:bg-slate-300"> <h1 className="text-2xl">Koenigsegg</h1> <p className="text-cyan-600">Sport</p> <br /> <img src="image 7.png" alt="car1" /> <br />
          <div className="flex gap-4 py-2">
            <div className="flex"><img src="gas.png" alt="gas" className="h-6" />Manual</div>   <div className="flex"><img src="Manual.png" alt="manual" className="h-6" />90L</div>  <div className="flex"><img src="add-friend.png" alt="2 people" className="h-6" />2 people</div> <br />

          </div>
          <div className="flex justify-around  items-center py-2">
            <div><p>$99.00/Day</p></div>
            <div> <button className="bg-blue-700 w-28 h-10 rounded-md text-slate-50">Rent Now</button></div>
          </div>
        </div>

        {/* Car2 */}
        <div className=" px-4 hover:bg-slate-300"> <h1 className="text-2xl">Nissan GT - R</h1> <p className="text-cyan-600">Sport</p> <br />  <img src="image 8.png" alt="car1" /> <br />
          <div className="flex gap-4 py-2">
            <div className="flex"><img src="gas.png" alt="gas" className="h-6" />Manual</div>   <div className="flex"><img src="Manual.png" alt="manual" className="h-6" />90L</div>  <div className="flex"><img src="add-friend.png" alt="2 people" className="h-6" />2 people</div> <br />

          </div>
          <div className="flex justify-around  items-center py-2">
            <div><p>$99.00/Day</p></div>


            <Link href="/Nissan" className="bg-blue-700 w-28 h-10 rounded-md text-slate-50 text-center"> <p className="mt-2">Rent Now </p> </Link>

          </div>
        </div>



        {/* Car3 */}
        <div className=" px-4 hover:bg-slate-300"> <h1 className="text-2xl">Rolls - Royce</h1> <p className="text-cyan-600">Sedan</p> <br /> <br /> <img src="Car Rollyce.png" alt="car3" /> <br />

          <div className="flex gap-4 py-2">
            <div className="flex"><img src="gas.png" alt="gas" className="h-6" />Manual</div>   <div className="flex"><img src="Manual.png" alt="manual" className="h-6" />90L</div>  <div className="flex"><img src="add-friend.png" alt="2 people" className="h-6" />2 people</div> <br />

          </div>
          <div className="flex justify-around  items-center py-2">
            <div><p>$99.00/Day</p></div>
            <div> <button className="bg-blue-700 w-28 h-10 rounded-md text-slate-50">Rent Now</button></div>
          </div>
        </div >



        {/* Car4 */}
        <div className=" px-4 hover:bg-slate-300"><h1 className="text-2xl">Nissan GT - R</h1> <p className="text-cyan-600">Sport</p> <br /><img src="image 8.png" alt="car1" /> <br />

          <div className="flex gap-4 py-2">
            <div className="flex"><img src="gas.png" alt="gas" className="h-6" />Manual</div>   <div className="flex"><img src="Manual.png" alt="manual" className="h-6" />90L</div>  <div className="flex"><img src="add-friend.png" alt="2 people" className="h-6" />2 people</div> <br />

          </div>
          <div className="flex justify-around  items-center py-2">
            <div><p>$99.00/Day</p></div>
            <div> <button className="bg-blue-700 w-28 h-10 rounded-md text-slate-50">Rent Now</button></div>
          </div>
        </div>


        {/* Car5 */}
        <div className=" px-4 hover:bg-slate-300"> <h1 className="text-2xl">All New Rush</h1> <p className="text-cyan-600">SUV</p> <br /> <img src="Car 5.png" alt="car5" /> <br />

          <div className="flex gap-4 py-2">
            <div className="flex"><img src="gas.png" alt="gas" className="h-6" />Manual</div>   <div className="flex"><img src="Manual.png" alt="manual" className="h-6" />90L</div>  <div className="flex"><img src="add-friend.png" alt="2 people" className="h-6" />2 people</div> <br />

          </div>
          <div className="flex justify-around  items-center py-2">
            <div><p>$99.00/Day</p></div>
            <div> <button className="bg-blue-700 w-28 h-10 rounded-md text-slate-50">Rent Now</button></div>
          </div>
        </div>


        {/* Car6 */}
        <div className=" px-4 hover:bg-slate-300"> <h1 className="text-2xl">CR  - V</h1> <p className="text-cyan-600">SUV</p> <br />  <img src="Car 6.png" alt="car6" /> <br />

          <div className="flex gap-4 py-2">
            <div className="flex"><img src="gas.png" alt="gas" className="h-6" />Manual</div>   <div className="flex"><img src="Manual.png" alt="manual" className="h-6" />90L</div>  <div className="flex"><img src="add-friend.png" alt="2 people" className="h-6" />2 people</div> <br />

          </div>
          <div className="flex justify-around  items-center py-2">
            <div><p>$99.00/Day</p></div>
            <div> <button className="bg-blue-700 w-28 h-10 rounded-md text-slate-50">Rent Now</button></div>
          </div>
        </div>


        {/* Car7 */}
        <div className=" px-4 hover:bg-slate-300"> <h1 className="text-2xl">All New Terios</h1> <p className="text-cyan-600">SUV</p> <br /> <img src="Car 7.png" alt="car7" /> <br />

          <div className="flex gap-4 py-2">
            <div className="flex"><img src="gas.png" alt="gas" className="h-6" />Manual</div>   <div className="flex"><img src="Manual.png" alt="manual" className="h-6" />90L</div>  <div className="flex"><img src="add-friend.png" alt="2 people" className="h-6" />2 people</div> <br />

          </div>
          <div className="flex justify-around  items-center py-2">
            <div><p>$99.00/Day</p></div>
            <div> <button className="bg-blue-700 w-28 h-10 rounded-md text-slate-50">Rent Now</button></div>
          </div>
        </div>


        {/* Car8 */}
        <div className=" px-4 hover:bg-slate-300"> <h1 className="text-2xl">CR  - V</h1> <p className="text-cyan-600">SUV</p> <br />  <img src="Car 8.png" alt="car8" /> <br />

          <div className="flex gap-4 py-2">
            <div className="flex"><img src="gas.png" alt="gas" className="h-6" />Manual</div>   <div className="flex"><img src="Manual.png" alt="manual" className="h-6" />90L</div>  <div className="flex"><img src="add-friend.png" alt="2 people" className="h-6" />2 people</div> <br />

          </div>
          <div className="flex justify-around  items-center py-2">
            <div><p>$99.00/Day</p></div>
            <div> <button className="bg-blue-700 w-28 h-10 rounded-md text-slate-50">Rent Now</button></div>
          </div>
        </div>



        {/* Car9 */}
        <div className=" px-4 hover:bg-slate-300"> <h1 className="text-2xl">MG ZX Exclusice</h1> <p className="text-cyan-600">Hatchback</p> <br />  <img src="Car 9.png" alt="car9" /> <br />
          <div className="flex gap-4 py-2">
            <div className="flex"><img src="gas.png" alt="gas" className="h-6" />Manual</div>   <div className="flex"><img src="Manual.png" alt="manual" className="h-6" />90L</div>  <div className="flex"><img src="add-friend.png" alt="2 people" className="h-6" />2 people</div> <br />

          </div>
          <div className="flex justify-around  items-center py-2">
            <div><p>$99.00/Day</p></div>
            <div> <button className="bg-blue-700 w-28 h-10 rounded-md text-slate-50">Rent Now</button></div>
          </div>

        </div>

        {/* Car10 */}
        <div className=" px-4 hover:bg-slate-300"> <h1 className="text-2xl">New MG ZS</h1> <p className="text-cyan-600">SUV</p> <br /> <img src="Car 11.png" alt="car11" /> <br />
          <div className="flex gap-4 py-2">
            <div className="flex"><img src="gas.png" alt="gas" className="h-6" />Manual</div>   <div className="flex"><img src="Manual.png" alt="manual" className="h-6" />90L</div>  <div className="flex"><img src="add-friend.png" alt="2 people" className="h-6" />2 people</div> <br />

          </div>
          <div className="flex justify-around  items-center py-2">
            <div><p>$99.00/Day</p></div>
            <div> <button className="bg-blue-700 w-28 h-10 rounded-md text-slate-50">Rent Now</button></div>
          </div>
        </div>


        {/* Car11 */}
        <div className=" px-4 hover:bg-slate-300"> <h1 className="text-2xl">MG ZX Excite</h1> <p className="text-cyan-600">Hatchback</p> <br /> <img src="Car 9.png" alt="car9" /> <br />

          <div className="flex gap-4 py-2">
            <div className="flex"><img src="gas.png" alt="gas" className="h-6" />Manual</div>   <div className="flex"><img src="Manual.png" alt="manual" className="h-6" />90L</div>  <div className="flex"><img src="add-friend.png" alt="2 people" className="h-6" />2 people</div> <br />

          </div>
          <div className="flex justify-around  items-center py-2">
            <div><p>$99.00/Day</p></div>
            <div> <button className="bg-blue-700 w-28 h-10 rounded-md text-slate-50">Rent Now</button></div>
          </div>
        </div>


        {/* Car12 */}
        <div className=" px-4 hover:bg-slate-300"> <h1 className="text-2xl">New MG ZS</h1> <p className="text-cyan-600">Sport</p> <br /> <img src="Car 11.png" alt="car11" /> <br />
          <div className="flex gap-4 py-2">
            <div className="flex"><img src="gas.png" alt="gas" className="h-6" />Manual</div>   <div className="flex"><img src="Manual.png" alt="manual" className="h-6" />90L</div>  <div className="flex"><img src="add-friend.png" alt="2 people" className="h-6" />2 people</div> <br />

          </div>
          <div className="flex justify-around  items-center py-2">
            <div><p>$99.00/Day</p></div>
            <div> <button className="bg-blue-700 w-28 h-10 rounded-md text-slate-50">Rent Now</button></div>
          </div>

        </div>

      </div>

      <br /><br />

      <div className="flex justify-center">
        <Link href="/Showcar" className="bg-blue-700 p-2 rounded-lg w-40 text-center text-white">Show more car </Link>

        {/* <Link href="/home">Home</Link> */}
      </div>


      <br /> <br /> <br /> <br />

      <Footer />


      {/* Main div */}
    </div>


  );
}
