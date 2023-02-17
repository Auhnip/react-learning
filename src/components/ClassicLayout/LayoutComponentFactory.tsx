import * as React from 'react';

interface PropsWithChildren {
  children?: React.ReactNode;
}

function LayoutComponentFactory(
  tag: keyof JSX.IntrinsicElements,
  classNameSuffix: string
) {
  return ({ children }: PropsWithChildren) => {
    const ComponentName = tag;
    return (
      <ComponentName className={`classic-layout-${classNameSuffix}`}>
        {children}
      </ComponentName>
    );
  };
}

export default LayoutComponentFactory;
