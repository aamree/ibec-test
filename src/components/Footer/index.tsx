import FooterMenu from 'components/FooterMenu';
import * as React from 'react';

export interface IFooterProps {
}

export default function Footer (props: IFooterProps) {
  return (
    <div className="container footer">
      <div className="row">
        <div className="col-md-6">
          <p className="text-muted">Copyright © 2012. Банк SuperBank. Все права защищены</p>
        </div>
        <div className="col-md-6">
          <FooterMenu/>
        </div>
      </div>
    </div>
  );
}
