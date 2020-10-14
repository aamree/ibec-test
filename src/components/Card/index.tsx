import * as React from 'react';
import billing from 'assets/images/suitcase.png';
import operation from 'assets/images/operation.png';
import  { ReactComponent as ArrowRight} from 'assets/icons/arrow-right.svg';
import BillingCardData, { IBillingData } from 'components/BillingCardData';
import OperationCardData, { IOperationData } from 'components/OperationCardData';

export interface ICardProps {
  card: {
    title: string,
    type: string,
    data: Array<IBillingData> | Array<IOperationData>
  }
}

export default function Card(props: ICardProps) {
  const {card} = props
  const howData = (type: string): React.ReactElement => {
    switch (type) {
      case "billing":
        return <BillingCardData data={card.data as IBillingData[]}/>;
  
      case "operation":
        return <OperationCardData data={card.data as IOperationData[]}/>;
    
      default:
        return <BillingCardData data={card.data as IBillingData[]}/>;
    }
  }
  return (
    <div className="card body__card">
      <div className="card-header body__card__header">
        {card.title}
      </div>
      <img className="img-responsive body__card__header_icon" src={icon(card.type)} alt="icon"/>
      <div className="card-body body__card__body">
        {howData(card.type)}
      </div>
      <div className="card-footer body__card__footer">
      <a href="https://google.ru" className="card-link">Показать все <ArrowRight/></a>
      </div>
    </div>
  );

  
}

const icon = (type: string): string => {
  switch (type) {
    case "billing":
      return billing;

    case "operation":
      return operation;
  
    default:
      return billing;
  }
}


