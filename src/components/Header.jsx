import React from "react";
import { useTranslation, Trans } from "react-i18next";

import { Navbar } from "./Navbar";
import { Container } from "./Container";
import { SocialMessengerButton } from "./Button";
import { LinkToMessenger } from "./LinkToMessenger";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { SocialLinksTitlePopup } from "./SocialLinksTitlePopup";
import headerContentImg from "assets/images/headerContentImg.png";

export const Header = () => {
    const { t } = useTranslation();

    return (
        <div className='header'>
            <div className='header__socialLinksTitle'>
                <Container>
                    <div className='header__socialLinksTitle__content'>
                        <div className='header__socialLinksTitle__messangerLinks'>
                            {t("header.socialMessangerLinksLabel")}
                            <LinkToMessenger url='viber://chat?number=%2B0660776326'>
                                Viber
                            </LinkToMessenger>
                            <LinkToMessenger url='https://t.me/barskij_dvor'>
                                Telegram
                            </LinkToMessenger>
                        </div>
                        <div className='header__socialLinksTitle__phones'>
                            <span>061 270 60 90</span>
                            <span>‎096 484 49 49</span>
                            <span>066 077 63 26</span>
                        </div>
                        <SocialLinksTitlePopup />
                        <LanguageSwitcher />
                    </div>
                </Container>
            </div>
            <Container>
                <Navbar />
                <div className='header__content'>
                    <div className='header__wrapperContent'>
                        <div>
                            <img src={headerContentImg} alt='headerContentImg' />
                        </div>
                        <h1>
                            <Trans i18nKey='header.titleContentText'>
                                <span className='colorText'>Бетонні вироби</span>
                                <br />
                                <span className='oneLine'>від виробника</span>
                            </Trans>
                        </h1>
                        <div className='underblock' />
                        <h5>{t("header.subtext")}</h5>
                        <div className='header__content__btnGrp'>
                            <SocialMessengerButton
                                onClick={() => window.open("viber://chat?number=%2B0660776326")}>
                                Viber
                                <div className='socialMessengerButton__svg'>
                                    <svg
                                        width='32'
                                        height='34'
                                        viewBox='0 0 32 34'
                                        fill='none'
                                        xmlns='http://www.w3.org/2000/svg'>
                                        <path
                                            d='M31.1802 8.47252L31.1707 8.43461C30.4039 5.33488 26.9471 2.00871 23.7726 1.31672L23.7368 1.30935C18.6022 0.329826 13.396 0.329826 8.26244 1.30935L8.22557 1.31672C5.05212 2.00871 1.59535 5.33488 0.827526 8.43461L0.8191 8.47252C-0.128828 12.8014 -0.128828 17.1914 0.8191 21.5202L0.827526 21.5581C1.56259 24.5256 4.76195 27.6989 7.81797 28.5716V32.0318C7.81797 33.2841 9.34413 33.8992 10.212 32.9955L13.7178 29.3514C14.4781 29.3939 15.2389 29.4176 15.9996 29.4176C18.5843 29.4176 21.17 29.1733 23.7368 28.6835L23.7726 28.6761C26.9471 27.9841 30.4039 24.658 31.1707 21.5582L31.1802 21.5203C32.1281 17.1914 32.1281 12.8014 31.1802 8.47252ZM28.4059 20.8925C27.894 22.9147 25.2693 25.4288 23.1839 25.8933C20.4537 26.4125 17.702 26.6344 14.953 26.5582C14.8984 26.5568 14.8458 26.5779 14.8077 26.6171C14.4175 27.0176 12.2479 29.2448 12.2479 29.2448L9.52529 32.0391C9.32622 32.2465 8.97654 32.1054 8.97654 31.8189V26.0869C8.97654 25.9922 8.90892 25.9118 8.81592 25.8935C8.81539 25.8934 8.81487 25.8933 8.81434 25.8932C6.7289 25.4287 4.10525 22.9146 3.59231 20.8924C2.73918 16.9795 2.73918 13.013 3.59231 9.10016C4.10525 7.07791 6.7289 4.5638 8.81434 4.09931C13.5824 3.19246 18.4168 3.19246 23.1839 4.09931C25.2704 4.5638 27.894 7.07791 28.4059 9.10016C29.26 13.0131 29.26 16.9796 28.4059 20.8925Z'
                                            fill='#505155'
                                        />
                                        <path
                                            d='M20.5356 23.5383C20.215 23.441 19.9094 23.3756 19.6257 23.2579C16.6854 22.038 13.9794 20.4642 11.8359 18.0517C10.617 16.6799 9.66293 15.1311 8.85645 13.492C8.47402 12.7147 8.15172 11.9069 7.82321 11.1045C7.52367 10.3727 7.96488 9.61665 8.42947 9.06527C8.86541 8.5478 9.42637 8.15178 10.0339 7.85992C10.5081 7.6321 10.9758 7.76344 11.3221 8.16537C12.0708 9.0343 12.7584 9.94768 13.3153 10.9549C13.6577 11.5744 13.5638 12.3317 12.9432 12.7533C12.7924 12.8558 12.6549 12.9761 12.5144 13.0919C12.3912 13.1933 12.2752 13.2958 12.1907 13.4331C12.0363 13.6844 12.029 13.9808 12.1284 14.254C12.8937 16.3572 14.1836 17.9925 16.3004 18.8734C16.6392 19.0143 16.9794 19.1784 17.3696 19.1329C18.0231 19.0565 18.2347 18.3397 18.6927 17.9652C19.1403 17.5992 19.7123 17.5943 20.1945 17.8994C20.6768 18.2047 21.1444 18.5323 21.609 18.8635C22.0652 19.1885 22.5194 19.5065 22.9402 19.877C23.3447 20.2333 23.4841 20.7008 23.2562 21.1843C22.8391 22.0699 22.2323 22.8067 21.3568 23.2769C21.1096 23.4095 20.8144 23.4525 20.5356 23.5383C20.215 23.4409 20.8144 23.4525 20.5356 23.5383Z'
                                            fill='#505155'
                                        />
                                        <path
                                            d='M16.0071 6.84681C19.853 6.95456 23.0118 9.50691 23.6888 13.3092C23.8041 13.957 23.8452 14.6194 23.8965 15.277C23.9181 15.5535 23.7614 15.8163 23.463 15.8199C23.1547 15.8236 23.016 15.5657 22.9959 15.2892C22.9563 14.7419 22.9288 14.1922 22.8534 13.6495C22.4553 10.7845 20.1708 8.41427 17.3191 7.90565C16.89 7.82908 16.4508 7.80896 16.0162 7.76336C15.7414 7.7345 15.3815 7.71786 15.3206 7.37629C15.2695 7.08991 15.5112 6.86188 15.7839 6.84724C15.8581 6.84313 15.9326 6.8465 16.0071 6.84681C19.853 6.95456 15.9326 6.8465 16.0071 6.84681Z'
                                            fill='#505155'
                                        />
                                        <path
                                            d='M21.8519 14.4242C21.8456 14.4722 21.8422 14.5851 21.8141 14.6915C21.7121 15.0776 21.1267 15.126 20.9918 14.7362C20.9519 14.6206 20.9459 14.489 20.9457 14.3646C20.9443 13.55 20.7673 12.7362 20.3565 12.0275C19.9343 11.2991 19.2892 10.6867 18.5325 10.3162C18.075 10.0921 17.5802 9.95289 17.0787 9.8699C16.8595 9.83367 16.638 9.81165 16.4178 9.781C16.1509 9.74393 16.0084 9.57383 16.021 9.31083C16.0328 9.06437 16.2129 8.8871 16.4815 8.90227C17.3641 8.95241 18.2166 9.14315 19.0013 9.55866C20.597 10.4037 21.5085 11.7375 21.7745 13.5186C21.7865 13.5993 21.8059 13.6792 21.812 13.7602C21.8271 13.9602 21.8365 14.1604 21.8519 14.4242C21.8456 14.4722 21.8365 14.1604 21.8519 14.4242Z'
                                            fill='#505155'
                                        />
                                        <path
                                            d='M19.4596 14.3311C19.1378 14.3368 18.9656 14.1587 18.9324 13.8637C18.9093 13.658 18.8911 13.4496 18.842 13.2495C18.7453 12.8553 18.5359 12.4901 18.2043 12.2486C18.0478 12.1345 17.8704 12.0514 17.6846 11.9978C17.4486 11.9296 17.2035 11.9484 16.968 11.8907C16.7122 11.828 16.5708 11.6209 16.611 11.381C16.6476 11.1627 16.86 10.9922 17.0986 11.0095C18.5897 11.1171 19.6554 11.888 19.8075 13.6434C19.8182 13.7672 19.8308 13.8982 19.8033 14.0167C19.7563 14.2195 19.6061 14.3212 19.4596 14.3311C19.1378 14.3368 19.6061 14.3212 19.4596 14.3311Z'
                                            fill='#505155'
                                        />
                                    </svg>
                                </div>
                            </SocialMessengerButton>
                            <SocialMessengerButton
                                onClick={() => window.open("https://t.me/barskij_dvor")}>
                                Telegram
                                <div className='socialMessengerButton__svg'>
                                    <svg
                                        width='37'
                                        height='31'
                                        viewBox='0 0 37 31'
                                        fill='none'
                                        xmlns='http://www.w3.org/2000/svg'>
                                        <path
                                            d='M33.7951 0.595892L1.69694 13.1042C0.657277 13.5094 0.720262 15.0013 1.79047 15.3173L9.94697 17.7259L12.991 27.3849C13.309 28.3938 14.5875 28.6996 15.3276 27.9439L19.5447 23.638L27.8191 29.7116C28.8317 30.4549 30.2738 29.9027 30.5309 28.6732L36.0111 2.47247C36.2795 1.18908 35.0168 0.119821 33.7951 0.595892ZM29.7709 6.41048L14.8614 19.5949C14.7128 19.7263 14.6183 19.9082 14.5961 20.1054L14.0221 25.2082C14.0034 25.3746 13.7705 25.3966 13.7208 25.2367L11.3591 17.6267C11.2509 17.2783 11.3919 16.9008 11.7019 16.7086L29.3084 5.78885C29.7133 5.53754 30.1278 6.09493 29.7709 6.41048Z'
                                            fill='#505155'
                                        />
                                    </svg>
                                </div>
                            </SocialMessengerButton>
                        </div>
                    </div>
                </div>
                <svg
                    width='48'
                    height='48'
                    viewBox='0 0 48 48'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    className='arrowDown'>
                    <path
                        d='M33.18 27.18L26 34.34V6H22V34.34L14.82 27.16L12 30L24 42L36 30L33.18 27.18Z'
                        fill='#F4F4F4'
                    />
                </svg>
            </Container>
        </div>
    );
};
