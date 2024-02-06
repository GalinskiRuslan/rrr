import { Header } from "@/app/components/Header/Header"
import cl from "./Mission.module.css"
import Image from "next/image"
import src from './imgs/Group 3.png'
import logoSrc from './imgs/Group.png'

export const Mission = () => {
    return (
        <div className={cl.container}>
            <Header />
            <div className={cl.logoCont}>
                <p className={cl.title}>Миссия мероприятия «Stars of Rotary»</p>
                <a href="/"><Image alt="logo" src={logoSrc} /></a>
            </div>
            <p className={cl.subtitle}>“Вместе мы увидим мир, где все люди объединяются
                и действуют для долгосрочных изменений на всем земном шаре в нашем обществе и в самих себе”</p>
            <div className={cl.content}>
                <p>Конкурс, как вклад клуба Ротари Алматы, в поддержку талантливых детей подсветил необходимость на сегодняшний день обратить внимание
                    на систему музыкального образования в стране.</p>
                <p>В Казахстане много таланливыхмузыкантов и певцов (ДимашКудаберген, Марат Бисингалиев, Айман Мусохождаева, Гаухар Мурзабекова,
                    Аманбеки многие другие) известных во всем мире, которые достойно представляют нашу страну, повышая ее имидж на мировой арене.
                    Народ Казахстана всегда былмузыкально одарен, в каждом уголке великой страны находились самородки и таланты.</p>
                <p>Для того чтобы взрастить такие дарования, необходимо специальное музыкальное образование.
                    На сегодняшний день не у всех талантливых детей есть возможность получить доступ к музыкальному образованию, купить инструмент,
                    особенно в отдаленных регионах страны.</p>
                <p>Важно осветить эту проблему и обратить внимание государства на потребность в увеличении количества государственных музыкальных школ
                    и обновлении и пополнении их материально базы, особенно инструментов возможно в рамках пилотной национальной программы «Комфортная школа»</p>
                <Image alt="mission" src={src} />
            </div>
        </div>
    )
}