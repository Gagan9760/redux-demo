import ChildOne from "./components/ChildOne";
import { Provider } from 'react-redux'
import store from "./redux/store";
import ChildTwo from "./components/ChildTwo";
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import {List} from "./Styles/Middle";
import ChildThree from "./components/ChildThree";
import MovieList from "./Movies/MovieList";
import MovieItem from "./Movies/MovieItem";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <List>
      <Link to='/c1'>C1</Link>
      <Link to='/c2'>C2</Link>
      <Link to='/c3'>C3</Link>
      <Link to='/movies'>Movies</Link>
      </List>
      
        <Switch>
          <Route path='/c1' component={ChildOne}/>
          <Route path='/c2' component={ChildTwo}/>
          <Route path='/c3' component={ChildThree}/>
          <Route path='/movies' component={MovieList} exact/>
          <Route path='/movies/:id' component={MovieItem}/>
        </Switch>


      </BrowserRouter>
    </Provider>
  );
}

export default App;
