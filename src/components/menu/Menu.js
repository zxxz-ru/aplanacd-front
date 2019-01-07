import React, { Component } from 'react';
import "./Menu.css"
import {toHomePage, toCreateDiskPage} from './menuApi';

class Menu extends Component {
    constructor() {
      super();
      this.state = {
        value:''
      };
      this.toHomePage = toHomePage.bind(this);
      this.toCreateDiskPage = toCreateDiskPage.bind(this);
    }
  
    render() {
      return (
<div className="menuContainer">
<div className="menuItem" onClick={toHomePage}>Home</div>
<div className="menuItem">All Disks</div>
<div className="menuItem" onClick={toCreateDiskPage}>Create Disk</div>
</div>
      );
    }
  }
export default Menu;
