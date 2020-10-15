import * as React from "react"; 
import { Link } from 'react-router-dom';
import Dropdown from "react-multilevel-dropdown";
import { ReactComponent as List } from "assets/icons/list.svg";

export interface INavigationProps {}

export default function Navigation(props: INavigationProps) {
  return (
    <nav
      className="navbar navbar-expand-lg  header__navigation"
      role="navigation"
    >
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <List /> <span>Меню</span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active header__navigation_item">
            <Link className="nav-link" to="/">
              Главная
            </Link>
          </li>
          <li className="nav-item header__navigation_item">
            <Link className="nav-link" to="/about">
              Счета
            </Link>
          </li>
          <li className="nav-item header__navigation_item">
            <a className="nav-link" href="https://www.google.ru/">
              Платежи
            </a>
          </li>

          <Dropdown
            title="Переводы"
            buttonClassName="header__dropdown-button"
            wrapperClassName="header__navigation_item"
          >
            <Dropdown.Item>На свой счет внутри банка</Dropdown.Item>
            <Dropdown.Item>
              На чужой счет внутри банка
              <Dropdown.Submenu>
                <Dropdown.Item>На свой счет внутри банка</Dropdown.Item>
                <Dropdown.Item>На чужой счет внутри банка</Dropdown.Item>
                <Dropdown.Item>В другой банк в национальной валюте</Dropdown.Item>
                <Dropdown.Item>Международные платежи SWIFT</Dropdown.Item>
              </Dropdown.Submenu>
            </Dropdown.Item>
            <Dropdown.Item>В другой банк в национальной валюте</Dropdown.Item>
            <Dropdown.Item>Международные платежи SWIFT</Dropdown.Item>
          </Dropdown>
          <li className="nav-item header__navigation_item">
            <a className="nav-link" href="https://www.google.ru/">
              Купля/продажа валюты
            </a>
          </li>
          <li className="nav-item header__navigation_item">
            <Link className="nav-link" to="/about">
              О нас
            </Link>
          </li>
          <li className="nav-item header__navigation_item">
            <Link className="nav-link" to="/contacts">
              Наши контакты
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
