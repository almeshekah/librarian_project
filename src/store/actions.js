
export const ADD_MEMBERS ="ADD_MEMBERS";

export const ADD_BOOKS ="ADD_BOOKS";

export const addMember =(newMember)=>{
    return{
        type:ADD_MEMBERS,
        payload:{newMember},//{newItem:newItem}
   
    }; 
};


export const addBook =(newBook)=>{
    return{
        type:ADD_BOOKS,
        payload:{newBook},//{newItem:newItem}
   
    };
   
   
};

