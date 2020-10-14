import * as React from 'react';
import Adv from 'components/Adv';
import Exchange from 'components/Exchange';
import car from 'assets/images/car.png';
import deposit from 'assets/images/deposit.png';

export interface ISidebarProps {
}

export default function Sidebar (props: ISidebarProps) {
  const adv= [
    {
      img: car,
      title: "Кредит авто"
    },
    {
      img: deposit,
      title: "Депозиты"
    }
  ]
  return (
    <div className="col-lg-2">
      <Exchange />
      {adv.map((item, i)=><Adv adv={item} key={i}/>)}
    </div>
  );
}
