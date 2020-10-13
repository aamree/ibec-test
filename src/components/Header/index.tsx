import * as React from "react";
import Avatar from "components/Avatar";
import HeaderTitle from "components/HeaderTitle";
import Navigation from "components/Navigation";

export interface IHeaderProps {}

export default function Header(props: IHeaderProps) {
  return (
    <div className="container mt-3 mb-4 header">
      <div className="mr-2 header__avatar-block">
        <Avatar />
      </div>
      <div className="header__nav-block w-100">
        <HeaderTitle />
        <Navigation />
      </div>
    </div>
  );
}
