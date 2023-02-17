import React from 'react';
import './GridLayout.css';

interface Distance {
  start: number;
  end: number;
}

type Positions = { row: Distance; col: Distance }[];

interface Props {
  positions: Positions;
  children: React.ReactNode;
}

interface State {
  rows: number;
  columns: number;
}

interface Helper {
  [layoutName: string]: Positions;
}

const GridLayoutHelper: Helper = {
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

class GridLayout extends React.Component<Props, State> {
  static defaultProps = {
    positions: GridLayoutHelper.SimpleLayout,
  };

  constructor(props: Props) {
    super(props);

    this.state = this.getRowsAndColumns(this.props.positions);
  }

  getRowsAndColumns(positions: Positions) {
    const columns =
      positions.reduce((prev, cur) => {
        return Math.max(prev, cur.col.end);
      }, 0) + 1;

    const rows =
      positions.reduce((prev, cur) => {
        return Math.max(prev, cur.row.end);
      }, 0) + 1;

    return {
      rows,
      columns,
    };
  }

  // transform coordinate to adapt to css grid layout
  transformAxis({ row, col }: { row: Distance; col: Distance }) {
    return {
      row: { start: row.start + 1, end: row.end + 2 },
      col: { start: col.start + 1, end: col.end + 2 },
    };
  }

  getGridItems() {
    const { positions, children } = this.props;
    let positionIndex = 0;

    const gridItems = React.Children.map(children, (child) => {
      if (positionIndex === positions.length) {
        return null;
      }

      const { row, col } = this.transformAxis(positions[positionIndex++]);

      const itemStyle: React.CSSProperties = {
        gridRow: `${row.start} / ${row.end}`,
        gridColumn: `${col.start} / ${col.end}`,
      };

      return (
        <div className='grid-layout-container' style={itemStyle}>
          {child}
        </div>
      );
    });

    return gridItems;
  }

  render() {
    const containerStyle: React.CSSProperties = {
      gridTemplate:
        `repeat(${this.state.rows}, minmax(0, 1fr))` +
        ` / repeat(${this.state.columns}, minmax(0, 1fr))`,
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
