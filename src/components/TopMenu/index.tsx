import * as React from "react";
import { ReactComponent as Map } from "assets/icons/map.svg";
import { ReactComponent as Tool } from "assets/icons/tool.svg";
import { ReactComponent as Power } from "assets/icons/power.svg";

export interface ITopMenuProps {}
interface IMenu {
  id: string;
  label: string;
  link: string;
  icon: React.ReactElement;
}

export default function TopMenu(props: ITopMenuProps) {
  const menu: Array<IMenu> = [
    {
      id: "1",
      label: "Карта сайта",
      link: "https://www.google.ru/",
      icon: <Map className="mr-1" />,
    },
    {
      id: "2",
      label: "Настройки",
      link: "https://www.google.ru/",
      icon: <Tool className="mr-1" />,
    },
    {
      id: "3",
      label: "Выход",
      link: "https://www.google.ru/",
      icon: <Power className="mr-1" />,
    },
  ];
  return (
    <ul className="nav  flex-column flex-sm-row  justify-content-end flex-nowrap top-header__menu">
      {menu.map((item) => (
        <li
          className="nav-item  d-flex align-items-center px-3 top-header__menu-item"
          key={item.id}
        >
          {item.icon}
          <a href={item.link}>{item.label}</a>
        </li>
      ))}
    </ul>
  );
}
