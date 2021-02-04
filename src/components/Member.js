import { ProductWrapper}  from "../styles";
import  Button  from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

const Member  = ({members})=>{
    
    return (
      
        <ProductWrapper>

                    <img style={{ width: "150px" }} alt={members.name} src="https://previews.123rf.com/images/jemastock/jemastock1712/jemastock171202411/91074862-man-face-smiling-cartoon-icon-vector-illustration-graphic-design.jpg" />
                    <p>{members.firstName}{members.lastName}</p>
                    
                    <p> Membership :{members.membership}</p>
                    <Link to={`/Member/${members.slug}`}>
                       <Button variant="primary">profile</Button>
                    </Link>
                    <Link to={`/Member/${members.slug}`} style={{ marginLeft:"0.5em" }}>
                       <Button variant="primary">Borrowing</Button>
                    </Link>
                 
      
        </ProductWrapper>
      
      );
};
export default Member;