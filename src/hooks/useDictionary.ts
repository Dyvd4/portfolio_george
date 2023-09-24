import { Locales, getDictionary } from "@/app/[lang]/dictionaries";
import { getCurrentLocale } from "@/utils/locale-utils";

const useDictionary = () => {
	return getDictionary(getCurrentLocale() as Locales);
};
export default useDictionary;
