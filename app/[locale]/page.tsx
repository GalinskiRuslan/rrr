import styles from "./page.module.css";
import { MainTopBanner } from "../modules/MainTopBanner/MainTopBanner";
import { ConceptBlock } from "../modules/ConceptBlock/ConceptBlock";
import { ConsciousnessBlock } from "../modules/ConsciousnessBlock/ConsciousnessBlock";
import { EmpathyBlock } from "../modules/EmpathyBlock/EmpathyBlock";
import { Manifestation } from "../modules/Manifestation/Manifestation";


export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <MainTopBanner />
        <ConceptBlock />
        <ConsciousnessBlock />
        <EmpathyBlock />
        <Manifestation />
      </div>
    </main>
  );
}
