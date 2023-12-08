'use client';
import {useState} from "react";
import Image from "next/image";
import {getFortuneCookie} from "@/app/Components/FortuneCookie/getFortuneCookie";
import styles from './fortuneCookie.module.css'

export const FortuneCookie = () => {
    const [showFortune, setShowFortune] = useState(false);
    const [fortuneMessage, setFortuneMessage] = useState('');

    const onClick = async () => {
        const fortune = await getFortuneCookie();
        setShowFortune(true);
        setFortuneMessage(fortune);
    }

    const reset = () => {
        setShowFortune(false);
        setFortuneMessage('');
    }

    return  <>
        {showFortune && (
            <div className={styles.container}>
                <div className={styles.cookieOpened}>
                    <Image
                        src="/fortune-cookie-opened.webp"
                        alt="fortune cookie opened"
                        width={667}
                        height={300}
                        priority
                    />
                    {fortuneMessage && <div className={styles.message}>{fortuneMessage}</div>}
                </div>

                {fortuneMessage && <button className={styles.back} onClick={reset}>🍪 Хочу еще одну печенюшку 🍪</button>}
            </div>

        )}

        {!showFortune && (
            <Image
                className={styles.cookie}
                src="/fortune-cookie.webp"
                alt="fortune cookie"
                width={475}
                height={300}
                priority
                onClick={onClick}
            />
        )}
    </>
}
