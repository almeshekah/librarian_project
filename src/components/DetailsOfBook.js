import { Link, Redirect, useParams } from "react-router-dom";
import Member from "./Member";
import { DetailWrapper } from "../styles";
import{useSelector} from "react-redux";
import members from "../members";
const DetailsOfBook = () => {
  
  
  const books=useSelector((state)=>state.books);
  const { booksSlug } = useParams();
  const gg = books.find((book) => book.slug === booksSlug);

  

  //console.log(gg.borrowedBy);

  let borrowed= members
  .filter((member)=> gg.borrowedBy.includes(member.id));

  //console.log(moretrip);


  const borrowedList = borrowed.map((members) => 
        <Member key = {members.id} members={members}/>);
 

  

  

  

  if (!gg) return <Redirect to="/BookList" />;

  return (
      <div>
            <DetailWrapper>
            
                <h1>Book title:{gg.title}</h1>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Gutenberg_Bible%2C_Lenox_Copy%2C_New_York_Public_Library%2C_2009._Pic_01.jpg/447px-Gutenberg_Bible%2C_Lenox_Copy%2C_New_York_Public_Library%2C_2009._Pic_01.jpg" alt={gg.title} />
                <p>author:{gg.author}</p>
                <p>author:{gg.author}</p>
                <p>genre:{gg.genre}</p>
                <p>available:{gg.available}</p>
                <Link to="/MemberList">Back to  Member List</Link>
            </DetailWrapper>
            <DetailWrapper>
                <h2>members who borrowed this book before:</h2>
                {borrowedList}

            </DetailWrapper>
        </div>
  );
};

export default DetailsOfBook;