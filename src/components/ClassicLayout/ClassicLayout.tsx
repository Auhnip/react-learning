import * as React from 'react';
import LayoutComponentFactory from './LayoutComponentFactory';

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

ClassicLayout.Header = LayoutComponentFactory('header', 'header');
ClassicLayout.LeftSidebar = LayoutComponentFactory('aside', 'left-sidebar');
ClassicLayout.Content = LayoutComponentFactory('section', 'content');
ClassicLayout.RightSidebar = LayoutComponentFactory('aside', 'right-sidebar');
ClassicLayout.Footer = LayoutComponentFactory('footer', 'footer');

export default ClassicLayout;
