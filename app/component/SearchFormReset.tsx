"use client"

import Link from 'next/link'
import { IoMdClose } from "react-icons/io";

const SearchFormReset = () => {
    const reset = () =>{
        const form = document.querySelector('.search-form') as HTMLFormElement ;
        if (form) form.reset();
    }
  return (
    <button type='reset' onClick={reset}>
        <Link href="/" className="search-btn text-white">
         <IoMdClose/>
        </Link>

      
    </button>
  )
}

export default SearchFormReset
