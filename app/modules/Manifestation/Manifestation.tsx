import { useTranslations } from 'next-intl';
import cl from './Manifestation.module.css'
import Image from 'next/image';
import src from './imgs/image 13.png'

export const Manifestation = () => {
    const t = useTranslations('main');
    return (
        <div className={cl.container}>
            <div className={cl.wrapper}>
                <div className={cl.left}>
                    <p className={cl.title}>{t('manifestation')}</p>
                    <p className={cl.text}>{t('aboutManifestation')}</p>
                    <audio style={{ margin: "40px 0" }} controls src="/Edvin Marton - C'est La Vie (megapesni.fm).mp3"></audio>
                </div>
                <div className={cl.right}><Image alt='image' src={src} /></div>
            </div>
        </div>
    )
}
