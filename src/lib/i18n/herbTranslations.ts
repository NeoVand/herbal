import type { Language } from './translations';

export interface HerbTranslation {
	name: string;
	description: string;
	mechanism: string;
	keyOutcome: string;
	safetyNote: string;
	dosage: string;
	diseases: string[];
	detailedInfo: {
		overview: string;
		howItWorks: string;
		clinicalEvidence: string;
		usage: string;
		contraindications: string[];
		interactions: string[];
	};
}

export const herbTranslations: Record<string, Record<Language, HerbTranslation>> = {
	'peppermint-oil': {
		en: {
			name: 'Peppermint Oil',
			description: 'A powerful antispasmodic that relaxes gastrointestinal smooth muscle, providing superior relief for IBS symptoms compared to many conventional treatments.',
			mechanism: 'Calcium Channel Blocker',
			keyOutcome: 'NNT = 4 for global symptom relief',
			safetyNote: 'Must be enteric-coated (Heartburn risk)',
			dosage: '0.2 mL (180-225 mg) enteric-coated capsules, 30-90 min before meals',
			diseases: ['Irritable Bowel Syndrome', 'IBS', 'Abdominal Pain', 'Bloating', 'Digestive Issues', 'Stomach Cramps'],
			detailedInfo: {
				overview: 'Peppermint Oil has emerged not just as an alternative, but as a superior therapeutic agent for IBS with a favorable safety profile. The therapeutic efficacy is primarily attributed to L-menthol, a monoterpene that acts as a potent calcium channel blocker in gastrointestinal smooth muscle.',
				howItWorks: 'By inhibiting the influx of extracellular calcium ions through voltage-gated channels, menthol prevents the phosphorylation of myosin light chains. This blockade inhibits the interaction between actin and myosin, leading to the relaxation of smooth muscle and a reduction in colonic spasms. Additionally, menthol interacts with TRPM8 and TRPA1 channels on sensory afferent nerves in the colon, inducing an analgesic effect that modulates pain signaling pathways.',
				clinicalEvidence: 'A pivotal systematic review and meta-analysis identified 10 RCTs involving over 1,000 patients. The analysis demonstrated that peppermint oil was significantly superior to placebo for global improvement of IBS symptoms with a risk ratio (RR) for symptoms not improving was 0.65 (95% CI 0.43–0.98). This translates to a Number Needed to Treat (NNT) of approximately 4.',
				usage: 'Take enteric-coated capsules 30-90 minutes before meals. The enteric coating prevents gastric release and mitigates heartburn risk. Do not crush or chew capsules.',
				contraindications: ['Severe GERD', 'Hiatal Hernia', 'Achlorhydria (lack of stomach acid)', 'Children under 8 years without medical supervision'],
				interactions: ['Cyclosporine (may alter metabolism)', 'Antacids (may affect coating integrity)', 'H2 Blockers (may affect gastric pH)']
			}
		},
		fa: {
			name: 'روغن نعناع فلفلی',
			description: 'یک ضد اسپاسم قوی که عضلات صاف دستگاه گوارش را شل می‌کند و تسکین برتری برای علائم IBS نسبت به بسیاری از درمان‌های متعارف فراهم می‌کند.',
			mechanism: 'مسدود کننده کانال کلسیم',
			keyOutcome: 'NNT = ۴ برای تسکین کلی علائم',
			safetyNote: 'باید روکش روده‌ای داشته باشد (خطر سوزش سر دل)',
			dosage: '۰.۲ میلی‌لیتر (۱۸۰-۲۲۵ میلی‌گرم) کپسول با پوشش روده‌ای، ۳۰-۹۰ دقیقه قبل از غذا',
			diseases: ['سندرم روده تحریک‌پذیر', 'IBS', 'درد شکم', 'نفخ', 'مشکلات گوارشی', 'گرفتگی معده'],
			detailedInfo: {
				overview: 'روغن نعناع فلفلی نه تنها به عنوان یک جایگزین، بلکه به عنوان یک عامل درمانی برتر برای IBS با پروفایل ایمنی مطلوب ظاهر شده است. اثربخشی درمانی عمدتاً به ال-منتول نسبت داده می‌شود، یک مونوترپن که به عنوان یک مسدود کننده قوی کانال کلسیم در عضلات صاف دستگاه گوارش عمل می‌کند.',
				howItWorks: 'با مهار ورود یون‌های کلسیم خارج سلولی از طریق کانال‌های ولتاژ-دریچه‌ای، منتول از فسفوریلاسیون زنجیره‌های سبک میوزین جلوگیری می‌کند. این انسداد تعامل بین اکتین و میوزین را مهار می‌کند که منجر به شل شدن عضلات صاف و کاهش اسپاسم‌های کولون می‌شود.',
				clinicalEvidence: 'یک بررسی سیستماتیک و متاآنالیز محوری ۱۰ آزمایش کنترل‌شده تصادفی شامل بیش از ۱۰۰۰ بیمار را شناسایی کرد. تحلیل نشان داد که روغن نعناع به طور قابل توجهی از پلاسبو برای بهبود کلی علائم IBS برتر بود.',
				usage: 'کپسول‌های با پوشش روده‌ای را ۳۰-۹۰ دقیقه قبل از غذا مصرف کنید. پوشش روده‌ای از آزادسازی معده‌ای جلوگیری می‌کند و خطر سوزش سر دل را کاهش می‌دهد. کپسول‌ها را له نکنید یا نجوید.',
				contraindications: ['GERD شدید', 'فتق هیاتال', 'آکلرهیدریا (فقدان اسید معده)', 'کودکان زیر ۸ سال بدون نظارت پزشکی'],
				interactions: ['سیکلوسپورین (ممکن است متابولیسم را تغییر دهد)', 'آنتی‌اسیدها (ممکن است بر یکپارچگی پوشش تأثیر بگذارد)', 'مسدود کننده‌های H2 (ممکن است بر pH معده تأثیر بگذارد)']
			}
		}
	},
	'psyllium-husk': {
		en: {
			name: 'Psyllium Husk',
			description: 'The only fiber supplement with strong recommendation from the American College of Gastroenterology for chronic constipation treatment.',
			mechanism: 'Gel-forming soluble fiber',
			keyOutcome: 'Superior to Docusate; strong ACG recommendation',
			safetyNote: 'Take with adequate water; low gas profile',
			dosage: '5-10g daily with at least 8 oz water per dose',
			diseases: ['Constipation', 'Chronic Constipation', 'Diarrhea', 'Irregular Bowel Movements', 'Digestive Health'],
			detailedInfo: {
				overview: 'Unlike insoluble fibers which mechanically irritate the gut mucosa, or soluble fermentable fibers which can cause excessive gas, psyllium is a soluble, non-fermenting, gel-forming fiber. Upon hydration, psyllium husk expands to form a viscous, mucilaginous gel with dual action benefits.',
				howItWorks: 'The gel softens hard, dry stool by retaining water (treating constipation) and adds viscosity and bulk to loose, watery stool (treating diarrhea). Because it is minimally fermented by colonic bacteria, it produces significantly less flatulence and bloating compared to other fiber sources.',
				clinicalEvidence: 'Psyllium is the only fiber supplement to receive a "strong recommendation" with a "high quality of evidence" from the American College of Gastroenterology. Systematic reviews indicate that psyllium improves stool frequency and consistency significantly more than placebo.',
				usage: 'Mix 5-10g with at least 8 oz of water and drink immediately. Follow with additional water. Best taken consistently at the same times each day. Start with lower doses and increase gradually.',
				contraindications: ['Bowel obstruction', 'Difficulty swallowing', 'Fecal impaction', 'Esophageal stricture'],
				interactions: ['May decrease absorption of medications taken at the same time', 'Take other medications 1-2 hours before or 2-4 hours after psyllium']
			}
		},
		fa: {
			name: 'پوسته اسفرزه',
			description: 'تنها مکمل فیبری با توصیه قوی از کالج گوارش آمریکا برای درمان یبوست مزمن.',
			mechanism: 'فیبر محلول ژل‌ساز',
			keyOutcome: 'برتر از دوکوزات؛ توصیه قوی ACG',
			safetyNote: 'با آب کافی مصرف شود؛ گاز کم',
			dosage: '۵-۱۰ گرم روزانه با حداقل ۲۴۰ میلی‌لیتر آب در هر دوز',
			diseases: ['یبوست', 'یبوست مزمن', 'اسهال', 'حرکات نامنظم روده', 'سلامت گوارش'],
			detailedInfo: {
				overview: 'بر خلاف فیبرهای نامحلول که مخاط روده را به طور مکانیکی تحریک می‌کنند، یا فیبرهای محلول تخمیری که می‌توانند گاز زیادی ایجاد کنند، اسفرزه یک فیبر محلول، غیر تخمیری و ژل‌ساز است.',
				howItWorks: 'ژل با حفظ آب، مدفوع سخت و خشک را نرم می‌کند (درمان یبوست) و به مدفوع شل و آبکی ویسکوزیته و حجم اضافه می‌کند (درمان اسهال). از آنجا که حداقل توسط باکتری‌های کولون تخمیر می‌شود، نفخ و گاز بسیار کمتری نسبت به سایر منابع فیبر تولید می‌کند.',
				clinicalEvidence: 'اسفرزه تنها مکمل فیبری است که "توصیه قوی" با "شواهد با کیفیت بالا" از کالج گوارش آمریکا دریافت کرده است.',
				usage: '۵-۱۰ گرم را با حداقل ۲۴۰ میلی‌لیتر آب مخلوط کنید و فوراً بنوشید. با آب اضافی دنبال کنید. بهتر است به طور منظم در زمان‌های یکسان هر روز مصرف شود.',
				contraindications: ['انسداد روده', 'مشکل در بلع', 'انحشار مدفوع', 'تنگی مری'],
				interactions: ['ممکن است جذب داروهای مصرفی همزمان را کاهش دهد', 'سایر داروها را ۱-۲ ساعت قبل یا ۲-۴ ساعت بعد از اسفرزه مصرف کنید']
			}
		}
	},
	'ginger': {
		en: {
			name: 'Ginger',
			description: 'A broad-spectrum anti-emetic effective for pregnancy-induced nausea, chemotherapy side effects, and postoperative nausea.',
			mechanism: '5-HT3 (serotonin) and cholinergic M3 receptor antagonist',
			keyOutcome: 'Superior to placebo in pregnancy and chemotherapy nausea',
			safetyNote: 'Caution with anticoagulants; safe in pregnancy at recommended doses',
			dosage: '250-1000mg daily in divided doses',
			diseases: ['Nausea', 'Morning Sickness', 'Pregnancy Nausea', 'Chemotherapy Nausea', 'Motion Sickness', 'Postoperative Nausea'],
			detailedInfo: {
				overview: 'Ginger possesses a therapeutic pedigree spanning thousands of years, yet it remains one of the most relevant agents in modern anti-emetic therapy. The rhizome contains a lipophilic oleoresin rich in gingerols and shogaols.',
				howItWorks: 'Ginger compounds inhibit the 5-HT3 serotonin receptors in the gastrointestinal tract and the chemoreceptor trigger zone, which are the same targets modulated by pharmaceutical drugs like ondansetron.',
				clinicalEvidence: 'Systematic reviews confirm ginger is consistently superior to placebo and comparable to Vitamin B6 in reducing pregnancy nausea severity. For chemotherapy, adding ginger to standard anti-emetic therapy significantly reduces acute nausea.',
				usage: 'Take in divided doses of 250mg, 3-4 times daily. Can be taken as capsules, fresh ginger tea, or crystallized ginger.',
				contraindications: ['Active bleeding disorders', 'Prior to surgery (stop 7-14 days before)', 'Very high doses (>1g/day) near term in pregnancy'],
				interactions: ['Warfarin (increased bleeding risk)', 'Aspirin and other antiplatelet drugs', 'Anticoagulants']
			}
		},
		fa: {
			name: 'زنجبیل',
			description: 'یک ضد تهوع طیف وسیع مؤثر برای تهوع ناشی از بارداری، عوارض جانبی شیمی‌درمانی و تهوع پس از عمل.',
			mechanism: 'آنتاگونیست گیرنده 5-HT3 (سروتونین) و کولینرژیک M3',
			keyOutcome: 'برتر از پلاسبو در تهوع بارداری و شیمی‌درمانی',
			safetyNote: 'احتیاط با داروهای ضد انعقاد؛ در بارداری با دوزهای توصیه شده بی‌خطر است',
			dosage: '۲۵۰-۱۰۰۰ میلی‌گرم روزانه در دوزهای تقسیم شده',
			diseases: ['تهوع', 'بیماری صبحگاهی', 'تهوع بارداری', 'تهوع شیمی‌درمانی', 'بیماری حرکت', 'تهوع پس از عمل'],
			detailedInfo: {
				overview: 'زنجبیل دارای سابقه درمانی هزاران ساله است، اما همچنان یکی از مرتبط‌ترین عوامل در درمان ضد تهوع مدرن است. ریزوم حاوی اولئورزین لیپوفیل غنی از جینجرول‌ها و شوگائول‌ها است.',
				howItWorks: 'ترکیبات زنجبیل گیرنده‌های سروتونین 5-HT3 را در دستگاه گوارش و منطقه محرک گیرنده شیمیایی مهار می‌کنند که همان اهداف داروهایی مانند اندانسترون هستند.',
				clinicalEvidence: 'بررسی‌های سیستماتیک تأیید می‌کنند که زنجبیل به طور مداوم از پلاسبو برتر و با ویتامین B6 در کاهش شدت تهوع بارداری قابل مقایسه است.',
				usage: 'در دوزهای تقسیم شده ۲۵۰ میلی‌گرم، ۳-۴ بار در روز مصرف کنید. می‌تواند به صورت کپسول، چای زنجبیل تازه یا زنجبیل کریستالیزه مصرف شود.',
				contraindications: ['اختلالات خونریزی فعال', 'قبل از جراحی (۷-۱۴ روز قبل قطع شود)', 'دوزهای بسیار بالا (>۱ گرم/روز) نزدیک به زایمان'],
				interactions: ['وارفارین (افزایش خطر خونریزی)', 'آسپرین و سایر داروهای ضد پلاکت', 'داروهای ضد انعقاد']
			}
		}
	},
	'lavender-silexan': {
		en: {
			name: 'Lavender (Silexan)',
			description: 'A pharmaceutical-grade lavender oil preparation that rivals benzodiazepines and SSRIs for anxiety without the sedation or dependence risks.',
			mechanism: 'Voltage-gated calcium channel (VGCC) modulator',
			keyOutcome: 'Comparable to Lorazepam and Paroxetine in clinical trials',
			safetyNote: 'No sedation, dependency, or withdrawal; "lavender burps" common',
			dosage: '80mg once daily (pharmaceutical-grade Silexan preparation)',
			diseases: ['Anxiety', 'Generalized Anxiety Disorder', 'GAD', 'Stress', 'Nervousness', 'Restlessness'],
			detailedInfo: {
				overview: 'While lavender has a reputation as a mild aromatherapeutic, Silexan—a proprietary, pharmaceutical-grade essential oil of Lavandula angustifolia prepared for oral administration—is a potent anxiolytic drug.',
				howItWorks: 'Silexan acts by inhibiting voltage-gated calcium channels (VGCCs), specifically the P/Q-type channels, in the hippocampus and other brain regions involved in anxiety.',
				clinicalEvidence: 'In head-to-head trials, Silexan (80mg/day) demonstrated anxiolytic efficacy comparable to lorazepam (0.5mg/day) over 6 weeks and comparable to paroxetine (20mg/day).',
				usage: 'Take one 80mg capsule daily. Effects may take 2-4 weeks to reach maximum benefit. Can be taken with or without food.',
				contraindications: ['Hypersensitivity to lavender', 'Not recommended for children/adolescents (insufficient data)'],
				interactions: ['May enhance CNS depressant effects when combined with sedatives', 'Theoretical interaction with CYP3A4 metabolized drugs']
			}
		},
		fa: {
			name: 'اسطوخودوس (سیلکسان)',
			description: 'یک فرآورده روغن اسطوخودوس با درجه دارویی که با بنزودیازپین‌ها و SSRI‌ها برای اضطراب رقابت می‌کند بدون خطر خواب‌آلودگی یا وابستگی.',
			mechanism: 'تعدیل‌کننده کانال کلسیم ولتاژ-دریچه‌ای (VGCC)',
			keyOutcome: 'قابل مقایسه با لورازپام و پاروکستین در کارآزمایی‌های بالینی',
			safetyNote: 'بدون خواب‌آلودگی، وابستگی یا ترک؛ "آروغ اسطوخودوس" رایج است',
			dosage: '۸۰ میلی‌گرم یک بار در روز (فرآورده سیلکسان با درجه دارویی)',
			diseases: ['اضطراب', 'اختلال اضطراب فراگیر', 'GAD', 'استرس', 'عصبانیت', 'بی‌قراری'],
			detailedInfo: {
				overview: 'در حالی که اسطوخودوس به عنوان یک رایحه‌درمانی ملایم شناخته می‌شود، سیلکسان - یک روغن ضروری اختصاصی با درجه دارویی از Lavandula angustifolia که برای مصرف خوراکی آماده شده - یک داروی ضد اضطراب قوی است.',
				howItWorks: 'سیلکسان با مهار کانال‌های کلسیم ولتاژ-دریچه‌ای (VGCCs)، به ویژه کانال‌های نوع P/Q، در هیپوکامپ و سایر مناطق مغزی درگیر در اضطراب عمل می‌کند.',
				clinicalEvidence: 'در آزمایش‌های مقایسه‌ای، سیلکسان (۸۰ میلی‌گرم در روز) اثربخشی ضد اضطرابی قابل مقایسه با لورازپام (۰.۵ میلی‌گرم در روز) در ۶ هفته و قابل مقایسه با پاروکستین (۲۰ میلی‌گرم در روز) نشان داد.',
				usage: 'یک کپسول ۸۰ میلی‌گرمی روزانه مصرف کنید. اثرات ممکن است ۲-۴ هفته طول بکشد تا به حداکثر مزیت برسد. می‌تواند با یا بدون غذا مصرف شود.',
				contraindications: ['حساسیت به اسطوخودوس', 'برای کودکان/نوجوانان توصیه نمی‌شود (داده‌های ناکافی)'],
				interactions: ['ممکن است اثرات سرکوب‌کننده CNS را هنگام ترکیب با آرام‌بخش‌ها تقویت کند', 'تداخل نظری با داروهای متابولیز شده توسط CYP3A4']
			}
		}
	},
	'saffron': {
		en: {
			name: 'Saffron',
			description: 'A rigorously validated antidepressant that matches the efficacy of SSRIs like fluoxetine but without the notorious sexual side effects.',
			mechanism: 'Monoamine reuptake inhibition; antioxidant/anti-neuroinflammatory',
			keyOutcome: 'Comparable to Fluoxetine (Prozac) with fewer side effects',
			safetyNote: 'No sexual side effects; excellent tolerability',
			dosage: '30mg daily of standardized extract',
			diseases: ['Depression', 'Major Depressive Disorder', 'MDD', 'Low Mood', 'Mild Depression'],
			detailedInfo: {
				overview: 'Saffron, the world\'s most expensive spice, has emerged as a rigorously validated antidepressant. The dried stigmas contain crocin, crocetin, and safranal—compounds with potent neuroprotective and monoaminergic activity.',
				howItWorks: 'Saffron\'s constituents inhibit the reuptake of dopamine, norepinephrine, and serotonin, similar to tricyclic antidepressants. Additionally, they exert antioxidant effects that reduce neuroinflammation.',
				clinicalEvidence: 'Meta-analyses reveal that saffron extracts (30mg/day) are statistically non-inferior to standard doses of fluoxetine and imipramine for mild to moderate MDD.',
				usage: 'Take 30mg of standardized saffron extract daily, typically as 15mg twice daily. Effects may take 4-6 weeks to fully manifest.',
				contraindications: ['Pregnancy (high doses may be abortifacient)', 'Bipolar disorder (insufficient data)', 'Bleeding disorders'],
				interactions: ['May enhance effects of antidepressants', 'Anticoagulants (theoretical bleeding risk)', 'Blood pressure medications']
			}
		},
		fa: {
			name: 'زعفران',
			description: 'یک ضد افسردگی با تأیید دقیق که با اثربخشی SSRI‌هایی مانند فلوکستین مطابقت دارد اما بدون عوارض جانبی جنسی بدنام.',
			mechanism: 'مهار بازجذب مونوآمین؛ آنتی‌اکسیدان/ضد التهاب عصبی',
			keyOutcome: 'قابل مقایسه با فلوکستین (پروزاک) با عوارض جانبی کمتر',
			safetyNote: 'بدون عوارض جانبی جنسی؛ تحمل‌پذیری عالی',
			dosage: '۳۰ میلی‌گرم روزانه از عصاره استاندارد شده',
			diseases: ['افسردگی', 'اختلال افسردگی اساسی', 'MDD', 'خلق پایین', 'افسردگی خفیف'],
			detailedInfo: {
				overview: 'زعفران، گران‌ترین ادویه جهان، به عنوان یک ضد افسردگی با تأیید دقیق ظاهر شده است. کلاله‌های خشک حاوی کروسین، کروستین و سافرانال هستند - ترکیباتی با فعالیت محافظت عصبی و مونوآمینرژیک قوی.',
				howItWorks: 'ترکیبات زعفران بازجذب دوپامین، نوراپی‌نفرین و سروتونین را مهار می‌کنند، مشابه ضد افسردگی‌های سه‌حلقه‌ای. علاوه بر این، اثرات آنتی‌اکسیدانی دارند که التهاب عصبی را کاهش می‌دهد.',
				clinicalEvidence: 'متاآنالیزها نشان می‌دهند که عصاره‌های زعفران (۳۰ میلی‌گرم در روز) از نظر آماری نسبت به دوزهای استاندارد فلوکستین و ایمی‌پرامین برای MDD خفیف تا متوسط کمتر نیستند.',
				usage: '۳۰ میلی‌گرم عصاره زعفران استاندارد شده روزانه مصرف کنید، معمولاً ۱۵ میلی‌گرم دو بار در روز. اثرات ممکن است ۴-۶ هفته طول بکشد تا کاملاً ظاهر شود.',
				contraindications: ['بارداری (دوزهای بالا ممکن است سقط‌آور باشد)', 'اختلال دوقطبی (داده‌های ناکافی)', 'اختلالات خونریزی'],
				interactions: ['ممکن است اثرات ضد افسردگی‌ها را تقویت کند', 'داروهای ضد انعقاد (خطر خونریزی نظری)', 'داروهای فشار خون']
			}
		}
	},
	'valerian': {
		en: {
			name: 'Valerian Root',
			description: 'A gentle sleep aid that improves subjective sleep quality without morning grogginess or impaired reaction time.',
			mechanism: 'GABA-A receptor modulation; GABA breakdown inhibition',
			keyOutcome: 'RR 1.8 for improved sleep quality vs placebo',
			safetyNote: 'No hangover effect; cumulative effect over 2-4 weeks',
			dosage: '300-600mg standardized extract 30-60 minutes before bedtime',
			diseases: ['Insomnia', 'Sleep Problems', 'Sleep Quality', 'Night Awakenings', 'Difficulty Sleeping'],
			detailedInfo: {
				overview: 'Valerian is perhaps the most widely recognized herbal sedative, yet its clinical application requires nuanced understanding. It is not a rapid-onset hypnotic like zolpidem.',
				howItWorks: 'Valerian extracts contain valerenic acid and various lignans which interact with the GABA-A receptor and also inhibit the enzymatic breakdown of GABA.',
				clinicalEvidence: 'Meta-analysis showed a relative risk of improved sleep quality of 1.8 compared to placebo. Patients consistently report feeling more rested.',
				usage: 'Take 300-600mg of standardized extract 30-60 minutes before bedtime. Use consistently every night for at least 2-4 weeks to see full benefits.',
				contraindications: ['Liver disease', 'Pregnancy and breastfeeding', 'Children under 3 years'],
				interactions: ['Benzodiazepines and other sedatives', 'Alcohol', 'Anesthetics (discontinue 2 weeks before surgery)']
			}
		},
		fa: {
			name: 'ریشه سنبل‌الطیب',
			description: 'یک کمک خواب ملایم که کیفیت خواب ذهنی را بدون خواب‌آلودگی صبحگاهی یا اختلال در زمان واکنش بهبود می‌بخشد.',
			mechanism: 'تعدیل گیرنده GABA-A؛ مهار تجزیه GABA',
			keyOutcome: 'RR ۱.۸ برای بهبود کیفیت خواب در مقایسه با پلاسبو',
			safetyNote: 'بدون اثر خماری؛ اثر تجمعی در طی ۲-۴ هفته',
			dosage: '۳۰۰-۶۰۰ میلی‌گرم عصاره استاندارد ۳۰-۶۰ دقیقه قبل از خواب',
			diseases: ['بی‌خوابی', 'مشکلات خواب', 'کیفیت خواب', 'بیداری‌های شبانه', 'مشکل در خوابیدن'],
			detailedInfo: {
				overview: 'سنبل‌الطیب شاید شناخته‌شده‌ترین آرام‌بخش گیاهی باشد، اما کاربرد بالینی آن نیاز به درک ظریف دارد. این یک هیپنوتیک با شروع سریع مانند زولپیدم نیست.',
				howItWorks: 'عصاره‌های سنبل‌الطیب حاوی اسید والرنیک و لیگنان‌های مختلفی هستند که با گیرنده GABA-A تعامل دارند و همچنین تجزیه آنزیمی GABA را مهار می‌کنند.',
				clinicalEvidence: 'متاآنالیز نشان داد که خطر نسبی بهبود کیفیت خواب ۱.۸ در مقایسه با پلاسبو است. بیماران به طور مداوم احساس استراحت بیشتر را گزارش می‌دهند.',
				usage: '۳۰۰-۶۰۰ میلی‌گرم عصاره استاندارد را ۳۰-۶۰ دقیقه قبل از خواب مصرف کنید. به طور منظم هر شب حداقل برای ۲-۴ هفته استفاده کنید.',
				contraindications: ['بیماری کبدی', 'بارداری و شیردهی', 'کودکان زیر ۳ سال'],
				interactions: ['بنزودیازپین‌ها و سایر آرام‌بخش‌ها', 'الکل', 'بیهوش‌کننده‌ها (۲ هفته قبل از جراحی قطع شود)']
			}
		}
	}
};

// Add more herbs translations - continuing with remaining herbs
const additionalHerbTranslations: Record<string, Record<Language, HerbTranslation>> = {
	'pelargonium': {
		en: {
			name: 'Pelargonium sidoides',
			description: 'A South African medicinal plant uniquely included in official medical guidelines for acute bronchitis treatment, with triple-action benefits.',
			mechanism: 'Antiviral, antibacterial, and mucolytic/secretomotor',
			keyOutcome: 'Rapid symptom resolution; included in medical guidelines',
			safetyNote: 'Well-tolerated; avoid in severe hepatic/renal failure',
			dosage: 'EPs 7630 extract: Adults 30 drops 3x daily; Children (6-12) 20 drops 3x daily for 7-10 days',
			diseases: ['Acute Bronchitis', 'Bronchitis', 'Cough', 'Respiratory Infection', 'Upper Respiratory Infection', 'Cold'],
			detailedInfo: {
				overview: 'Pelargonium sidoides is the source of the specialized extract EPs 7630. This extract is unique in that it is one of the few herbal preparations included in official medical guidelines for the treatment of acute bronchitis.',
				howItWorks: 'The extract acts via a triad of mechanisms: Antiviral, Antibacterial, and Mucolytic/Secretomotor.',
				clinicalEvidence: 'Cochrane reviews confirm EPs 7630 is effective in relieving symptoms of acute bronchitis in adults and children.',
				usage: 'Take as liquid drops or tablets according to package instructions. Start at first sign of symptoms and continue for 7-10 days.',
				contraindications: ['Severe liver disease', 'Severe kidney disease', 'Bleeding disorders', 'Autoimmune conditions'],
				interactions: ['Anticoagulants', 'Immunosuppressants']
			}
		},
		fa: {
			name: 'پلارگونیوم سیدوئیدس',
			description: 'یک گیاه دارویی آفریقای جنوبی که به طور منحصر به فرد در دستورالعمل‌های پزشکی رسمی برای درمان برونشیت حاد گنجانده شده است.',
			mechanism: 'ضد ویروس، ضد باکتری و موکولیتیک/ترشحی‌حرکتی',
			keyOutcome: 'رفع سریع علائم؛ شامل در دستورالعمل‌های پزشکی',
			safetyNote: 'تحمل خوب؛ در نارسایی شدید کبدی/کلیوی اجتناب شود',
			dosage: 'عصاره EPs 7630: بزرگسالان ۳۰ قطره ۳ بار در روز؛ کودکان (۶-۱۲) ۲۰ قطره ۳ بار در روز برای ۷-۱۰ روز',
			diseases: ['برونشیت حاد', 'برونشیت', 'سرفه', 'عفونت تنفسی', 'عفونت تنفسی فوقانی', 'سرماخوردگی'],
			detailedInfo: {
				overview: 'پلارگونیوم سیدوئیدس منبع عصاره تخصصی EPs 7630 است. این عصاره منحصر به فرد است زیرا یکی از معدود فرآورده‌های گیاهی است که در دستورالعمل‌های پزشکی رسمی برای درمان برونشیت حاد گنجانده شده است.',
				howItWorks: 'عصاره از طریق سه مکانیسم عمل می‌کند: ضد ویروس، ضد باکتری و موکولیتیک/ترشحی‌حرکتی.',
				clinicalEvidence: 'بررسی‌های کاکرین تأیید می‌کنند که EPs 7630 در تسکین علائم برونشیت حاد در بزرگسالان و کودکان مؤثر است.',
				usage: 'طبق دستورالعمل بسته به صورت قطره مایع یا قرص مصرف کنید. در اولین علائم شروع کنید و برای ۷-۱۰ روز ادامه دهید.',
				contraindications: ['بیماری شدید کبدی', 'بیماری شدید کلیوی', 'اختلالات خونریزی', 'بیماری‌های خودایمنی'],
				interactions: ['داروهای ضد انعقاد', 'سرکوب‌کننده‌های ایمنی']
			}
		}
	},
	'garlic': {
		en: {
			name: 'Garlic',
			description: 'A cardiovascular powerhouse that can lower blood pressure comparably to standard monotherapy medications.',
			mechanism: 'Nitric oxide and hydrogen sulfide production; mild ACE inhibition',
			keyOutcome: 'SBP reduction of 8-9 mmHg in hypertensive patients',
			safetyNote: 'May increase bleeding risk; garlic breath common',
			dosage: '600-1200mg aged garlic extract (AGE) daily',
			diseases: ['Hypertension', 'High Blood Pressure', 'Cardiovascular Health', 'High Cholesterol', 'Arterial Stiffness'],
			detailedInfo: {
				overview: 'Aged Garlic Extract (AGE) is the preferred form for cardiovascular applications due to its stability and standardization.',
				howItWorks: 'Garlic\'s polysulfides are metabolized into hydrogen sulfide (H2S) and nitric oxide (NO), gaseous signaling molecules that induce vasodilation.',
				clinicalEvidence: 'Meta-analysis of RCTs indicates that garlic supplements reduce Systolic Blood Pressure (SBP) by an average of 8-9 mmHg.',
				usage: 'Take 600-1200mg of aged garlic extract daily in divided doses with food.',
				contraindications: ['Scheduled surgery', 'Active bleeding', 'Taking anticoagulants without medical supervision'],
				interactions: ['Anticoagulants', 'Antiplatelet drugs', 'HIV protease inhibitors']
			}
		},
		fa: {
			name: 'سیر',
			description: 'یک نیروگاه قلبی‌عروقی که می‌تواند فشار خون را به طور قابل مقایسه با داروهای تک‌درمانی استاندارد کاهش دهد.',
			mechanism: 'تولید اکسید نیتریک و هیدروژن سولفید؛ مهار خفیف ACE',
			keyOutcome: 'کاهش فشار خون سیستولیک ۸-۹ میلی‌متر جیوه در بیماران فشار خون بالا',
			safetyNote: 'ممکن است خطر خونریزی را افزایش دهد؛ بوی سیر رایج است',
			dosage: '۶۰۰-۱۲۰۰ میلی‌گرم عصاره سیر کهنه (AGE) روزانه',
			diseases: ['فشار خون بالا', 'هیپرتانسیون', 'سلامت قلبی‌عروقی', 'کلسترول بالا', 'سفتی شریانی'],
			detailedInfo: {
				overview: 'عصاره سیر کهنه (AGE) به دلیل پایداری و استانداردسازی، فرم ترجیحی برای کاربردهای قلبی‌عروقی است.',
				howItWorks: 'پلی‌سولفیدهای سیر به هیدروژن سولفید (H2S) و اکسید نیتریک (NO) متابولیز می‌شوند، مولکول‌های سیگنالینگ گازی که گشاد شدن عروق را القا می‌کنند.',
				clinicalEvidence: 'متاآنالیز RCT‌ها نشان می‌دهد که مکمل‌های سیر فشار خون سیستولیک (SBP) را به طور میانگین ۸-۹ میلی‌متر جیوه کاهش می‌دهند.',
				usage: '۶۰۰-۱۲۰۰ میلی‌گرم عصاره سیر کهنه را روزانه در دوزهای تقسیم شده با غذا مصرف کنید.',
				contraindications: ['جراحی برنامه‌ریزی شده', 'خونریزی فعال', 'مصرف داروهای ضد انعقاد بدون نظارت پزشکی'],
				interactions: ['داروهای ضد انعقاد', 'داروهای ضد پلاکت', 'مهارکننده‌های پروتئاز HIV']
			}
		}
	},
	'hibiscus': {
		en: {
			name: 'Hibiscus',
			description: 'A delicious sour tea that acts as a natural ACE inhibitor with diuretic properties, without the potassium loss of pharmaceutical diuretics.',
			mechanism: 'Natural ACE inhibition; diuretic properties',
			keyOutcome: 'SBP reduction >7 mmHg; comparable to captopril',
			safetyNote: 'May potentiate blood pressure medications; no electrolyte imbalance',
			dosage: '1.5-3g dried hibiscus flowers steeped as tea, 2-3 times daily',
			diseases: ['Hypertension', 'High Blood Pressure', 'Cardiovascular Health', 'Metabolic Health'],
			detailedInfo: {
				overview: 'Hibiscus tea is rich in anthocyanins, particularly delphinidin-3-sambubioside. This beautiful red tea is a potent cardiovascular agent.',
				howItWorks: 'Hibiscus acts as a natural ACE inhibitor, blocking the enzyme that converts angiotensin I to the potent vasoconstrictor angiotensin II.',
				clinicalEvidence: 'Meta-analyses demonstrate that hibiscus consumption significantly lowers blood pressure, with some studies showing SBP reductions of over 7 mmHg.',
				usage: 'Steep 1.5-3g of dried hibiscus flowers in hot water for 5-10 minutes. Drink 2-3 cups daily.',
				contraindications: ['Pregnancy', 'Low blood pressure', 'Diabetes'],
				interactions: ['Antihypertensive medications', 'Diuretics', 'Chloroquine']
			}
		},
		fa: {
			name: 'چای ترش (هیبیسکوس)',
			description: 'یک چای ترش خوشمزه که به عنوان یک مهارکننده طبیعی ACE با خواص ادرارآور عمل می‌کند، بدون از دست دادن پتاسیم مانند دیورتیک‌های دارویی.',
			mechanism: 'مهار طبیعی ACE؛ خواص ادرارآور',
			keyOutcome: 'کاهش فشار خون سیستولیک >۷ میلی‌متر جیوه؛ قابل مقایسه با کاپتوپریل',
			safetyNote: 'ممکن است داروهای فشار خون را تقویت کند؛ بدون عدم تعادل الکترولیت',
			dosage: '۱.۵-۳ گرم گل‌های خشک هیبیسکوس به صورت دم‌کرده چای، ۲-۳ بار در روز',
			diseases: ['فشار خون بالا', 'هیپرتانسیون', 'سلامت قلبی‌عروقی', 'سلامت متابولیک'],
			detailedInfo: {
				overview: 'چای هیبیسکوس غنی از آنتوسیانین‌ها، به ویژه دلفینیدین-۳-سامبوبیوزید است. این چای قرمز زیبا یک عامل قلبی‌عروقی قوی است.',
				howItWorks: 'هیبیسکوس به عنوان یک مهارکننده طبیعی ACE عمل می‌کند و آنزیم تبدیل‌کننده آنژیوتانسین I به آنژیوتانسین II منقبض‌کننده قوی عروق را مسدود می‌کند.',
				clinicalEvidence: 'متاآنالیزها نشان می‌دهند که مصرف هیبیسکوس به طور قابل توجهی فشار خون را کاهش می‌دهد.',
				usage: '۱.۵-۳ گرم گل‌های خشک هیبیسکوس را در آب داغ برای ۵-۱۰ دقیقه دم کنید. ۲-۳ فنجان در روز بنوشید.',
				contraindications: ['بارداری', 'فشار خون پایین', 'دیابت'],
				interactions: ['داروهای کاهش‌دهنده فشار خون', 'دیورتیک‌ها', 'کلروکین']
			}
		}
	},
	'turmeric': {
		en: {
			name: 'Turmeric (Curcumin)',
			description: 'An anti-inflammatory alternative to NSAIDs for osteoarthritis that matches their efficacy without the gastrointestinal and cardiovascular risks.',
			mechanism: 'NF-kB pathway inhibition; COX-2 and 5-LOX downregulation',
			keyOutcome: 'Comparable to NSAIDs (ibuprofen, diclofenac) for knee OA',
			safetyNote: 'GI safe; requires bioavailability enhancer (piperine/phospholipids)',
			dosage: '1000-1500mg curcumin daily with piperine or in bioavailable form',
			diseases: ['Osteoarthritis', 'Arthritis', 'Joint Pain', 'Knee Pain', 'Inflammation', 'Joint Stiffness'],
			detailedInfo: {
				overview: 'Osteoarthritis management relies heavily on NSAIDs, which carry risks. Turmeric, specifically its active curcuminoid fraction, offers a safer alternative.',
				howItWorks: 'Curcumin inhibits the NF-kB pathway, a master regulator of inflammatory gene expression.',
				clinicalEvidence: 'Systematic reviews conclude that curcumin extracts are statistically non-inferior to ibuprofen and diclofenac for knee OA.',
				usage: 'Take 1000-1500mg of curcumin daily with piperine or in a bioavailable formulation.',
				contraindications: ['Gallbladder disease', 'Scheduled surgery', 'Bile duct obstruction', 'Pregnancy (high doses)'],
				interactions: ['Anticoagulants', 'Antiplatelet drugs', 'Certain chemotherapy drugs']
			}
		},
		fa: {
			name: 'زردچوبه (کورکومین)',
			description: 'یک جایگزین ضد التهابی برای NSAID‌ها برای آرتروز که با اثربخشی آن‌ها مطابقت دارد بدون خطرات گوارشی و قلبی‌عروقی.',
			mechanism: 'مهار مسیر NF-kB؛ کاهش COX-2 و 5-LOX',
			keyOutcome: 'قابل مقایسه با NSAID‌ها (ایبوپروفن، دیکلوفناک) برای آرتروز زانو',
			safetyNote: 'ایمن برای گوارش؛ نیاز به افزایش‌دهنده فراهمی زیستی (پیپرین/فسفولیپیدها)',
			dosage: '۱۰۰۰-۱۵۰۰ میلی‌گرم کورکومین روزانه با پیپرین یا به شکل فراهم زیستی',
			diseases: ['آرتروز', 'آرتریت', 'درد مفصل', 'درد زانو', 'التهاب', 'سفتی مفصل'],
			detailedInfo: {
				overview: 'مدیریت آرتروز به شدت به NSAID‌ها متکی است که خطراتی دارند. زردچوبه، به ویژه بخش کورکومینوئید فعال آن، جایگزین ایمن‌تری ارائه می‌دهد.',
				howItWorks: 'کورکومین مسیر NF-kB را مهار می‌کند، یک تنظیم‌کننده اصلی بیان ژن التهابی.',
				clinicalEvidence: 'بررسی‌های سیستماتیک نتیجه می‌گیرند که عصاره‌های کورکومین از نظر آماری نسبت به ایبوپروفن و دیکلوفناک برای آرتروز زانو کمتر نیستند.',
				usage: '۱۰۰۰-۱۵۰۰ میلی‌گرم کورکومین روزانه با پیپرین یا در فرمولاسیون فراهم زیستی مصرف کنید.',
				contraindications: ['بیماری کیسه صفرا', 'جراحی برنامه‌ریزی شده', 'انسداد مجرای صفراوی', 'بارداری (دوزهای بالا)'],
				interactions: ['داروهای ضد انعقاد', 'داروهای ضد پلاکت', 'برخی داروهای شیمی‌درمانی']
			}
		}
	},
	'tea-tree-oil': {
		en: {
			name: 'Tea Tree Oil',
			description: 'A gentler alternative to benzoyl peroxide for acne-prone skin, with additional antifungal properties for stubborn nail infections.',
			mechanism: 'Lipophilic antimicrobial penetrating the pilosebaceous unit',
			keyOutcome: 'Comparable to benzoyl peroxide for acne; comparable to clotrimazole for nail fungus',
			safetyNote: 'Less skin irritation than benzoyl peroxide; topical use only',
			dosage: '5% concentration for acne; 100% for nail fungus (applied twice daily)',
			diseases: ['Acne', 'Acne Vulgaris', 'Nail Fungus', 'Onychomycosis', 'Skin Infections'],
			detailedInfo: {
				overview: 'Tea tree oil is a lipophilic antimicrobial that effectively penetrates the pilosebaceous unit.',
				howItWorks: 'Tea tree oil contains terpinen-4-ol and other monoterpenes that disrupt microbial cell membranes.',
				clinicalEvidence: 'For acne: 5% tea tree oil gel showed efficacy comparable to benzoyl peroxide with less irritation.',
				usage: 'For acne: Apply 5% tea tree oil gel to affected areas twice daily. For nail fungus: Apply 100% undiluted oil twice daily.',
				contraindications: ['Internal use (toxic)', 'Tea tree oil allergy', 'Open wounds', 'Prepubertal boys (repeated topical use)'],
				interactions: ['Topical medications - apply separately']
			}
		},
		fa: {
			name: 'روغن درخت چای',
			description: 'یک جایگزین ملایم‌تر برای بنزوئیل پراکسید برای پوست مستعد آکنه، با خواص ضد قارچی اضافی برای عفونت‌های ناخن سرسخت.',
			mechanism: 'ضد میکروب لیپوفیل نفوذ کننده به واحد پیلوسباسه',
			keyOutcome: 'قابل مقایسه با بنزوئیل پراکسید برای آکنه؛ قابل مقایسه با کلوتریمازول برای قارچ ناخن',
			safetyNote: 'تحریک پوست کمتر از بنزوئیل پراکسید؛ فقط مصرف موضعی',
			dosage: 'غلظت ۵٪ برای آکنه؛ ۱۰۰٪ برای قارچ ناخن (دو بار در روز استفاده شود)',
			diseases: ['آکنه', 'آکنه ولگاریس', 'قارچ ناخن', 'اونیکومایکوزیس', 'عفونت‌های پوستی'],
			detailedInfo: {
				overview: 'روغن درخت چای یک ضد میکروب لیپوفیل است که به طور مؤثر به واحد پیلوسباسه نفوذ می‌کند.',
				howItWorks: 'روغن درخت چای حاوی ترپینن-۴-ال و سایر مونوترپن‌هایی است که غشاهای سلولی میکروبی را مختل می‌کنند.',
				clinicalEvidence: 'برای آکنه: ژل روغن درخت چای ۵٪ اثربخشی قابل مقایسه با بنزوئیل پراکسید با تحریک کمتر نشان داد.',
				usage: 'برای آکنه: ژل روغن درخت چای ۵٪ را دو بار در روز روی مناطق آسیب‌دیده بمالید. برای قارچ ناخن: روغن رقیق نشده ۱۰۰٪ را دو بار در روز بمالید.',
				contraindications: ['مصرف داخلی (سمی)', 'آلرژی به روغن درخت چای', 'زخم‌های باز', 'پسران قبل از بلوغ (استفاده موضعی مکرر)'],
				interactions: ['داروهای موضعی - جداگانه استفاده شود']
			}
		}
	},
	'black-cohosh': {
		en: {
			name: 'Black Cohosh',
			description: 'The most studied botanical for menopausal hot flashes, acting through mechanisms safer for breast tissue than traditional hormone replacement.',
			mechanism: 'Selective Estrogen Receptor Modulator (SERM) or serotonergic pathway modulation',
			keyOutcome: 'Positive efficacy for vasomotor symptoms with standardized extracts',
			safetyNote: 'Rare liver toxicity reports; safer for breast tissue than HRT',
			dosage: '20-40mg standardized isopropanolic extract twice daily',
			diseases: ['Menopause', 'Hot Flashes', 'Vasomotor Symptoms', 'Night Sweats', 'Menopausal Symptoms'],
			detailedInfo: {
				overview: 'Black Cohosh is the most studied botanical for vasomotor symptoms of menopause.',
				howItWorks: 'Black cohosh appears to modulate estrogen receptors selectively or work through serotonin pathways.',
				clinicalEvidence: 'Efficacy is generally positive for standardized isopropanolic extracts.',
				usage: 'Take 20-40mg of standardized isopropanolic extract twice daily. Effects typically appear within 4-8 weeks.',
				contraindications: ['History of liver disease', 'Hormone-sensitive conditions', 'Pregnancy and breastfeeding', 'Aspirin allergy'],
				interactions: ['Hepatotoxic drugs', 'Hormone therapies', 'Tamoxifen and aromatase inhibitors']
			}
		},
		fa: {
			name: 'کوهوش سیاه',
			description: 'مطالعه‌شده‌ترین گیاه برای گرگرفتگی یائسگی، که از طریق مکانیسم‌های ایمن‌تر برای بافت سینه نسبت به جایگزینی هورمونی سنتی عمل می‌کند.',
			mechanism: 'تعدیل‌کننده گیرنده استروژن انتخابی (SERM) یا تعدیل مسیر سروتونرژیک',
			keyOutcome: 'اثربخشی مثبت برای علائم وازوموتور با عصاره‌های استاندارد',
			safetyNote: 'گزارشات نادر سمیت کبدی؛ ایمن‌تر برای بافت سینه نسبت به HRT',
			dosage: '۲۰-۴۰ میلی‌گرم عصاره ایزوپروپانولیک استاندارد دو بار در روز',
			diseases: ['یائسگی', 'گرگرفتگی', 'علائم وازوموتور', 'تعریق شبانه', 'علائم یائسگی'],
			detailedInfo: {
				overview: 'کوهوش سیاه مطالعه‌شده‌ترین گیاه برای علائم وازوموتور یائسگی است.',
				howItWorks: 'کوهوش سیاه به نظر می‌رسد که گیرنده‌های استروژن را به طور انتخابی تعدیل می‌کند یا از طریق مسیرهای سروتونین عمل می‌کند.',
				clinicalEvidence: 'اثربخشی به طور کلی برای عصاره‌های ایزوپروپانولیک استاندارد مثبت است.',
				usage: '۲۰-۴۰ میلی‌گرم عصاره ایزوپروپانولیک استاندارد را دو بار در روز مصرف کنید. اثرات معمولاً در ۴-۸ هفته ظاهر می‌شوند.',
				contraindications: ['سابقه بیماری کبدی', 'بیماری‌های حساس به هورمون', 'بارداری و شیردهی', 'آلرژی به آسپرین'],
				interactions: ['داروهای سمی کبدی', 'درمان‌های هورمونی', 'تاموکسیفن و مهارکننده‌های آروماتاز']
			}
		}
	},
	'cranberry': {
		en: {
			name: 'Cranberry',
			description: 'An evidence-based preventive measure for recurrent UTIs that works by preventing bacterial adhesion—not by acidifying urine as commonly believed.',
			mechanism: 'A-type proanthocyanidin (PAC) anti-adhesion to bladder wall',
			keyOutcome: '26% risk reduction in recurrent UTIs in women',
			safetyNote: 'For prevention only, not treatment; kidney stone risk (oxalates); warfarin interaction',
			dosage: '36mg proanthocyanidins (PACs) daily in capsule/tablet form',
			diseases: ['Urinary Tract Infection', 'UTI', 'Bladder Infection', 'Recurrent UTI', 'Cystitis Prevention'],
			detailedInfo: {
				overview: 'Cranberry is effective for UTI prevention, not treatment. The key is anti-adhesion mechanism via A-type PACs.',
				howItWorks: 'Cranberry PACs contain unique A-type linkages that inhibit E. coli adhesion to bladder wall.',
				clinicalEvidence: 'A 2023 Cochrane review confirms cranberry products reduce recurrent UTI risk in women by 26%.',
				usage: 'Take capsules standardized to 36mg PACs daily for prevention. Not for treating active infections.',
				contraindications: ['Active UTI', 'History of calcium-oxalate kidney stones', 'Taking warfarin without INR monitoring'],
				interactions: ['Warfarin (cranberry inhibits CYP2C9)', 'Medications metabolized by CYP2C9']
			}
		},
		fa: {
			name: 'کرن‌بری',
			description: 'یک اقدام پیشگیرانه مبتنی بر شواهد برای عفونت‌های مکرر ادراری که با جلوگیری از چسبندگی باکتری عمل می‌کند - نه با اسیدی کردن ادرار همانطور که معمولاً تصور می‌شود.',
			mechanism: 'ضد چسبندگی پروآنتوسیانیدین نوع A (PAC) به دیواره مثانه',
			keyOutcome: 'کاهش ۲۶٪ خطر عفونت‌های مکرر ادراری در زنان',
			safetyNote: 'فقط برای پیشگیری، نه درمان؛ خطر سنگ کلیه (اگزالات)؛ تداخل با وارفارین',
			dosage: '۳۶ میلی‌گرم پروآنتوسیانیدین (PACs) روزانه به شکل کپسول/قرص',
			diseases: ['عفونت ادراری', 'UTI', 'عفونت مثانه', 'عفونت ادراری مکرر', 'پیشگیری از سیستیت'],
			detailedInfo: {
				overview: 'کرن‌بری برای پیشگیری از عفونت ادراری مؤثر است، نه درمان. کلید در مکانیسم ضد چسبندگی از طریق PAC‌های نوع A است.',
				howItWorks: 'PAC‌های کرن‌بری حاوی پیوندهای منحصر به فرد نوع A هستند که چسبندگی E. coli به دیواره مثانه را مهار می‌کنند.',
				clinicalEvidence: 'یک بررسی کاکرین ۲۰۲۳ تأیید می‌کند که محصولات کرن‌بری خطر عفونت ادراری مکرر در زنان را ۲۶٪ کاهش می‌دهند.',
				usage: 'کپسول‌های استاندارد شده به ۳۶ میلی‌گرم PACs را روزانه برای پیشگیری مصرف کنید. برای درمان عفونت‌های فعال نیست.',
				contraindications: ['عفونت ادراری فعال', 'سابقه سنگ کلیه کلسیم-اگزالات', 'مصرف وارفارین بدون نظارت INR'],
				interactions: ['وارفارین (کرن‌بری CYP2C9 را مهار می‌کند)', 'داروهای متابولیز شده توسط CYP2C9']
			}
		}
	},
	'elderberry': {
		en: {
			name: 'Elderberry',
			description: 'An immune-supporting berry that helps reduce the severity and duration of flu and cold symptoms.',
			mechanism: 'Antiviral activity; immune modulation; reduces symptom severity',
			keyOutcome: 'Significantly reduces upper respiratory symptoms and fever',
			safetyNote: 'Safe alternative to antibiotic misuse for viral conditions',
			dosage: '15ml syrup (300mg extract) 4 times daily during illness',
			diseases: ['Flu', 'Influenza', 'Common Cold', 'Upper Respiratory Infection', 'Viral Infection'],
			detailedInfo: {
				overview: 'Elderberry extracts are widely used for viral respiratory infections.',
				howItWorks: 'Elderberry flavonoids appear to bind to viral surface proteins, preventing viral entry into cells.',
				clinicalEvidence: 'Meta-analyses support significant reductions in upper respiratory symptoms and fever severity.',
				usage: 'Begin at first sign of symptoms. Adults: 15ml syrup 4 times daily for 5 days.',
				contraindications: ['Raw elderberries (toxic)', 'Autoimmune conditions', 'Pregnancy and breastfeeding'],
				interactions: ['Immunosuppressants', 'Diabetes medications', 'Diuretics']
			}
		},
		fa: {
			name: 'آقطی (الدربری)',
			description: 'یک توت تقویت‌کننده ایمنی که به کاهش شدت و مدت علائم آنفلوانزا و سرماخوردگی کمک می‌کند.',
			mechanism: 'فعالیت ضد ویروسی؛ تعدیل ایمنی؛ کاهش شدت علائم',
			keyOutcome: 'به طور قابل توجهی علائم تنفسی فوقانی و تب را کاهش می‌دهد',
			safetyNote: 'جایگزین ایمن برای سوء استفاده از آنتی‌بیوتیک برای بیماری‌های ویروسی',
			dosage: '۱۵ میلی‌لیتر شربت (۳۰۰ میلی‌گرم عصاره) ۴ بار در روز در طول بیماری',
			diseases: ['آنفلوانزا', 'آنفولانزا', 'سرماخوردگی معمولی', 'عفونت تنفسی فوقانی', 'عفونت ویروسی'],
			detailedInfo: {
				overview: 'عصاره‌های آقطی به طور گسترده برای عفونت‌های تنفسی ویروسی استفاده می‌شوند.',
				howItWorks: 'فلاونوئیدهای آقطی به نظر می‌رسد که به پروتئین‌های سطحی ویروس متصل می‌شوند و از ورود ویروس به سلول‌ها جلوگیری می‌کنند.',
				clinicalEvidence: 'متاآنالیزها از کاهش قابل توجه علائم تنفسی فوقانی و شدت تب حمایت می‌کنند.',
				usage: 'در اولین علائم شروع کنید. بزرگسالان: ۱۵ میلی‌لیتر شربت ۴ بار در روز برای ۵ روز.',
				contraindications: ['آقطی خام (سمی)', 'بیماری‌های خودایمنی', 'بارداری و شیردهی'],
				interactions: ['سرکوب‌کننده‌های ایمنی', 'داروهای دیابت', 'دیورتیک‌ها']
			}
		}
	},
	'honey': {
		en: {
			name: 'Honey',
			description: 'A Cochrane-validated remedy for childhood cough that outperforms common OTC medications, with an important age restriction.',
			mechanism: 'Demulcent (coating) effect; salivation stimulation; sensory nerve modulation',
			keyOutcome: 'Better than diphenhydramine or placebo for pediatric cough relief',
			safetyNote: 'NEVER give to infants under 12 months (botulism risk)',
			dosage: '2.5-10ml (½-2 teaspoons) before bedtime for children over 1 year',
			diseases: ['Pediatric Cough', 'Cough', "Children's Cough", 'Sore Throat', 'Upper Respiratory Symptoms'],
			detailedInfo: {
				overview: 'Honey has emerged as a validated alternative for pediatric cough, endorsed by Cochrane reviews.',
				howItWorks: 'The high viscosity of honey coats and soothes the irritated pharyngeal mucosa.',
				clinicalEvidence: 'A Cochrane review concluded that honey relieves cough symptoms better than no treatment or diphenhydramine.',
				usage: 'Give 2.5-10ml 30 minutes before bedtime. Can be mixed in warm water or tea.',
				contraindications: ['INFANTS UNDER 12 MONTHS (botulism risk)', 'Diabetes', 'Bee/pollen allergies'],
				interactions: ['None significant']
			}
		},
		fa: {
			name: 'عسل',
			description: 'یک درمان تأیید شده کاکرین برای سرفه کودکان که از داروهای بدون نسخه رایج بهتر عمل می‌کند، با یک محدودیت سنی مهم.',
			mechanism: 'اثر تسکین‌دهنده (پوشش‌دهنده)؛ تحریک ترشح بزاق؛ تعدیل اعصاب حسی',
			keyOutcome: 'بهتر از دیفن‌هیدرامین یا پلاسبو برای تسکین سرفه کودکان',
			safetyNote: 'هرگز به نوزادان زیر ۱۲ ماه ندهید (خطر بوتولیسم)',
			dosage: '۲.۵-۱۰ میلی‌لیتر (½-۲ قاشق چای‌خوری) قبل از خواب برای کودکان بالای ۱ سال',
			diseases: ['سرفه کودکان', 'سرفه', 'سرفه کودک', 'گلودرد', 'علائم تنفسی فوقانی'],
			detailedInfo: {
				overview: 'عسل به عنوان یک جایگزین تأیید شده برای سرفه کودکان ظاهر شده است که توسط بررسی‌های کاکرین تأیید شده است.',
				howItWorks: 'ویسکوزیته بالای عسل مخاط حلق تحریک شده را می‌پوشاند و تسکین می‌دهد.',
				clinicalEvidence: 'یک بررسی کاکرین نتیجه گرفت که عسل علائم سرفه را بهتر از عدم درمان یا دیفن‌هیدرامین تسکین می‌دهد.',
				usage: '۲.۵-۱۰ میلی‌لیتر را ۳۰ دقیقه قبل از خواب بدهید. می‌تواند در آب گرم یا چای مخلوط شود.',
				contraindications: ['نوزادان زیر ۱۲ ماه (خطر بوتولیسم)', 'دیابت', 'آلرژی به زنبور/گرده'],
				interactions: ['هیچ مورد قابل توجهی']
			}
		}
	},
	'capsaicin': {
		en: {
			name: 'Capsaicin (Topical)',
			description: 'A chili-derived topical analgesic that paradoxically relieves pain by initially causing then depleting the sensation—FDA-approved for neuropathic conditions.',
			mechanism: 'TRPV1 activation leading to Substance P depletion and nerve defunctionalization',
			keyOutcome: 'FDA-approved for neuropathic pain; effective for OA of hands and knees',
			safetyNote: 'Initial burning sensation; wash hands thoroughly after application',
			dosage: '0.025-0.075% cream 3-4 times daily; 8% patch (prescription) for severe pain',
			diseases: ['Neuropathic Pain', 'Arthritis Pain', 'Post-Herpetic Neuralgia', 'Diabetic Neuropathy', 'Joint Pain'],
			detailedInfo: {
				overview: 'Capsaicin, derived from chili peppers, is a standard treatment for neuropathic and arthritic pain.',
				howItWorks: 'Capsaicin binds to TRPV1 receptors. Repeated application depletes Substance P, resulting in sustained analgesia.',
				clinicalEvidence: 'Cochrane reviews confirm efficacy for OA and post-herpetic neuralgia.',
				usage: 'Apply a thin layer to affected area 3-4 times daily. Expect initial burning that decreases with continued use.',
				contraindications: ['Broken or irritated skin', 'Near eyes/mucous membranes', 'On face', 'Allergy to capsaicin'],
				interactions: ['ACE inhibitors', 'Avoid with heating pads']
			}
		},
		fa: {
			name: 'کپسایسین (موضعی)',
			description: 'یک مسکن موضعی مشتق از فلفل که به طور متناقضی درد را با ایجاد اولیه و سپس تخلیه احساس تسکین می‌دهد - تأیید FDA برای بیماری‌های نوروپاتیک.',
			mechanism: 'فعال‌سازی TRPV1 منجر به تخلیه ماده P و غیرفعال‌سازی عصب',
			keyOutcome: 'تأیید FDA برای درد نوروپاتیک؛ مؤثر برای آرتروز دست و زانو',
			safetyNote: 'سوزش اولیه؛ دست‌ها را پس از استفاده کاملاً بشویید',
			dosage: 'کرم ۰.۰۲۵-۰.۰۷۵٪ ۳-۴ بار در روز؛ پچ ۸٪ (نسخه‌ای) برای درد شدید',
			diseases: ['درد نوروپاتیک', 'درد آرتریت', 'نورالژی پس از هرپس', 'نوروپاتی دیابتی', 'درد مفصل'],
			detailedInfo: {
				overview: 'کپسایسین، مشتق از فلفل، یک درمان استاندارد برای درد نوروپاتیک و آرتریتی است.',
				howItWorks: 'کپسایسین به گیرنده‌های TRPV1 متصل می‌شود. استفاده مکرر ماده P را تخلیه می‌کند و منجر به بی‌دردی پایدار می‌شود.',
				clinicalEvidence: 'بررسی‌های کاکرین اثربخشی برای آرتروز و نورالژی پس از هرپس را تأیید می‌کنند.',
				usage: 'یک لایه نازک روی منطقه آسیب‌دیده ۳-۴ بار در روز بمالید. انتظار سوزش اولیه را داشته باشید که با استفاده مداوم کاهش می‌یابد.',
				contraindications: ['پوست شکسته یا تحریک شده', 'نزدیک چشم/غشاهای مخاطی', 'روی صورت', 'آلرژی به کپسایسین'],
				interactions: ['مهارکننده‌های ACE', 'از استفاده با پد گرم‌کننده خودداری کنید']
			}
		}
	},
	'st-johns-wort': {
		en: {
			name: "St. John's Wort",
			description: "One of the most studied herbal antidepressants, with meta-analyses confirming efficacy comparable to prescription SSRIs for mild to moderate depression.",
			mechanism: 'Monoamine reuptake inhibition (serotonin, norepinephrine, dopamine)',
			keyOutcome: 'Comparable efficacy to SSRIs for mild-moderate depression with fewer side effects',
			safetyNote: 'MAJOR drug interactions (oral contraceptives, anticoagulants, HIV meds); photosensitivity',
			dosage: '300mg standardized extract (0.3% hypericin) 3 times daily',
			diseases: ['Depression', 'Mild Depression', 'Moderate Depression', 'Seasonal Affective Disorder', 'Anxiety', 'Mood Disorders'],
			detailedInfo: {
				overview: "St. John's Wort is among the most extensively researched herbal medicines. Multiple meta-analyses have established its efficacy for mild to moderate major depressive disorder.",
				howItWorks: 'The active compounds inhibit the reuptake of serotonin, norepinephrine, and dopamine—similar to synthetic antidepressants.',
				clinicalEvidence: "A Cochrane review of 29 trials (5,489 patients) concluded that St. John's Wort extracts are superior to placebo and similarly effective as standard antidepressants.",
				usage: 'Take 300mg of standardized extract three times daily with meals. Effects may take 4-6 weeks to manifest fully.',
				contraindications: ['Bipolar disorder', 'Pregnancy and breastfeeding', 'Scheduled surgery', 'Severe depression with suicidal ideation'],
				interactions: ['Oral contraceptives', 'Warfarin', 'HIV medications', 'Cyclosporine', 'SSRIs and MAOIs']
			}
		},
		fa: {
			name: 'گل راعی',
			description: 'یکی از مطالعه‌شده‌ترین گیاهان ضد افسردگی، با متاآنالیزهایی که اثربخشی قابل مقایسه با SSRI‌های تجویزی را برای افسردگی خفیف تا متوسط تأیید می‌کنند.',
			mechanism: 'مهار بازجذب مونوآمین (سروتونین، نوراپی‌نفرین، دوپامین)',
			keyOutcome: 'اثربخشی قابل مقایسه با SSRI‌ها برای افسردگی خفیف تا متوسط با عوارض جانبی کمتر',
			safetyNote: 'تداخلات دارویی عمده (قرص‌های ضد بارداری، ضد انعقاد، داروهای HIV)؛ حساسیت به نور',
			dosage: '۳۰۰ میلی‌گرم عصاره استاندارد (۰.۳٪ هایپریسین) ۳ بار در روز',
			diseases: ['افسردگی', 'افسردگی خفیف', 'افسردگی متوسط', 'اختلال عاطفی فصلی', 'اضطراب', 'اختلالات خلقی'],
			detailedInfo: {
				overview: 'گل راعی از جمله گسترده‌ترین گیاهان دارویی تحقیق شده است. متاآنالیزهای متعدد اثربخشی آن را برای افسردگی خفیف تا متوسط تأیید کرده‌اند.',
				howItWorks: 'ترکیبات فعال بازجذب سروتونین، نوراپی‌نفرین و دوپامین را مهار می‌کنند - مشابه داروهای ضد افسردگی مصنوعی.',
				clinicalEvidence: 'یک بررسی کاکرین از ۲۹ کارآزمایی نتیجه گرفت که عصاره‌های گل راعی از پلاسبو برتر و به اندازه داروهای ضد افسردگی استاندارد مؤثر هستند.',
				usage: '۳۰۰ میلی‌گرم عصاره استاندارد را سه بار در روز با غذا مصرف کنید. اثرات ممکن است ۴-۶ هفته طول بکشد.',
				contraindications: ['اختلال دوقطبی', 'بارداری و شیردهی', 'جراحی برنامه‌ریزی شده', 'افسردگی شدید با افکار خودکشی'],
				interactions: ['قرص‌های ضد بارداری', 'وارفارین', 'داروهای HIV', 'سیکلوسپورین', 'SSRI‌ها و MAOI‌ها']
			}
		}
	},
	'ginkgo-biloba': {
		en: {
			name: 'Ginkgo Biloba',
			description: 'An ancient tree extract that improves blood flow and has antioxidant properties, used for cognitive support and peripheral circulation problems.',
			mechanism: 'Antioxidant; improves microcirculation; PAF antagonist; neuroprotective',
			keyOutcome: 'Modest improvements in cognition and walking distance in claudication',
			safetyNote: 'Bleeding risk; discontinue before surgery',
			dosage: '120-240mg standardized extract daily',
			diseases: ['Cognitive Decline', 'Dementia', 'Memory Problems', 'Peripheral Artery Disease', 'Intermittent Claudication', 'Tinnitus', 'Vertigo'],
			detailedInfo: {
				overview: 'Ginkgo biloba extract is derived from one of the oldest living tree species. It has been extensively studied for cognitive function and peripheral vascular disease.',
				howItWorks: 'Ginkgo flavonoids provide antioxidant protection, improve blood flow, antagonize platelet-activating factor, and may have neuroprotective effects.',
				clinicalEvidence: 'Meta-analyses show modest but significant improvements in cognitive function in patients with existing dementia.',
				usage: 'Take 120-240mg daily of standardized extract in 2-3 divided doses. Effects may take 8-12 weeks.',
				contraindications: ['Bleeding disorders', 'Scheduled surgery', 'Seizure disorders', 'Pregnancy'],
				interactions: ['Anticoagulants', 'NSAIDs', 'Anticonvulsants', 'Diabetes medications']
			}
		},
		fa: {
			name: 'جینکو بیلوبا',
			description: 'عصاره درخت باستانی که جریان خون را بهبود می‌بخشد و خواص آنتی‌اکسیدانی دارد، برای حمایت شناختی و مشکلات گردش خون محیطی استفاده می‌شود.',
			mechanism: 'آنتی‌اکسیدان؛ بهبود میکروسیرکولاسیون؛ آنتاگونیست PAF؛ محافظت عصبی',
			keyOutcome: 'بهبود متوسط در شناخت و مسافت راه رفتن در لنگش',
			safetyNote: 'خطر خونریزی؛ قبل از جراحی قطع شود',
			dosage: '۱۲۰-۲۴۰ میلی‌گرم عصاره استاندارد روزانه',
			diseases: ['زوال شناختی', 'زوال عقل', 'مشکلات حافظه', 'بیماری شریان محیطی', 'لنگش متناوب', 'وزوز گوش', 'سرگیجه'],
			detailedInfo: {
				overview: 'عصاره جینکو بیلوبا از یکی از قدیمی‌ترین گونه‌های درختی زنده استخراج می‌شود. به طور گسترده برای عملکرد شناختی مطالعه شده است.',
				howItWorks: 'فلاونوئیدهای جینکو محافظت آنتی‌اکسیدانی ارائه می‌دهند، جریان خون را بهبود می‌بخشند و ممکن است اثرات محافظت عصبی داشته باشند.',
				clinicalEvidence: 'متاآنالیزها بهبود متوسط اما قابل توجه در عملکرد شناختی در بیماران مبتلا به زوال عقل نشان می‌دهند.',
				usage: '۱۲۰-۲۴۰ میلی‌گرم روزانه عصاره استاندارد در ۲-۳ دوز تقسیم شده مصرف کنید. اثرات ممکن است ۸-۱۲ هفته طول بکشد.',
				contraindications: ['اختلالات خونریزی', 'جراحی برنامه‌ریزی شده', 'اختلالات تشنج', 'بارداری'],
				interactions: ['داروهای ضد انعقاد', 'NSAIDها', 'داروهای ضد تشنج', 'داروهای دیابت']
			}
		}
	},
	'ashwagandha': {
		en: {
			name: 'Ashwagandha',
			description: 'A premier Ayurvedic adaptogen with growing clinical evidence for reducing stress, anxiety, and cortisol levels while improving energy and cognitive function.',
			mechanism: 'Adaptogen; modulates cortisol; GABAergic activity; anti-inflammatory',
			keyOutcome: 'Significant reduction in stress and anxiety scores; improved cortisol levels',
			safetyNote: 'May cause drowsiness; avoid in pregnancy; rare liver injury reports',
			dosage: '300-600mg root extract daily',
			diseases: ['Stress', 'Anxiety', 'Fatigue', 'Insomnia', 'Cognitive Function', 'Physical Performance'],
			detailedInfo: {
				overview: 'Ashwagandha is one of the most important herbs in Ayurveda. Modern research has validated its adaptogenic properties.',
				howItWorks: 'Withanolides modulate the HPA axis, reducing cortisol production. They also have GABAergic activity explaining anxiolytic effects.',
				clinicalEvidence: 'A systematic review of 12 RCTs found significant reductions in anxiety and stress scores compared to placebo.',
				usage: 'Take 300-600mg of root extract standardized to 5% withanolides, once or twice daily.',
				contraindications: ['Pregnancy', 'Breastfeeding', 'Autoimmune diseases', 'Thyroid disorders', 'Surgery'],
				interactions: ['Sedatives', 'Thyroid medications', 'Immunosuppressants', 'Diabetes medications']
			}
		},
		fa: {
			name: 'آشواگاندا',
			description: 'یک آداپتوژن برتر آیورودیک با شواهد بالینی رو به رشد برای کاهش استرس، اضطراب و سطح کورتیزول در حالی که انرژی و عملکرد شناختی را بهبود می‌بخشد.',
			mechanism: 'آداپتوژن؛ تعدیل کورتیزول؛ فعالیت GABAergic؛ ضد التهاب',
			keyOutcome: 'کاهش قابل توجه در نمرات استرس و اضطراب؛ بهبود سطوح کورتیزول',
			safetyNote: 'ممکن است خواب‌آلودگی ایجاد کند؛ در بارداری اجتناب شود؛ گزارشات نادر آسیب کبدی',
			dosage: '۳۰۰-۶۰۰ میلی‌گرم عصاره ریشه روزانه',
			diseases: ['استرس', 'اضطراب', 'خستگی', 'بی‌خوابی', 'عملکرد شناختی', 'عملکرد بدنی'],
			detailedInfo: {
				overview: 'آشواگاندا یکی از مهم‌ترین گیاهان در آیورودا است. تحقیقات مدرن خواص آداپتوژنیک آن را تأیید کرده است.',
				howItWorks: 'ویتانولیدها محور HPA را تعدیل می‌کنند و تولید کورتیزول را کاهش می‌دهند. همچنین فعالیت GABAergic دارند که اثرات ضد اضطراب را توضیح می‌دهد.',
				clinicalEvidence: 'یک بررسی سیستماتیک از ۱۲ RCT کاهش قابل توجه در نمرات اضطراب و استرس را در مقایسه با پلاسبو نشان داد.',
				usage: '۳۰۰-۶۰۰ میلی‌گرم عصاره ریشه استاندارد به ۵٪ ویتانولیدها، یک یا دو بار در روز مصرف کنید.',
				contraindications: ['بارداری', 'شیردهی', 'بیماری‌های خودایمنی', 'اختلالات تیروئید', 'جراحی'],
				interactions: ['آرام‌بخش‌ها', 'داروهای تیروئید', 'سرکوب‌کننده‌های ایمنی', 'داروهای دیابت']
			}
		}
	},
	'rhodiola': {
		en: {
			name: 'Rhodiola Rosea',
			description: 'A Scandinavian and Russian adaptogenic herb with strong evidence for combating fatigue, enhancing mental performance, and supporting stress resilience.',
			mechanism: 'Adaptogen; modulates stress hormones; enhances serotonin/dopamine activity',
			keyOutcome: 'Significant improvement in fatigue and burnout symptoms',
			safetyNote: 'May cause insomnia if taken late in day; stimulating effect',
			dosage: '200-600mg standardized extract daily',
			diseases: ['Fatigue', 'Stress', 'Mental Fatigue', 'Burnout', 'Mild Depression', 'Physical Endurance'],
			detailedInfo: {
				overview: 'Rhodiola rosea has been used for centuries in Russia and Scandinavia to combat fatigue and enhance work performance.',
				howItWorks: 'Rosavins and salidroside modulate key mediators of the stress response, including cortisol and neurotransmitters.',
				clinicalEvidence: 'Multiple RCTs demonstrate significant improvements in fatigue symptoms, mental performance, and burnout.',
				usage: 'Take 200-600mg daily. Best taken in the morning or early afternoon.',
				contraindications: ['Bipolar disorder', 'Pregnancy and breastfeeding', 'Autoimmune conditions'],
				interactions: ['Antidepressants', 'Stimulants', 'Diabetes medications', 'Blood pressure medications']
			}
		},
		fa: {
			name: 'رودیولا روزه‌آ',
			description: 'یک گیاه آداپتوژنیک اسکاندیناوی و روسی با شواهد قوی برای مبارزه با خستگی، افزایش عملکرد ذهنی و حمایت از تاب‌آوری در برابر استرس.',
			mechanism: 'آداپتوژن؛ تعدیل هورمون‌های استرس؛ افزایش فعالیت سروتونین/دوپامین',
			keyOutcome: 'بهبود قابل توجه در علائم خستگی و فرسودگی',
			safetyNote: 'ممکن است در صورت مصرف دیروقت بی‌خوابی ایجاد کند؛ اثر محرک',
			dosage: '۲۰۰-۶۰۰ میلی‌گرم عصاره استاندارد روزانه',
			diseases: ['خستگی', 'استرس', 'خستگی ذهنی', 'فرسودگی شغلی', 'افسردگی خفیف', 'استقامت بدنی'],
			detailedInfo: {
				overview: 'رودیولا روزه‌آ قرن‌ها در روسیه و اسکاندیناوی برای مبارزه با خستگی و افزایش عملکرد کاری استفاده شده است.',
				howItWorks: 'روزاوین‌ها و سالیدروزید واسطه‌های کلیدی پاسخ استرس را تعدیل می‌کنند.',
				clinicalEvidence: 'چندین RCT بهبود قابل توجه در علائم خستگی، عملکرد ذهنی و فرسودگی را نشان می‌دهند.',
				usage: '۲۰۰-۶۰۰ میلی‌گرم روزانه مصرف کنید. بهتر است صبح یا اوایل بعد از ظهر مصرف شود.',
				contraindications: ['اختلال دوقطبی', 'بارداری و شیردهی', 'بیماری‌های خودایمنی'],
				interactions: ['داروهای ضد افسردگی', 'محرک‌ها', 'داروهای دیابت', 'داروهای فشار خون']
			}
		}
	},
	'butterbur': {
		en: {
			name: 'Butterbur',
			description: 'One of the few herbs with Level A evidence from the American Academy of Neurology for migraine prevention, capable of reducing migraine frequency by half.',
			mechanism: 'Calcium channel modulation; leukotriene inhibition; anti-inflammatory',
			keyOutcome: 'Level A evidence for migraine prevention; 50% reduction in migraine frequency',
			safetyNote: 'MUST use PA-free extract (hepatotoxic pyrrolizidine alkaloids removed)',
			dosage: '50-75mg PA-free extract twice daily',
			diseases: ['Migraine Prevention', 'Migraine', 'Headache', 'Allergic Rhinitis', 'Hay Fever'],
			detailedInfo: {
				overview: 'Butterbur is unique among herbal medicines in having received Level A evidence from the American Academy of Neurology.',
				howItWorks: 'Petasins reduce smooth muscle spasm and inflammation by modulating calcium channels and inhibiting leukotriene synthesis.',
				clinicalEvidence: 'Two large RCTs demonstrated that 75mg twice daily reduced migraine frequency by approximately 50%.',
				usage: 'Take 50-75mg of PA-free extract twice daily. Only use products certified PA-free.',
				contraindications: ['Pregnancy and breastfeeding', 'Liver disease', 'Allergies to Asteraceae plants'],
				interactions: ['Blood pressure medications', 'Drugs metabolized by CYP3A4']
			}
		},
		fa: {
			name: 'باتربور',
			description: 'یکی از معدود گیاهان با شواهد سطح A از آکادمی نورولوژی آمریکا برای پیشگیری از میگرن، قادر به کاهش فراوانی میگرن تا نصف.',
			mechanism: 'تعدیل کانال کلسیم؛ مهار لوکوترین؛ ضد التهاب',
			keyOutcome: 'شواهد سطح A برای پیشگیری از میگرن؛ کاهش ۵۰٪ فراوانی میگرن',
			safetyNote: 'باید از عصاره بدون PA استفاده شود (آلکالوئیدهای پیرولیزیدین سمی کبدی حذف شده)',
			dosage: '۵۰-۷۵ میلی‌گرم عصاره بدون PA دو بار در روز',
			diseases: ['پیشگیری از میگرن', 'میگرن', 'سردرد', 'رینیت آلرژیک', 'تب یونجه'],
			detailedInfo: {
				overview: 'باتربور در میان داروهای گیاهی منحصر به فرد است زیرا شواهد سطح A از آکادمی نورولوژی آمریکا دریافت کرده است.',
				howItWorks: 'پتازین‌ها اسپاسم عضلات صاف و التهاب را با تعدیل کانال‌های کلسیم و مهار سنتز لوکوترین کاهش می‌دهند.',
				clinicalEvidence: 'دو RCT بزرگ نشان دادند که ۷۵ میلی‌گرم دو بار در روز فراوانی میگرن را حدود ۵۰٪ کاهش داد.',
				usage: '۵۰-۷۵ میلی‌گرم عصاره بدون PA دو بار در روز مصرف کنید. فقط از محصولات تأیید شده بدون PA استفاده کنید.',
				contraindications: ['بارداری و شیردهی', 'بیماری کبدی', 'آلرژی به گیاهان کاسنی'],
				interactions: ['داروهای فشار خون', 'داروهای متابولیز شده توسط CYP3A4']
			}
		}
	},
	'feverfew': {
		en: {
			name: 'Feverfew',
			description: 'A traditional European remedy for headaches with moderate evidence for migraine prevention and a unique mechanism involving serotonin and inflammation.',
			mechanism: 'Inhibits serotonin release from platelets; anti-inflammatory; NF-kB inhibition',
			keyOutcome: 'May reduce migraine frequency and severity; Level B evidence',
			safetyNote: 'Mouth ulcers with fresh leaf; rebound headaches if stopped abruptly',
			dosage: '50-150mg dried leaf or 2.5mg parthenolide content daily',
			diseases: ['Migraine Prevention', 'Migraine', 'Headache', 'Arthritis', 'Fever'],
			detailedInfo: {
				overview: 'Feverfew has been used for centuries for headaches and fever. It received Level B evidence from the American Academy of Neurology.',
				howItWorks: 'Parthenolide inhibits serotonin release from platelets and prostaglandin synthesis.',
				clinicalEvidence: 'A Cochrane review suggested benefit for migraine prevention. The American Academy of Neurology rated it Level B.',
				usage: 'Take 50-150mg of dried leaf daily. Do not stop abruptly.',
				contraindications: ['Pregnancy', 'Breastfeeding', 'Allergies to Asteraceae plants', 'Children under 2', 'Surgery'],
				interactions: ['Anticoagulants', 'NSAIDs', 'CYP-metabolized medications']
			}
		},
		fa: {
			name: 'گل تب‌بر',
			description: 'یک درمان سنتی اروپایی برای سردرد با شواهد متوسط برای پیشگیری از میگرن و مکانیسم منحصر به فرد شامل سروتونین و التهاب.',
			mechanism: 'مهار آزادسازی سروتونین از پلاکت‌ها؛ ضد التهاب؛ مهار NF-kB',
			keyOutcome: 'ممکن است فراوانی و شدت میگرن را کاهش دهد؛ شواهد سطح B',
			safetyNote: 'زخم دهان با برگ تازه؛ سردرد برگشتی در صورت قطع ناگهانی',
			dosage: '۵۰-۱۵۰ میلی‌گرم برگ خشک یا ۲.۵ میلی‌گرم محتوای پارتنولید روزانه',
			diseases: ['پیشگیری از میگرن', 'میگرن', 'سردرد', 'آرتریت', 'تب'],
			detailedInfo: {
				overview: 'گل تب‌بر قرن‌ها برای سردرد و تب استفاده شده است. شواهد سطح B از آکادمی نورولوژی آمریکا دریافت کرده است.',
				howItWorks: 'پارتنولید آزادسازی سروتونین از پلاکت‌ها و سنتز پروستاگلاندین را مهار می‌کند.',
				clinicalEvidence: 'یک بررسی کاکرین مزیت برای پیشگیری از میگرن را پیشنهاد کرد.',
				usage: '۵۰-۱۵۰ میلی‌گرم برگ خشک روزانه مصرف کنید. ناگهانی قطع نکنید.',
				contraindications: ['بارداری', 'شیردهی', 'آلرژی به گیاهان کاسنی', 'کودکان زیر ۲ سال', 'جراحی'],
				interactions: ['داروهای ضد انعقاد', 'NSAIDها', 'داروهای متابولیز شده توسط CYP']
			}
		}
	},
	'boswellia': {
		en: {
			name: 'Boswellia',
			description: 'An Ayurvedic resin with unique anti-inflammatory properties through 5-LOX inhibition, offering an alternative to NSAIDs for osteoarthritis without GI side effects.',
			mechanism: '5-lipoxygenase (5-LOX) inhibition; anti-inflammatory',
			keyOutcome: 'Significant improvement in osteoarthritis pain and function scores',
			safetyNote: 'Generally well tolerated; rare GI upset; may affect blood glucose',
			dosage: '300-500mg extract 2-3 times daily',
			diseases: ['Osteoarthritis', 'Rheumatoid Arthritis', 'Inflammatory Bowel Disease', 'Asthma', 'Joint Pain', 'Inflammation'],
			detailedInfo: {
				overview: 'Boswellia serrata has been used in Ayurvedic medicine for centuries. Its boswellic acids have potent anti-inflammatory properties.',
				howItWorks: 'Boswellic acids inhibit 5-lipoxygenase, blocking leukotriene synthesis without GI side effects of COX inhibitors.',
				clinicalEvidence: 'Multiple RCTs in osteoarthritis demonstrate significant improvements in pain and function scores.',
				usage: 'Take 300-500mg of extract 2-3 times daily with meals. Effects often noticed within 1-2 weeks.',
				contraindications: ['Pregnancy and breastfeeding', 'Surgery', 'Autoimmune conditions'],
				interactions: ['Anti-inflammatory medications', 'P-glycoprotein substrates', 'Blood sugar medications']
			}
		},
		fa: {
			name: 'کندر',
			description: 'یک صمغ آیورودیک با خواص ضد التهابی منحصر به فرد از طریق مهار 5-LOX، ارائه جایگزین برای NSAIDها برای آرتروز بدون عوارض جانبی گوارشی.',
			mechanism: 'مهار 5-لیپوکسیژناز (5-LOX)؛ ضد التهاب',
			keyOutcome: 'بهبود قابل توجه در نمرات درد و عملکرد آرتروز',
			safetyNote: 'به طور کلی خوب تحمل می‌شود؛ ناراحتی گوارشی نادر؛ ممکن است قند خون را تحت تأثیر قرار دهد',
			dosage: '۳۰۰-۵۰۰ میلی‌گرم عصاره ۲-۳ بار در روز',
			diseases: ['آرتروز', 'آرتریت روماتوئید', 'بیماری التهابی روده', 'آسم', 'درد مفصل', 'التهاب'],
			detailedInfo: {
				overview: 'کندر قرن‌ها در طب آیورودیک استفاده شده است. اسیدهای بوزولیک آن خواص ضد التهابی قوی دارند.',
				howItWorks: 'اسیدهای بوزولیک 5-لیپوکسیژناز را مهار می‌کنند و سنتز لوکوترین را بدون عوارض گوارشی مهارکننده‌های COX مسدود می‌کنند.',
				clinicalEvidence: 'چندین RCT در آرتروز بهبود قابل توجه در نمرات درد و عملکرد نشان می‌دهند.',
				usage: '۳۰۰-۵۰۰ میلی‌گرم عصاره ۲-۳ بار در روز با غذا مصرف کنید. اثرات اغلب در ۱-۲ هفته دیده می‌شوند.',
				contraindications: ['بارداری و شیردهی', 'جراحی', 'بیماری‌های خودایمنی'],
				interactions: ['داروهای ضد التهاب', 'سوبستراهای P-glycoprotein', 'داروهای قند خون']
			}
		}
	},
	'devils-claw': {
		en: {
			name: "Devil's Claw",
			description: "A South African herb with Cochrane-reviewed evidence for low back pain, offering NSAID-like relief with a better safety profile for short-term use.",
			mechanism: 'COX-2 and LOX inhibition; anti-inflammatory; analgesic',
			keyOutcome: 'Comparable to NSAIDs for low back pain with better tolerability',
			safetyNote: 'Avoid with peptic ulcers; may affect heart rhythm at high doses',
			dosage: '600-1200mg extract daily',
			diseases: ['Lower Back Pain', 'Osteoarthritis', 'Joint Pain', 'Rheumatic Conditions', 'Muscle Pain'],
			detailedInfo: {
				overview: "Devil's Claw is native to southern Africa. It is approved in Germany for musculoskeletal disorders.",
				howItWorks: 'Harpagoside inhibits COX-2 and 5-LOX pathways. The herb also has direct analgesic properties.',
				clinicalEvidence: 'Cochrane reviews support efficacy for acute low back pain. Multiple RCTs show benefit comparable to NSAIDs.',
				usage: 'Take 600-1200mg of root extract daily in 2-3 doses with food.',
				contraindications: ['Peptic ulcers', 'Gallstones', 'Pregnancy', 'Cardiovascular disease'],
				interactions: ['Anticoagulants', 'Antidiabetic medications', 'Antihypertensive medications', 'NSAIDs']
			}
		},
		fa: {
			name: 'چنگال شیطان',
			description: 'یک گیاه آفریقای جنوبی با شواهد بررسی شده کاکرین برای کمردرد، ارائه تسکین مشابه NSAID با پروفایل ایمنی بهتر برای استفاده کوتاه‌مدت.',
			mechanism: 'مهار COX-2 و LOX؛ ضد التهاب؛ مسکن',
			keyOutcome: 'قابل مقایسه با NSAIDها برای کمردرد با تحمل‌پذیری بهتر',
			safetyNote: 'در زخم معده اجتناب شود؛ ممکن است در دوزهای بالا ریتم قلب را تحت تأثیر قرار دهد',
			dosage: '۶۰۰-۱۲۰۰ میلی‌گرم عصاره روزانه',
			diseases: ['کمردرد', 'آرتروز', 'درد مفصل', 'بیماری‌های روماتیسمی', 'درد عضلانی'],
			detailedInfo: {
				overview: 'چنگال شیطان بومی آفریقای جنوبی است. در آلمان برای اختلالات اسکلتی-عضلانی تأیید شده است.',
				howItWorks: 'هارپاگوزید مسیرهای COX-2 و 5-LOX را مهار می‌کند. این گیاه همچنین خواص مسکن مستقیم دارد.',
				clinicalEvidence: 'بررسی‌های کاکرین اثربخشی برای کمردرد حاد را تأیید می‌کنند.',
				usage: '۶۰۰-۱۲۰۰ میلی‌گرم عصاره ریشه روزانه در ۲-۳ دوز با غذا مصرف کنید.',
				contraindications: ['زخم معده', 'سنگ کیسه صفرا', 'بارداری', 'بیماری قلبی‌عروقی'],
				interactions: ['داروهای ضد انعقاد', 'داروهای ضد دیابت', 'داروهای ضد فشار خون', 'NSAIDها']
			}
		}
	},
	'berberine': {
		en: {
			name: 'Berberine',
			description: 'A plant alkaloid with meta-analysis evidence showing blood sugar control comparable to metformin, plus significant benefits for cholesterol and metabolic health.',
			mechanism: 'AMPK activation; improves insulin sensitivity; reduces gluconeogenesis',
			keyOutcome: 'HbA1c reduction comparable to metformin; significant LDL reduction',
			safetyNote: 'GI upset common initially; drug interactions; avoid in pregnancy',
			dosage: '500mg 2-3 times daily with meals',
			diseases: ['Type 2 Diabetes', 'High Blood Sugar', 'High Cholesterol', 'Metabolic Syndrome', 'PCOS', 'Cardiovascular Health'],
			detailedInfo: {
				overview: 'Berberine is an alkaloid found in several plants. Multiple meta-analyses have established its efficacy for type 2 diabetes.',
				howItWorks: 'Berberine activates AMPK, the same metabolic switch targeted by metformin.',
				clinicalEvidence: 'Meta-analyses show berberine reduces HbA1c by 0.7-0.9%, comparable to metformin.',
				usage: 'Take 500mg 2-3 times daily with meals. Start with lower doses.',
				contraindications: ['Pregnancy', 'Breastfeeding', 'Jaundice in newborns', 'Low blood pressure'],
				interactions: ['Diabetes medications', 'Metformin', 'Cyclosporine', 'CYP enzyme substrates', 'Macrolide antibiotics']
			}
		},
		fa: {
			name: 'بربرین',
			description: 'یک آلکالوئید گیاهی با شواهد متاآنالیز نشان‌دهنده کنترل قند خون قابل مقایسه با متفورمین، به علاوه مزایای قابل توجه برای کلسترول و سلامت متابولیک.',
			mechanism: 'فعال‌سازی AMPK؛ بهبود حساسیت به انسولین؛ کاهش گلوکونئوژنز',
			keyOutcome: 'کاهش HbA1c قابل مقایسه با متفورمین؛ کاهش قابل توجه LDL',
			safetyNote: 'ناراحتی گوارشی در ابتدا رایج است؛ تداخلات دارویی؛ در بارداری اجتناب شود',
			dosage: '۵۰۰ میلی‌گرم ۲-۳ بار در روز با غذا',
			diseases: ['دیابت نوع ۲', 'قند خون بالا', 'کلسترول بالا', 'سندرم متابولیک', 'PCOS', 'سلامت قلبی‌عروقی'],
			detailedInfo: {
				overview: 'بربرین یک آلکالوئید موجود در چندین گیاه است. متاآنالیزهای متعدد اثربخشی آن را برای دیابت نوع ۲ تأیید کرده‌اند.',
				howItWorks: 'بربرین AMPK را فعال می‌کند، همان سوئیچ متابولیکی که متفورمین هدف قرار می‌دهد.',
				clinicalEvidence: 'متاآنالیزها نشان می‌دهند بربرین HbA1c را ۰.۷-۰.۹٪ کاهش می‌دهد، قابل مقایسه با متفورمین.',
				usage: '۵۰۰ میلی‌گرم ۲-۳ بار در روز با غذا مصرف کنید. با دوزهای کمتر شروع کنید.',
				contraindications: ['بارداری', 'شیردهی', 'زردی در نوزادان', 'فشار خون پایین'],
				interactions: ['داروهای دیابت', 'متفورمین', 'سیکلوسپورین', 'سوبستراهای آنزیم CYP', 'آنتی‌بیوتیک‌های ماکرولید']
			}
		}
	},
	'milk-thistle': {
		en: {
			name: 'Milk Thistle',
			description: 'The most studied hepatoprotective herb, with evidence for protecting the liver from toxins and supporting recovery in various liver diseases.',
			mechanism: 'Hepatoprotective; antioxidant; anti-fibrotic; promotes liver regeneration',
			keyOutcome: 'Improved liver enzymes; hepatoprotective against toxins',
			safetyNote: 'Very well tolerated; rare allergic reactions; mild laxative effect',
			dosage: '200-400mg silymarin 2-3 times daily',
			diseases: ['Liver Disease', 'Fatty Liver', 'Hepatitis', 'Cirrhosis', 'Liver Detox', 'High Cholesterol'],
			detailedInfo: {
				overview: 'Milk thistle has been used for over 2,000 years for liver conditions. Silymarin is the active complex.',
				howItWorks: 'Silymarin provides hepatoprotection through antioxidant activity, anti-inflammatory effects, and stimulation of liver regeneration.',
				clinicalEvidence: 'Studies show improved liver enzymes in various liver conditions. Cochrane reviews found improvements in some trials.',
				usage: 'Take 200-400mg of silymarin 2-3 times daily. Effects on liver enzymes typically seen within 4-8 weeks.',
				contraindications: ['Allergy to Asteraceae plants', 'Hormone-sensitive conditions', 'Pregnancy and breastfeeding'],
				interactions: ['May reduce effectiveness of some medications', 'Diabetes medications', 'Some cancer drugs']
			}
		},
		fa: {
			name: 'خارمریم',
			description: 'مطالعه‌شده‌ترین گیاه محافظ کبد، با شواهد برای محافظت از کبد در برابر سموم و حمایت از بهبود در بیماری‌های مختلف کبدی.',
			mechanism: 'محافظت کبدی؛ آنتی‌اکسیدان؛ ضد فیبروز؛ ترویج بازسازی کبد',
			keyOutcome: 'بهبود آنزیم‌های کبدی؛ محافظت کبدی در برابر سموم',
			safetyNote: 'بسیار خوب تحمل می‌شود؛ واکنش‌های آلرژیک نادر؛ اثر ملین خفیف',
			dosage: '۲۰۰-۴۰۰ میلی‌گرم سیلیمارین ۲-۳ بار در روز',
			diseases: ['بیماری کبدی', 'کبد چرب', 'هپاتیت', 'سیروز', 'سم‌زدایی کبد', 'کلسترول بالا'],
			detailedInfo: {
				overview: 'خارمریم بیش از ۲۰۰۰ سال برای بیماری‌های کبدی استفاده شده است. سیلیمارین کمپلکس فعال است.',
				howItWorks: 'سیلیمارین از طریق فعالیت آنتی‌اکسیدانی، اثرات ضد التهابی و تحریک بازسازی کبد محافظت کبدی ارائه می‌دهد.',
				clinicalEvidence: 'مطالعات بهبود آنزیم‌های کبدی در بیماری‌های مختلف کبدی نشان می‌دهند.',
				usage: '۲۰۰-۴۰۰ میلی‌گرم سیلیمارین ۲-۳ بار در روز مصرف کنید. اثرات معمولاً در ۴-۸ هفته دیده می‌شوند.',
				contraindications: ['آلرژی به گیاهان کاسنی', 'بیماری‌های حساس به هورمون', 'بارداری و شیردهی'],
				interactions: ['ممکن است اثربخشی برخی داروها را کاهش دهد', 'داروهای دیابت', 'برخی داروهای سرطان']
			}
		}
	},
	'licorice-root': {
		en: {
			name: 'Licorice Root',
			description: 'A versatile herb effective for digestive ulcers and respiratory conditions, with the DGL form offering benefits without the blood pressure concerns.',
			mechanism: 'Mucosal protection; anti-inflammatory; antiviral; adrenal support',
			keyOutcome: 'Effective for peptic ulcers; soothes upper respiratory symptoms',
			safetyNote: 'May raise blood pressure and cause hypokalemia; use DGL for long-term',
			dosage: '380-760mg DGL before meals',
			diseases: ['Peptic Ulcers', 'GERD', 'Heartburn', 'Sore Throat', 'Cough', 'Adrenal Fatigue'],
			detailedInfo: {
				overview: 'Licorice root has been used in both Western and Eastern medicine for thousands of years.',
				howItWorks: 'Increases mucus production and promotes prostaglandin synthesis protective to stomach lining.',
				clinicalEvidence: 'DGL has shown efficacy comparable to antacids for peptic ulcers in older studies.',
				usage: 'Take 380-760mg DGL tablets 20 minutes before meals. Chewable forms may work best.',
				contraindications: ['Hypertension', 'Heart disease', 'Kidney disease', 'Hypokalemia', 'Pregnancy'],
				interactions: ['Diuretics', 'Digoxin', 'Corticosteroids', 'Blood pressure medications', 'Warfarin']
			}
		},
		fa: {
			name: 'شیرین‌بیان',
			description: 'یک گیاه همه‌کاره مؤثر برای زخم‌های گوارشی و بیماری‌های تنفسی، با فرم DGL ارائه مزایا بدون نگرانی‌های فشار خون.',
			mechanism: 'محافظت مخاطی؛ ضد التهاب؛ ضد ویروس؛ حمایت آدرنال',
			keyOutcome: 'مؤثر برای زخم معده؛ تسکین علائم تنفسی فوقانی',
			safetyNote: 'ممکن است فشار خون را بالا ببرد و هیپوکالمی ایجاد کند؛ از DGL برای طولانی‌مدت استفاده کنید',
			dosage: '۳۸۰-۷۶۰ میلی‌گرم DGL قبل از غذا',
			diseases: ['زخم معده', 'GERD', 'سوزش سر دل', 'گلودرد', 'سرفه', 'خستگی آدرنال'],
			detailedInfo: {
				overview: 'شیرین‌بیان هزاران سال در طب غربی و شرقی استفاده شده است.',
				howItWorks: 'تولید مخاط را افزایش می‌دهد و سنتز پروستاگلاندین محافظ پوشش معده را ترویج می‌کند.',
				clinicalEvidence: 'DGL اثربخشی قابل مقایسه با آنتی‌اسیدها برای زخم معده در مطالعات قدیمی‌تر نشان داده است.',
				usage: 'قرص‌های DGL را ۲۰ دقیقه قبل از غذا مصرف کنید. فرم‌های جویدنی ممکن است بهتر عمل کنند.',
				contraindications: ['فشار خون بالا', 'بیماری قلبی', 'بیماری کلیوی', 'هیپوکالمی', 'بارداری'],
				interactions: ['دیورتیک‌ها', 'دیگوکسین', 'کورتیکواستروئیدها', 'داروهای فشار خون', 'وارفارین']
			}
		}
	},
	'echinacea': {
		en: {
			name: 'Echinacea',
			description: "North America's most popular herbal immune support, with Cochrane-reviewed evidence for modestly reducing cold duration and severity when taken early.",
			mechanism: 'Immunomodulatory; increases phagocytosis; antiviral',
			keyOutcome: 'May reduce cold duration by 1-2 days and severity of symptoms',
			safetyNote: 'Not for long-term continuous use; avoid in autoimmune conditions',
			dosage: '300-500mg extract 3 times daily at first sign of cold',
			diseases: ['Common Cold', 'Upper Respiratory Infection', 'Flu Prevention', 'Immune Support', 'Sore Throat'],
			detailedInfo: {
				overview: 'Echinacea species are native to North America. It is one of the best-selling herbal products for immune support.',
				howItWorks: 'Echinacea modulates immune function, increases phagocytosis, and may have direct antiviral effects.',
				clinicalEvidence: 'Cochrane reviews suggest echinacea may reduce cold duration by 1-2 days if taken at first sign.',
				usage: 'At first sign of cold: Take 300-500mg 3 times daily. Continue for 7-10 days.',
				contraindications: ['Autoimmune diseases', 'Progressive systemic diseases', 'Allergies to Asteraceae plants', 'Immunosuppressant therapy'],
				interactions: ['Immunosuppressants', 'Caffeine', 'Some CYP3A4-metabolized medications']
			}
		},
		fa: {
			name: 'سرخارگل',
			description: 'محبوب‌ترین حمایت ایمنی گیاهی آمریکای شمالی، با شواهد بررسی شده کاکرین برای کاهش متوسط مدت و شدت سرماخوردگی در صورت مصرف زودهنگام.',
			mechanism: 'تعدیل‌کننده ایمنی؛ افزایش فاگوسیتوز؛ ضد ویروس',
			keyOutcome: 'ممکن است مدت سرماخوردگی را ۱-۲ روز و شدت علائم را کاهش دهد',
			safetyNote: 'برای استفاده مداوم طولانی‌مدت نیست؛ در بیماری‌های خودایمنی اجتناب شود',
			dosage: '۳۰۰-۵۰۰ میلی‌گرم عصاره ۳ بار در روز در اولین علائم سرماخوردگی',
			diseases: ['سرماخوردگی', 'عفونت تنفسی فوقانی', 'پیشگیری از آنفلوانزا', 'حمایت ایمنی', 'گلودرد'],
			detailedInfo: {
				overview: 'گونه‌های سرخارگل بومی آمریکای شمالی هستند. یکی از پرفروش‌ترین محصولات گیاهی برای حمایت ایمنی است.',
				howItWorks: 'سرخارگل عملکرد ایمنی را تعدیل می‌کند، فاگوسیتوز را افزایش می‌دهد و ممکن است اثرات ضد ویروسی مستقیم داشته باشد.',
				clinicalEvidence: 'بررسی‌های کاکرین پیشنهاد می‌کنند سرخارگل ممکن است مدت سرماخوردگی را ۱-۲ روز کاهش دهد.',
				usage: 'در اولین علائم سرماخوردگی: ۳۰۰-۵۰۰ میلی‌گرم ۳ بار در روز مصرف کنید. برای ۷-۱۰ روز ادامه دهید.',
				contraindications: ['بیماری‌های خودایمنی', 'بیماری‌های سیستمیک پیشرونده', 'آلرژی به گیاهان کاسنی', 'درمان سرکوب‌کننده ایمنی'],
				interactions: ['سرکوب‌کننده‌های ایمنی', 'کافئین', 'برخی داروهای متابولیز شده توسط CYP3A4']
			}
		}
	},
	'saw-palmetto': {
		en: {
			name: 'Saw Palmetto',
			description: 'The most studied herbal treatment for prostate enlargement, with long traditional use and reasonable evidence for improving urinary symptoms in BPH.',
			mechanism: '5-alpha reductase inhibition; anti-androgenic; anti-inflammatory',
			keyOutcome: 'May improve urinary symptoms; results mixed in recent large trials',
			safetyNote: 'Very well tolerated; may affect PSA testing',
			dosage: '320mg liposterolic extract daily',
			diseases: ['Benign Prostatic Hyperplasia', 'BPH', 'Enlarged Prostate', 'Urinary Problems', 'Prostate Health'],
			detailedInfo: {
				overview: 'Saw palmetto berry extract has been used for prostate health for over a century.',
				howItWorks: 'The extract inhibits 5-alpha reductase and has anti-androgenic and anti-inflammatory effects on prostate tissue.',
				clinicalEvidence: 'Earlier reviews showed significant improvement in urinary symptoms. Recent large trials have shown mixed results.',
				usage: 'Take 320mg daily of liposterolic extract. Allow 4-8 weeks to assess benefit.',
				contraindications: ['Hormone-sensitive conditions', 'Pregnancy and breastfeeding', 'Scheduled prostate surgery'],
				interactions: ['May affect PSA test results', 'Anticoagulants', 'Hormone therapies', 'Oral contraceptives']
			}
		},
		fa: {
			name: 'پالمتو',
			description: 'مطالعه‌شده‌ترین درمان گیاهی برای بزرگی پروستات، با استفاده سنتی طولانی و شواهد معقول برای بهبود علائم ادراری در BPH.',
			mechanism: 'مهار 5-آلفا ردوکتاز؛ ضد آندروژن؛ ضد التهاب',
			keyOutcome: 'ممکن است علائم ادراری را بهبود بخشد؛ نتایج در کارآزمایی‌های بزرگ اخیر مختلط',
			safetyNote: 'بسیار خوب تحمل می‌شود؛ ممکن است تست PSA را تحت تأثیر قرار دهد',
			dosage: '۳۲۰ میلی‌گرم عصاره لیپوستروئیک روزانه',
			diseases: ['هیپرپلازی خوش‌خیم پروستات', 'BPH', 'بزرگی پروستات', 'مشکلات ادراری', 'سلامت پروستات'],
			detailedInfo: {
				overview: 'عصاره توت پالمتو بیش از یک قرن برای سلامت پروستات استفاده شده است.',
				howItWorks: 'عصاره 5-آلفا ردوکتاز را مهار می‌کند و اثرات ضد آندروژنی و ضد التهابی بر بافت پروستات دارد.',
				clinicalEvidence: 'بررسی‌های اولیه بهبود قابل توجه در علائم ادراری نشان دادند. کارآزمایی‌های بزرگ اخیر نتایج مختلط نشان داده‌اند.',
				usage: '۳۲۰ میلی‌گرم عصاره لیپوستروئیک روزانه مصرف کنید. ۴-۸ هفته برای ارزیابی مزیت اجازه دهید.',
				contraindications: ['بیماری‌های حساس به هورمون', 'بارداری و شیردهی', 'جراحی پروستات برنامه‌ریزی شده'],
				interactions: ['ممکن است نتایج تست PSA را تحت تأثیر قرار دهد', 'داروهای ضد انعقاد', 'درمان‌های هورمونی', 'قرص‌های ضد بارداری']
			}
		}
	},
	'horse-chestnut': {
		en: {
			name: 'Horse Chestnut',
			description: 'The gold standard herbal treatment for chronic venous insufficiency, with Cochrane-validated efficacy comparable to compression stockings for leg symptoms.',
			mechanism: 'Aescin reduces capillary permeability and improves venous tone',
			keyOutcome: 'Effective as compression stockings for leg swelling in CVI',
			safetyNote: 'Only use standardized seed extract; raw seeds are toxic',
			dosage: '300mg extract (50mg aescin) twice daily',
			diseases: ['Chronic Venous Insufficiency', 'Varicose Veins', 'Leg Swelling', 'Leg Pain', 'Hemorrhoids'],
			detailedInfo: {
				overview: 'Horse chestnut seed extract is a standard treatment for chronic venous insufficiency in Germany.',
				howItWorks: 'Aescin reduces capillary permeability and improves venous tone.',
				clinicalEvidence: 'A Cochrane review found HCSE significantly reduced leg pain, edema, and pruritis. One trial showed efficacy equivalent to compression stockings.',
				usage: 'Take 300mg of seed extract twice daily. May be used alongside compression therapy.',
				contraindications: ['Kidney disease', 'Liver disease', 'Bleeding disorders', 'Pregnancy', 'Latex allergy'],
				interactions: ['Anticoagulants', 'Diabetes medications', 'Lithium']
			}
		},
		fa: {
			name: 'شاه‌بلوط اسبی',
			description: 'درمان گیاهی استاندارد طلایی برای نارسایی مزمن وریدی، با اثربخشی تأیید شده کاکرین قابل مقایسه با جوراب‌های فشاری برای علائم پا.',
			mechanism: 'اسین نفوذپذیری مویرگی را کاهش می‌دهد و تونوس وریدی را بهبود می‌بخشد',
			keyOutcome: 'مؤثر مانند جوراب‌های فشاری برای تورم پا در CVI',
			safetyNote: 'فقط از عصاره دانه استاندارد استفاده کنید؛ دانه‌های خام سمی هستند',
			dosage: '۳۰۰ میلی‌گرم عصاره (۵۰ میلی‌گرم اسین) دو بار در روز',
			diseases: ['نارسایی مزمن وریدی', 'واریس', 'تورم پا', 'درد پا', 'هموروئید'],
			detailedInfo: {
				overview: 'عصاره دانه شاه‌بلوط اسبی یک درمان استاندارد برای نارسایی مزمن وریدی در آلمان است.',
				howItWorks: 'اسین نفوذپذیری مویرگی را کاهش می‌دهد و تونوس وریدی را بهبود می‌بخشد.',
				clinicalEvidence: 'یک بررسی کاکرین نشان داد HCSE به طور قابل توجهی درد پا، ادم و خارش را کاهش داد. یک کارآزمایی اثربخشی معادل جوراب‌های فشاری نشان داد.',
				usage: '۳۰۰ میلی‌گرم عصاره دانه دو بار در روز مصرف کنید. می‌توان همراه با درمان فشاری استفاده کرد.',
				contraindications: ['بیماری کلیوی', 'بیماری کبدی', 'اختلالات خونریزی', 'بارداری', 'آلرژی به لاتکس'],
				interactions: ['داروهای ضد انعقاد', 'داروهای دیابت', 'لیتیوم']
			}
		}
	}
};

// Merge all translations
Object.assign(herbTranslations, additionalHerbTranslations);

export function getHerbTranslation(herbId: string, lang: Language): HerbTranslation | undefined {
	return herbTranslations[herbId]?.[lang];
}

