import * as React from "react";
import avatar from "assets/images/avatar.png";

export interface IAvatarProps {}

export default function Avatar(props: IAvatarProps) {
  return (
    <img className="img-responsive header__avatar" src={avatar} alt="Аватар" />
  );
}
