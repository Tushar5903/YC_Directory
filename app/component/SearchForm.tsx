import React from 'react'
import SearchFormReset from './SearchFormReset'
import { FaSearch } from "react-icons/fa";


const SearchForm = ({ query }: {query?: string}) => {
    return (
        <form action='/' className='search-form'>
            <input
                name='query'
                defaultValue={query}
                className='search-input'
                placeholder='Search Startups'
            />

            <div className='flex gap-2'>
                {query && <SearchFormReset />}
                <button type='submit' className='search-btn text-white'>
                    <FaSearch />
                </button>
            </div>

        </form>
    )
}

export default SearchForm
