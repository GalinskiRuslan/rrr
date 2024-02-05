import React from 'react'
import { LangCharger } from '../LaungeCharger/LaungeCharger'
import Link from 'next/link'
import { useTranslations } from 'next-intl';
import cl from './Header.module.css'


export const Header = () => {
    const t = useTranslations('header');
    return (
        <div className={cl.container}>
            <LangCharger />
            <Link style={{ marginRight: '20px' }} href='/'>{t("home")}</Link>
            <Link href='/About'>{t("about")}</Link>

        </div>
    )
}
