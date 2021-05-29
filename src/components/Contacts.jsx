import React from "react";
import { useTranslation } from "react-i18next";

import { WrapperBlock } from "./WrapperBlock";
import { BlockName } from "./BlockName";
import { LinkToMessenger } from "./LinkToMessenger";

export const Contacts = () => {
  const { t } = useTranslation();
  return (
    <div id="/contacts">
      <WrapperBlock className="contacts">
        <BlockName subtext="contacts.label" name="contacts.blockName" />
        <div className="contacts__content">
          <div className="contacts__content__block">
            <span className="contacts__content__block__label">
              {t("contacts.adress")}
            </span>
            <div>
              <span>г.Запорожье</span>
              <span>ул.Привокзальная 21</span>
              <span>barskijdvor.b@gmail.com</span>
            </div>
          </div>
          <div className="contacts__content__block">
            <span className="contacts__content__block__label">
              {t("contacts.phones")}
            </span>
            <div>
              <span>061 270 60 90</span>
              <span>‎096 484 49 49</span>
              <span>066 077 63 26</span>
              <LinkToMessenger url="viber://chat?number=%2B0660776326">
                Viber
              </LinkToMessenger>
              <LinkToMessenger url="https://t.me/barskij_dvor">
                Telegram
              </LinkToMessenger>
            </div>
          </div>
          <div className="contacts__content__block">
            <span className="contacts__content__block__label">
              {t("contacts.timeWorking")}
            </span>
            <div>
              <span>
                Пн-Пт: 8:00-19:00
                <br /> Сб: 8:00-19:00
                <br /> Вс: 8:00-19:00
              </span>
            </div>
          </div>
        </div>
      </WrapperBlock>
    </div>
  );
};
