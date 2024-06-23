import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    const searchData = new URLSearchParams(window.location.search)
    const message = searchData.get('message');
    console.log(message);
    return (
        <div className=" w-2/4 mx-auto mt-28 ">
            <div className='border flex justify-center items-center  w-3/4 mx-auto   h-64'>
           <div>
           {
                message === 'Duplicate for All Transactions'? <div >
                    <p className="text-red-500 text-xl font-bold "> {message}</p>
                    <p>Please try after 2 minutes </p>

                </div> : <div className="text-red-500 text-xl font-bold ">{message}</div>
            }

           <Link to="/">
           <button className='text-white h-10 p-2 mt-12' style={{border:'1px solid #E2136E', backgroundColor:'#E2136E'}}>Back to Home</button></Link>
           </div>
            </div>

        </div>
    );
};

export default Error;