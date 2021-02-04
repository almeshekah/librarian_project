
import Member from "./Member";
import { ListWrapper } from "../styles";
import { useSelector } from "react-redux";
const MemberList  = ()=>{
    
    const members = useSelector((state) => state.members);
    
    
    const memberList = members.map((members) => (
        <div className="col mb-4">
          <Member key = {members.id} members={members}/>
        </div>
      ));

        return (
            <div >
             <ListWrapper > <p>{memberList}</p>  </ListWrapper>
            </div>
        );
      
};

export default MemberList;