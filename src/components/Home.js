
import { Description, ShopImage, Title  , NavItem} from "../styles";


function Home() {
  return (
    <>
    <Title>Library</Title>
    <Description>Welcome!</Description>
    <ShopImage
      alt="Library"
      src="https://media.timeout.com/images/105628370/image.jpg"
    />
    <div style={{marginTop: "2em" , textAlign:"center" , fontSize:"30px" }}>
      <NavItem className="nav-item" to="/MemberList">
        Member List
      </NavItem>
          
      <NavItem className="nav-item" to="/BookList">
        Book List
      </NavItem>

    </div>
  </>
  );
}

export default Home;
