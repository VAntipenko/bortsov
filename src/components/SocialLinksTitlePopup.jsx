import React from "react";
import { useTranslation } from "react-i18next";

import { LinkToMessenger } from "./LinkToMessenger";

export const SocialLinksTitlePopup = () => {
    const { t } = useTranslation();
    const socialLinkPopupRef = React.useRef();
    const [visiblePopup, setVisiblePopup] = React.useState(false);

    const toggleVisiblePopup = () => {
        setVisiblePopup((prevState) => !prevState);
    };

    const handleOutsideClick = (event) => {
        const path = event.path || (event.composedPath && event.composedPath());
        if (!path.includes(socialLinkPopupRef.current)) {
            setVisiblePopup(false);
        }
    };

    React.useEffect(() => {
        document.body.addEventListener("click", handleOutsideClick);
    }, []);

    return (
        <div ref={socialLinkPopupRef} className='socialLinksTitlePopup'>
            <div className='socialLinksTitlePopup__label'>
                066 077 63 26
                <svg
                    width='26'
                    height='25'
                    viewBox='0 0 26 25'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    onClick={toggleVisiblePopup}>
                    <g clipPath='url(#clip0)'>
                        <path
                            d='M8.36205 8.78974L13.1538 13.4763L17.9456 8.78974L19.4175 10.2325L13.1538 16.3721L6.89007 10.2325L8.36205 8.78974Z'
                            fill='#F4F4F4'
                        />
                    </g>
                    <defs>
                        <clipPath id='clip0'>
                            <rect
                                width='24.5581'
                                height='25.0549'
                                fill='white'
                                transform='matrix(0 -1 -1 0 25.6813 24.5581)'
                            />
                        </clipPath>
                    </defs>
                </svg>
            </div>
            {visiblePopup && (
                <section>
                    <span>‎096 484 49 49</span>
                    <span>061 270 60 90</span>
                    {t("header.socialMessangerLinksLabel")}
                    <div>
                        <LinkToMessenger url='viber://chat?number=%2B0660776326'>
                            Viber
                        </LinkToMessenger>
                        <LinkToMessenger url='https://t.me/barskij_dvor'>Telegram</LinkToMessenger>
                    </div>
                </section>
            )}
        </div>
    );
};
