import React from "react";
import './GridLayout.css'

class GridLayout extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      colomns: 1,
      rows: 1,
    };
  }

  componentDidMount() {
    const positions = this.props.positions;

    this.setState(this.getRowsAndColumns(positions));
  }

  getRowsAndColumns(positions) {
    if (!positions) {
      return null;
    }

    const colomns = positions.reduce((prev, cur) => {
      return Math.max(prev, cur.col.end);
    }, 0) + 1;

    const rows = positions.reduce((prev, cur) => {
      return Math.max(prev, cur.row.end);
    }, 0) + 1;

    return {
      colomns,
      rows
    };
  }

  // transform coordinate to adapt to css grid layout
  transformAxis(position) {
    return {
      row: { start: position.row.start + 1, end: position.row.end + 2 },
      col: { start: position.col.start + 1, end: position.col.end + 2 },
    };
  }

  getGridItems() {
    const positions = this.props.positions;
    let position_index = 0;

    const gridItems =  React.Children.map(this.props.children, child => {
      if (position_index === positions.length) {
        return null;
      }

      const pos = this.transformAxis(positions[position_index++]);

      const itemStyle = {
        gridRow: `${pos.row.start} / ${pos.row.end}`,
        gridColumn: `${pos.col.start} / ${pos.col.end}`
      };

      return (
        <div className="grid-layout__inner-item" style={itemStyle}>
          {child}
        </div>
      );
    });

    return gridItems;
  }

  render() {
    const containerStyle = {
      gridTemplate: `repeat(${this.state.rows}, minmax(0, 1fr))` +
        ` / repeat(${this.state.colomns}, minmax(0, 1fr))`
    };

    return (
      <div className="grid-layout__container" style={containerStyle}>
        {this.getGridItems()}
      </div>
    );
  }
}

export default GridLayout;