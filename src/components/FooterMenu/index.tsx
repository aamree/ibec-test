import * as React from "react";

export interface IFooterMenuProps {}
interface IMenu {
  id: string;
  label: string;
  link: string;
}

export default function FooterMenu(props: IFooterMenuProps) {
  const menu: Array<IMenu> = [
    {
      id: "1",
      label: "О проекте",
      link: "https://www.google.ru/",
    },
    {
      id: "2",
      label: "Пользовательское соглашение",
      link: "https://www.google.ru/",
    },
    {
      id: "3",
      label: "Обратная связь",
      link: "https://www.google.ru/",
    },
  ];
  return (
    <ul className="nav  flex-column flex-sm-row  justify-content-end flex-nowrap top-header__menu">
      {menu.map((item) => (
        <li
          className="nav-item  d-flex align-items-center px-3 top-header__menu-item"
          key={item.id}
        >
          <a href={item.link}>{item.label}</a>
        </li>
      ))}
    </ul>
  );
}
