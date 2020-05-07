import React, { Component } from 'react';
import SortableTree from 'react-sortable-tree';
import 'react-sortable-tree/style.css'; // This only needs to be imported once in your app

export default class TreeTest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      treeData: [
        { title: 'Paul', children: [{ title: 'Dog', children:[{title: 'Spot' },{title:'Daisy'}] }, {title: 'Cat'}] },
        { title: 'Jon', children: [{ title: 'Fish' }, { title: 'Snake' }] }
      ],
    };
  }

  render() {
    return (
      <div style={{ height: 400 }}>
        <SortableTree
          treeData={this.state.treeData}
          onChange={treeData => this.setState({ treeData })}
        />
      </div>
    );
  }
}
