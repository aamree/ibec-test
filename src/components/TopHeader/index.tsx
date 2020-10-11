import * as React from "react";
import NickName from "components/NickName";
import Mail from "components/Mail";
import { ReactComponent as Refresh } from "assets/icons/refresh.svg";
import TopMenu from "components/TopMenu";

export interface ITopHeaderProps {}

export default function TopHeader(props: ITopHeaderProps) {
  return (
    <div className="container-fluid border-bottom shadow-sm pt-5 pb-2">
      <div className="container">
        <div className="row d-flex justify-content-between">
          <div className="col-12 col-md-5 top-header__left-block">
            <NickName nickName="Жанна Арматурина" />
            <Mail count={7} />
            <Refresh />
          </div>
          <div className="col-12 col-md-6 top-header__right-block">
            <TopMenu />
          </div>
        </div>
      </div>
    </div>
  );
}
