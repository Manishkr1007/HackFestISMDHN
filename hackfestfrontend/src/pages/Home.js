import * as React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../fire';

export default function Home({
    user,
    setAuthState,
    setUser
}) {

    const signOutHandler = () => {
        signOut(auth)
        .then(() => {
            setUser(null);
            setAuthState('login');
        })
        .catch((err) => console.log(err));
    }

    return (
        <div class="flex flex-col min-h-screen">
          
{/* <!-- Navigation bar --> */}
<nav class="bg-violet-500 text-white p-4 flex justify-between items-center">
    {/* <!-- Logo on the left --> */}
    <div class="text-xl font-bold">
        <a href="#home">MyLogo</a>
    </div>

    {/* <!-- Navigation links on the right --> */}
    <div class=" flex space-x-4">
        <a href="#home" class="hover:underline">Home</a>
        <a href="#about" class="hover:underline">About</a>
        <a href="#signup" class="hover:text-blue" onClick={signOutHandler}>Sign Out</a>
    </div>
</nav>

{/* <!-- Main content with centered text box and submit button --> */}
<div class="flex-grow flex justify-center items-center bg-gray-100">
    <div class="flex flex-col items-center bg-white p-6 border border-gray-300">
        <input
            type="text"
            placeholder="Enter your text here"
            class="p-2 border border-gray-400 rounded mb-4 w-64 text-center"
        />
        <button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Submit
        </button>
    </div>
</div>

{/* <!-- Footer with violet background --> */}
<footer class="bg-violet-500 text-white p-4 text-center">
    © 2024 Unified Customer Insight.
</footer>
  
   
            {/* <button 
                onClick={signOutHandler}
                className='w-40 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4 bg-violet-500 rounded-xl text-white font-bold text-lg'>
                
                Sign Out
            </button> */}
        </div>
    )
}