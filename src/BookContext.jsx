import React, { createContext, useContext, useEffect, useState } from 'react'

const BookContext = createContext();

export const BookProvider = ({children}) => {
    const [books, setBooks] = useState([]);

    useEffect(()=>{
        const products = [
            {
              id: 1,
              img: "img/book1.jpg",
              title: "The Lost Boy",
              price: "3500",
              currency: "PKR",
              quantity: 2,
              description: "A compelling tale of adventure and discovery, The Lost Boy follows the journey of a young protagonist as he navigates through a world of mystery and intrigue, uncovering secrets long forgotten.",
            },
            {
              id: 2,
              img: "img/book2.jpg",
              title: "His Life",
              author: "Megan Fox",
              price: "1500",
              currency: "PKR",
              quantity: 3,
              description: "His Life is an intimate memoir by Megan Fox, offering readers a glimpse into the personal and professional experiences that have shaped her journey, from Hollywood stardom to personal growth and empowerment.",
            },
            {
              id: 3,
              img: "img/book3.jpg",
              title: "Who's There",
              author: "J. Stephen",
              price: "2500",
              currency: "PKR",
              quantity: 3,
              description: "In Who's There, J. Stephen delivers a gripping psychological thriller that explores the depths of human nature and the mysteries that lie within the shadows, keeping readers on the edge of their seats until the very end",
            },
            {
              id: 4,
              img: "img/book4.webp",
              title: "Stranger In a Strange Land",
              author: "Robert Heinlein",
              price: "3200",
              currency: "PKR",
              quantity: 2,
              description: "Robert Heinlein's classic science fiction masterpiece, Stranger In a Strange Land,takes readers on a thought-provoking journey to Mars and back, challenging societal norms and exploring the essence of humanity",
            },
            {
              id: 5,
              img: "img/book5.jpg",
              title: "In the heart of the sea",
              author: "Nathaniel Philbrick",
              price: "1900",
              currency: "PKR",
              quantity: 5,
              description: "Nathaniel Philbrick's riveting narrative In the heart of the sea recounts the harrowing true story of the whaleship Essex, which inspired Herman Melville's Moby-Dick, capturing the awe and terror of the ocean's depths",
            },
            {
              id: 6,
              img: "img/book6.gif",
              title: "The Top Ten",
              author: "J. Peder Zane",
              price: "2200",
              currency: "PKR",
              quantity: 4,
              description: "The Top Ten by J. Peder Zane is an insightful exploration of literature's most influential works, offering readers a curated selection of timeless classics and contemporary masterpieces to enrich their reading experience",
            }
        ];

        setBooks(products);
    },[]);
  return (
    <BookContext.Provider value={{books}}>
        {children}
    </BookContext.Provider>
  )
}

export const useBook = () => useContext(BookContext);