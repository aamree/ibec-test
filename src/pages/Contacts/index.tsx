import Maps from 'components/Maps';
import * as React from 'react';

export interface IContactsProps {
}

export default function Contacts (props: IContactsProps) {
  return (
    <div className="col-lg-10">
      <Maps/>
    </div>
  );
}
