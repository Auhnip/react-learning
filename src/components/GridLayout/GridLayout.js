import React from 'react';
import './GridLayout.css';

const GridLayoutHelper = {
  LeftSideBarLayout: [
    // header
    {
      row: { start: 0, end: 1 },
      col: { start: 0, end: 11 },
    },
    // navigator
    {
      row: { start: 2, end: 2 },
      col: { start: 0, end: 11 },
    },
    // left sidebar
    {
      row: { start: 3, end: 10 },
      col: { start: 0, end: 2 },
    },
    // content
    {
      row: { start: 3, end: 10 },
      col: { start: 3, end: 11 },
    },
    // footer
    {
      row: { start: 11, end: 12 },
      col: { start: 0, end: 11 },
    },
  ],

  RightSideBarLayout: [
    // header
    {
      row: { start: 0, end: 1 },
      col: { start: 0, end: 11 },
    },
    // navigator
    {
      row: { start: 2, end: 2 },
      col: { start: 0, end: 11 },
    },
    // content
    {
      row: { start: 3, end: 10 },
      col: { start: 0, end: 8 },
    },
    // right sidebar
    {
      row: { start: 3, end: 10 },
      col: { start: 9, end: 11 },
    },
    // footer
    {
      row: { start: 11, end: 12 },
      col: { start: 0, end: 11 },
    },
  ],

  NoSideBarLayout: [
    // header
    {
      row: { start: 0, end: 1 },
      col: { start: 0, end: 11 },
    },
    // navigator
    {
      row: { start: 2, end: 2 },
      col: { start: 0, end: 11 },
    },
    // content
    {
      row: { start: 3, end: 10 },
      col: { start: 0, end: 11 },
    },
    // footer
    {
      row: { start: 11, end: 12 },
      col: { start: 0, end: 11 },
    },
  ],

  SimpleLayout: [
    // header
    {
      row: { start: 0, end: 1 },
      col: { start: 0, end: 11 },
    },
    // content
    {
      row: { start: 2, end: 10 },
      col: { start: 0, end: 11 },
    },
    // footer
    {
      row: { start: 11, end: 12 },
      col: { start: 0, end: 11 },
    },
  ],
};

class GridLayout extends React.Component {
  constructor(props) {
    super(props);

    // use simple layout default
    const { positions = GridLayoutHelper.SimpleLayout } = props;

    this.state = {
      positions,
      ...this.getRowsAndColumns(positions),
    };
  }

  getRowsAndColumns(positions) {
    if (!positions) {
      return null;
    }

    const colomns =
      positions.reduce((prev, cur) => {
        return Math.max(prev, cur.col.end);
      }, 0) + 1;

    const rows =
      positions.reduce((prev, cur) => {
        return Math.max(prev, cur.row.end);
      }, 0) + 1;

    return {
      colomns,
      rows,
    };
  }

  // transform coordinate to adapt to css grid layout
  transformAxis({ row, col }) {
    return {
      row: { start: row.start + 1, end: row.end + 2 },
      col: { start: col.start + 1, end: col.end + 2 },
    };
  }

  getGridItems() {
    const { positions } = this.state;
    const { children } = this.props;
    let positionIndex = 0;

    const gridItems = React.Children.map(children, (child) => {
      if (positionIndex === positions.length) {
        return null;
      }

      const { row, col } = this.transformAxis(positions[positionIndex++]);

      const itemStyle = {
        gridRow: `${row.start} / ${row.end}`,
        gridColumn: `${col.start} / ${col.end}`,
      };

      return (
        <div className='grid-layout_container' style={itemStyle}>
          {child}
        </div>
      );
    });

    return gridItems;
  }

  render() {
    const containerStyle = {
      gridTemplate:
        `repeat(${this.state.rows}, minmax(0, 1fr))` +
        ` / repeat(${this.state.colomns}, minmax(0, 1fr))`,
    };

    return (
      <div className='grid-layout' style={containerStyle}>
        {this.getGridItems()}
      </div>
    );
  }
}

export { GridLayoutHelper };

export default GridLayout;
