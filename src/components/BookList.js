import Book from "./Book";
import { ListWrapper } from "../styles";
import { useSelector } from "react-redux";
import SearchBar from "./SearchBar";
import { useState } from "react";
const BookList  = ()=>{
    const books = useSelector((state) => state.books);
    const [query, setQuery] = useState("");
    const bookList = books
    .filter((book) =>
      book.title.toLowerCase().includes(query.toLowerCase()) || book.genre.includes(query)
    )
    .map((books) => 
        <Book key = {books.id} books={books}/>);


        return (
            <div>
                <SearchBar setQuery={setQuery}/>
                <ListWrapper >  
                    <p>{bookList}</p> 
                </ListWrapper>
            </div>
        );
      
};

export default BookList;