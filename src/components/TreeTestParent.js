import React, { Component } from 'react';
import SortableTree, { toggleExpandedForAll } from "react-sortable-tree";
import 'react-sortable-tree/style.css'; // This only needs to be imported once in your app
import TreeTestC1 from './TreeTestC1';
import TreeTestC2 from './TreeTestC2';
import './TreeTest.css';

export default class TreeTestParent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchString: '',
      treeData: [{title: 'USA', children: [
                  { title: 'California', children: [{ title: 'Marin County', children:[{title: 'Sausalito' },{title:'Tiburon'},{title:'La Jolla'}] }, {title: 'Los Angeles County', children:[{title: 'Long Beach' },{title:'Venice Beach'}] }, {title: 'San Diego', children:[{title: 'Chula Vista'},{title:'Toronto'}] }] },
                 ]},
                 {title: 'Canada', children: [
                    {title: 'Ontario'},{title:'Nova Scotia'}
                  ]}]
    };
  }

  toggleNodeExpansion = expanded => {
    this.setState(prevState => ({
      treeData: toggleExpandedForAll({ treeData: prevState.treeData, expanded })
    }));
  };

  stateSetter = (data) => {
    this.setState({ treeData: data })
  }

  render() {
    const {
      treeData,
      searchString,
      searchFocusIndex,
      searchFoundCount
    } = this.state;
    return (
      <div>
        <TreeTestC1 toggleNodeExpansion={this.toggleNodeExpansion} stateSetter={this.stateSetter} treeData={this.state.treeData} className='child-component'/>
        <TreeTestC2 toggleNodeExpansion={this.toggleNodeExpansion} stateSetter={this.stateSetter} treeData={this.state.treeData} className='child-component'/>
      </div>
    );
  }
}
