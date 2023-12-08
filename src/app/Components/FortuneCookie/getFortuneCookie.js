'use server';


import {FORTUNE_MESSAGES} from "@/app/Components/FortuneCookie/fortuneMessages";

export const getFortuneCookie = async () => {
    const index = Math.floor(Math.random()*FORTUNE_MESSAGES.length);
    return FORTUNE_MESSAGES[index];
}
