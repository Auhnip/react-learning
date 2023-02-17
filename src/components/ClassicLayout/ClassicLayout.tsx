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
  const [components, setComponents] = React.useState<LayoutComponents>({});

  React.Children.forEach(children, (child) => {
    const newComponents = { ...components };

    if (React.isValidElement(child)) {
      switch (child.type) {
        case ClassicLayout.Header:
          newComponents.header = child;
          break;
        case ClassicLayout.LeftSidebar:
          newComponents.leftSidebar = child;
          break;
        case ClassicLayout.RightSidebar:
          newComponents.rightSidebar = child;
          break;
        case ClassicLayout.Content:
          newComponents.content = child;
          break;
        case ClassicLayout.Footer:
          newComponents.footer = child;
          break;
      }
    }

    setComponents(newComponents);
  });

  return (
    <div className='classic-layout'>
      <header className='classic-layout_header'>
        {!!components.header && components.header}
      </header>
      <div className='classic-layout_main-body'>
        <aside className='classic-layout_left-sidebar'>
          {!!components.leftSidebar && components.leftSidebar}
        </aside>
        <div className='classic-layout_content'>
          {!!components.content && components.content}
        </div>
        <aside className='classic-layout_right-sidebar'>
          {!!components.rightSidebar && components.rightSidebar}
        </aside>
      </div>
      <footer className='classic-layout_footer'>
        {!!components.footer && components.footer}
      </footer>
    </div>
  );
};

ClassicLayout.Header = LayoutComponentFactory('Header');
ClassicLayout.LeftSidebar = LayoutComponentFactory('LeftSidebar');
ClassicLayout.Content = LayoutComponentFactory('Content');
ClassicLayout.RightSidebar = LayoutComponentFactory('RightSidebar');
ClassicLayout.Footer = LayoutComponentFactory('Footer');

export default ClassicLayout;
