import React, { Component } from 'react';
import SortableTree, { toggleExpandedForAll } from "react-sortable-tree";
import 'react-sortable-tree/style.css'; // This only needs to be imported once in your app
import './TreeTest.css';

export default class TreeTestC2 extends Component {
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

  handleSearchOnChange = e => {
    this.setState({
      searchString: e.target.value
    },() => {
      console.log(this.state.searchString)
    });
  };

  toggleNodeExpansion = expanded => {
    this.setState(prevState => ({
      treeData: toggleExpandedForAll({ treeData: prevState.treeData, expanded })
    }));
  };

  render() {
    const {
      treeData,
      searchString,
      searchFocusIndex,
      searchFoundCount
    } = this.state;
    return (
      <div style={{ height: '100%', marginLeft: '500px', position: 'fixed', top: 0 }}>
        <button
            name="expand"
            onClick={this.toggleNodeExpansion.bind(this, true)}
        >
            Expand all
        </button>
        <button
            name="collapse"
            className="collapse"
            onClick={this.toggleNodeExpansion.bind(this, false)}
        >
            Collapse all
        </button>
        <label>Search: </label>
        <input onChange={this.handleSearchOnChange} />
        <SortableTree
          treeData={this.props.treeData}
          onChange={treeData => this.props.stateSetter(treeData)}
          isVirtualized={false}
        />
      </div>
    );
  }
}
