import { QueryType, SearchQuery } from '@/lib/types';
import React from 'react';
import {useState} from 'react';
import { CiSearch } from "react-icons/ci";

const Search = () => {
    const [queryType,setQueryType] = useState<QueryType>('Buy');
    const [query,setQuery] = useState<SearchQuery>({
        city : '',
        searchType : queryType,
        minPrice : 0,
        maxPrice : 0
    })

    const handleQueryChange = (queryName:QueryType) => {
        setQueryType(queryName);
    }
    const handleInputChange = (event) => {
        setQuery((prev) => ({...prev,[event.target.name] : event.target.value}));
    }
    return (
        <div className='flex flex-col gap-4 px-4 xl:px-0'>
            <div className='flex items-center gap-2'>
                <div className={`border-2 px-6 py-4 cursor-pointer rounded-md font-medium text-lg bg-white ${queryType === 'Buy' ? 'bg-black text-white' : 'bg-white text-black'}`} onClick={() => handleQueryChange('Buy')}>Buy</div>
                <div className={`border-2 px-6 py-4 font-medium cursor-pointer text-lg rounded-md ${queryType === 'Rent' ? 'bg-black text-white' : 'bg-white text-black'}`} onClick={() => handleQueryChange('Rent')}>Rent</div>
            </div>
            <div className='flex gap-2 xl:gap-0 xl:items-center flex-col xl:flex-row '>
                <input type="text" placeholder='Enter City Name' className='py-5 border-2 rounded-sm px-2' name='city' onChange={handleInputChange}/>
                <input type="number" placeholder='Bedrooms needed' className='py-5 border-2 rounded-sm px-2 w-48' name='numberBedrooms' onChange={handleInputChange}/>
                <input type="number" placeholder='Enter Min Price' className='py-5 px-2 border-2 rounded-sm' min={0} max={100000000000} name='minPrice' onChange={handleInputChange}/>
                <input type="number" placeholder='Enter Max Price' className='py-5 px-2 border-2 rounded-sm' min={0} max={100000000000} name='maxPrice' onChange={handleInputChange}/>
                <button className='border-2  flex items-center justify-center border-gray-100 hover:bg-yellow-300 rounded-sm py-4 font-semibold text-white bg-yellow-400 text-3xl  px-5'><CiSearch /></button>
            </div>
        </div>
    )
}

export default Search