import React from 'react'
import Link from 'next/link';



export default function Nav() {
    return (
       
           <div className = "py-4 px-8 bg-gray-700 text-white flex justify-between">
               <div className="text-xl"><Link href="/">Chuck Norris Jokes</Link> </div>
               <div className="flex items-center">
                    
                     <div classname ="ml-5"><Link href="/Catergories">catergories</Link></div>
               </div>
               
        </div>
         
    )
}
