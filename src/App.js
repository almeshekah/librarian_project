
import { Route, Switch } from "react-router";
import MemberList from './components/MemberList';
import Home from './components/Home';
import NavBar from "./components/NavBar";
import FormAddMember from "./components/FormAddMember";
import FormAddBook from "./components/FormAddBook";

import ProfileMembers from "./components/ProfileMembers";
import BookList from "./components/BookList";
import DetailsOfBook from "./components/DetailsOfBook";
import { GlobalStyle } from "./styles";
function App() {
  return (
    
    <div   >
      <GlobalStyle/>
      <NavBar/>
      <Switch>
      <Route path="/Member/:membersSlug">
      <ProfileMembers/>
      </Route>

      <Route path="/Book/:booksSlug">
      <DetailsOfBook/>
      </Route>

      <Route path="/NewBook">
      <FormAddBook/>
      </Route>

      <Route path="/NewMember">
      <FormAddMember/>
      </Route>

      <Route path="/MemberList">
      <MemberList/>
      </Route>

      <Route path="/BookList">
      <BookList/>
      </Route>
      
     
      <Route path="/">
      <Home/>
      </Route>
      </Switch>
    </div>
  );
}

export default App;
