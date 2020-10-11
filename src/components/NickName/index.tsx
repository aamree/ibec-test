import * as React from "react";

export interface INickNameProps {
  nickName: string;
}

export default function NickName(props: INickNameProps) {
  return <span className="mr-4">{props.nickName}</span>;
}
