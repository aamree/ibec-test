import * as React from 'react';
import Content from 'components/Content';
import Sidebar from 'components/Sidebar';

export interface IBodyProps {
}

export default function Body (props: IBodyProps) {
  return (
    <div className="container">
      <div className="row">
        <Content/>
        <Sidebar/>
      </div>
    </div>
  );
}
