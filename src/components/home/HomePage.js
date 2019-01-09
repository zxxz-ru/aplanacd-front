import React, { Component } from 'react';
import HeaderComponent from '../header/HeaderComponent';
import DiskListComponent  from '../disk/DiskListComponent';


class HomePage extends Component {
	render() {
		return (

			<div>
				<HeaderComponent/>
				<DiskListComponent/>
			</div>
		);
	}
}

export default HomePage;

