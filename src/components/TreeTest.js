import React, { Component } from 'react';
import SortableTree, { toggleExpandedForAll } from "react-sortable-tree";
import 'react-sortable-tree/style.css'; // This only needs to be imported once in your app
import './TreeTest.css';

export default class TreeTest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchString: '',
      treeData: [
        { title: 'Paul', children: [{ title: 'Dog', children:[{title: 'Spot' },{title:'Daisy'}] }, {title: 'Cat'}] },
        { title: 'Jon', children: [{ title: 'Fish' }, { title: 'Snake' }] }
      ],
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
      <div style={{ height: '100vh' }}>
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
          treeData={this.state.treeData}
          onChange={treeData => this.setState({ treeData })}
        />
      </div>
    );
  }
}
