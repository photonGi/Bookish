import React from 'react'
import BooksList from './components/BooksList'

export const BestSeller = ({products}) => {
  return (
    <div className="pb-20 bg-gray-100 dark:bg-dark dark:text-white duration-200">
      <div className="container pb-8 sm:pb-0">
        <h1 className="text-[28px] text-center uppercase pt-9 font-bold pb-10">
          Best Seller Books
        </h1>
        <BooksList/>
      </div>
    </div>
  )
}
