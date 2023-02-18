import * as React from 'react';

interface IProps {
  hidden: boolean;
  children?: React.ReactNode;
}

type allowHideComponent = ({ hidden, children }: IProps) => JSX.Element;
type normalComponent = ({ children }: Omit<IProps, 'hidden'>) => JSX.Element;

function layoutComponentCreator(
  tag: 'header' | 'aside' | 'section' | 'footer',
  classNameSuffix: string,
  hiddenClassNameSuffix?: string
): normalComponent | allowHideComponent {
  if (hiddenClassNameSuffix) {
    return ({ hidden, children }: IProps) => {
      const ComponentName = tag;

      let className = `classic-layout-${classNameSuffix}`;
      if (hidden) {
        className += ` classic-layout-hidden-${hiddenClassNameSuffix}`;
      }

      return <ComponentName className={className}>{children}</ComponentName>;
    };
  }

  return ({ children }: Omit<IProps, 'hidden'>) => {
    const ComponentName = tag;

    return (
      <ComponentName className={`classic-layout-${classNameSuffix}`}>
        {children}
      </ComponentName>
    );
  };
}

export type { normalComponent, allowHideComponent };

export default layoutComponentCreator;
