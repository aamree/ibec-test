import * as React from 'react';
import Card, { ICardProps } from 'components/Card';

export interface ICardsProps {
  cards: Array<ICardProps>
}

export default function Cards (props: ICardsProps) {
  return (
    <div className="col-md-6">
      {props.cards.map((item: ICardProps,index: number)=><div className="mb-3" key={index}><Card card={item.card}/></div>)}
    </div>
  );
}
