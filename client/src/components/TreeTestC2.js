import React, { Component } from 'react';
import SortableTree, { toggleExpandedForAll } from "react-sortable-tree";
import 'react-sortable-tree/style.css'; // This only needs to be imported once in your app
import './TreeTest.css';

export default class TreeTestC2 extends Component {
  render() {
    return (
      <div style={{ height: '100%', marginLeft: '500px', position: 'fixed', top: 0 }}>
        <button
            name="expand"
            onClick={this.props.toggleNodeExpansion.bind(this, true)}
        >
            Expand all
        </button>
        <button
            name="collapse"
            className="collapse"
            onClick={this.props.toggleNodeExpansion.bind(this, false)}
        >
            Collapse all
        </button>
        <SortableTree
          treeData={this.props.treeData}
          onChange={treeData => this.props.stateSetter(treeData)}
          isVirtualized={false}
        />
      </div>
    );
  }
}
