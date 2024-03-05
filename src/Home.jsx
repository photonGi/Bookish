import React, { useState } from 'react'
import Hero from './components/Hero'
import BooksList from './components/BooksList';

export const Home = ({item}) => {
    const [displayLimit, setDisplayLimit] = useState(3);
  
    return (
        <>
            <Hero/>
            <div className="pb-20 bg-gray-100 dark:bg-dark dark:text-white duration-200">
                <div className="container pb-8 sm:pb-0">
                    <h1 className="text-[28px] text-center uppercase pt-9 font-bold pb-10">
                    Trending Books
                    </h1>
                    <BooksList product={item} limit={displayLimit}/>
                </div>
            </div>
        </>
    )
}
