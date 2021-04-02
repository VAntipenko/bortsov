import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';

import { setCategory, setProducts } from 'redux/features/catalog';

export const NavbarCategoriesPopup = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();

    const [showPopup, setShowPopup] = React.useState(false);

    const categoriesKeys = useSelector(({ catalog }) => catalog.categoriesKeys);

    const activeCategoryName = useSelector(
        ({ catalog }) => catalog.activeCategoryName
    );

    const toggleVisiblePopup = () => {
        setShowPopup(prevState => !prevState);
    };

    const changeCategory = ({ id, key }) => {
        dispatch(setCategory({ id, key }));
        dispatch(setProducts());
        toggleVisiblePopup();
    };

    return (
        <ul className="navbarCategoriesPopup">
            <li
                className="navbarCategoriesPopup__label"
                onClick={toggleVisiblePopup}
            >
                <span>
                    {t([`catalog.categoriesGoods.${activeCategoryName}`])}
                </span>
                <svg
                    width="26"
                    height="25"
                    viewBox="0 0 26 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={showPopup ? 'rotated' : ''}
                >
                    <g clipPath="url(#clip0)">
                        <path
                            d="M8.36205 8.78974L13.1538 13.4763L17.9456 8.78974L19.4175 10.2325L13.1538 16.3721L6.89007 10.2325L8.36205 8.78974Z"
                            fill="#F4F4F4"
                        />
                    </g>
                    <defs>
                        <clipPath id="clip0">
                            <rect
                                width="24.5581"
                                height="25.0549"
                                fill="white"
                                transform="matrix(0 -1 -1 0 25.6813 24.5581)"
                            />
                        </clipPath>
                    </defs>
                </svg>
            </li>
            {showPopup &&
                categoriesKeys.map(category => (
                    <li
                        className="navbarCategoriesPopup__item"
                        onClick={() =>
                            changeCategory({
                                id: category.id,
                                key: category.key,
                            })
                        }
                        key={category.key}
                    >
                        <span>
                            {t([`catalog.categoriesGoods.${category.key}`])}
                        </span>
                    </li>
                ))}
        </ul>
    );
};
