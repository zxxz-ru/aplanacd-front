import React, { Component } from 'react';
class DiskListRowComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            disk: props.disk
        }
        this.getClassName = this.getClassName.bind(this);
    }

    getClassName(id) {
        const name =  id%2 ? 'disk-list-row odd' : 'disk-list-row';
        console.log(name);
        return name;
    }
    render(){
    const id = this.state.disk.id;
    const name = this.state.disk.name;
    const company = this.state.disk.company;
    const year = this.state.disk.year;
    const ownerName = this.state.disk.user.name;
    return (
    <div className={this.getClassName(id)}>
        <div className="disk-list-row-item">{name}</div>
        <div className="disk-list-row-item">{company}</div>
        <div className="disk-list-row-item">{year}</div>
        <div className="disk-list-row-item">{ownerName}</div>
    </div>
 );
    }
}
export default DiskListRowComponent;