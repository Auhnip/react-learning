import * as React from 'react';

interface PropsWithChildren {
  children: React.ReactNode;
}
function LayoutComponentFactory(id: string) {
  const LayoutComponent = ({ children }: PropsWithChildren) => {
    return <React.Fragment>{children}</React.Fragment>;
  };

  LayoutComponent.id = id;

  return LayoutComponent;
}

export default LayoutComponentFactory;
