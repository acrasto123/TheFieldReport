// ── THE FIELD REPORT — BRIEFS DATA ──
// To add a new brief: copy one object, fill in the fields, add to the array.
// lat/lng places the pin on the world map.

const BRIEFS = [
  {
    id: "fr-001",
    title: "Oral Carcinoma Trends in Rural Maharashtra: What the Data Reveals",
    excerpt: "A 2023 cohort study from Pune examines rising oral squamous cell carcinoma incidence among agricultural workers, with implications for early screening programs.",
    country: "India",
    concentration: "Oral Health",
    author: "[Writer Name]",
    program: "MPH, Oral Health",
    reviewer: "[Faculty Name]",
    dept: "Dept. of Oral Health",
    date: "Oct 14, 2025",
    tool: "Tableau",
    lat: 19.5, lng: 73.8,
    content: [
      { type: "p", text: "In rural Maharashtra, oral cancer does not announce itself early. By the time most patients reach a clinic, the disease has progressed beyond the window where treatment is straightforward. A 2023 cohort study published in the Indian Journal of Cancer followed 1,240 agricultural workers over five years and found that 68% of oral squamous cell carcinoma diagnoses occurred at stage III or later." },
      { type: "p", text: "The study, conducted across twelve districts in Pune and Nashik, identified tobacco chewing — particularly khaini and gutka — as the primary behavioral risk factor, present in 82% of cases. What distinguishes this research is its attention to structural barriers: distance from screening facilities, cost of transport, and the cultural normalization of mild oral lesions in farming communities." },
      { type: "h3", text: "What the epidemiology tells us" },
      { type: "p", text: "From an epidemiological lens, this study is notable for its use of community health worker data collection. The incidence rate identified (14.7 per 100,000) is more than three times the national average for urban settings, pointing to a significant rural health equity gap. The study's Kaplan-Meier survival curves reveal a stark divergence in five-year survival between stage I (81%) and stage III (28%) diagnoses." },
      { type: "viz", text: "Tableau visualization: Oral carcinoma incidence by district and stage at diagnosis — insert your published visualization here." },
      { type: "p", text: "The researchers recommend integrating oral visual examinations into existing ASHA (Accredited Social Health Activist) worker training — a scalable, low-resource intervention that could meaningfully shift the stage distribution of diagnoses." },
      { type: "us", text: "The United States faces a different but parallel challenge: oral cancer disproportionately affects low-income and rural populations with limited access to dental care. The HPV-associated oropharyngeal cancer epidemic is rising steeply — a demographic often missed by screening programs designed for traditional risk groups. The Maharashtra model of community health worker integration offers a transferable framework for reaching underserved populations in rural Appalachia or the US South, where oral cancer mortality rates exceed the national average." }
    ]
  },
  {
    id: "fr-002",
    title: "Nigeria's Immunization Equity Gap: Lessons for the Global Eradicator",
    excerpt: "Despite WHO partnerships and significant investment, northern Nigeria's immunization coverage remains below 50%. This brief examines the policy and structural determinants.",
    country: "Nigeria",
    concentration: "Health Policy",
    author: "[Writer Name]",
    program: "MPH, Health Policy",
    reviewer: "[Faculty Name]",
    dept: "Dept. of Health Policy",
    date: "Oct 1, 2025",
    tool: "Policy Brief Format",
    lat: 9.0, lng: 8.6,
    content: [
      { type: "p", text: "Nigeria accounts for approximately 30% of global measles deaths despite being party to international immunization commitments for over three decades. A 2024 study in The Lancet Regional Health examined district-level vaccination coverage across 18 states and found that in the northwest and northeast zones, full immunization rates for children under five remain below 47% — unchanged since 2019." },
      { type: "p", text: "What emerges is not a story of insufficient supply, but of a fragmented last-mile delivery system compounded by health worker shortages, community resistance tied to historical distrust of government health programs, and gender barriers that prevent women from accessing facilities without male accompaniment." },
      { type: "viz", text: "Policy brief format: District-level immunization coverage map — insert your visualization here." },
      { type: "us", text: "The United States celebrated measles elimination in 2000, but 2024 saw 146 confirmed cases — the highest since 2019 — primarily in under-vaccinated communities in Ohio and Georgia. The Nigerian study's findings on community trust and structural barriers mirror challenges in US hesitancy contexts, where outreach through trusted community intermediaries has proven more effective than centralized campaigns." }
    ]
  },
  {
    id: "fr-003",
    title: "Fluoride in the Favela: Water Policy and Oral Health in São Paulo",
    excerpt: "Brazil's mandatory water fluoridation program is one of the most comprehensive in the world. This brief asks why decay rates in São Paulo's peripheral neighborhoods remain stubbornly high.",
    country: "Brazil",
    concentration: "Oral Health",
    author: "[Writer Name]",
    program: "MPH, Oral Health",
    reviewer: "[Faculty Name]",
    dept: "Dept. of Oral Health",
    date: "Sep 17, 2025",
    tool: "GIS Mapping",
    lat: -23.5, lng: -46.6,
    content: [
      { type: "p", text: "Brazil legislated mandatory water fluoridation in 1974 — one of the earliest and broadest such mandates in the world. Yet a 2023 cross-sectional study published in Cadernos de Saúde Pública found that children aged 6–12 in São Paulo's peripheral zones had DMFT scores (decayed, missing, filled teeth) nearly double those of children in central districts served by the same water system." },
      { type: "p", text: "The study points not to the absence of fluoridation policy, but to infrastructure gaps: intermittent water supply in favela communities, reliance on unregulated water trucks, and inadequate last-meter pipe condition that affects water quality before it reaches the tap." },
      { type: "viz", text: "GIS Map: DMFT scores overlaid with water infrastructure coverage in São Paulo districts — insert your visualization here." },
      { type: "us", text: "The US debate around water fluoridation has intensified in recent years. The São Paulo data offers a critical counterpoint: the problem is rarely the fluoride itself, but the infrastructure equity gap in who actually receives adequately treated water. American rural and tribal water systems face similar coverage inconsistencies, suggesting the policy conversation needs to shift from fluoridation as a binary question to fluoridation as an equity question." }
    ]
  },
  {
    id: "fr-004",
    title: "Community Health Workers and Diabetes Management in Western Kenya",
    excerpt: "A cluster-randomized trial across 24 rural clinics finds that CHW-led diabetes education reduces HbA1c levels by 1.4 points — at a fraction of clinical care costs.",
    country: "Kenya",
    concentration: "Epidemiology",
    author: "[Writer Name]",
    program: "MPH, Epidemiology",
    reviewer: "[Faculty Name]",
    dept: "Dept. of Epidemiology",
    date: "Sep 3, 2025",
    tool: "R Statistical Analysis",
    lat: 0.0, lng: 37.9,
    content: [
      { type: "p", text: "Sub-Saharan Africa is experiencing a rapid epidemiological transition, with non-communicable diseases now competing with infectious disease as the leading causes of premature death. A cluster-randomized trial across 24 rural clinics in western Kenya, published in PLOS Medicine in 2024, tested whether community health worker-led diabetes education could meaningfully improve glycemic control in resource-limited settings." },
      { type: "p", text: "The results were significant: patients in the CHW arm showed a mean HbA1c reduction of 1.4 percentage points compared to 0.3 in the control arm at 12 months. The intervention cost $47 per patient annually — compared to $340 for equivalent clinical consultations." },
      { type: "viz", text: "R Analysis: HbA1c reduction over 12 months — CHW arm vs. control — insert your visualization here." },
      { type: "us", text: "The US spends over $327 billion annually on diabetes care, with outcomes that remain inequitable across racial and geographic lines. The Kenya trial's community health worker model has direct parallels in Federally Qualified Health Centers serving rural and underserved urban populations. Several US states have begun Medicaid reimbursement pathways for CHW services — the Kenyan evidence base provides strong support for expanding and standardizing these programs." }
    ]
  },
  {
    id: "fr-005",
    title: "Lead Exposure and Housing Policy: A US Compliance Gap",
    excerpt: "Federal lead paint disclosure laws have not kept pace with the demographic reality of who lives in pre-1978 housing. A new analysis reveals a 40% gap in compliance screening.",
    country: "United States",
    concentration: "Health Policy",
    author: "[Writer Name]",
    program: "MPH, Health Policy",
    reviewer: "[Faculty Name]",
    dept: "Dept. of Health Policy",
    date: "Aug 20, 2025",
    tool: "Power BI",
    lat: 39.5, lng: -98.4,
    content: [
      { type: "p", text: "The United States banned lead-based paint in residential housing in 1978. Yet the CDC estimates that 24 million homes still contain lead paint hazards, and 3.8 million of those are home to young children. A 2024 policy analysis in Health Affairs found that in cities with more than 40% pre-1978 housing stock, only 58% of rental units with children under six had received the legally mandated lead hazard disclosure within the past rental cycle." },
      { type: "p", text: "The compliance gap is not random. It maps closely to neighborhoods with concentrated poverty and majority-minority populations, pointing to enforcement infrastructure — not policy design — as the critical intervention point." },
      { type: "viz", text: "Power BI Dashboard: Lead disclosure compliance rates by city and demographic composition — insert your visualization here." },
      { type: "us", text: "Blood lead level surveillance data shows persistent racial disparities. Black children in low-income urban areas are four times more likely to have elevated blood lead levels than white children in comparable income brackets. This is a domestic issue with direct implications for anyone working in urban health policy, environmental health, or maternal and child health. The enforcement infrastructure gap identified in this study is the clearest intervention point for public health practitioners." }
    ]
  }
];

// Countries for filter buttons — auto-generated from briefs
const COUNTRIES = [...new Set(BRIEFS.map(b => b.country))].sort();
const CONCENTRATIONS = [...new Set(BRIEFS.map(b => b.concentration))].sort();
