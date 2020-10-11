import * as React from "react";
import { ReactComponent as Envelope } from "assets/icons/envelope.svg";

const classNames = require("classnames");

export interface IMailProps {
  count: number;
}

export default function Mail(props: IMailProps) {
  const { count } = props;
  const mailClass = classNames("mr-3", {
    "top-header__mail_fill": count !== 0,
  });
  return (
    <span className={mailClass}>
      <Envelope /> - {count}
    </span>
  );
}
