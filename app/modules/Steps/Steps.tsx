import cl from './Steps.module.css'
import Image from 'next/image'
import src from './imgs/back-music-school-concept-music-lesson-school-education-concept 1.png'
import src2 from './imgs/Group 3.png'
export const Steps = () => {
    return (
        <div className={cl.container}>
            <Image className={cl.backImg} alt='background' src={src} />
            <p className={cl.title}>Этапы конкурса</p>
            <div className={cl.content}>
                <div>
                    <div className={cl.item}>
                        <div><p className={cl.itemTitle}>1 этап</p>
                            <p className={cl.text}>для группы от 7 до 9 лет состоящий из одного тура в онлайн формате (Q код)</p></div>
                    </div>
                    <div className={cl.item}><div>
                        <p className={cl.itemTitle}>2 этап</p>
                        <p className={cl.text}>для группы от 10 до 12 летсостоящий из трех туров – первыйв онлайн формате, второй и третий в формате офлайн (Q код)</p></div>
                    </div>
                    <button className={cl.button}>Оставить заявку </button>
                </div>
                <div className={cl.right}>
                    <p>Дети, прошедшие отборочный тур в группе от 10 до 12 лет, приедут соревноваться в Алматы за званием финалистов международного конкурса с одним сопровождающим взрослым
                        Заявки для первой категории принимаются до конца февраля 2024 года, а для группы от 10 до 12 лет, до 15 марта</p>
                    <Image className={cl.bottomLine} alt='bottom' src={src2} />
                </div>
            </div>
        </div>
    )
}
