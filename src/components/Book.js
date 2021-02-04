import { ProductWrapper}  from "../styles";
import  Button  from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

const Book  = ({books})=>{
    
    return (
        <ProductWrapper>

                    <img style={{ width: "150px" }} alt={books.name} src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Gutenberg_Bible%2C_Lenox_Copy%2C_New_York_Public_Library%2C_2009._Pic_01.jpg/447px-Gutenberg_Bible%2C_Lenox_Copy%2C_New_York_Public_Library%2C_2009._Pic_01.jpg" />
                    <p>title:{books.title}</p>
                    
                    <p> author:{books.author}</p>
                    <Link to={`/Book/${books.slug}`}>
                       <Button variant="primary">more info</Button>
                    </Link>
                 

        </ProductWrapper>
       
    );
};
export default Book;