import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import {useDispatch} from "react-redux";
import {addMember } from "../store/actions"
import { useHistory} from "react-router-dom";

const FormAddMember = () => {
    const history = useHistory();
    const dispatch=useDispatch();
    const [member , setMember ]=useState({
      id: "",
      firstName: "",
      lastName: "",
      slug: "",
      currentlyBorrowedBooks: [],
      membership: "", // can borrow 3 books
    });

    const handleChange=event=>{
       
        setMember({ ...member , [event.target.name]:event.target.value})

    }
    const handleSubmit =(event) =>{
        event.preventDefault();
        
        dispatch(addMember(member));
        history.push("/MemberList");

    }
    
    return(
        <Form onSubmit = {handleSubmit}>
            <h1>Create Member </h1>
            <Form.Group controlId="formBasicName">
                <Form.Label> First Name</Form.Label>
                <Form.Control type="text" placeholder="Enter First Name" 
                name="firstName"
                value={member.name}
                onChange={(event)=>handleChange(event)} />
                
            </Form.Group>
        
            <Form.Group controlId="formBasicPrice">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Last Name" 
                name="lastName"
                value={member.lastName}
                onChange={(event)=>handleChange(event)} />
            </Form.Group>

            <Form.Group controlId="formBasicDescription">
                <Form.Label>Currently Borrowed Books</Form.Label>
                <Form.Control type="text" placeholder="Currently Borrowed Books" 
                name="currentlyBorrowedBooks"
                value={member.description}
                onChange={(event)=>handleChange(event)}/>
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>membership</Form.Label>
                <Form.Control as="select" 
                name="membership"
                value={member.membership}
                onChange={(event)=>handleChange(event)}>
                <option>gold</option>
                <option>silver</option>
                <option>platinum</option>
                </Form.Control>
            </Form.Group>

            
            <Button variant="primary" type="submit">
            Create
            </Button>
      </Form>
    );
};

export default FormAddMember;