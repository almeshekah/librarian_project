
import membersData from "../members";
import booksData from "../books";
import slugify from "react-slugify";

const initialState ={
    members:membersData,
    books:booksData


};

const reducer =(state = initialState ,action) => {
    switch(action.type){
        
        case "ADD_MEMBERS":
            const {newMember}=action.payload;
            action.payload.newMember.id=state.members[state.members.length-1].id+1;
            action.payload.newMember.slug = slugify(action.payload.newMember.name);
            
            return{
                ...state,
                members:[...state.members, newMember],

        };

        case "ADD_BOOKS":
            const {newBook}=action.payload;
            action.payload.newBook.id=state.books[state.books.length-1].id+1;
            action.payload.newBook.slug = slugify(action.payload.newBook.name);
            
            return{
                ...state,
                books:[...state.books, newBook],

        };



        

        default:
            return state;
    }

};

export default reducer;