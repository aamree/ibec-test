import * as React from 'react';

export interface IAdvProps {
  adv: {
    img: string,
    title: string
  }
}

export default function Adv (props: IAdvProps) {
  return (
    <div className="card body__card mb-3 adv d-flex justify-content-end" style={{backgroundImage: `url(${props.adv.img})`}}>
      <div className="card-footer adv_footer">{props.adv.title}</div>
    </div>
  );
}
