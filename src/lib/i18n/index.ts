import { writable, derived } from 'svelte/store';
import { translations, type Language, type Translations } from './translations';

// Create a writable store for the current language
function createLanguageStore() {
	// Check if we're in a browser and get saved language, default to 'en'
	const initialLang: Language = typeof window !== 'undefined' 
		? (localStorage.getItem('lang') as Language) || 'en'
		: 'en';
	
	const { subscribe, set, update } = writable<Language>(initialLang);
	
	return {
		subscribe,
		set: (lang: Language) => {
			if (typeof window !== 'undefined') {
				localStorage.setItem('lang', lang);
				// Update document direction for RTL support
				document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';
				document.documentElement.lang = lang;
			}
			set(lang);
		},
		toggle: () => {
			update(current => {
				const newLang = current === 'en' ? 'fa' : 'en';
				if (typeof window !== 'undefined') {
					localStorage.setItem('lang', newLang);
					document.documentElement.dir = newLang === 'fa' ? 'rtl' : 'ltr';
					document.documentElement.lang = newLang;
				}
				return newLang;
			});
		}
	};
}

export const currentLang = createLanguageStore();

// Derived store for translations
export const t = derived(currentLang, ($currentLang) => translations[$currentLang]);

// Export types
export type { Language, Translations };
export { translations };


