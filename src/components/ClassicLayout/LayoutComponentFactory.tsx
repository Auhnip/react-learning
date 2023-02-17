import * as React from 'react';

interface PropsWithChildren {
  children?: React.ReactNode;
}

function LayoutComponentFactory(
  tag: 'header' | 'aside' | 'section' | 'footer',
  classNameSuffix: string
) {
  const LayoutComponent = ({ children }: PropsWithChildren) => {
    const ComponentName = tag;
    return (
      <ComponentName className={`classic-layout-${classNameSuffix}`}>
        {children}
      </ComponentName>
    );
  };

  return LayoutComponent;
}

export default LayoutComponentFactory;
