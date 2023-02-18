import * as React from 'react';
import layoutComponentFactory, {
  type allowHideComponent,
  type normalComponent,
} from './layoutComponentCreator';

import './ClassicLayout.css';

interface IProps {
  children: React.ReactNode;
}

interface LayoutComponents {
  header?: React.ReactElement;
  leftSidebar?: React.ReactElement;
  content?: React.ReactElement;
  rightSidebar?: React.ReactElement;
  footer?: React.ReactElement;
}

const ClassicLayout = ({ children }: IProps) => {
  const components: LayoutComponents = {};

  React.Children.forEach(children, (child) => {
    if (React.isValidElement(child)) {
      switch (child.type) {
        case ClassicLayout.Header:
          components.header = child;
          break;
        case ClassicLayout.LeftSidebar:
          components.leftSidebar = child;
          break;
        case ClassicLayout.RightSidebar:
          components.rightSidebar = child;
          break;
        case ClassicLayout.Content:
          components.content = child;
          break;
        case ClassicLayout.Footer:
          components.footer = child;
          break;
      }
    }
  });

  return (
    <div className='classic-layout'>
      {components.header}
      <div className='classic-layout-main-body'>
        {components.leftSidebar}
        {components.content}
        {components.rightSidebar}
      </div>
      {components.footer}
    </div>
  );
};

ClassicLayout.Header = layoutComponentFactory(
  'header',
  'header'
) as normalComponent;

ClassicLayout.LeftSidebar = layoutComponentFactory(
  'aside',
  'left-sidebar',
  'left'
) as allowHideComponent;

ClassicLayout.Content = layoutComponentFactory(
  'section',
  'content'
) as normalComponent;

ClassicLayout.RightSidebar = layoutComponentFactory(
  'aside',
  'right-sidebar',
  'right'
) as allowHideComponent;

ClassicLayout.Footer = layoutComponentFactory(
  'footer',
  'footer'
) as normalComponent;

export default ClassicLayout;
