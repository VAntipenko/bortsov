import React from "react";
import classnames from "classnames";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { HashLink as Link } from "react-router-hash-link";

import { Cart } from "./Cart";
import { Button } from "./Button";
import { GoodsList } from "./GoodsList";
import { WholesaleOffers } from "./WholesaleOffers";
import { NavbarCategoriesPopup } from "./NavbarCategoriesPopup";
import { WrapperBlock } from "./WrapperBlock";
import {
  setCart,
  addToCart,
  setCategory,
  setProducts,
  removeFromCart,
  checkForEmptyCart,
} from "redux/features/catalog";
import palette_1 from "assets/images/palette_1.png";
import palette_2 from "assets/images/palette_2.png";

export const Catalog = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const cartIsEmpty = useSelector(({ catalog }) => catalog.cartIsEmpty);
  const categoriesKeys = useSelector(({ catalog }) => catalog.categoriesKeys);
  const activeCatagoryId = useSelector(
    ({ catalog }) => catalog.activeCatagoryId
  );

  const [showCart, setShowCart] = React.useState(false);

  React.useEffect(() => {
    dispatch(setCart());
    dispatch(setProducts());
    dispatch(checkForEmptyCart());
    if (cartIsEmpty) {
      setShowCart(false);
    }
  }, [dispatch, cartIsEmpty]);

  const toggleShowCart = () => {
    setShowCart((prevState) => !prevState);
  };

  const changeCategory = (id) => {
    dispatch(setCategory({ id }));
    dispatch(setProducts());
  };

  const handleAddInCart = (obj) => {
    dispatch(setCart());
    dispatch(addToCart({ item: obj }));
    dispatch(checkForEmptyCart());
  };

  const handleRemoveFromCart = (id) => {
    dispatch(setCart());
    dispatch(removeFromCart({ id }));
    dispatch(checkForEmptyCart());
  };

  return (
    <div className="catalog" id="/catalog">
      <h2>Каталог</h2>
      <ul className="catalog__navbarCategories">
        {categoriesKeys.map((category) => (
          <li
            onClick={() => changeCategory(category.id)}
            className={classnames({
              activeCategory: activeCatagoryId === category.id,
            })}
            key={category.key}
          >
            {t([`catalog.categoriesGoods.${category.key}`])}
          </li>
        ))}
      </ul>
      <WrapperBlock>
        <NavbarCategoriesPopup />
        <div className="catalog__content">
          <div className="catalog__content__btnGrp">
            <Button
              onClick={() =>
                window.open(
                  "https://docs.google.com/spreadsheets/d/1BZDzqSU2dpJsp_sEV14z4dR6XsbvErP7F1-2g04HKy0/edit?usp=sharing"
                )
              }
            >
              {t("button.price")}
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8 16H16V18H8V16ZM8 12H16V14H8V12ZM14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8L14 2ZM18 20H6V4H13V9H18V20Z" />
              </svg>
            </Button>
            <Link to="#/cart">
              <Button
                className={!cartIsEmpty ? "active" : null}
                disabled={cartIsEmpty ? "disabled" : null}
                onClick={toggleShowCart}
              >
                {t("button.chosen")}
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16.5 3C14.76 3 13.09 3.81 12 5.09C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.42 2 8.5C2 12.28 5.4 15.36 10.55 20.04L12 21.35L13.45 20.03C18.6 15.36 22 12.28 22 8.5C22 5.42 19.58 3 16.5 3ZM12.1 18.55L12 18.65L11.9 18.55C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5C9.04 5 10.54 5.99 11.07 7.36H12.94C13.46 5.99 14.96 5 16.5 5C18.5 5 20 6.5 20 8.5C20 11.39 16.86 14.24 12.1 18.55Z" />
                </svg>
              </Button>
            </Link>
          </div>
          {showCart && (
            <Cart
              handleRemoveFromCart={handleRemoveFromCart}
              toggleShowCart={toggleShowCart}
            />
          )}
          <GoodsList
            handleAddInCart={handleAddInCart}
            handleRemoveFromCart={handleRemoveFromCart}
          />
          <div className="palette">
            <h4>Палитра</h4>
            <div>
              <img src={palette_1} alt="palette_1" />
              <img src={palette_2} alt="palette_2" />
            </div>
          </div>
          <WholesaleOffers />
        </div>
      </WrapperBlock>
    </div>
  );
};
