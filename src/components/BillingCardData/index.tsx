import * as React from 'react';

export interface IBillingData {
  caption: string,
  invoice: string,
  type: string,
  total: number,
  currency: string
}

export interface IBillingCardDataProps {
  data: Array<IBillingData> 
}

export default function BillingCardData (props: IBillingCardDataProps) {
  return (
    <table className="table table-borderless table-hover table-sm table-responsive body__card__table">
        <thead className="thead-light">
          <tr>
            <th scope="col">Псевдоним:</th>
            <th scope="col">Номер:</th>
            <th scope="col">Тип:</th>
            <th scope="col">Остаток:</th>
            <th scope="col">Валюта:</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((item: IBillingData, index: number)=>
          <tr key={index}>
            <td><a href="https://google.ru">{item.caption}</a></td>
            <td>{item.invoice}</td>
            <td>{item.type}</td>
            <td>{item.total}</td>
            <td>{item.currency}</td>
          </tr>)} 
        </tbody>
      </table>
  );
}
