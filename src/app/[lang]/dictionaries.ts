import en from "./dictionaries/en.json";
import ru from "./dictionaries/ru.json";

const dictionaries = {
	en,
	ru,
};

export const getDictionary = (locale: keyof typeof dictionaries) => dictionaries[locale];
