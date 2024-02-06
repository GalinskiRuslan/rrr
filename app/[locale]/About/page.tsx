import { Header } from '@/app/components/Header/Header'
import cl from './style.module.css'
import { Mission } from '@/app/modules/Mission/Mission'
import { Interesting } from '@/app/modules/Interesting/Interesting'
import { Steps } from '@/app/modules/Steps/Steps'

export default function About() {
    return (
        <>
            <Mission />
            <Interesting />
            <Steps />
        </>
    )
}
