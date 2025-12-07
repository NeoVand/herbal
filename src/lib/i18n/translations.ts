export type Language = 'en' | 'fa';

export interface Translations {
	// App
	appName: string;
	appTagline: string;
	
	// Navigation
	browseAllHerbs: string;
	backToSearch: string;
	backToAllHerbs: string;
	
	// Hero
	heroTitle1: string;
	heroTitle2: string;
	heroDescription: string;
	searchPlaceholder: string;
	clearSearch: string;
	
	// Categories
	browseByCategory: string;
	categories: {
		gastrointestinal: string;
		neuropsychiatric: string;
		respiratory: string;
		cardiovascular: string;
		musculoskeletal: string;
		metabolic: string;
		headachePain: string;
		dermatological: string;
		womensHealth: string;
		mensHealth: string;
		pediatric: string;
	};
	
	// Results
	resultsFor: string;
	remedies: string;
	allHerbalMedicines: string;
	herbs: string;
	herb: string;
	viewDetails: string;
	viewAll: string;
	
	// No Results
	noResultsTitle: string;
	noResultsDescription: string;
	clearSearchButton: string;
	
	// Featured
	featuredRemedies: string;
	featuredDescription: string;
	
	// About
	aboutTitle: string;
	aboutText1: string;
	aboutText2: string;
	disclaimer: string;
	
	// Footer
	footerTagline: string;
	footerSources: string;
	
	// Herb Detail Page
	mechanism: string;
	keyOutcome: string;
	dosage: string;
	overview: string;
	clinicalEvidence: string;
	howToUse: string;
	safetyAndInteractions: string;
	howItWorks: string;
	keyResearchFinding: string;
	scientificReferences: string;
	recommendedDosage: string;
	usageGuidelines: string;
	conditionsThisHerbMayHelp: string;
	importantSafetyNote: string;
	contraindications: string;
	doNotUseIf: string;
	drugInteractions: string;
	mayInteractWith: string;
	medicalDisclaimer: string;
	medicalDisclaimerText: string;
}

export const translations: Record<Language, Translations> = {
	en: {
		// App
		appName: 'Yasin Herbal',
		appTagline: 'Evidence-Based Phytotherapy',
		
		// Navigation
		browseAllHerbs: 'Browse All Herbs',
		backToSearch: 'Back to Search',
		backToAllHerbs: 'Back to All Herbs',
		
		// Hero
		heroTitle1: 'Natural Healing,',
		heroTitle2: 'Backed by Science',
		heroDescription: 'Discover evidence-based herbal medicines with clinical trials, proper dosages, and safety information. Type your condition below to find validated natural remedies.',
		searchPlaceholder: 'Search by condition (e.g., anxiety, IBS, nausea...)',
		clearSearch: 'Clear search',
		
		// Categories
		browseByCategory: 'Or browse by category:',
		categories: {
			gastrointestinal: 'Gastrointestinal',
			neuropsychiatric: 'Neuropsychiatric',
			respiratory: 'Respiratory',
			cardiovascular: 'Cardiovascular',
			musculoskeletal: 'Musculoskeletal',
			metabolic: 'Metabolic',
			headachePain: 'Headache & Pain',
			dermatological: 'Dermatological',
			womensHealth: "Women's Health",
			mensHealth: "Men's Health",
			pediatric: 'Pediatric'
		},
		
		// Results
		resultsFor: 'Results for',
		remedies: 'Remedies',
		allHerbalMedicines: 'All Herbal Medicines',
		herbs: 'herbs',
		herb: 'herb',
		viewDetails: 'View Details',
		viewAll: 'View All',
		
		// No Results
		noResultsTitle: 'No Results Found',
		noResultsDescription: "We couldn't find any herbs matching your search. Try a different term or browse our categories above.",
		clearSearchButton: 'Clear Search',
		
		// Featured
		featuredRemedies: 'Featured Remedies',
		featuredDescription: 'Clinically validated herbal medicines with strong evidence',
		
		// About
		aboutTitle: 'About This Guide',
		aboutText1: 'This guide focuses exclusively on the "uncontroversial core" of herbal medicine: botanical agents with safety profiles and efficacy data that rival, and in some instances surpass, synthetic pharmacotherapy.',
		aboutText2: 'Every herb listed here is supported by randomized controlled trials (RCTs), systematic reviews, and meta-analyses. We examine these agents not merely as alternatives, but as primary therapeutic options for specific conditions.',
		disclaimer: 'Disclaimer: This information is for educational purposes only and is not a substitute for professional medical advice. Always consult with a qualified healthcare provider before starting any new treatment.',
		
		// Footer
		footerTagline: 'Evidence-Based Phytotherapy Guide | Clinical Pharmacognosy Reference',
		footerSources: 'Based on research from NIH, Cochrane Library, EMA, and peer-reviewed journals',
		
		// Herb Detail Page
		mechanism: 'Mechanism',
		keyOutcome: 'Key Outcome',
		dosage: 'Dosage',
		overview: 'Overview',
		clinicalEvidence: 'Clinical Evidence',
		howToUse: 'How to Use',
		safetyAndInteractions: 'Safety & Interactions',
		howItWorks: 'How It Works',
		keyResearchFinding: 'Key Research Finding',
		scientificReferences: 'Scientific References',
		recommendedDosage: 'Recommended Dosage',
		usageGuidelines: 'Usage Guidelines',
		conditionsThisHerbMayHelp: 'Conditions This Herb May Help',
		importantSafetyNote: 'Important Safety Note',
		contraindications: 'Contraindications',
		doNotUseIf: 'Do not use this herb if you have:',
		drugInteractions: 'Drug Interactions',
		mayInteractWith: 'May interact with:',
		medicalDisclaimer: 'Medical Disclaimer:',
		medicalDisclaimerText: 'This information is for educational purposes only and should not be considered medical advice. Always consult with a qualified healthcare provider before starting any herbal supplement, especially if you are pregnant, nursing, taking medications, or have a medical condition.'
	},
	fa: {
		// App
		appName: 'گیاه‌درمانی یاسین',
		appTagline: 'گیاه‌درمانی مبتنی بر شواهد',
		
		// Navigation
		browseAllHerbs: 'مشاهده همه گیاهان',
		backToSearch: 'بازگشت به جستجو',
		backToAllHerbs: 'بازگشت به همه گیاهان',
		
		// Hero
		heroTitle1: 'درمان طبیعی،',
		heroTitle2: 'پشتیبانی‌شده توسط علم',
		heroDescription: 'گیاهان دارویی مبتنی بر شواهد را با آزمایش‌های بالینی، دوزهای مناسب و اطلاعات ایمنی کشف کنید. شرایط خود را در زیر تایپ کنید تا درمان‌های طبیعی تأیید شده را پیدا کنید.',
		searchPlaceholder: 'جستجو بر اساس بیماری (مثلاً اضطراب، IBS، تهوع...)',
		clearSearch: 'پاک کردن جستجو',
		
		// Categories
		browseByCategory: 'یا بر اساس دسته‌بندی جستجو کنید:',
		categories: {
			gastrointestinal: 'گوارشی',
			neuropsychiatric: 'اعصاب و روان',
			respiratory: 'تنفسی',
			cardiovascular: 'قلبی‌عروقی',
			musculoskeletal: 'عضلانی‌اسکلتی',
			metabolic: 'متابولیک',
			headachePain: 'سردرد و درد',
			dermatological: 'پوستی',
			womensHealth: 'سلامت زنان',
			mensHealth: 'سلامت مردان',
			pediatric: 'کودکان'
		},
		
		// Results
		resultsFor: 'نتایج برای',
		remedies: 'درمان‌ها',
		allHerbalMedicines: 'همه داروهای گیاهی',
		herbs: 'گیاه',
		herb: 'گیاه',
		viewDetails: 'مشاهده جزئیات',
		viewAll: 'مشاهده همه',
		
		// No Results
		noResultsTitle: 'نتیجه‌ای یافت نشد',
		noResultsDescription: 'ما نتوانستیم گیاهی مطابق با جستجوی شما پیدا کنیم. عبارت دیگری را امتحان کنید یا دسته‌بندی‌های بالا را مرور کنید.',
		clearSearchButton: 'پاک کردن جستجو',
		
		// Featured
		featuredRemedies: 'درمان‌های ویژه',
		featuredDescription: 'داروهای گیاهی با تأیید بالینی و شواهد قوی',
		
		// About
		aboutTitle: 'درباره این راهنما',
		aboutText1: 'این راهنما منحصراً بر روی "هسته بدون اختلاف" طب گیاهی تمرکز دارد: عوامل گیاهی با پروفایل‌های ایمنی و داده‌های کارآمدی که با داروهای مصنوعی رقابت می‌کنند و در برخی موارد از آن‌ها فراتر می‌روند.',
		aboutText2: 'هر گیاه ذکر شده در اینجا توسط آزمایش‌های کنترل‌شده تصادفی (RCTs)، بررسی‌های سیستماتیک و متاآنالیزها پشتیبانی می‌شود. ما این عوامل را نه صرفاً به عنوان جایگزین، بلکه به عنوان گزینه‌های درمانی اولیه برای شرایط خاص بررسی می‌کنیم.',
		disclaimer: 'سلب مسئولیت: این اطلاعات فقط برای اهداف آموزشی است و جایگزین توصیه پزشکی حرفه‌ای نیست. همیشه قبل از شروع هر درمان جدید با یک ارائه‌دهنده مراقبت‌های بهداشتی واجد شرایط مشورت کنید.',
		
		// Footer
		footerTagline: 'راهنمای گیاه‌درمانی مبتنی بر شواهد | مرجع فارماکوگنوزی بالینی',
		footerSources: 'بر اساس تحقیقات NIH، کتابخانه کاکرین، EMA و مجلات علمی معتبر',
		
		// Herb Detail Page
		mechanism: 'مکانیسم',
		keyOutcome: 'نتیجه کلیدی',
		dosage: 'دوز مصرف',
		overview: 'نمای کلی',
		clinicalEvidence: 'شواهد بالینی',
		howToUse: 'نحوه استفاده',
		safetyAndInteractions: 'ایمنی و تداخلات',
		howItWorks: 'نحوه عملکرد',
		keyResearchFinding: 'یافته کلیدی تحقیقات',
		scientificReferences: 'منابع علمی',
		recommendedDosage: 'دوز توصیه شده',
		usageGuidelines: 'دستورالعمل‌های استفاده',
		conditionsThisHerbMayHelp: 'شرایطی که این گیاه ممکن است کمک کند',
		importantSafetyNote: 'نکته ایمنی مهم',
		contraindications: 'موارد منع مصرف',
		doNotUseIf: 'از این گیاه استفاده نکنید اگر:',
		drugInteractions: 'تداخلات دارویی',
		mayInteractWith: 'ممکن است تداخل داشته باشد با:',
		medicalDisclaimer: 'سلب مسئولیت پزشکی:',
		medicalDisclaimerText: 'این اطلاعات فقط برای اهداف آموزشی است و نباید به عنوان توصیه پزشکی در نظر گرفته شود. همیشه قبل از شروع هر مکمل گیاهی، به ویژه اگر باردار هستید، شیر می‌دهید، دارو مصرف می‌کنید یا بیماری دارید، با یک ارائه‌دهنده مراقبت‌های بهداشتی واجد شرایط مشورت کنید.'
	}
};

export function getTranslation(lang: Language): Translations {
	return translations[lang];
}

