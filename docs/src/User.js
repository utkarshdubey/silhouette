import {
    Component,
    setState,
    render
  } from "@hydrophobefireman/ui-lib";
//   import "./App.css";
  
  export class User extends Component {
    constructor(props) {
      super(props);
    }
    render() {
    console.log(this.props);
      return (
        <div style={{padding: '10px'}}>
            <div class="card">
                <div class="card-header">
                    <div class="card-header__avatar" style={{backgroundImage: `url('${this.props.image}')`}}></div><a href="#" class="card-header__follow">{this.props.user.email}</a>
                </div>
                <div class="card-content">
                    <div class="card-content__username">{this.props.user.name}</div>
                    <div class="card-content__bio">{this.props.user.username}</div>
                </div>
                <div class="card-footer">
                    {this.props.user.company.catchPhrase}
                </div>
            </div>
        </div>
      )
    }
  }
