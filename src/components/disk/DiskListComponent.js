import React, { Component } from 'react';
import DiskListRowComponent from './DiskListRowComponent';
import DiskListHeaderComponent from './DiskListHeaderComponent';
import { fetchDisks } from './diskApi';
import './Disk.css';

class DiskListComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            disks: [],
        };

        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }
    /*
      handleChange(event) {
        this.setState({ value: event.target.value });
      }
    
      handleSubmit(event) {
        alert('A naje was submitted: ' + this.state.value);
        event.preventDefault();
      }
    */
    async componentDidMount() {
        const d = await fetchDisks();
        this.setState({
            disks: d,
        })

    }

    render() {
        const disks = this.state.disks;
        const disksList = disks.map(disk => {
            return (<li key={disk.id}>
                <DiskListRowComponent disk={disk} />
            </li>);
        });
        return (
            <div className="disk-list-container">
                <div className="disk-list">
                <DiskListHeaderComponent/> 
                    <ul>{disksList}</ul>
                </div>
            </div>
        );
    }
}
export default DiskListComponent;
