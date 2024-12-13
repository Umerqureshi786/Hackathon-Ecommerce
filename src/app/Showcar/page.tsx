import Navbar from "../Navbar";
import Footer from "../Footer";
import Link from "next/link";
export default function Home() {
  return (
    <div>
      <Navbar />



      {/* Pick-Up */}
      <div className="grid grid-cols-2 py-4 px-7 ml-80 ">
        <div> <input type="radio" /> Pick-Up <br />

          <div className="flex gap-2">

            <div>
              <label>
                <p className="text-sm "> Locations </p><select className="text-slate-400"><option>  Select your city </option></select>
              </label>
            </div>

            <div>
              <label>
                <p className="text-sm">Date </p><select className="text-slate-400"><option>  Select your Date </option></select>
              </label>
            </div>

            <div>
              <label>
                <p className="text-sm"> Time </p><select className="text-slate-400"><option>  Select your Time </option></select>
              </label>
            </div>

          </div>

        </div>

        {/* <button className="bg-sky-800">^</button> */}

        {/* Drop-Off */}
        <div> <input type="radio" className="text-2xl" /> Drop-Off


          <div className="flex gap-2">

            <div>
              <label>
                <p className="text-sm"> Locations </p><select className="text-slate-400"><option>  Select your city </option></select>
              </label>
            </div>

            <div>
              <label>
                <p className="text-sm">Date </p><select className="text-slate-400"><option>  Select your Date </option></select>
              </label>
            </div>

            <div>
              <label>
                <p className="text-sm"> Time </p><select className="text-slate-400"><option>  Select your Time </option></select>
              </label>
            </div>

          </div>

        </div>



      </div>

      <div className="flex justify-evenly ">

        {/* left div */}
        <div className=" ml-10 mr-20 w-80"><p className="text-slate-400">Type</p> <br /> <br />

          <form>
            <input type="checkbox" />Sport (10) <br /> <br />
            <input type="checkbox" />SUV (12) <br /> <br />
            <input type="checkbox" />MPV (16) <br /> <br />
            <input type="checkbox" />Sedan (20) <br /> <br />
            <input type="checkbox" />Coupe (14) <br /> <br />
            <input type="checkbox" />Hatchback (14) <br /> <br />

          </form>

          <br /> <br /> <br /> <br />



          <p className="text-slate-400">Capacity</p> <br /> <br />
          <form>  <input type="checkbox" />MPV (16) <br /> <br />
            <input type="checkbox" />Sedan (20) <br /> <br />
            <input type="checkbox" />Coupe (14) <br /> <br />
            <input type="checkbox" />Hatchback (14) <br /> <br /></form>


        </div>


        <div className=" grid grid-cols-3 gap-6">

          <div>
            {/* Car1 */}
            <div className="px-2 hover:bg-slate-300"> <h1 className="text-2xl">Koenigsegg</h1> <p className="text-cyan-600">Sport</p> <br /> <img src="image 7.png" alt="car1" /> <br />
              <div className="flex gap-4 py-2">
                <div className="flex"><img src="gas.png" alt="gas" className="h-6" />Manual</div>   <div className="flex"><img src="Manual.png" alt="manual" className="h-6" />90L</div>  <div className="flex"><img src="add-friend.png" alt="2 people" className="h-6" />2people</div> <br />

              </div>
              <div className="flex justify-around  items-center py-2">
                <div><p>$99.00/Day</p></div>
                <div> <button className="bg-blue-700 w-28 h-10 rounded-md text-slate-50">Rent Now</button></div>
              </div>
            </div>
          </div>




          <div>
            {/* Car2 */}
            <div className=" px-2 hover:bg-slate-300"> <h1 className="text-2xl">Nissan GT - R</h1> <p className="text-cyan-600">Sport</p> <br />  <img src="image 8.png" alt="car1" /> <br />

              <div className="flex gap-4 py-1">
                <div className="flex"><img src="gas.png" alt="gas" className="h-6" />Manual</div>   <div className="flex"><img src="Manual.png" alt="manual" className="h-6" />90L</div>  <div className="flex"><img src="add-friend.png" alt="2 people" className="h-6" />2people</div> <br />

              </div>
              <div className="flex justify-around  items-center py-2">
                <div><p>$99.00/Day</p></div>
                <div>
                  <Link href="/Nissan" className="bg-blue-700 p-2 rounded-lg w-56 text-center text-white">Rent Now </Link>

                </div>
              </div>
            </div>
          </div>



          <div>

            {/* Car3 */}
            <div className=" px-2 hover:bg-slate-300"> <h1 className="text-2xl">Rolls - Royce</h1> <p className="text-cyan-600">Sedan</p>  <br /> <img src="Car Rollyce.png" alt="car3" /> <br />

              <div className="flex gap-4 py-2">
                <div className="flex"><img src="gas.png" alt="gas" className="h-6" />Manual</div>   <div className="flex"><img src="Manual.png" alt="manual" className="h-6" />90L</div>  <div className="flex"><img src="add-friend.png" alt="2 people" className="h-6" />2people</div> <br />

              </div>
              <div className="flex justify-around  items-center py-2">
                <div><p>$99.00/Day</p></div>
                <div> <button className="bg-blue-700 w-28 h-10 rounded-md text-slate-50">Rent Now</button></div>
              </div>
            </div >

          </div>





          <div>
            {/* Car4 */}
            <div className=" px-2 hover:bg-slate-300"><h1 className="text-2xl">Nissan GT - R</h1> <p className="text-cyan-600">Sport</p> <br /><img src="Car 8.png" alt="car1" /> <br />

              <div className="flex gap-4 py-2">
                <div className="flex"><img src="gas.png" alt="gas" className="h-6" />Manual</div>   <div className="flex"><img src="Manual.png" alt="manual" className="h-6" />90L</div>  <div className="flex"><img src="add-friend.png" alt="2 people" className="h-6" />2people</div> <br />

              </div>
              <div className="flex justify-around  items-center py-2">
                <div><p>$99.00/Day</p></div>
                <div> <button className="bg-blue-700 w-28 h-10 rounded-md text-slate-50">Rent Now</button></div>
              </div>
            </div>

          </div>




          <div>


            {/* Car5 */}
            <div className=" px-2 hover:bg-slate-300"><h1 className="text-2xl">Nissan GT - R</h1> <p className="text-cyan-600">Sport</p> <br /><img src="Car 7.png" alt="car1" /> <br />

              <div className="flex gap-4 py-2">
                <div className="flex"><img src="gas.png" alt="gas" className="h-6" />Manual</div>   <div className="flex"><img src="Manual.png" alt="manual" className="h-6" />90L</div>  <div className="flex"><img src="add-friend.png" alt="2 people" className="h-6" />2people</div> <br />

              </div>
              <div className="flex justify-around  items-center py-2">
                <div><p>$99.00/Day</p></div>
                <div> <button className="bg-blue-700 w-28 h-10 rounded-md text-slate-50">Rent Now</button></div>
              </div>
            </div>

          </div>


          <div>
            {/* Car6 */}
            <div className=" px-2 hover:bg-slate-300"><h1 className="text-2xl">Nissan GT - R</h1> <p className="text-cyan-600">Sport</p> <br /><img src="Car 5.png" alt="car1" /> <br />

              <div className="flex gap-4 py-2">
                <div className="flex"><img src="gas.png" alt="gas" className="h-6" />Manual</div>   <div className="flex"><img src="Manual.png" alt="manual" className="h-6" />90L</div>  <div className="flex"><img src="add-friend.png" alt="2 people" className="h-6" />2people</div> <br />

              </div>
              <div className="flex justify-around  items-center py-2">
                <div><p>$99.00/Day</p></div>
                <div> <button className="bg-blue-700 w-28 h-10 rounded-md text-slate-50">Rent Now</button></div>
              </div>
            </div>

          </div>
          <div>

            {/* Car7 */}
            <div className=" px-2 hover:bg-slate-300"><h1 className="text-2xl">Nissan GT - R</h1> <p className="text-cyan-600">Sport</p> <br /><img src="Car 9.png" alt="car1" /> <br />

              <div className="flex gap-4 py-2">
                <div className="flex"><img src="gas.png" alt="gas" className="h-6" />Manual</div>   <div className="flex"><img src="Manual.png" alt="manual" className="h-6" />90L</div>  <div className="flex"><img src="add-friend.png" alt="2 people" className="h-6" />2people</div> <br />

              </div>
              <div className="flex justify-around  items-center py-2">
                <div><p>$99.00/Day</p></div>
                <div> <button className="bg-blue-700 w-28 h-10 rounded-md text-slate-50">Rent Now</button></div>
              </div>
            </div>
          </div>



          <div>

            {/* Car8 */}
            <div className=" px-2 hover:bg-slate-300"><h1 className="text-2xl">Nissan GT - R</h1> <p className="text-cyan-600">Sport</p> <br /><img src="Car 11.png" alt="car1" /> <br />

              <div className="flex gap-4 py-2">
                <div className="flex"><img src="gas.png" alt="gas" className="h-6" />Manual</div>   <div className="flex"><img src="Manual.png" alt="manual" className="h-6" />90L</div>  <div className="flex"><img src="add-friend.png" alt="2 people" className="h-6" />2people</div> <br />

              </div>
              <div className="flex justify-around  items-center py-2">
                <div><p>$99.00/Day</p></div>
                <div> <button className="bg-blue-700 w-28 h-10 rounded-md text-slate-50">Rent Now</button></div>
              </div>
            </div>
          </div>



          <div>
            {/* Car9 */}
            <div className=" px-2 hover:bg-slate-300"><h1 className="text-2xl">Nissan GT - R</h1> <p className="text-cyan-600">Sport</p> <br /><img src="Car 9.png" alt="car1" /> <br />

              <div className="flex gap-4 py-2">
                <div className="flex"><img src="gas.png" alt="gas" className="h-6" />Manual</div>   <div className="flex"><img src="Manual.png" alt="manual" className="h-6" />90L</div>  <div className="flex"><img src="add-friend.png" alt="2 people" className="h-6" />2people</div> <br />

              </div>
              <div className="flex justify-around  items-center py-2">
                <div><p>$99.00/Day</p></div>
                <div> <button className="bg-blue-700 w-28 h-10 rounded-md text-slate-50">Rent Now</button></div>
              </div>
            </div>

          </div>

        </div>

      </div>
      <br /> <br /> <br /><br /> <br />

      <Footer />

    </div>
  );
}