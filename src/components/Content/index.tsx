import * as React from 'react';
import Cards, { ICardsProps } from 'components/Cards';
import { content } from 'assets/mocks/content';


export interface IContentProps {
  
}

interface IContentState {
  content: Array<ICardsProps>
}

export default function Content (props: IContentProps) {
  
  return (
    <div className="col-lg-10">
      <div className="row">
        <Cards cards={content.billings}/>
        <Cards cards={content.operation}/>
      </div>
    </div>
  );
}
