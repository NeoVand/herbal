export interface HerbReference {
	id: number;
	title: string;
	url: string;
}

export interface HerbInfo {
	id: string;
	name: string;
	scientificName: string;
	image: string;
	diseases: string[];
	mechanism: string;
	keyOutcome: string;
	safetyNote: string;
	dosage: string;
	description: string;
	detailedInfo: {
		overview: string;
		howItWorks: string;
		clinicalEvidence: string;
		usage: string;
		contraindications: string[];
		interactions: string[];
	};
	references: HerbReference[];
}

export const herbs: HerbInfo[] = [
	{
		id: 'peppermint-oil',
		name: 'Peppermint Oil',
		scientificName: 'Mentha x piperita',
		image: '/images/herbs/peppermint_oil.webp',
		diseases: [
			'Irritable Bowel Syndrome',
			'IBS',
			'Abdominal Pain',
			'Bloating',
			'Digestive Issues',
			'Stomach Cramps'
		],
		mechanism: 'Calcium Channel Blocker',
		keyOutcome: 'Only 4 patients need treatment for 1 to experience complete IBS symptom relief.',
		safetyNote: 'Must be enteric-coated (Heartburn risk)',
		dosage: '0.2 mL (180-225 mg) enteric-coated capsules, 30-90 min before meals',
		description:
			'A powerful antispasmodic that relaxes gastrointestinal smooth muscle, providing superior relief for IBS symptoms compared to many conventional treatments.',
		detailedInfo: {
			overview:
				'Peppermint Oil has emerged not just as an alternative, but as a superior therapeutic agent for IBS with a favorable safety profile. The therapeutic efficacy is primarily attributed to L-menthol, a monoterpene that acts as a potent calcium channel blocker in gastrointestinal smooth muscle.',
			howItWorks:
				'By inhibiting the influx of extracellular calcium ions through voltage-gated channels, menthol prevents the phosphorylation of myosin light chains. This blockade inhibits the interaction between actin and myosin, leading to the relaxation of smooth muscle and a reduction in colonic spasms. Additionally, menthol interacts with TRPM8 (transient receptor potential melastatin 8) and TRPA1 channels on sensory afferent nerves in the colon, inducing an analgesic effect that modulates pain signaling pathways.',
			clinicalEvidence:
				'A pivotal systematic review and meta-analysis identified 10 RCTs involving over 1,000 patients. The analysis demonstrated that peppermint oil was significantly superior to placebo for global improvement of IBS symptoms with a risk ratio (RR) for symptoms not improving was 0.65 (95% CI 0.43–0.98). This translates to a Number Needed to Treat (NNT) of approximately 4.',
			usage:
				'Take enteric-coated capsules 30-90 minutes before meals. The enteric coating prevents gastric release and mitigates heartburn risk. Do not crush or chew capsules.',
			contraindications: [
				'Severe GERD',
				'Hiatal Hernia',
				'Achlorhydria (lack of stomach acid)',
				'Children under 8 years without medical supervision'
			],
			interactions: [
				'Cyclosporine (may alter metabolism)',
				'Antacids (may affect coating integrity)',
				'H2 Blockers (may affect gastric pH)'
			]
		},
		references: [
			{
				id: 7,
				title: 'The physiologic effects and safety of Peppermint Oil',
				url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC5814329/'
			},
			{
				id: 9,
				title: 'Systematic review and meta‐analysis: efficacy of peppermint oil in IBS',
				url: 'https://eprints.whiterose.ac.uk/id/eprint/190294/3/APT-1040-2022R1%20CLEAN.pdf'
			}
		]
	},
	{
		id: 'psyllium-husk',
		name: 'Psyllium Husk',
		scientificName: 'Plantago ovata',
		image: '/images/herbs/Psyllium-husk.jpg',
		diseases: [
			'Constipation',
			'Chronic Constipation',
			'Diarrhea',
			'Irregular Bowel Movements',
			'Digestive Health'
		],
		mechanism: 'Gel-forming soluble fiber',
		keyOutcome: 'Received "strong recommendation" from American College of Gastroenterology; outperforms Docusate.',
		safetyNote: 'Take with adequate water; low gas profile',
		dosage: '5-10g daily with at least 8 oz water per dose',
		description:
			'The only fiber supplement with strong recommendation from the American College of Gastroenterology for chronic constipation treatment.',
		detailedInfo: {
			overview:
				'Unlike insoluble fibers which mechanically irritate the gut mucosa, or soluble fermentable fibers which can cause excessive gas, psyllium is a soluble, non-fermenting, gel-forming fiber. Upon hydration, psyllium husk expands to form a viscous, mucilaginous gel with dual action benefits.',
			howItWorks:
				'The gel softens hard, dry stool by retaining water (treating constipation) and adds viscosity and bulk to loose, watery stool (treating diarrhea). Because it is minimally fermented by colonic bacteria, it produces significantly less flatulence and bloating compared to other fiber sources.',
			clinicalEvidence:
				'Psyllium is the only fiber supplement to receive a "strong recommendation" with a "high quality of evidence" from the American College of Gastroenterology. Systematic reviews indicate that psyllium improves stool frequency and consistency significantly more than placebo, and has been shown to be superior to docusate sodium for increasing stool water content and frequency.',
			usage:
				'Mix 5-10g with at least 8 oz of water and drink immediately. Follow with additional water. Best taken consistently at the same times each day. Start with lower doses and increase gradually.',
			contraindications: [
				'Bowel obstruction',
				'Difficulty swallowing',
				'Fecal impaction',
				'Esophageal stricture'
			],
			interactions: [
				'May decrease absorption of medications taken at the same time',
				'Take other medications 1-2 hours before or 2-4 hours after psyllium'
			]
		},
		references: [
			{
				id: 21,
				title: 'Role and therapeutic effectiveness of Plantago ovata husk',
				url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC12224249/'
			},
			{
				id: 23,
				title: 'Influence of Psyllium on Bowel Function',
				url: 'https://www.mdpi.com/2072-6643/11/5/1130'
			}
		]
	},
	{
		id: 'ginger',
		name: 'Ginger',
		scientificName: 'Zingiber officinale',
		image: '/images/herbs/ginger.jpeg',
		diseases: [
			'Nausea',
			'Morning Sickness',
			'Pregnancy Nausea',
			'Chemotherapy Nausea',
			'Motion Sickness',
			'Postoperative Nausea'
		],
		mechanism: '5-HT3 (serotonin) and cholinergic M3 receptor antagonist',
		keyOutcome: 'Clinical trials show significantly better nausea relief than placebo during pregnancy and chemotherapy.',
		safetyNote: 'Caution with anticoagulants; safe in pregnancy at recommended doses',
		dosage: '250-1000mg daily in divided doses',
		description:
			'A broad-spectrum anti-emetic effective for pregnancy-induced nausea, chemotherapy side effects, and postoperative nausea.',
		detailedInfo: {
			overview:
				'Ginger possesses a therapeutic pedigree spanning thousands of years, yet it remains one of the most relevant agents in modern anti-emetic therapy. The rhizome contains a lipophilic oleoresin rich in gingerols and shogaols, compounds that exhibit potent antagonism at 5-HT3 and cholinergic M3 receptors.',
			howItWorks:
				'Ginger compounds inhibit the 5-HT3 serotonin receptors in the gastrointestinal tract and the chemoreceptor trigger zone, which are the same targets modulated by pharmaceutical drugs like ondansetron. It also accelerates gastric emptying (prokinetic effect) and reduces intestinal contractions.',
			clinicalEvidence:
				'Systematic reviews confirm ginger is consistently superior to placebo and comparable to Vitamin B6 in reducing pregnancy nausea severity. For chemotherapy, adding ginger to standard anti-emetic therapy significantly reduces acute nausea. In postoperative settings, ginger (1g) showed nausea/vomiting incidence of 21%, comparable to metoclopramide (27%) and significantly better than placebo (41%).',
			usage:
				'Take in divided doses of 250mg, 3-4 times daily. Can be taken as capsules, fresh ginger tea, or crystallized ginger. For pregnancy nausea, start with lower doses. For chemotherapy, begin supplementation before treatment.',
			contraindications: [
				'Active bleeding disorders',
				'Prior to surgery (stop 7-14 days before)',
				'Very high doses (>1g/day) near term in pregnancy with history of vaginal bleeding'
			],
			interactions: [
				'Warfarin (increased bleeding risk)',
				'Aspirin and other antiplatelet drugs',
				'Anticoagulants'
			]
		},
		references: [
			{
				id: 15,
				title: 'Effectiveness of Ginger in Prevention of Nausea and Vomiting',
				url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC4818021/'
			},
			{
				id: 17,
				title: 'Ginger Safety in Pregnancy - MotherToBaby',
				url: 'https://www.ncbi.nlm.nih.gov/books/NBK582731/'
			}
		]
	},
	{
		id: 'lavender-silexan',
		name: 'Lavender (Silexan)',
		scientificName: 'Lavandula angustifolia',
		image: '/images/herbs/Lavender.jpg',
		diseases: [
			'Anxiety',
			'Generalized Anxiety Disorder',
			'GAD',
			'Stress',
			'Nervousness',
			'Restlessness'
		],
		mechanism: 'Voltage-gated calcium channel (VGCC) modulator',
		keyOutcome: 'Clinical trials showed anxiety reduction comparable to prescription medications lorazepam and paroxetine.',
		safetyNote: 'No sedation, dependency, or withdrawal; "lavender burps" common',
		dosage: '80mg once daily (pharmaceutical-grade Silexan preparation)',
		description:
			'A pharmaceutical-grade lavender oil preparation that rivals benzodiazepines and SSRIs for anxiety without the sedation or dependence risks.',
		detailedInfo: {
			overview:
				'While lavender has a reputation as a mild aromatherapeutic, Silexan—a proprietary, pharmaceutical-grade essential oil of Lavandula angustifolia prepared for oral administration—is a potent anxiolytic drug. It has been established through multi-center, double-blind, randomized controlled trials.',
			howItWorks:
				'Silexan acts by inhibiting voltage-gated calcium channels (VGCCs), specifically the P/Q-type channels, in the hippocampus and other brain regions involved in anxiety. This inhibition reduces calcium influx into presynaptic terminals, thereby dampening the release of excitatory neurotransmitters such as glutamate and norepinephrine. This mechanism is functionally similar to pregabalin (Lyrica) but without sedation or abuse potential.',
			clinicalEvidence:
				'In head-to-head trials, Silexan (80mg/day) demonstrated anxiolytic efficacy comparable to lorazepam (0.5mg/day) over 6 weeks and comparable to paroxetine (20mg/day) in reducing anxiety and depression scores. Response rates (≥50% reduction in HAMA scores) consistently favor Silexan over placebo with a risk ratio of approximately 1.34.',
			usage:
				'Take one 80mg capsule daily. Effects may take 2-4 weeks to reach maximum benefit. Can be taken with or without food. Do not use aromatherapy products as substitutes.',
			contraindications: [
				'Hypersensitivity to lavender',
				'Not recommended for children/adolescents (insufficient data)'
			],
			interactions: [
				'May enhance CNS depressant effects when combined with sedatives',
				'Theoretical interaction with CYP3A4 metabolized drugs'
			]
		},
		references: [
			{
				id: 25,
				title: 'Silexan efficacy in GAD vs placebo and paroxetine',
				url: 'https://academic.oup.com/ijnp/article/17/6/859/691858'
			},
			{
				id: 26,
				title: 'Efficacy of Silexan in anxiety disorders: meta-analysis',
				url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC10465640/'
			}
		]
	},
	{
		id: 'saffron',
		name: 'Saffron',
		scientificName: 'Crocus sativus',
		image: '/images/herbs/Saffron.webp',
		diseases: ['Depression', 'Major Depressive Disorder', 'MDD', 'Low Mood', 'Mild Depression'],
		mechanism: 'Monoamine reuptake inhibition; antioxidant/anti-neuroinflammatory',
		keyOutcome: 'Meta-analyses show effectiveness matching fluoxetine (Prozac) for depression, without sexual side effects.',
		safetyNote: 'No sexual side effects; excellent tolerability',
		dosage: '30mg daily of standardized extract',
		description:
			'A rigorously validated antidepressant that matches the efficacy of SSRIs like fluoxetine but without the notorious sexual side effects.',
		detailedInfo: {
			overview:
				'Saffron, the world\'s most expensive spice, has emerged as a rigorously validated antidepressant. The dried stigmas contain crocin, crocetin, and safranal—compounds with potent neuroprotective and monoaminergic activity that challenge conventional psychiatric dogma.',
			howItWorks:
				'Saffron\'s constituents inhibit the reuptake of dopamine, norepinephrine, and serotonin, similar to tricyclic antidepressants. Additionally, they exert antioxidant effects that reduce neuroinflammation—a key driver of depression. Safranal specifically modulates GABA-A receptors, contributing to anxiolytic effects.',
			clinicalEvidence:
				'Meta-analyses reveal that saffron extracts (30mg/day) are statistically non-inferior to standard doses of fluoxetine and imipramine for mild to moderate MDD. Saffron shows a large effect size (SMD -1.22) in reducing depression scores vs placebo. The pooled SMD between saffron and synthetic antidepressants is negligible (0.16), indicating equivalent efficacy.',
			usage:
				'Take 30mg of standardized saffron extract daily, typically as 15mg twice daily. Effects may take 4-6 weeks to fully manifest. Use only pharmaceutical-grade, standardized preparations.',
			contraindications: [
				'Pregnancy (high doses may be abortifacient)',
				'Bipolar disorder (insufficient data)',
				'Bleeding disorders'
			],
			interactions: [
				'May enhance effects of antidepressants (serotonin syndrome risk at high doses)',
				'Anticoagulants (theoretical bleeding risk)',
				'Blood pressure medications (may have additive effects)'
			]
		},
		references: [
			{
				id: 28,
				title: 'Comparative efficacy of Crocus sativus for treating mild to moderate MDD',
				url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC5967372/'
			},
			{
				id: 29,
				title: 'Efficacy of Saffron vs placebo and Fluoxetine',
				url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC6503633/'
			}
		]
	},
	{
		id: 'valerian',
		name: 'Valerian Root',
		scientificName: 'Valeriana officinalis',
		image: '/images/herbs/Valerian.jpg',
		diseases: [
			'Insomnia',
			'Sleep Problems',
			'Sleep Quality',
			'Night Awakenings',
			'Difficulty Sleeping'
		],
		mechanism: 'GABA-A receptor modulation; GABA breakdown inhibition',
		keyOutcome: 'Patients using valerian are nearly twice as likely to report improved sleep quality compared to placebo.',
		safetyNote: 'No hangover effect; cumulative effect over 2-4 weeks',
		dosage: '300-600mg standardized extract 30-60 minutes before bedtime',
		description:
			'A gentle sleep aid that improves subjective sleep quality without morning grogginess or impaired reaction time.',
		detailedInfo: {
			overview:
				'Valerian is perhaps the most widely recognized herbal sedative, yet its clinical application requires nuanced understanding. It is not a rapid-onset hypnotic like zolpidem (Ambien); instead, it works cumulatively to improve sleep quality over weeks of use.',
			howItWorks:
				'Valerian extracts contain valerenic acid and various lignans which interact with the GABA-A receptor (similar to benzodiazepines but at a different binding site) and also inhibit the enzymatic breakdown of GABA. This increases GABA availability in the synaptic cleft, promoting relaxation and sleep.',
			clinicalEvidence:
				'Meta-analysis showed a relative risk of improved sleep quality of 1.8 compared to placebo. Patients consistently report feeling more rested and experiencing fewer night awakenings. Importantly, the effect is cumulative—maximal benefits typically manifest after 2-4 weeks of continuous nightly use.',
			usage:
				'Take 300-600mg of standardized extract 30-60 minutes before bedtime. Use consistently every night for at least 2-4 weeks to see full benefits. Can be combined with other sleep-promoting herbs like hops.',
			contraindications: [
				'Liver disease (rare reports of hepatotoxicity)',
				'Pregnancy and breastfeeding (insufficient data)',
				'Children under 3 years'
			],
			interactions: [
				'Benzodiazepines and other sedatives (may enhance effects)',
				'Alcohol (additive CNS depression)',
				'Anesthetics (discontinue 2 weeks before surgery)'
			]
		},
		references: [
			{
				id: 32,
				title: 'Valerian for sleep: a systematic review and meta-analysis',
				url: 'https://pubmed.ncbi.nlm.nih.gov/17145239/'
			},
			{
				id: 34,
				title: 'Valerian Root in Treating Sleep Problems',
				url: 'https://pubmed.ncbi.nlm.nih.gov/33086877/'
			}
		]
	},
	{
		id: 'pelargonium',
		name: 'Pelargonium sidoides',
		scientificName: 'Pelargonium sidoides',
		image: '/images/herbs/Pelargonium sidoides .jpg',
		diseases: [
			'Acute Bronchitis',
			'Bronchitis',
			'Cough',
			'Respiratory Infection',
			'Upper Respiratory Infection',
			'Cold'
		],
		mechanism: 'Antiviral, antibacterial, and mucolytic/secretomotor',
		keyOutcome: 'Recognized in official medical guidelines for bronchitis treatment; studies show faster symptom relief.',
		safetyNote: 'Well-tolerated; avoid in severe hepatic/renal failure',
		dosage:
			'EPs 7630 extract: Adults 30 drops 3x daily; Children (6-12) 20 drops 3x daily for 7-10 days',
		description:
			'A South African medicinal plant uniquely included in official medical guidelines for acute bronchitis treatment, with triple-action benefits.',
		detailedInfo: {
			overview:
				'Pelargonium sidoides is the source of the specialized extract EPs 7630. This extract is unique in that it is one of the few herbal preparations included in official medical guidelines for the treatment of acute bronchitis, validated by comprehensive Cochrane reviews.',
			howItWorks:
				'The extract acts via a triad of mechanisms: (1) Antiviral - inhibits viral replication and prevents adhesion to host cells; (2) Antibacterial - prevents bacterial adhesion to respiratory epithelium, reducing secondary infection risk; (3) Mucolytic/Secretomotor - increases respiratory cilia beat frequency, enhancing mucus expulsion.',
			clinicalEvidence:
				'Cochrane reviews confirm EPs 7630 is effective in relieving symptoms of acute bronchitis in adults and children. In pediatric trials, 18% of children showed complete cough remission by day 7 vs only 5.5% with placebo (RR 5.0). Adults showed significantly faster complete resolution of symptoms.',
			usage:
				'Take as liquid drops or tablets according to package instructions. Start at first sign of symptoms and continue for 7-10 days. Can be taken with or without food. The extract should be pharmaceutical-grade EPs 7630.',
			contraindications: [
				'Severe liver disease',
				'Severe kidney disease',
				'Bleeding disorders',
				'Autoimmune conditions'
			],
			interactions: [
				'Anticoagulants (theoretical bleeding risk)',
				'Immunosuppressants (may interfere with immune-modulating effects)'
			]
		},
		references: [
			{
				id: 35,
				title: 'Effects of Pelargonium sidoides extract EPs 7630 on acute cough',
				url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC9425964/'
			},
			{
				id: 37,
				title: 'Pelargonium sidoides for acute respiratory tract infections - Cochrane',
				url: 'https://www.cochranelibrary.com/cdsr/doi/10.1002/14651858.CD006323.pub2/abstract'
			}
		]
	},
	{
		id: 'garlic',
		name: 'Garlic',
		scientificName: 'Allium sativum',
		image: '/images/herbs/Garlic.jpg',
		diseases: [
			'Hypertension',
			'High Blood Pressure',
			'Cardiovascular Health',
			'High Cholesterol',
			'Arterial Stiffness'
		],
		mechanism: 'Nitric oxide and hydrogen sulfide production; mild ACE inhibition',
		keyOutcome: 'Meta-analyses show blood pressure reductions of 8-9 mmHg systolic—comparable to some prescription medications.',
		safetyNote: 'May increase bleeding risk; garlic breath common',
		dosage: '600-1200mg aged garlic extract (AGE) daily',
		description:
			'A cardiovascular powerhouse that can lower blood pressure comparably to standard monotherapy medications.',
		detailedInfo: {
			overview:
				'Aged Garlic Extract (AGE) is the preferred form for cardiovascular applications due to its stability and standardization. Its blood pressure-lowering effect is clinically significant and comparable to standard pharmaceutical monotherapy.',
			howItWorks:
				'Garlic\'s polysulfides are metabolized into hydrogen sulfide (H2S) and nitric oxide (NO), gaseous signaling molecules that induce vasodilation by relaxing vascular smooth muscle. Additionally, garlic constituents show mild ACE-inhibitory activity, reducing the production of the vasoconstrictor angiotensin II.',
			clinicalEvidence:
				'Meta-analysis of RCTs indicates that garlic supplements reduce Systolic Blood Pressure (SBP) by an average of 8-9 mmHg and Diastolic Blood Pressure (DBP) by 6-7 mmHg in hypertensive patients. This magnitude is clinically significant and comparable to standard monotherapy with beta-blockers or ACE inhibitors. Secondary benefits include modest reductions in total cholesterol, LDL, and arterial stiffness.',
			usage:
				'Take 600-1200mg of aged garlic extract daily in divided doses with food. Effects typically appear after 8-12 weeks of consistent use. Odor-controlled preparations are available.',
			contraindications: [
				'Scheduled surgery (stop 7-14 days before)',
				'Active bleeding',
				'Taking anticoagulants without medical supervision'
			],
			interactions: [
				'Anticoagulants (warfarin, heparin) - increased bleeding risk',
				'Antiplatelet drugs (aspirin, clopidogrel)',
				'HIV protease inhibitors (reduced drug levels)'
			]
		},
		references: [
			{
				id: 43,
				title: 'Garlic lowers blood pressure: review and meta-analysis',
				url: 'https://www.spandidos-publications.com/10.3892/etm.2019.8374'
			},
			{
				id: 45,
				title: 'Garlic and Hypertension: Efficacy, Mechanism, and Clinical Implications',
				url: 'https://www.mdpi.com/2072-6643/16/17/2895'
			}
		]
	},
	{
		id: 'hibiscus',
		name: 'Hibiscus',
		scientificName: 'Hibiscus sabdariffa',
		image: '/images/herbs/Hibiscus.jpg',
		diseases: ['Hypertension', 'High Blood Pressure', 'Cardiovascular Health', 'Metabolic Health'],
		mechanism: 'Natural ACE inhibition; diuretic properties',
		keyOutcome: 'Studies show blood pressure reductions of over 7 mmHg, with efficacy comparable to the ACE inhibitor captopril.',
		safetyNote:
			'May potentiate blood pressure medications; no electrolyte imbalance like pharmaceutical diuretics',
		dosage: '1.5-3g dried hibiscus flowers steeped as tea, 2-3 times daily',
		description:
			'A delicious sour tea that acts as a natural ACE inhibitor with diuretic properties, without the potassium loss of pharmaceutical diuretics.',
		detailedInfo: {
			overview:
				'Hibiscus tea (sour tea) is rich in anthocyanins, particularly delphinidin-3-sambubioside. This beautiful red tea is not just a refreshing beverage but a potent cardiovascular agent with clinical evidence rivaling pharmaceutical interventions.',
			howItWorks:
				'Hibiscus acts as a natural ACE inhibitor, blocking the enzyme that converts angiotensin I to the potent vasoconstrictor angiotensin II. It also possesses diuretic properties similar to hydrochlorothiazide but without the electrolyte imbalances (especially potassium loss) often seen with pharmaceutical diuretics.',
			clinicalEvidence:
				'Meta-analyses demonstrate that hibiscus consumption significantly lowers blood pressure, with some studies showing SBP reductions of over 7 mmHg. Comparative trials suggest efficacy similar to captopril (an ACE inhibitor). Additional benefits include modest improvements in lipid profiles.',
			usage:
				'Steep 1.5-3g of dried hibiscus flowers (calyx) in hot water for 5-10 minutes. Drink 2-3 cups daily. Can be enjoyed hot or cold. Commercially available hibiscus tea bags can also be used.',
			contraindications: [
				'Pregnancy (may have emmenagogue effects)',
				'Low blood pressure',
				'Diabetes (may affect blood sugar)'
			],
			interactions: [
				'Antihypertensive medications (additive effects)',
				'Diuretics (additive effects)',
				'Chloroquine (may reduce absorption)'
			]
		},
		references: [
			{
				id: 46,
				title: 'Effects of Hibiscus sabdariffa on blood pressure: systematic review',
				url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC9086798/'
			},
			{
				id: 47,
				title: 'Efficacy, side effects and interactions of Hibiscus on blood pressure',
				url: 'https://www.medrxiv.org/content/10.1101/2025.08.01.25332612v1.full-text'
			}
		]
	},
	{
		id: 'turmeric',
		name: 'Turmeric (Curcumin)',
		scientificName: 'Curcuma longa',
		image: '/images/herbs/Turmeric-Curcumin.webp',
		diseases: [
			'Osteoarthritis',
			'Arthritis',
			'Joint Pain',
			'Knee Pain',
			'Inflammation',
			'Joint Stiffness'
		],
		mechanism: 'NF-kB pathway inhibition; COX-2 and 5-LOX downregulation',
		keyOutcome: 'Head-to-head trials demonstrate pain relief comparable to ibuprofen and diclofenac for knee osteoarthritis.',
		safetyNote: 'GI safe; requires bioavailability enhancer (piperine/phospholipids)',
		dosage: '1000-1500mg curcumin daily with piperine or in bioavailable form',
		description:
			'An anti-inflammatory alternative to NSAIDs for osteoarthritis that matches their efficacy without the gastrointestinal and cardiovascular risks.',
		detailedInfo: {
			overview:
				'Osteoarthritis management relies heavily on NSAIDs, which carry risks of gastrointestinal bleeding, renal failure, and cardiovascular events with long-term use. Turmeric, specifically its active curcuminoid fraction, offers a safer alternative with comparable efficacy.',
			howItWorks:
				'Curcumin inhibits the NF-kB pathway, a master regulator of inflammatory gene expression. It also downregulates pro-inflammatory enzymes like COX-2 (the target of celecoxib) and 5-LOX. Unlike NSAIDs, curcumin does not inhibit COX-1, which is protective of the stomach lining.',
			clinicalEvidence:
				'Systematic reviews and meta-analyses conclude that curcumin extracts (1000-1500mg/day) are statistically non-inferior to ibuprofen and diclofenac for the management of knee osteoarthritis pain and stiffness. Importantly, patients taking curcumin report significantly fewer GI adverse events than those taking NSAIDs.',
			usage:
				'Take 1000-1500mg of curcumin daily, always with a bioavailability enhancer: either piperine (black pepper extract) which increases absorption by 2000%, or in a phytosome/nanoparticle formulation. Take with fatty food for better absorption.',
			contraindications: [
				'Gallbladder disease or gallstones',
				'Scheduled surgery (stop 2 weeks before)',
				'Bile duct obstruction',
				'Pregnancy (high therapeutic doses)'
			],
			interactions: [
				'Anticoagulants (increased bleeding risk)',
				'Antiplatelet drugs',
				'Certain chemotherapy drugs (may interfere)'
			]
		},
		references: [
			{
				id: 48,
				title: 'Efficacy and Safety of Turmeric for Knee Osteoarthritis',
				url: 'https://pubmed.ncbi.nlm.nih.gov/33511486/'
			},
			{
				id: 49,
				title: 'Therapeutic effects of turmeric for knee osteoarthritis',
				url: 'https://bmjopensem.bmj.com/content/7/1/e000935'
			}
		]
	},
	{
		id: 'tea-tree-oil',
		name: 'Tea Tree Oil',
		scientificName: 'Melaleuca alternifolia',
		image: '/images/herbs/Tea Tree Oil.avif',
		diseases: ['Acne', 'Acne Vulgaris', 'Nail Fungus', 'Onychomycosis', 'Skin Infections'],
		mechanism: 'Lipophilic antimicrobial penetrating the pilosebaceous unit',
		keyOutcome: 'Clinical studies show acne improvement similar to benzoyl peroxide, and nail fungus clearance comparable to clotrimazole.',
		safetyNote: 'Less skin irritation than benzoyl peroxide; topical use only',
		dosage: '5% concentration for acne; 100% for nail fungus (applied twice daily)',
		description:
			'A gentler alternative to benzoyl peroxide for acne-prone skin, with additional antifungal properties for stubborn nail infections.',
		detailedInfo: {
			overview:
				'Tea tree oil is a lipophilic antimicrobial that effectively penetrates the pilosebaceous unit (hair follicle and sebaceous gland complex). It offers clinical efficacy comparable to standard treatments while causing significantly less irritation.',
			howItWorks:
				'Tea tree oil contains terpinen-4-ol and other monoterpenes that disrupt microbial cell membranes, killing bacteria, fungi, and viruses. Its lipophilic nature allows it to penetrate deep into pores and nail beds where infections reside.',
			clinicalEvidence:
				'For acne: A single-blind RCT comparing 5% tea tree oil gel to 5% benzoyl peroxide showed both reduced lesion counts significantly. While tea tree oil acted slower, it caused significantly less skin irritation, dryness, and peeling. For nail fungus: 100% tea tree oil applied twice daily for 6 months achieved cure rates comparable to topical clotrimazole.',
			usage:
				'For acne: Apply 5% tea tree oil gel or diluted oil to affected areas twice daily after cleansing. For nail fungus: Apply 100% undiluted oil to affected nails twice daily for 6 months. Always patch test before widespread use.',
			contraindications: [
				'Internal use (toxic if swallowed)',
				'Known tea tree oil allergy',
				'Open wounds (may cause irritation)',
				'Use in prepubertal boys (rare reports of gynecomastia with repeated topical use)'
			],
			interactions: ['Topical medications - apply separately to avoid dilution']
		},
		references: [
			{
				id: 52,
				title: 'Tea-tree oil versus benzoylperoxide in acne treatment',
				url: 'https://pubmed.ncbi.nlm.nih.gov/2145499/'
			},
			{
				id: 53,
				title: 'Nail Oil with Tea Tree for Onychomycosis',
				url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC6995982/'
			}
		]
	},
	{
		id: 'black-cohosh',
		name: 'Black Cohosh',
		scientificName: 'Actaea racemosa',
		image: '/images/herbs/Black Cohosh.jpg',
		diseases: [
			'Menopause',
			'Hot Flashes',
			'Vasomotor Symptoms',
			'Night Sweats',
			'Menopausal Symptoms'
		],
		mechanism: 'Selective Estrogen Receptor Modulator (SERM) or serotonergic pathway modulation',
		keyOutcome: 'Standardized extracts show significant reduction in hot flash frequency and intensity in clinical trials.',
		safetyNote: 'Rare liver toxicity reports (no proven causal link); safer for breast tissue than HRT',
		dosage: '20-40mg standardized isopropanolic extract twice daily',
		description:
			'The most studied botanical for menopausal hot flashes, acting through mechanisms safer for breast tissue than traditional hormone replacement.',
		detailedInfo: {
			overview:
				'Black Cohosh is the most studied botanical for vasomotor symptoms (hot flashes, night sweats) of menopause. Importantly, it acts as a Selective Estrogen Receptor Modulator (SERM) or through serotonergic pathways, rather than as a general estrogen, making it safer for breast tissue.',
			howItWorks:
				'Black cohosh does not contain phytoestrogens that bind estrogen receptors in the classical way. Instead, it appears to modulate estrogen receptors selectively or work through serotonin pathways to regulate body temperature. It may also have dopaminergic activity. This makes it fundamentally different from hormone replacement therapy.',
			clinicalEvidence:
				'Efficacy is generally positive for standardized isopropanolic extracts. Studies show significant reductions in the frequency and intensity of hot flashes compared to placebo. The Menopause Rating Scale (MRS) scores consistently improve with treatment.',
			usage:
				'Take 20-40mg of standardized isopropanolic extract twice daily. Effects typically appear within 4-8 weeks. Continue as needed during menopausal transition. Use only well-established, pharmaceutical-grade preparations.',
			contraindications: [
				'History of liver disease',
				'Hormone-sensitive conditions (until more data available)',
				'Pregnancy and breastfeeding',
				'Aspirin allergy (related plant)'
			],
			interactions: [
				'Hepatotoxic drugs (theoretical increased liver risk)',
				'Hormone therapies (unclear interaction)',
				'Tamoxifen and aromatase inhibitors (consult oncologist)'
			]
		},
		references: [
			{
				id: 54,
				title: 'Safety and Efficacy of Black Cohosh for Vasomotor Symptoms',
				url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC2783540/'
			},
			{
				id: 55,
				title: 'European Health Agencies on Black Cohosh Liver Warnings',
				url: 'https://www.herbalgram.org/resources/herbalgram/issues/72/table-of-contents/article3043/'
			}
		]
	},
	{
		id: 'cranberry',
		name: 'Cranberry',
		scientificName: 'Vaccinium macrocarpon',
		image: '/images/herbs/Cranberry.webp',
		diseases: [
			'Urinary Tract Infection',
			'UTI',
			'Bladder Infection',
			'Recurrent UTI',
			'Cystitis Prevention'
		],
		mechanism: 'A-type proanthocyanidin (PAC) anti-adhesion to bladder wall',
		keyOutcome: 'A Cochrane review confirms a 26% reduction in recurrent urinary tract infections in women.',
		safetyNote: 'For prevention only, not treatment; kidney stone risk (oxalates); warfarin interaction',
		dosage: '36mg proanthocyanidins (PACs) daily in capsule/tablet form',
		description:
			'An evidence-based preventive measure for recurrent UTIs that works by preventing bacterial adhesion—not by acidifying urine as commonly believed.',
		detailedInfo: {
			overview:
				'Cranberry is effective for UTI prevention, not treatment. The key insight is that it works through a specific anti-adhesion mechanism involving A-type proanthocyanidins (PACs), which structurally inhibit bacterial attachment to the bladder wall.',
			howItWorks:
				'Cranberry proanthocyanidins (PACs) contain unique A-type linkages that structurally inhibit the adhesion of P-fimbriated E. coli (the most common UTI pathogen) to the uroepithelial cells lining the bladder wall. Bacteria that cannot adhere are flushed out during urination. This is not about urine acidification.',
			clinicalEvidence:
				'A 2023 Cochrane review confirms moderate-certainty evidence that cranberry products reduce the risk of recurrent UTIs in women by 26%. Benefits are also seen in children. Products must contain adequate PAC levels—most cranberry juice cocktails do not meet therapeutic thresholds.',
			usage:
				'Take capsules or tablets standardized to provide 36mg PACs daily for prevention. Juice must be 100% cranberry juice (not cocktail) at 8-16 oz daily, which is less practical. Not for treating active infections—see a doctor.',
			contraindications: [
				'Active UTI (see a doctor for antibiotics)',
				'History of calcium-oxalate kidney stones',
				'Taking warfarin (without INR monitoring)'
			],
			interactions: [
				'Warfarin (cranberry inhibits CYP2C9, elevating INR and bleeding risk)',
				'Medications metabolized by CYP2C9'
			]
		},
		references: [
			{
				id: 57,
				title: 'NCCIH Spotlight on Cranberry',
				url: 'https://www.nccih.nih.gov/health/providers/digest/spotlight-on-herbs-and-other-botanicals-science'
			},
			{
				id: 58,
				title: 'Cochrane Update: Cranberry Products and UTI Risk',
				url: 'https://www.obgproject.com/2023/05/10/cochrane-update-do-cranberry-products-reduce-the-risk-of-utis/'
			}
		]
	},
	{
		id: 'elderberry',
		name: 'Elderberry',
		scientificName: 'Sambucus nigra',
		image: '/images/herbs/Elderberry.jpg',
		diseases: ['Flu', 'Influenza', 'Common Cold', 'Upper Respiratory Infection', 'Viral Infection'],
		mechanism: 'Antiviral activity; immune modulation; reduces symptom severity',
		keyOutcome: 'Meta-analyses show significant reduction in upper respiratory symptom severity and fever during colds and flu.',
		safetyNote: 'Safe alternative to antibiotic misuse for viral conditions',
		dosage: '15ml syrup (300mg extract) 4 times daily during illness',
		description:
			'An immune-supporting berry that helps reduce the severity and duration of flu and cold symptoms without the risks of inappropriate antibiotic use.',
		detailedInfo: {
			overview:
				'Elderberry extracts are widely used for viral respiratory infections. While results on duration reduction are mixed, meta-analyses consistently support significant reductions in symptom severity. It represents a safe alternative to the common but inappropriate practice of prescribing antibiotics for viral infections.',
			howItWorks:
				'Elderberry flavonoids appear to bind to viral surface proteins, preventing viral entry into cells. The extracts also stimulate cytokine production, enhancing the immune response. Anthocyanins provide antioxidant support during the oxidative stress of infection.',
			clinicalEvidence:
				'Early RCTs suggested dramatic flu duration reductions of up to 4 days. Recent larger trials show mixed results for duration. However, meta-analyses generally support significant reductions in upper respiratory symptoms and fever severity. The effect on symptom severity is more consistent than the effect on duration.',
			usage:
				'Begin at first sign of symptoms. Adults: 15ml syrup (equivalent to ~300mg extract) 4 times daily for 5 days. Children: follow product-specific dosing. Can also be taken as lozenges or capsules.',
			contraindications: [
				'Raw elderberries (toxic - must be cooked/processed)',
				'Autoimmune conditions (may stimulate immune activity)',
				'Pregnancy and breastfeeding (insufficient data)'
			],
			interactions: [
				'Immunosuppressants (may counteract their effects)',
				'Diabetes medications (may affect blood sugar)',
				'Diuretics (additive effects)'
			]
		},
		references: [
			{
				id: 40,
				title: 'Elderberry extract in influenza A and B treatment',
				url: 'https://pubmed.ncbi.nlm.nih.gov/15080016/'
			},
			{
				id: 42,
				title: 'Black elderberry for upper respiratory symptoms: meta-analysis',
				url: 'https://pubmed.ncbi.nlm.nih.gov/30670267/'
			}
		]
	},
	{
		id: 'honey',
		name: 'Honey',
		scientificName: 'Apis mellifera (bee product)',
		image: '/images/herbs/Honey.jpg',
		diseases: ['Pediatric Cough', 'Cough', "Children's Cough", 'Sore Throat', 'Upper Respiratory Symptoms'],
		mechanism: 'Demulcent (coating) effect; salivation stimulation; sensory nerve modulation',
		keyOutcome: 'Cochrane review confirms honey provides better cough relief in children than diphenhydramine or placebo.',
		safetyNote: 'NEVER give to infants under 12 months (botulism risk)',
		dosage: '2.5-10ml (½-2 teaspoons) before bedtime for children over 1 year',
		description:
			'A Cochrane-validated remedy for childhood cough that outperforms common OTC medications, with an important age restriction.',
		detailedInfo: {
			overview:
				'In pediatric cough, regulatory agencies advise against OTC cough medicines for young children due to safety concerns and lack of efficacy. Honey has emerged as a validated alternative, endorsed by Cochrane reviews as more effective than many conventional options.',
			howItWorks:
				'The mechanism is biophysical: the high viscosity of honey exerts a demulcent effect, coating and soothing the irritated pharyngeal mucosa. Its sweetness stimulates salivation and may modulate sensory nerve fibers involved in the cough reflex, reducing the urge to cough.',
			clinicalEvidence:
				'A Cochrane review concluded that honey probably relieves cough symptoms to a greater extent than no treatment, diphenhydramine (Benadryl), or placebo. It may also reduce cough duration better than salbutamol (albuterol). The effects are most notable for nighttime cough and sleep quality.',
			usage:
				'Give 2.5-10ml (depending on age) 30 minutes before bedtime. Can be given alone or mixed in warm water or non-caffeinated tea. Use any pure honey—no specific type required. Can repeat once if child wakes coughing.',
			contraindications: [
				'INFANTS UNDER 12 MONTHS (risk of infant botulism - potentially fatal)',
				'Diabetes (significant sugar content)',
				'Bee/pollen allergies'
			],
			interactions: ['None significant for topical/oral use']
		},
		references: [
			{
				id: 38,
				title: 'Honey for acute cough in children - Cochrane',
				url: 'https://www.cochranelibrary.com/cdsr/doi/10.1002/14651858.CD007094.pub5/full'
			},
			{
				id: 39,
				title: 'Honey for acute cough in children - Cochrane Summary',
				url: 'https://www.cochrane.org/evidence/CD007094_honey-acute-cough-children'
			}
		]
	},
	{
		id: 'capsaicin',
		name: 'Capsaicin (Topical)',
		scientificName: 'Capsicum annuum/frutescens',
		image: '/images/herbs/Capsaicin Chili.webp',
		diseases: [
			'Neuropathic Pain',
			'Arthritis Pain',
			'Post-Herpetic Neuralgia',
			'Diabetic Neuropathy',
			'Joint Pain'
		],
		mechanism: 'TRPV1 activation leading to Substance P depletion and nerve defunctionalization',
		keyOutcome: 'FDA-approved for neuropathic pain conditions, with proven effectiveness for osteoarthritis of hands and knees.',
		safetyNote: 'Initial burning sensation; wash hands thoroughly after application',
		dosage: '0.025-0.075% cream 3-4 times daily; 8% patch (prescription) for severe pain',
		description:
			'A chili-derived topical analgesic that paradoxically relieves pain by initially causing then depleting the sensation—FDA-approved for neuropathic conditions.',
		detailedInfo: {
			overview:
				'Capsaicin, derived from chili peppers, is a standard treatment for neuropathic and arthritic pain. High-concentration patches (8%) are FDA-approved for conditions like post-herpetic neuralgia, while lower concentration creams are widely available OTC for musculoskeletal pain.',
			howItWorks:
				'Capsaicin binds to TRPV1 receptors on sensory nerve fibers. Initially, this causes excitation (burning sensation). However, repeated application leads to the depletion of Substance P (a pain neurotransmitter) from sensory nerve terminals, resulting in "defunctionalization" of the nerve fibers and sustained analgesia.',
			clinicalEvidence:
				'Cochrane reviews confirm efficacy for OA of the hand and knee and for post-herpetic neuralgia. The 8% patch provides significant pain relief for up to 12 weeks after a single application. Lower concentration creams require consistent use for 2-4 weeks before benefits manifest.',
			usage:
				'Low-concentration (0.025-0.075%): Apply a thin layer to affected area 3-4 times daily. Wash hands immediately after. Expect initial burning that decreases with continued use. High-concentration (8%): Applied by healthcare provider only.',
			contraindications: [
				'Broken or irritated skin',
				'Near eyes, mucous membranes',
				'On face (unless specifically directed)',
				'Allergy to capsaicin or peppers'
			],
			interactions: [
				'ACE inhibitors (may worsen cough side effect)',
				'Avoid with heating pads (increased absorption/burning)'
			]
		},
		references: [
			{
				id: 50,
				title: 'Topical capsaicin for pain in osteoarthritis',
				url: 'https://www.reumatologiaclinica.org/es-topical-capsaicin-for-pain-in-articulo-S1699258X16300894'
			},
			{
				id: 51,
				title: 'Topical analgesics for acute and chronic pain - Cochrane',
				url: 'https://www.cochranelibrary.com/cdsr/doi/10.1002/14651858.CD008609.pub2/full'
			}
		]
	},
	{
		id: 'st-johns-wort',
		name: "St. John's Wort",
		scientificName: 'Hypericum perforatum',
		image: '/images/herbs/St Johns Wort.jpg',
		diseases: [
			'Depression',
			'Mild Depression',
			'Moderate Depression',
			'Seasonal Affective Disorder',
			'Anxiety',
			'Mood Disorders'
		],
		mechanism: 'Monoamine reuptake inhibition (serotonin, norepinephrine, dopamine)',
		keyOutcome: 'A Cochrane review of nearly 5,500 patients found effectiveness equal to SSRIs for mild-moderate depression.',
		safetyNote: 'MAJOR drug interactions (oral contraceptives, anticoagulants, HIV meds); photosensitivity',
		dosage: '300mg standardized extract (0.3% hypericin) 3 times daily',
		description:
			"One of the most studied herbal antidepressants, with meta-analyses confirming efficacy comparable to prescription SSRIs for mild to moderate depression.",
		detailedInfo: {
			overview:
				"St. John's Wort is among the most extensively researched herbal medicines. Multiple meta-analyses involving thousands of patients have established its efficacy for mild to moderate major depressive disorder. It is approved for depression treatment in Germany and widely prescribed in Europe.",
			howItWorks:
				'The active compounds (hypericin, hyperforin, and flavonoids) inhibit the reuptake of serotonin, norepinephrine, and dopamine—similar to synthetic antidepressants. Hyperforin also modulates GABA and glutamate activity, contributing to its anxiolytic effects.',
			clinicalEvidence:
				'A Cochrane review of 29 trials (5,489 patients) concluded that St. John\'s Wort extracts are superior to placebo and similarly effective as standard antidepressants for mild to moderate depression, with fewer side effects. Response rates are typically 50-70%.',
			usage:
				'Take 300mg of standardized extract (0.3% hypericin or 2-5% hyperforin) three times daily with meals. Effects may take 4-6 weeks to manifest fully. Do not combine with other antidepressants.',
			contraindications: [
				'Bipolar disorder (may trigger mania)',
				'Pregnancy and breastfeeding',
				'Scheduled surgery (discontinue 2 weeks before)',
				'Severe depression with suicidal ideation'
			],
			interactions: [
				'Oral contraceptives (reduced effectiveness)',
				'Warfarin and other anticoagulants',
				'HIV protease inhibitors and NNRTIs',
				'Cyclosporine and immunosuppressants',
				'SSRIs and MAOIs (serotonin syndrome risk)',
				'Digoxin, theophylline, many chemotherapy drugs'
			]
		},
		references: [
			{
				id: 52,
				title: "St John's wort for major depression - Cochrane",
				url: 'https://www.cochranelibrary.com/cdsr/doi/10.1002/14651858.CD000448.pub3/full'
			}
		]
	},
	{
		id: 'ginkgo-biloba',
		name: 'Ginkgo Biloba',
		scientificName: 'Ginkgo biloba',
		image: '/images/herbs/Ginkgo Biloba.jpg',
		diseases: [
			'Cognitive Decline',
			'Dementia',
			'Memory Problems',
			'Peripheral Artery Disease',
			'Intermittent Claudication',
			'Tinnitus',
			'Vertigo'
		],
		mechanism: 'Antioxidant; improves microcirculation; PAF antagonist; neuroprotective',
		keyOutcome: 'Studies show modest but meaningful improvements in cognitive function and pain-free walking distance.',
		safetyNote: 'Bleeding risk; discontinue before surgery',
		dosage: '120-240mg standardized extract (24% flavone glycosides, 6% terpene lactones) daily',
		description:
			'An ancient tree extract that improves blood flow and has antioxidant properties, used for cognitive support and peripheral circulation problems.',
		detailedInfo: {
			overview:
				'Ginkgo biloba extract (EGb 761) is derived from the leaves of one of the oldest living tree species. It has been extensively studied for cognitive function, dementia, and peripheral vascular disease. While results are mixed for dementia prevention, evidence supports benefits for existing cognitive impairment and claudication.',
			howItWorks:
				'Ginkgo flavonoids and terpene lactones (ginkgolides, bilobalide) provide antioxidant protection, improve blood flow by reducing blood viscosity, antagonize platelet-activating factor (PAF), and may have direct neuroprotective effects on neurons.',
			clinicalEvidence:
				'Meta-analyses show modest but significant improvements in cognitive function in patients with existing dementia. For intermittent claudication, studies demonstrate increased pain-free walking distance. Large prevention trials (GEM, GuidAge) did not show benefit for preventing dementia in healthy elderly.',
			usage:
				'Take 120-240mg daily of standardized extract (EGb 761 or equivalent) in 2-3 divided doses. Effects for cognition may take 8-12 weeks to manifest. For claudication, use for at least 6 months.',
			contraindications: [
				'Bleeding disorders',
				'Scheduled surgery (stop 2 weeks before)',
				'Seizure disorders (may lower threshold)',
				'Pregnancy'
			],
			interactions: [
				'Anticoagulants and antiplatelet drugs',
				'NSAIDs (increased bleeding risk)',
				'Anticonvulsants (may reduce effectiveness)',
				'Diabetes medications (may affect blood sugar)'
			]
		},
		references: [
			{
				id: 53,
				title: 'Ginkgo biloba for cognitive impairment and dementia - Cochrane',
				url: 'https://www.cochranelibrary.com/cdsr/doi/10.1002/14651858.CD003120.pub3/full'
			}
		]
	},
	{
		id: 'ashwagandha',
		name: 'Ashwagandha',
		scientificName: 'Withania somnifera',
		image: '/images/herbs/Ashwagandha.jpg',
		diseases: [
			'Stress',
			'Anxiety',
			'Fatigue',
			'Insomnia',
			'Cognitive Function',
			'Physical Performance'
		],
		mechanism: 'Adaptogen; modulates cortisol; GABAergic activity; anti-inflammatory',
		keyOutcome: 'Clinical trials demonstrate significant reductions in stress and anxiety scores, with 23-30% lower cortisol levels.',
		safetyNote: 'May cause drowsiness; avoid in pregnancy; rare liver injury reports',
		dosage: '300-600mg root extract daily (standardized to 5% withanolides)',
		description:
			'A premier Ayurvedic adaptogen with growing clinical evidence for reducing stress, anxiety, and cortisol levels while improving energy and cognitive function.',
		detailedInfo: {
			overview:
				'Ashwagandha (meaning "smell of horse" in Sanskrit, referring to its odor and strength-giving properties) is one of the most important herbs in Ayurveda. Modern research has validated its adaptogenic properties, with multiple RCTs demonstrating benefits for stress, anxiety, and physical performance.',
			howItWorks:
				'The active compounds (withanolides, particularly withaferin A and withanolide D) modulate the HPA axis, reducing cortisol production. They also have GABAergic activity (explaining anxiolytic effects), anti-inflammatory properties, and may enhance mitochondrial function.',
			clinicalEvidence:
				'A systematic review of 12 RCTs found significant reductions in anxiety and stress scores compared to placebo. Studies show 23-30% reduction in cortisol levels. Additional trials demonstrate improved physical endurance, muscle strength, and cognitive function.',
			usage:
				'Take 300-600mg of root extract standardized to 5% withanolides, once or twice daily. KSM-66 and Sensoril are well-studied standardized extracts. Can be taken with or without food. Effects typically noticed within 2-4 weeks.',
			contraindications: [
				'Pregnancy (may have abortifacient properties)',
				'Breastfeeding',
				'Autoimmune diseases (may stimulate immune system)',
				'Thyroid disorders (may increase thyroid hormone)',
				'Surgery (stop 2 weeks before)'
			],
			interactions: [
				'Sedatives and CNS depressants',
				'Thyroid medications',
				'Immunosuppressants',
				'Diabetes medications (may lower blood sugar)'
			]
		},
		references: [
			{
				id: 54,
				title: 'Adaptogenic and Anxiolytic Effects of Ashwagandha Root Extract',
				url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3573577/'
			}
		]
	},
	{
		id: 'rhodiola',
		name: 'Rhodiola Rosea',
		scientificName: 'Rhodiola rosea',
		image: '/images/herbs/Rhodiola Rosea.webp',
		diseases: [
			'Fatigue',
			'Stress',
			'Mental Fatigue',
			'Burnout',
			'Mild Depression',
			'Physical Endurance'
		],
		mechanism: 'Adaptogen; modulates stress hormones; enhances serotonin/dopamine activity',
		keyOutcome: 'Multiple studies show significant improvements in fatigue, mental performance, and burnout symptoms within weeks.',
		safetyNote: 'May cause insomnia if taken late in day; stimulating effect',
		dosage: '200-600mg standardized extract (3% rosavins, 1% salidroside) daily',
		description:
			'A Scandinavian and Russian adaptogenic herb with strong evidence for combating fatigue, enhancing mental performance, and supporting stress resilience.',
		detailedInfo: {
			overview:
				'Rhodiola rosea (Arctic root, golden root) has been used for centuries in Russia and Scandinavia to combat fatigue and enhance work performance in harsh conditions. It is classified as an adaptogen and has substantial clinical evidence for fatigue and stress-related conditions.',
			howItWorks:
				'Rosavins and salidroside modulate key mediators of the stress response, including cortisol, nitric oxide, and heat shock proteins. Rhodiola also influences monoamine neurotransmitters (serotonin, dopamine, norepinephrine), contributing to its anti-fatigue and mood effects.',
			clinicalEvidence:
				'Multiple RCTs demonstrate significant improvements in fatigue symptoms, mental performance, and burnout. A study in physicians on night duty showed improved cognitive function. Research in patients with stress-related fatigue showed 40%+ improvement in symptoms within 4 weeks.',
			usage:
				'Take 200-600mg daily of extract standardized to 3% rosavins and 1% salidroside. Best taken in the morning or early afternoon (may interfere with sleep if taken later). Start with lower dose and increase as needed.',
			contraindications: [
				'Bipolar disorder (may trigger mania)',
				'Pregnancy and breastfeeding',
				'Autoimmune conditions'
			],
			interactions: [
				'Antidepressants (theoretical serotonin interaction)',
				'Stimulants',
				'Diabetes medications',
				'Blood pressure medications'
			]
		},
		references: [
			{
				id: 55,
				title: 'Rhodiola rosea for physical and mental fatigue - systematic review',
				url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3541197/'
			}
		]
	},
	{
		id: 'butterbur',
		name: 'Butterbur',
		scientificName: 'Petasites hybridus',
		image: '/images/herbs/Butterbur.jpg',
		diseases: [
			'Migraine Prevention',
			'Migraine',
			'Headache',
			'Allergic Rhinitis',
			'Hay Fever'
		],
		mechanism: 'Calcium channel modulation; leukotriene inhibition; anti-inflammatory',
		keyOutcome: 'Received the highest evidence rating from American Academy of Neurology; studies show 50% fewer migraines.',
		safetyNote: 'MUST use PA-free extract (hepatotoxic pyrrolizidine alkaloids removed)',
		dosage: '50-75mg PA-free extract twice daily for migraine prevention',
		description:
			'One of the few herbs with Level A evidence from the American Academy of Neurology for migraine prevention, capable of reducing migraine frequency by half.',
		detailedInfo: {
			overview:
				'Butterbur is unique among herbal medicines in having received a Level A (established as effective) rating from the American Academy of Neurology and American Headache Society for migraine prevention. The PA-free extract Petadolex has the most clinical evidence.',
			howItWorks:
				'Petasins (petasin, isopetasin) are believed to reduce smooth muscle spasm and inflammation by modulating calcium channels and inhibiting leukotriene synthesis. This reduces cerebrovascular reactivity and neurogenic inflammation involved in migraine.',
			clinicalEvidence:
				'Two large RCTs demonstrated that 75mg twice daily reduced migraine frequency by approximately 50% compared to placebo. The American Academy of Neurology guidelines gave it Level A evidence for migraine prevention—the highest rating, equal to prescription medications.',
			usage:
				'Take 50-75mg of PA-free extract twice daily. Use only products certified to be free of pyrrolizidine alkaloids (PA-free). Effects for migraine prevention typically seen within 4-8 weeks of consistent use.',
			contraindications: [
				'Pregnancy and breastfeeding',
				'Liver disease',
				'Allergies to plants in Asteraceae family (ragweed, chrysanthemums)',
				'Never use raw/unprocessed butterbur (contains toxic PAs)'
			],
			interactions: [
				'May increase effects of blood pressure medications',
				'Theoretical interaction with drugs metabolized by CYP3A4'
			]
		},
		references: [
			{
				id: 56,
				title: 'Evidence-based guideline: Pharmacologic treatment for migraine prevention - AAN',
				url: 'https://www.aan.com/Guidelines/Home/GetGuidelineContent/536'
			}
		]
	},
	{
		id: 'feverfew',
		name: 'Feverfew',
		scientificName: 'Tanacetum parthenium',
		image: '/images/herbs/Feverfew.jpg',
		diseases: [
			'Migraine Prevention',
			'Migraine',
			'Headache',
			'Arthritis',
			'Fever'
		],
		mechanism: 'Inhibits serotonin release from platelets; anti-inflammatory; NF-kB inhibition',
		keyOutcome: 'Clinical studies suggest reduced migraine frequency and severity; rated "probably effective" by neurologists.',
		safetyNote: 'Mouth ulcers with fresh leaf; rebound headaches if stopped abruptly',
		dosage: '50-150mg dried leaf or 2.5mg parthenolide content daily',
		description:
			'A traditional European remedy for headaches with moderate evidence for migraine prevention and a unique mechanism involving serotonin and inflammation.',
		detailedInfo: {
			overview:
				'Feverfew has been used for centuries for headaches and fever. Modern research has focused on migraine prevention, where it received Level B evidence from the American Academy of Neurology (probably effective). It works through different mechanisms than butterbur.',
			howItWorks:
				'Parthenolide, the main active compound, inhibits serotonin release from platelets and white blood cells—important in migraine pathophysiology. It also inhibits prostaglandin synthesis and NF-kB activation, reducing inflammation.',
			clinicalEvidence:
				'A Cochrane review found mixed results but suggested benefit for migraine prevention. Several RCTs showed reduction in migraine frequency, severity, and associated nausea/vomiting. The American Academy of Neurology rated it Level B (probably effective) for prevention.',
			usage:
				'Take 50-150mg of dried leaf daily, or standardized extract providing 0.2-0.4% parthenolide. For migraine prevention, consistent daily use for at least 4-6 weeks is needed. Do not stop abruptly (may cause rebound headaches).',
			contraindications: [
				'Pregnancy (may stimulate uterine contractions)',
				'Breastfeeding',
				'Allergies to Asteraceae family plants',
				'Children under 2 years',
				'Scheduled surgery (stop 2 weeks before)'
			],
			interactions: [
				'Anticoagulants and antiplatelet drugs',
				'NSAIDs (may reduce feverfew effectiveness)',
				'Medications metabolized by CYP enzymes'
			]
		},
		references: [
			{
				id: 57,
				title: 'Feverfew for preventing migraine - Cochrane Review',
				url: 'https://www.cochranelibrary.com/cdsr/doi/10.1002/14651858.CD002286.pub3/full'
			}
		]
	},
	{
		id: 'boswellia',
		name: 'Boswellia',
		scientificName: 'Boswellia serrata',
		image: '/images/herbs/Boswellia.jpg',
		diseases: [
			'Osteoarthritis',
			'Rheumatoid Arthritis',
			'Inflammatory Bowel Disease',
			'Asthma',
			'Joint Pain',
			'Inflammation'
		],
		mechanism: '5-lipoxygenase (5-LOX) inhibition; anti-inflammatory',
		keyOutcome: 'Multiple trials show significant improvements in arthritis pain and joint function, often within 1-2 weeks.',
		safetyNote: 'Generally well tolerated; rare GI upset; may affect blood glucose',
		dosage: '300-500mg extract (standardized to 30-40% boswellic acids) 2-3 times daily',
		description:
			'An Ayurvedic resin with unique anti-inflammatory properties through 5-LOX inhibition, offering an alternative to NSAIDs for osteoarthritis without GI side effects.',
		detailedInfo: {
			overview:
				'Boswellia serrata (Indian frankincense) has been used in Ayurvedic medicine for centuries. Its gum resin contains boswellic acids, particularly AKBA (acetyl-11-keto-β-boswellic acid), which have potent anti-inflammatory properties through a unique mechanism.',
			howItWorks:
				'Unlike NSAIDs which inhibit COX enzymes, boswellic acids inhibit 5-lipoxygenase (5-LOX), blocking leukotriene synthesis. This provides anti-inflammatory effects without the gastrointestinal side effects of COX inhibitors. AKBA also inhibits NF-kB and reduces cartilage degradation.',
			clinicalEvidence:
				'Multiple RCTs in osteoarthritis demonstrate significant improvements in pain and function scores, comparable to or better than NSAIDs in some studies. Benefits typically appear within 1-2 weeks. Also studied for IBD and asthma with promising results.',
			usage:
				'Take 300-500mg of extract standardized to 30-40% boswellic acids (or 100mg AKBA), 2-3 times daily with meals. 5-Loxin and Aflapin are enhanced extracts with higher AKBA content. Effects often noticed within 1-2 weeks.',
			contraindications: [
				'Pregnancy and breastfeeding',
				'Scheduled surgery (stop 2 weeks before)',
				'Caution with autoimmune conditions'
			],
			interactions: [
				'May enhance effects of anti-inflammatory medications',
				'P-glycoprotein substrates',
				'May affect blood sugar levels'
			]
		},
		references: [
			{
				id: 58,
				title: 'Efficacy and safety of Boswellia serrata in osteoarthritis',
				url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3309643/'
			}
		]
	},
	{
		id: 'devils-claw',
		name: "Devil's Claw",
		scientificName: 'Harpagophytum procumbens',
		image: '/images/herbs/Devils Claw.jpg',
		diseases: [
			'Lower Back Pain',
			'Osteoarthritis',
			'Joint Pain',
			'Rheumatic Conditions',
			'Muscle Pain'
		],
		mechanism: 'COX-2 and LOX inhibition; anti-inflammatory; analgesic',
		keyOutcome: 'Cochrane-reviewed evidence shows pain relief comparable to NSAIDs for low back pain, with fewer GI side effects.',
		safetyNote: 'Avoid with peptic ulcers; may affect heart rhythm at high doses',
		dosage: '600-1200mg extract (50-100mg harpagoside) daily',
		description:
			"A South African herb with Cochrane-reviewed evidence for low back pain, offering NSAID-like relief with a better safety profile for short-term use.",
		detailedInfo: {
			overview:
				"Devil's Claw is native to southern Africa, where the tuberous root has been used traditionally for pain and fever. It has been extensively studied in Europe for musculoskeletal conditions and is approved in Germany for supportive treatment of degenerative musculoskeletal disorders.",
			howItWorks:
				'Harpagoside and other iridoid glycosides inhibit COX-2 and 5-LOX pathways, reducing prostaglandin and leukotriene synthesis. The herb also appears to have direct analgesic properties independent of anti-inflammatory effects.',
			clinicalEvidence:
				'Cochrane reviews support efficacy for acute low back pain exacerbations. Multiple RCTs show benefit comparable to NSAIDs (including rofecoxib before its withdrawal) with fewer GI side effects. Most evidence is for doses providing >50mg harpagoside daily.',
			usage:
				'Take 600-1200mg of root extract daily, standardized to provide 50-100mg of harpagoside. Divide into 2-3 doses. Take with food. Effects for acute pain often seen within 1-2 weeks; longer use may be needed for chronic conditions.',
			contraindications: [
				'Peptic ulcers or gastritis',
				'Gallstones',
				'Pregnancy and breastfeeding',
				'Cardiovascular disease (high doses may affect heart rhythm)'
			],
			interactions: [
				'Anticoagulants (may increase effect)',
				'Antidiabetic medications',
				'Antihypertensive medications',
				'NSAIDs (additive GI risk)',
				'Proton pump inhibitors (may reduce absorption)'
			]
		},
		references: [
			{
				id: 59,
				title: "Devil's claw for osteoarthritis and low back pain - Cochrane",
				url: 'https://www.cochranelibrary.com/cdsr/doi/10.1002/14651858.CD004504.pub4/full'
			}
		]
	},
	{
		id: 'berberine',
		name: 'Berberine',
		scientificName: 'Berberis vulgaris/Coptis chinensis',
		image: '/images/herbs/Berberine.jpg',
		diseases: [
			'Type 2 Diabetes',
			'High Blood Sugar',
			'High Cholesterol',
			'Metabolic Syndrome',
			'PCOS',
			'Cardiovascular Health'
		],
		mechanism: 'AMPK activation; improves insulin sensitivity; reduces gluconeogenesis',
		keyOutcome: 'Meta-analyses show blood sugar control (HbA1c reduction) comparable to metformin, plus significant LDL reduction.',
		safetyNote: 'GI upset common initially; drug interactions; avoid in pregnancy',
		dosage: '500mg 2-3 times daily with meals (total 1000-1500mg/day)',
		description:
			'A plant alkaloid with meta-analysis evidence showing blood sugar control comparable to metformin, plus significant benefits for cholesterol and metabolic health.',
		detailedInfo: {
			overview:
				'Berberine is an alkaloid found in several plants including barberry, goldenseal, and Chinese goldthread. Multiple meta-analyses have established its efficacy for type 2 diabetes, with HbA1c reductions comparable to metformin. It also significantly improves lipid profiles.',
			howItWorks:
				'Berberine activates AMP-activated protein kinase (AMPK), the same metabolic "master switch" targeted by metformin. This improves insulin sensitivity, increases glucose uptake in muscles, reduces gluconeogenesis in the liver, and promotes fatty acid oxidation.',
			clinicalEvidence:
				'Meta-analyses of 27+ RCTs show berberine reduces HbA1c by 0.7-0.9% (comparable to metformin), fasting glucose by 15-20 mg/dL, and LDL cholesterol by 20-25 mg/dL. Some studies show superiority to metformin for lipid parameters.',
			usage:
				'Take 500mg 2-3 times daily with meals (total 1000-1500mg/day). Starting with lower doses and increasing gradually helps minimize GI side effects. Effects on blood sugar typically seen within 4-8 weeks.',
			contraindications: [
				'Pregnancy (may cause uterine contractions)',
				'Breastfeeding (excreted in breast milk)',
				'Jaundice in newborns (displaces bilirubin)',
				'Low blood pressure'
			],
			interactions: [
				'Diabetes medications (additive hypoglycemia)',
				'Metformin (additive effects)',
				'Cyclosporine (increases levels)',
				'Many drugs metabolized by CYP enzymes',
				'Macrolide antibiotics'
			]
		},
		references: [
			{
				id: 60,
				title: 'Efficacy of berberine in patients with type 2 diabetes mellitus - meta-analysis',
				url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3478874/'
			}
		]
	},
	{
		id: 'milk-thistle',
		name: 'Milk Thistle',
		scientificName: 'Silybum marianum',
		image: '/images/herbs/Milk Thistle.jpg',
		diseases: [
			'Liver Disease',
			'Fatty Liver',
			'Hepatitis',
			'Cirrhosis',
			'Liver Detox',
			'High Cholesterol'
		],
		mechanism: 'Hepatoprotective; antioxidant; anti-fibrotic; promotes liver regeneration',
		keyOutcome: 'Studies demonstrate improved liver enzyme levels and protection of liver cells from toxic damage.',
		safetyNote: 'Very well tolerated; rare allergic reactions; mild laxative effect',
		dosage: '200-400mg silymarin (standardized extract) 2-3 times daily',
		description:
			'The most studied hepatoprotective herb, with evidence for protecting the liver from toxins and supporting recovery in various liver diseases.',
		detailedInfo: {
			overview:
				'Milk thistle has been used for over 2,000 years for liver conditions. Silymarin, the standardized extract containing flavonolignans (silybin, silychristin, silydianin), is the active complex. It is widely used in Europe as supportive treatment for liver diseases.',
			howItWorks:
				'Silymarin provides hepatoprotection through multiple mechanisms: antioxidant activity (scavenges free radicals, increases glutathione), anti-inflammatory effects, membrane-stabilizing properties, and stimulation of protein synthesis in hepatocytes, promoting liver regeneration.',
			clinicalEvidence:
				'Studies show improved liver enzymes (ALT, AST) in various liver conditions. Most evidence is for alcoholic liver disease, hepatitis C, and toxic liver damage. A Cochrane review found improvements in liver-related mortality in some trials. Also shows benefit for fatty liver (NAFLD).',
			usage:
				'Take 200-400mg of silymarin (70-80% standardized extract) 2-3 times daily. Phosphatidylcholine-bound forms (Siliphos) may have better absorption. Can be taken with or without food. Effects on liver enzymes typically seen within 4-8 weeks.',
			contraindications: [
				'Allergy to Asteraceae family plants',
				'Hormone-sensitive conditions (weak estrogenic activity)',
				'Pregnancy and breastfeeding (limited data)'
			],
			interactions: [
				'May reduce effectiveness of some medications (CYP3A4 induction)',
				'Diabetes medications (may enhance effects)',
				'Possible interaction with cancer drugs (silybin inhibits some CYPs)'
			]
		},
		references: [
			{
				id: 61,
				title: 'Milk thistle for alcoholic and/or hepatitis B or C liver diseases - Cochrane',
				url: 'https://www.cochranelibrary.com/cdsr/doi/10.1002/14651858.CD003620.pub3/full'
			}
		]
	},
	{
		id: 'licorice-root',
		name: 'Licorice Root',
		scientificName: 'Glycyrrhiza glabra',
		image: '/images/herbs/Licorice Root.jpg',
		diseases: [
			'Peptic Ulcers',
			'GERD',
			'Heartburn',
			'Sore Throat',
			'Cough',
			'Adrenal Fatigue'
		],
		mechanism: 'Mucosal protection; anti-inflammatory; antiviral; adrenal support',
		keyOutcome: 'Clinical evidence supports effectiveness for healing peptic ulcers and soothing sore throat and cough.',
		safetyNote: 'May raise blood pressure and cause hypokalemia; use DGL for long-term',
		dosage: '380-760mg DGL before meals; or 1-4g whole root short-term',
		description:
			'A versatile herb effective for digestive ulcers and respiratory conditions, with the DGL form offering benefits without the blood pressure concerns.',
		detailedInfo: {
			overview:
				'Licorice root has been used in both Western and Eastern medicine for thousands of years. It contains glycyrrhizin (which can affect blood pressure) and numerous flavonoids. DGL (deglycyrrhizinated licorice) removes glycyrrhizin, making it safe for long-term digestive use.',
			howItWorks:
				'For digestive issues: increases mucus production, promotes prostaglandin synthesis protective to stomach lining, and has mild antispasmodic effects. Glycyrrhizin has antiviral and anti-inflammatory properties but also inhibits cortisol metabolism, affecting blood pressure.',
			clinicalEvidence:
				'DGL has shown efficacy comparable to antacids and H2 blockers for peptic ulcers in older studies. Whole licorice extract has antiviral activity and supports upper respiratory health. Studies support use for functional dyspepsia and GERD symptoms.',
			usage:
				'For peptic ulcers/GERD: Take 380-760mg DGL tablets 20 minutes before meals and at bedtime. Chewable forms may work best. For sore throat/cough: Whole licorice tea or lozenges. Limit whole licorice use to 4-6 weeks.',
			contraindications: [
				'Hypertension (whole licorice)',
				'Heart disease',
				'Kidney disease',
				'Hypokalemia',
				'Pregnancy',
				'Hormone-sensitive conditions'
			],
			interactions: [
				'Diuretics (worsens potassium loss)',
				'Digoxin (hypokalemia increases toxicity)',
				'Corticosteroids (additive effects)',
				'Blood pressure medications',
				'Warfarin'
			]
		},
		references: [
			{
				id: 62,
				title: 'Licorice root in gastrointestinal disorders',
				url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3498851/'
			}
		]
	},
	{
		id: 'echinacea',
		name: 'Echinacea',
		scientificName: 'Echinacea purpurea/angustifolia',
		image: '/images/herbs/Echinacea.webp',
		diseases: [
			'Common Cold',
			'Upper Respiratory Infection',
			'Flu Prevention',
			'Immune Support',
			'Sore Throat'
		],
		mechanism: 'Immunomodulatory; increases phagocytosis; antiviral',
		keyOutcome: 'Cochrane review suggests modest benefits: cold symptoms may be 1-2 days shorter and less severe.',
		safetyNote: 'Not for long-term continuous use; avoid in autoimmune conditions',
		dosage: '300-500mg extract 3 times daily at first sign of cold; or 2.5ml tincture',
		description:
			'North America\'s most popular herbal immune support, with Cochrane-reviewed evidence for modestly reducing cold duration and severity when taken early.',
		detailedInfo: {
			overview:
				'Echinacea species are native to North America and were used extensively by Plains Indians for infections. E. purpurea (aerial parts) and E. angustifolia (root) are most commonly used. It is one of the best-selling herbal products for immune support.',
			howItWorks:
				'Echinacea contains alkamides, polysaccharides, and cichoric acid that modulate immune function. It increases phagocytosis, stimulates cytokine production, and may have direct antiviral effects. The alkamides interact with cannabinoid receptors (CB2), explaining some immune effects.',
			clinicalEvidence:
				'Cochrane reviews of 24 trials suggest echinacea may reduce cold duration by 1-2 days and symptom severity if taken at first sign of cold. Prevention trials are mixed. Standardized E. purpurea preparations have the most evidence. Not a cure, but may provide modest benefit.',
			usage:
				'At first sign of cold: Take 300-500mg of standardized extract 3 times daily, or 2.5ml tincture every 2-3 hours for first 24-48 hours, then 3 times daily. Continue for 7-10 days. For prevention, use for 8 weeks then take a 1-week break.',
			contraindications: [
				'Autoimmune diseases (MS, lupus, RA)',
				'Progressive systemic diseases (TB, HIV)',
				'Allergies to Asteraceae family plants',
				'Immunosuppressant therapy',
				'Children under 12 (limited data)'
			],
			interactions: [
				'Immunosuppressants (may counteract)',
				'Caffeine (may slow caffeine metabolism)',
				'Some medications metabolized by CYP3A4'
			]
		},
		references: [
			{
				id: 63,
				title: 'Echinacea for preventing and treating the common cold - Cochrane',
				url: 'https://www.cochranelibrary.com/cdsr/doi/10.1002/14651858.CD000530.pub2/full'
			}
		]
	},
	{
		id: 'saw-palmetto',
		name: 'Saw Palmetto',
		scientificName: 'Serenoa repens',
		image: '/images/herbs/Saw Palmetto.webp',
		diseases: [
			'Benign Prostatic Hyperplasia',
			'BPH',
			'Enlarged Prostate',
			'Urinary Problems',
			'Prostate Health'
		],
		mechanism: '5-alpha reductase inhibition; anti-androgenic; anti-inflammatory',
		keyOutcome: 'Earlier studies showed improvement in urinary symptoms; recent large trials have had mixed results.',
		safetyNote: 'Very well tolerated; may affect PSA testing',
		dosage: '320mg liposterolic extract daily (standardized to 85-95% fatty acids)',
		description:
			'The most studied herbal treatment for prostate enlargement, with long traditional use and reasonable evidence for improving urinary symptoms in BPH.',
		detailedInfo: {
			overview:
				'Saw palmetto berry extract has been used for prostate health for over a century. It was one of the most commonly prescribed BPH treatments in Europe. While recent large trials have shown mixed results, it remains popular and may benefit some patients.',
			howItWorks:
				'The liposterolic extract contains fatty acids and phytosterols that inhibit 5-alpha reductase (blocking conversion of testosterone to DHT), have anti-androgenic effects at the receptor level, and exert anti-inflammatory and anti-edema effects on prostate tissue.',
			clinicalEvidence:
				'Earlier systematic reviews showed significant improvement in urinary symptoms and flow rates. However, the large STEP and CAMUS trials found no significant benefit over placebo. This discrepancy may relate to extract quality, patient selection, or trial design. Some evidence suggests benefit for milder symptoms.',
			usage:
				'Take 320mg daily of liposterolic extract standardized to 85-95% fatty acids and sterols. Can be taken as single dose or divided. Permixon is a well-studied prescription product in Europe. Allow 4-8 weeks to assess benefit.',
			contraindications: [
				'Hormone-sensitive conditions',
				'Pregnancy and breastfeeding',
				'Scheduled prostate surgery'
			],
			interactions: [
				'May affect PSA test results (inform doctor)',
				'Anticoagulants (theoretical bleeding risk)',
				'Hormone therapies',
				'Oral contraceptives'
			]
		},
		references: [
			{
				id: 64,
				title: 'Serenoa repens for benign prostatic hyperplasia - Cochrane',
				url: 'https://www.cochranelibrary.com/cdsr/doi/10.1002/14651858.CD001423.pub3/full'
			}
		]
	},
	{
		id: 'horse-chestnut',
		name: 'Horse Chestnut',
		scientificName: 'Aesculus hippocastanum',
		image: '/images/herbs/Horse Chestnut.jpg',
		diseases: [
			'Chronic Venous Insufficiency',
			'Varicose Veins',
			'Leg Swelling',
			'Leg Pain',
			'Hemorrhoids'
		],
		mechanism: 'Aescin reduces capillary permeability and improves venous tone',
		keyOutcome: 'Cochrane review confirms effectiveness comparable to compression stockings for reducing leg swelling and pain.',
		safetyNote: 'Only use standardized seed extract; raw seeds are toxic',
		dosage: '300mg extract (50mg aescin) twice daily',
		description:
			'The gold standard herbal treatment for chronic venous insufficiency, with Cochrane-validated efficacy comparable to compression stockings for leg symptoms.',
		detailedInfo: {
			overview:
				'Horse chestnut seed extract (HCSE) is a standard treatment for chronic venous insufficiency (CVI) in Germany. A Cochrane review established its efficacy for reducing leg pain, edema, and other CVI symptoms. The active compound is aescin (also spelled escin).',
			howItWorks:
				'Aescin is a saponin that reduces capillary permeability by decreasing the number and size of pores in capillary walls. It also improves venous tone (venotonic effect), has anti-inflammatory properties, and may inhibit enzymes involved in capillary wall breakdown.',
			clinicalEvidence:
				'A Cochrane review of 17 RCTs (>1,400 participants) found HCSE significantly reduced leg pain, edema, and pruritis compared to placebo. One trial showed efficacy equivalent to compression stockings. Benefits typically seen within 2-4 weeks.',
			usage:
				'Take 300mg of seed extract standardized to contain 50mg aescin, twice daily. Some products provide 100mg aescin per day. Take with food. May be used alongside compression therapy. Topical forms available but less studied.',
			contraindications: [
				'Kidney disease',
				'Liver disease',
				'Bleeding disorders',
				'Pregnancy and breastfeeding',
				'Latex allergy (cross-reactivity possible)'
			],
			interactions: [
				'Anticoagulants (aescin has anticoagulant activity)',
				'Diabetes medications (may affect blood sugar)',
				'Lithium (may increase levels)'
			]
		},
		references: [
			{
				id: 65,
				title: 'Horse chestnut seed extract for chronic venous insufficiency - Cochrane',
				url: 'https://www.cochranelibrary.com/cdsr/doi/10.1002/14651858.CD003230.pub4/full'
			}
		]
	}
];

export const diseaseCategories = [
	{
		name: 'Gastrointestinal',
		icon: '🫃',
		conditions: [
			'IBS',
			'Irritable Bowel Syndrome',
			'Constipation',
			'Diarrhea',
			'Nausea',
			'Bloating',
			'Digestive Issues',
			'Peptic Ulcers',
			'GERD',
			'Heartburn',
			'Liver Disease',
			'Fatty Liver',
			'Hepatitis',
			'Cirrhosis',
			'Liver Detox',
			'Inflammatory Bowel Disease',
			'Stomach Cramps',
			'Abdominal Pain'
		]
	},
	{
		name: 'Neuropsychiatric',
		icon: '🧠',
		conditions: [
			'Anxiety',
			'Depression',
			'Mild Depression',
			'Moderate Depression',
			'Insomnia',
			'Stress',
			'Sleep Problems',
			'GAD',
			'MDD',
			'Fatigue',
			'Mental Fatigue',
			'Burnout',
			'Cognitive Decline',
			'Cognitive Function',
			'Memory Problems',
			'Dementia',
			'Mood Disorders',
			'Seasonal Affective Disorder',
			'Physical Performance',
			'Physical Endurance',
			'Adrenal Fatigue'
		]
	},
	{
		name: 'Respiratory',
		icon: '🫁',
		conditions: [
			'Bronchitis',
			'Cough',
			'Cold',
			'Common Cold',
			'Flu',
			'Flu Prevention',
			'Respiratory Infection',
			'Upper Respiratory Infection',
			'Sore Throat',
			'Immune Support',
			'Asthma'
		]
	},
	{
		name: 'Cardiovascular',
		icon: '❤️',
		conditions: [
			'Hypertension',
			'High Blood Pressure',
			'High Cholesterol',
			'Cardiovascular Health',
			'Chronic Venous Insufficiency',
			'Varicose Veins',
			'Peripheral Artery Disease',
			'Intermittent Claudication',
			'Leg Swelling',
			'Leg Pain',
			'Hemorrhoids'
		]
	},
	{
		name: 'Musculoskeletal',
		icon: '🦴',
		conditions: [
			'Arthritis',
			'Osteoarthritis',
			'Rheumatoid Arthritis',
			'Joint Pain',
			'Neuropathic Pain',
			'Inflammation',
			'Lower Back Pain',
			'Back Pain',
			'Muscle Pain',
			'Rheumatic Conditions',
			'Fibromyalgia'
		]
	},
	{
		name: 'Metabolic',
		icon: '⚖️',
		conditions: [
			'Type 2 Diabetes',
			'High Blood Sugar',
			'Metabolic Syndrome',
			'PCOS',
			'Obesity',
			'Weight Management'
		]
	},
	{
		name: 'Headache & Pain',
		icon: '🤕',
		conditions: [
			'Migraine',
			'Migraine Prevention',
			'Headache',
			'Allergic Rhinitis',
			'Hay Fever',
			'Tinnitus',
			'Vertigo'
		]
	},
	{
		name: 'Dermatological',
		icon: '🧴',
		conditions: ['Acne', 'Nail Fungus', 'Skin Infections', 'Wound Healing', 'Burns']
	},
	{
		name: "Women's Health",
		icon: '♀️',
		conditions: ['Menopause', 'Hot Flashes', 'UTI', 'Pregnancy Nausea', 'Morning Sickness', 'PMS', 'Hormonal Imbalance']
	},
	{
		name: "Men's Health",
		icon: '♂️',
		conditions: ['Benign Prostatic Hyperplasia', 'BPH', 'Enlarged Prostate', 'Prostate Health', 'Urinary Problems']
	},
	{
		name: 'Pediatric',
		icon: '👶',
		conditions: ['Pediatric Cough', "Children's Cough"]
	}
];

export function searchHerbs(query: string): HerbInfo[] {
	if (!query.trim()) return [];

	const normalizedQuery = query.toLowerCase().trim();

	return herbs.filter((herb) => {
		// Check herb name
		if (herb.name.toLowerCase().includes(normalizedQuery)) return true;
		// Check scientific name
		if (herb.scientificName.toLowerCase().includes(normalizedQuery)) return true;
		// Check diseases
		if (herb.diseases.some((d) => d.toLowerCase().includes(normalizedQuery))) return true;
		// Check mechanism
		if (herb.mechanism.toLowerCase().includes(normalizedQuery)) return true;
		// Check description
		if (herb.description.toLowerCase().includes(normalizedQuery)) return true;

		return false;
	});
}

export function getHerbById(id: string): HerbInfo | undefined {
	return herbs.find((herb) => herb.id === id);
}

export function getHerbsByCategory(categoryName: string): HerbInfo[] {
	const category = diseaseCategories.find((c) => c.name === categoryName);
	if (!category) return [];

	return herbs.filter((herb) =>
		herb.diseases.some((disease) =>
			category.conditions.some(
				(condition) =>
					disease.toLowerCase().includes(condition.toLowerCase()) ||
					condition.toLowerCase().includes(disease.toLowerCase())
			)
		)
	);
}

