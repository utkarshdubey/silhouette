import {
  Component,
  setState,
  render
} from "@hydrophobefireman/ui-lib";
import { User } from './User';
import { generateAvatar } from '../../dist/silhouettejs.modern.js';
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()).then(data => this.setState({users: data}));
  }
  render() {
    console.log(this.state.users)
    return (
      <div>
        <h1 style={{fontSize: '50px', fontFamily: 'sans-serif', textAlign: 'center'}}>Users</h1>
        {this.state.users.map(user => {
          return(
            <User user={user} image={generateAvatar(user.name)}/>
          )
        })}
      </div>
    )
  }
}

render( < App / > , document.getElementById("app-mount"));