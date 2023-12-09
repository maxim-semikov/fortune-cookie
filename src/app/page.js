import Image from "next/image";
import {FortuneCookie} from "@/app/Components/FortuneCookie/FortuneCookie";
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
        <div className={styles.bgCard}>
            <Image
                src="/bg-shape.svg"
                alt="background shape"
                fill
            />
        </div>

      <div className={styles.description}>
          <h1 className={styles.logo}>Fortune Cookie</h1>
          <p>Все любят открывать печенье с предсказанием в конце еды... Теперь вы можете открывать столько, сколько захотите!</p>
      </div>
      <div className={styles.center}>
        <FortuneCookie />
      </div>

    </main>
  )
}
