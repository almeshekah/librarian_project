import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import {useDispatch} from "react-redux";
import {addBook } from "../store/actions"
import { useHistory,useParams} from "react-router-dom";

const FormAddBook = () => {
    const history = useHistory();
    const {booksSlug} =useParams();
    const dispatch=useDispatch();
    const [book , setBook ]=useState({
        d: 1,
        author: "",
        title: "",
        slug: "",
        genre: [],
        available: "",
        borrowedBy: [],
    });

    const handleChange=event=>{
       
        setBook({ ...book , [event.target.name]:event.target.value})

    }
    const handleSubmit =(event) =>{
        event.preventDefault();
        
        dispatch(addBook(book));
        history.push("/BookList");

    }
    
    return(
        <Form onSubmit = {handleSubmit}>
            <h1>Create Book </h1>
            <Form.Group controlId="formBasicName">
                <Form.Label> Author Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Name of author" 
                name="author"
                value={book.author}
                onChange={(event)=>handleChange(event)} />
                
            </Form.Group>

            <Form.Group controlId="formBasicPrice">
                <Form.Label>title Name</Form.Label>
                <Form.Control type="text" placeholder="Enter title Name" 
                name="title"
                value={book.title}
                onChange={(event)=>handleChange(event)} />
            </Form.Group>
        
            <Form.Group controlId="formBasicPrice">
                <Form.Label>genre Name</Form.Label>
                <Form.Control type="text" placeholder="Enter genre Name" 
                name="genre"
                value={book.genre}
                onChange={(event)=>handleChange(event)} />
            </Form.Group>

            

            <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>available</Form.Label>
                <Form.Control as="select" 
                name="available"
                value={book.available}
                onChange={(event)=>handleChange(event)}>
                <option>true</option>
                <option>false</option>
                
                </Form.Control>
            </Form.Group>

            
            <Button variant="primary" type="submit">
            Create
            </Button>
      </Form>
    );
};

export default FormAddBook;