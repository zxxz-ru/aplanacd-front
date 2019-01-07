import React, { Component } from 'react';
import HeaderComponent from '../header/HeaderComponent';
import { fetchDisks } from '../disk/diskApi';
import {diskUrl} from '../../fakedata/url';


class HomePage extends Component {

	constructor() {
		super();
		this.state = {
			disks: []
		};
	}
	async componentDidMount() {
		const d = await fetchDisks();
		console.log(d);
		this.setState({
			disks: d,
			baseUrl: diskUrl
		})

	}
	render() {
		const { disks } = this.state;
		const {baseUrl} = this.state;
		return (

			<div>
				<HeaderComponent/>
				<ol>
					{disks.map(d => {
						return <a href={`${baseUrl}/${d.id}`} key={d.id}><li>{d.name}</li></a>
					})}
				</ol>
			</div>
		);
	}
}

export default HomePage;

