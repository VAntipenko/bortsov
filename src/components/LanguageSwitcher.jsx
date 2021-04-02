import React from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import classnames from "classnames";

import { setLang } from "redux/features/lang";

export const LanguageSwitcher = () => {
    const dispatch = useDispatch();
    const { i18n } = useTranslation();

    const languages = useSelector(({ lang }) => lang.languages);
    const activeLang = useSelector(({ lang }) => lang.activeLang);

    const changeLanguage = (language) => {
        dispatch(setLang(language));
    };

    React.useEffect(() => {
        i18n.changeLanguage(activeLang);
    }, [activeLang, i18n]);

    return (
        <ul className='languageSwitcher'>
            {languages.map((lang) => (
                <li
                    key={lang.name}
                    className={classnames({
                        langActive: activeLang === lang.lang,
                    })}
                    onClick={() => changeLanguage(lang.lang)}>
                    {lang.name}
                </li>
            ))}
        </ul>
    );
};
