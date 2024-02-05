'use client'
import { Link } from "./NavigateLang"
import { usePathname } from "next/navigation";
import cl from "./LaungeCharger.module.css"
export const LangCharger = () => {
    const path = usePathname();
    return (
        <div className={cl.container}>
            <Link className={path.includes('/kz') ? 'activeLang' : 'langLink'} href='/' locale='kz'>KZ</Link>
            <Link className={path.includes('/ru') ? 'activeLang' : 'langLink'} href='/' locale='ru'>RU</Link>
            <Link className={path.includes('/en') ? 'activeLang' : 'langLink'} href='/' locale='en'>EN</Link>
            <Link className={path.includes('/ch') ? 'activeLang' : 'langLink'} href='/' locale='ch'>CH</Link>
        </div>
    )
}