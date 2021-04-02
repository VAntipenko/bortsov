import React from "react";
import { useTranslation } from "react-i18next";
import { HashLink as Link } from "react-router-hash-link";

export const BurgerMenu = ({ linksKey }) => {
    const { t } = useTranslation();
    const burgerMenuRef = React.useRef();
    const [visiblePopup, setVisiblePopup] = React.useState(false);

    const toggleVisiblePopup = () => {
        setVisiblePopup((prevState) => !prevState);
    };

    const handleOutsideClick = (event) => {
        const path = event.path || (event.composedPath && event.composedPath());
        if (!path.includes(burgerMenuRef.current)) {
            setVisiblePopup(false);
        }
    };

    React.useEffect(() => {
        document.body.addEventListener("click", handleOutsideClick);
    }, []);

    return (
        <div ref={burgerMenuRef} className='burgerMenu'>
            <svg
                width='18'
                height='12'
                viewBox='0 0 18 12'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                onClick={toggleVisiblePopup}>
                <path d='M0 12H18V10H0V12ZM0 7H18V5H0V7ZM0 0V2H18V0H0Z' fill='#F4F4F4' />
            </svg>
            {visiblePopup && (
                <section>
                    <ul>
                        <li>
                            <svg
                                width='32'
                                height='32'
                                viewBox='0 0 32 32'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                                onClick={toggleVisiblePopup}>
                                <path
                                    d='M23.7418 10.5424L18.0849 16.1992L23.7418 21.8561L21.8562 23.7417L16.1993 18.0848L10.5425 23.7417L8.65685 21.8561L14.3137 16.1992L8.65685 10.5424L10.5425 8.65675L16.1993 14.3136L21.8562 8.65675L23.7418 10.5424Z'
                                    fill='#F4F4F4'
                                />
                            </svg>
                        </li>
                        {linksKey.map((link) => (
                            <Link key={link.key} to={`#${link.route}`}>
                                <li>{t([`header.navbarLinks.${link.key}`])}</li>
                            </Link>
                        ))}
                    </ul>
                </section>
            )}
        </div>
    );
};
