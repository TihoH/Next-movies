import React from "react";

const Footer: React.FC = () => {
  return (
    <div className=" text-gray-500 flex justify-between py-5">
      <ul>
        <li className="text-white">
          <h5>О нас</h5>
        </li>
        <li>О компании</li>
        <li>Вакансии</li>
        <li>Программа бета-тестирования</li>
        <li>Информация для партнёров</li>
        <li>Размещение рекламы</li>
        <li>Пользовательское соглашение</li>
      </ul>
      <ul>
        <li className="text-white">
          <h5>Разделы</h5>
        </li>
        <li>Мой Иви</li>
        <li>Что нового</li>
        <li>Фильмы</li>
        <li>Сериалы</li>
        <li>Мультфильмы</li>
        <li>Статьи</li>
        <li className="">Активация сертификата</li>
      </ul>{" "}
      <ul>
        <li className="text-white">
          <h5>Служба поддержки</h5>
        </li>
        <li>Мы всегда готовы вам помочь. Наши операторы онлайн 24/7</li>
        <li>
          <button>Написать в чате</button>
        </li>
        <li>
          ask.ivi.ru
          <span>Ответы на вопросы</span>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
