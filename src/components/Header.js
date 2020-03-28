import React,{Component} from 'react';

class Header extends Component{

  render(){
    return (
      <header>
        <img src="https://i.imgur.com/KDIDiSE.png" class="logo"></img>
        <span id="meu_perfil"> Meu perfil</span>
        <i className="material-icons">account_circle</i>
      </header>
    )
  }
}

export default Header;

