import { Link, Redirect, useParams } from "react-router-dom";
import { DetailWrapper } from "../styles";
import{useSelector} from "react-redux";
import books from "../books"
import Book from "./Book";
const ProfileMembers = () => {
  
    
  const members=useSelector((state)=>state.members);
  const { membersSlug } = useParams();
  const member = members.find((member) => member.slug === membersSlug);
  

  if (!member) return <Redirect to="/MemberList" />;

 

  let borrowed= books
  .filter((book)=> member.currentlyBorrowedBooks.includes(book.id));

  //console.log(moretrip);


  const borrowedList = borrowed.map((books) => 
        <Book key = {books.id} books={books}/>);

  return (
      <div>
    <DetailWrapper>
      
      <h1>{member.firstName}{member.lastName}</h1>
      <img src="https://previews.123rf.com/images/jemastock/jemastock1712/jemastock171202411/91074862-man-face-smiling-cartoon-icon-vector-illustration-graphic-design.jpg" alt={member.lastName} />
      <p>Membership :{member.membership}</p>
      <Link to="/MemberList">Back to  Member List</Link>
      
    
    </DetailWrapper>
    <div style={{ marginTop:"15em" , marginLeft:"15em" }}>
    <DetailWrapper>
                <h2>Books his borrowed </h2>
                {borrowedList}

    </DetailWrapper>
    </div>

    </div>

  );
};

export default ProfileMembers;