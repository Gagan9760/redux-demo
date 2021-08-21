import ChildOne from "./components/ChildOne";
import { Provider } from 'react-redux'
import store from "./redux/store";
import ChildTwo from "./components/ChildTwo";
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import Middle from "./Styles/Middle";
import ChildThree from "./components/ChildThree";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <Middle>
      <Link to='/c1'>C1</Link>
      <Link to='/c2'>C2</Link>
      <Link to='/c3'>C3</Link>
      </Middle>
      
        <Switch>
          <Route path='/c1' component={ChildOne}/>
          <Route path='/c2' component={ChildTwo}/>
          <Route path='/c3' component={ChildThree}/>
        </Switch>


      </BrowserRouter>
    </Provider>
  );
}

export default App;
