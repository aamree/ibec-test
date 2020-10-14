import * as React from 'react';

export interface IOperationData {
  caption: string,
  logo: string,
  summa: number,
  currency: string
}

export interface IOperationCardDataProps {
  data: Array<IOperationData> 
}

export default function OperationCardData (props: IOperationCardDataProps) {
  return (
    <table className="table table-borderless table-hover table-sm table-responsive body__card__table">
        <thead className="thead-light">
          <tr>
            <th scope="col">Логотип:</th>
            <th scope="col">Псевдоним:</th>
            <th scope="col">Сумма:</th>
            <th scope="col">Валюта:</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((item: IOperationData, index: number)=>
          <tr key={index}>
            <td className="text-center"><img src={item.logo} alt="logo"/></td>
            <td><a href="https://google.ru">{item.caption}</a></td>
            <td>{item.summa}</td>
            <td>{item.currency}</td>
          </tr>)} 
        </tbody>
      </table>
  );
}
