import cl from "./MainTopBanner.module.css"
import Image from "next/image"
import firstLog from './imgs/Group.png'
import sectLog from './imgs/Group 5.png'
import imgC from './imgs/Group 33.png'
import arrow from './imgs/Group 3.png'
import { useTranslations } from "next-intl"
import { LangCharger } from "@/app/components/LaungeCharger/LaungeCharger"
import { Header } from "@/app/components/Header/Header"
export const MainTopBanner = () => {
    const t = useTranslations('main');
    return (
        <div className={cl.container}>
            <Header />
            <div className={cl.wrapper}>
                <div className={cl.leftContent}>
                    <div className={cl.logos}>
                        <a href="/" className={cl.line}><Image className={cl.logo} src={firstLog} alt="logo" /></a>
                        <a href="https://rotary-club-almaty.kz/"><Image className={cl.logo2} src={sectLog} alt="logo" /></a>
                    </div>
                    <div className={cl.contentText}>
                        <p className={cl.firstText}>{t('firstText')}</p>
                        <p className={cl.secText}>{t('secondText')}</p>
                        <div className={cl.list}>
                            <ul className={cl.treeText}><li>{t('piano')}</li><li>{t('violin')}</li><li>{t('violoncello')}</li></ul>
                            <Image src={imgC} className={cl.mobileImg} alt="child" />
                        </div>
                        <p className={cl.fourText}>{t('treeText')}</p>
                        <Image className={cl.arrowBot} alt="arrow" src={arrow} />
                    </div>
                </div>
                <div className={cl.rightContent}>
                    <Image src={imgC} alt="child" />
                </div>
            </div>
        </div>
    )
}
