export type SeoLandingPageData = {
  slug: string;
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  intro: string;
  quickAnswer: string;
  primaryKeyword: string;
  price: string;
  bestFor: string[];
  painPoints: string[];
  features: { title: string; desc: string }[];
  workflow: string[];
  reports: string[];
  faqs: { q: string; a: string }[];
  relatedLinks: { label: string; href: string }[];
};

export const seoLandingPages: Record<string, SeoLandingPageData> = {
  "livestock-management-software": {
    slug: "livestock-management-software",
    title: "Livestock Management Software | AnimalCare360",
    description:
      "Manage cattle, goats, sheep, dairy records, health, breeding, feed inventory, sales, and farm finance with AnimalCare360 livestock management software.",
    eyebrow: "Livestock ERP",
    h1: "Livestock Management Software for Cattle, Goats, Sheep, and Mixed Farms",
    intro:
      "AnimalCare360 helps livestock businesses replace paper registers and scattered spreadsheets with one web and Android system for animal records, breeding, health, feed, sales, billing, and profit reporting.",
    quickAnswer:
      "Livestock management software helps farms digitize animal profiles, breeding events, health treatments, vaccinations, milk or weight production, feed use, sales, and farm expenses. AnimalCare360 adds ERP workflows for inventory, billing, customer credit, and financial reports, so farms can manage daily operations from web and Android.",
    primaryKeyword: "livestock management software",
    price: "19",
    bestFor: ["Cattle farms", "Dairy farms", "Goat farms", "Sheep farms", "Mixed livestock farms", "Multi-location operators"],
    painPoints: [
      "Paper records make it hard to find animal history during treatment, sale, or audit.",
      "Breeding, vaccination, and medicine dates are easy to miss without alerts.",
      "Feed, medicine, and farm expenses are often disconnected from animal profitability.",
      "Owners need farm-level visibility without waiting for manual reports."
    ],
    features: [
      { title: "Animal Profiles", desc: "Store tag, breed, age, purchase, ownership, location, photos, and lifecycle status for each animal." },
      { title: "Health and Vaccination", desc: "Record vet visits, treatments, medicines, vaccine schedules, next due dates, and group vaccination runs." },
      { title: "Breeding and Birth Records", desc: "Track mating, insemination, pregnancy, calving, kidding, lambing, and linked offspring profiles." },
      { title: "Feed and Inventory", desc: "Monitor feed, medicine, supplies, low-stock alerts, expiry, and consumption against farm activity." },
      { title: "Sales and Finance", desc: "Connect purchases, sales, expenses, customer/vendor balances, and profit reports in one ledger." },
      { title: "Web and Android Access", desc: "Let owners, managers, and field teams update records from the office or farm floor." }
    ],
    workflow: ["Create farm locations and animal categories.", "Import or add livestock profiles.", "Record health, breeding, milk, weight, feed, and expenses.", "Review reports by farm, animal, category, or date.", "Use billing and ledger tools for sales and partner balances."],
    reports: ["Livestock register", "Vaccination due list", "Breeding and birth report", "Feed cost report", "Sales and profit report", "Inventory valuation report"],
    faqs: [
      { q: "Can AnimalCare360 manage cattle, goats, and sheep?", a: "Yes. AnimalCare360 supports cattle, dairy animals, goats, sheep, and mixed livestock farms with species-specific record keeping and shared farm ERP workflows." },
      { q: "Does it replace Excel and paper farm registers?", a: "Yes. Farms can move animal profiles, health logs, breeding records, feed inventory, and financial records from notebooks or spreadsheets into one searchable system." },
      { q: "Can I manage multiple farm locations?", a: "Yes. AnimalCare360 supports multi-location livestock operations with farm, region, inventory, and financial context." },
      { q: "Does the system work for Pakistan and global farms?", a: "Yes. The copy and workflows support global livestock terms while also covering Pakistan and South Asia workflows such as wanda, khata/customer credit, and mandi trading." }
    ],
    relatedLinks: [
      { label: "Cattle management", href: "/solutions/cattle-management" },
      { label: "Goat farm software", href: "/solutions/goat-farm-management-software" },
      { label: "Sheep farm software", href: "/solutions/sheep-farm-management-software" },
      { label: "Pricing", href: "/pricing" }
    ]
  },
  "herd-management-software": {
    slug: "herd-management-software",
    title: "Herd Management Software for Livestock Farms | AnimalCare360",
    description:
      "Track herd and flock records, breeding, health, vaccination, movement, feed use, production, and profitability with AnimalCare360.",
    eyebrow: "Herd And Flock Records",
    h1: "Herd Management Software for Livestock Farms",
    intro:
      "AnimalCare360 gives cattle, goat, sheep, and mixed farms a structured herd management system for daily records, health events, breeding cycles, feed cost, and reporting.",
    quickAnswer:
      "Herd management software organizes animal-level records for livestock farms. It helps teams track identity, breed, ownership, movement, health, vaccinations, breeding, production, sales, and profitability. AnimalCare360 combines herd records with inventory, billing, and farm finance for complete operational control.",
    primaryKeyword: "herd management software",
    price: "19",
    bestFor: ["Herd owners", "Farm managers", "Dairy operators", "Fattening farms", "Goat and sheep flocks"],
    painPoints: [
      "Animal histories are spread across registers, WhatsApp messages, and memory.",
      "Teams cannot quickly see which animals are due for treatment, breeding, or sale.",
      "Farm owners lack accurate herd profitability by animal or group.",
      "Multi-farm teams need one clean operating view."
    ],
    features: [
      { title: "Herd Register", desc: "Keep searchable records for every animal with tag, breed, location, category, and status." },
      { title: "Movement Tracking", desc: "Record transfers between sheds, pens, farms, or sale groups." },
      { title: "Breeding Calendar", desc: "Manage pregnancy, expected birth, calving, kidding, lambing, and failed breeding outcomes." },
      { title: "Health Timeline", desc: "View each animal's treatments, vaccines, medicine usage, and vet visit history." },
      { title: "Production Logs", desc: "Record milk, weight, growth, and other outputs linked to the herd profile." },
      { title: "Profit View", desc: "Compare animal cost, feed, medicine, sale value, and profit in reports." }
    ],
    workflow: ["Build herd categories.", "Add animal profiles and ownership type.", "Log health, breeding, movement, and production.", "Review due lists and exception reports.", "Make sale or retention decisions using profitability data."],
    reports: ["Herd register", "Animal status report", "Breeding due list", "Health timeline", "Movement report", "Profit by animal/group"],
    faqs: [
      { q: "Is herd management only for cattle?", a: "No. AnimalCare360 supports cattle herds, goat herds, sheep flocks, dairy animals, and mixed livestock operations." },
      { q: "Can I track breeding and birth cycles?", a: "Yes. You can record mating or insemination, pregnancy checks, expected birth dates, and calving, kidding, or lambing outcomes." },
      { q: "Can staff update herd records from mobile?", a: "Yes. AnimalCare360 supports web and Android workflows so farm teams can update records closer to daily operations." }
    ],
    relatedLinks: [
      { label: "Livestock management software", href: "/solutions/livestock-management-software" },
      { label: "Health tracking", href: "/features/health-tracking" },
      { label: "Inventory management", href: "/features/inventory-management" }
    ]
  },
  "dairy-farm-management-software": {
    slug: "dairy-farm-management-software",
    title: "Dairy Farm Management Software | AnimalCare360",
    description:
      "Track milk production, lactation, cattle health, breeding, feed cost, inventory, and dairy farm profit with AnimalCare360 dairy farm management software.",
    eyebrow: "Dairy Farm ERP",
    h1: "Dairy Farm Management Software for Milk, Herd Health, Feed, and Profit",
    intro:
      "AnimalCare360 helps dairy farms track cattle records, daily milk production, breeding cycles, health treatments, feed inventory, cost per liter, and farm profitability from one system.",
    quickAnswer:
      "Dairy farm management software helps farms manage herd records, milk yield, lactation status, breeding, vaccination, feed cost, medicine use, sales, and financial reporting. AnimalCare360 connects these workflows with inventory and ledger tools so dairy owners can see both animal performance and business performance.",
    primaryKeyword: "dairy farm management software",
    price: "79",
    bestFor: ["Dairy farms", "Milk production businesses", "Cattle farms", "Fattening plus dairy operations", "Multi-farm dairy owners"],
    painPoints: [
      "Milk records are often separated from animal health and feed cost.",
      "Breeding and dry-period dates are missed when records are manual.",
      "Owners cannot easily calculate cost per liter or animal-wise production.",
      "Feed and medicine inventory changes are not connected to production."
    ],
    features: [
      { title: "Milk Production Logs", desc: "Record daily milk yield by animal, session, date, farm, or group." },
      { title: "Lactation And Breeding", desc: "Track insemination, pregnancy, calving, dry periods, and production lifecycle." },
      { title: "Health And Vaccines", desc: "Record treatments, vet visits, medicine, vaccine schedules, and next due dates." },
      { title: "Feed Cost Control", desc: "Connect feed inventory and diet usage with animal groups and production outputs." },
      { title: "Cost Per Liter", desc: "Use expense and production records to understand dairy profitability." },
      { title: "Dairy Reports", desc: "Review milk trends, herd health, feed usage, and financial summaries." }
    ],
    workflow: ["Add dairy herd profiles.", "Record morning/evening milk sessions.", "Track breeding, calving, and dry dates.", "Log feed, medicine, and farm expenses.", "Review milk, health, and profit reports."],
    reports: ["Milk production report", "Animal-wise yield trend", "Breeding calendar", "Feed cost report", "Health due report", "Dairy profit summary"],
    faqs: [
      { q: "Can AnimalCare360 track daily milk production?", a: "Yes. Dairy farms can record milk production by animal, date, and session, then review trends and reports." },
      { q: "Can it track breeding and calving?", a: "Yes. The dairy workflow supports breeding dates, pregnancy status, expected calving, and birth records." },
      { q: "Can it calculate dairy farm profit?", a: "AnimalCare360 connects production, feed, medicine, sales, and expenses so dairy owners can review profitability more clearly." }
    ],
    relatedLinks: [
      { label: "Cattle management", href: "/solutions/cattle-management" },
      { label: "Health tracking", href: "/features/health-tracking" },
      { label: "Pricing", href: "/pricing" }
    ]
  },
  "goat-farm-management-software": {
    slug: "goat-farm-management-software",
    title: "Goat Farm Management Software | AnimalCare360",
    description:
      "Manage goat herd records, breeding, kidding, vaccination, feed, medicine inventory, sales, and profit with AnimalCare360 goat farm management software.",
    eyebrow: "Goat Farm Records",
    h1: "Goat Farm Management Software for Breeding, Health, Milk, Meat, and Sales",
    intro:
      "AnimalCare360 supports goat farms with digital herd records, breeding and kidding logs, vaccination schedules, feed and medicine inventory, sales records, and profitability reports.",
    quickAnswer:
      "Goat farm management software helps farmers keep digital records for each goat, including breed, age, ownership, breeding, kidding, vaccination, treatment, feed use, milk or meat production, sales, and expenses. AnimalCare360 supports goat herds inside a broader livestock ERP for farms that also manage cattle, sheep, feed, or trading.",
    primaryKeyword: "goat farm management software",
    price: "19",
    bestFor: ["Goat farms", "Breeding farms", "Milk goat operations", "Meat goat farms", "Mixed livestock farms"],
    painPoints: [
      "Manual goat records make breeding history and kidding performance hard to track.",
      "Vaccination and treatment dates can be missed across growing herds.",
      "Feed cost and sale value are rarely connected to goat profitability.",
      "Mixed farms need goat records alongside cattle and sheep, not in a separate spreadsheet."
    ],
    features: [
      { title: "Goat Profiles", desc: "Store breed, tag, age, parentage, purchase details, status, photos, and ownership." },
      { title: "Breeding And Kidding", desc: "Track mating, pregnancy, expected kidding dates, birth outcomes, and kid profiles." },
      { title: "Vaccination And Treatment", desc: "Log goat health events, medicines, vet visits, vaccination due dates, and mortality records." },
      { title: "Feed And Medicine Inventory", desc: "Monitor feed, minerals, medicines, expiry dates, and low-stock alerts." },
      { title: "Sales And Profit", desc: "Record goat sales, expenses, buyer balances, and profit by animal or group." },
      { title: "Mixed Farm Support", desc: "Manage goats alongside cattle, sheep, dairy, feed retail, or trading workflows." }
    ],
    workflow: ["Create goat herd categories.", "Add breeding bucks, does, kids, and sale groups.", "Record breeding, kidding, health, and feed events.", "Track sales and expenses.", "Review herd and profit reports."],
    reports: ["Goat herd register", "Kidding calendar", "Vaccination due list", "Medicine usage report", "Sales ledger", "Profit by goat/group"],
    faqs: [
      { q: "Does AnimalCare360 support goat farms?", a: "Yes. Goat farms are fully supported with herd records, breeding, kidding, health, feed, sales, and profitability workflows." },
      { q: "Can I manage goat breeding records?", a: "Yes. You can track mating, pregnancy status, expected kidding, birth outcomes, and linked kid profiles." },
      { q: "Can I use AnimalCare360 for goats and cattle together?", a: "Yes. AnimalCare360 is built for mixed livestock operations, including goats, cattle, sheep, and dairy animals." }
    ],
    relatedLinks: [
      { label: "Livestock management", href: "/solutions/livestock-management-software" },
      { label: "Sheep farm software", href: "/solutions/sheep-farm-management-software" },
      { label: "Health tracking", href: "/features/health-tracking" }
    ]
  },
  "sheep-farm-management-software": {
    slug: "sheep-farm-management-software",
    title: "Sheep Farm Management Software | AnimalCare360",
    description:
      "Manage sheep flock records, lambing, breeding, vaccination, feed, medicine, sales, and profitability with AnimalCare360 sheep farm management software.",
    eyebrow: "Sheep Flock Records",
    h1: "Sheep Farm Management Software for Flock Records, Lambing, Health, and Profit",
    intro:
      "AnimalCare360 gives sheep farms a digital flock management system for ewe, ram, lamb, breeding, lambing, vaccination, feed, medicine, sales, and financial records.",
    quickAnswer:
      "Sheep farm management software helps farmers organize flock records, breeding, lambing, health events, vaccination schedules, mortality, feed use, sales, and profitability. AnimalCare360 supports sheep flocks alongside cattle, goats, dairy, feed inventory, and farm finance workflows.",
    primaryKeyword: "sheep farm management software",
    price: "19",
    bestFor: ["Sheep farms", "Flock owners", "Breeding operations", "Meat sheep farms", "Mixed livestock farms"],
    painPoints: [
      "Flock records become difficult as animal counts grow.",
      "Lambing, vaccination, and mortality records are hard to audit from notebooks.",
      "Feed cost, health cost, and sale price are often disconnected.",
      "Mixed farms need one system for sheep, goats, cattle, and inventory."
    ],
    features: [
      { title: "Flock Register", desc: "Track ewes, rams, lambs, breed, age, tag, status, and ownership." },
      { title: "Breeding And Lambing", desc: "Record mating, pregnancy checks, expected lambing, lamb outcomes, and linked profiles." },
      { title: "Health And Vaccination", desc: "Manage treatments, medicine, vaccines, vet visits, and due lists." },
      { title: "Feed And Inventory", desc: "Track feed, medicine, supplies, expiry, and usage across sheep groups." },
      { title: "Sales And Mortality", desc: "Record sales, deaths, reasons, buyer details, and group profitability." },
      { title: "Mixed Livestock ERP", desc: "Use the same platform for sheep, goats, cattle, dairy, trading, and feed workflows." }
    ],
    workflow: ["Add flock categories.", "Create profiles for ewes, rams, and lambs.", "Log breeding, lambing, vaccination, and feed events.", "Record sales and expenses.", "Review flock health and profit reports."],
    reports: ["Sheep flock register", "Lambing report", "Vaccination schedule", "Mortality report", "Feed usage report", "Sales and profit report"],
    faqs: [
      { q: "Does AnimalCare360 support sheep farms?", a: "Yes. Sheep farms are fully supported with flock records, lambing, health, inventory, sales, and farm finance workflows." },
      { q: "Can I track lambing records?", a: "Yes. You can record breeding, expected lambing, lambing outcomes, and linked lamb profiles." },
      { q: "Can sheep and goat records be managed together?", a: "Yes. AnimalCare360 supports mixed livestock farms with cattle, goats, sheep, and dairy animals in one system." }
    ],
    relatedLinks: [
      { label: "Livestock record keeping", href: "/solutions/livestock-record-keeping-software" },
      { label: "Goat farm software", href: "/solutions/goat-farm-management-software" },
      { label: "Pricing", href: "/pricing" }
    ]
  },
  "livestock-record-keeping-software": {
    slug: "livestock-record-keeping-software",
    title: "Livestock Record Keeping Software for Farms | AnimalCare360",
    description:
      "Replace livestock notebooks and spreadsheets with digital records for cattle, goats, sheep, health, breeding, feed, sales, and farm finance.",
    eyebrow: "Digital Farm Records",
    h1: "Livestock Record Keeping Software for Cattle, Goats, Sheep, and Mixed Farms",
    intro:
      "AnimalCare360 helps farms move from registers and spreadsheets to searchable livestock records covering animal profiles, health, breeding, production, feed inventory, sales, and financial reports.",
    quickAnswer:
      "Livestock record keeping software stores animal and farm records digitally so owners can search, update, report, and audit information faster. AnimalCare360 records cattle, goats, sheep, health, breeding, vaccination, feed, inventory, sales, customer/vendor balances, and farm expenses in one cloud-based system.",
    primaryKeyword: "livestock record keeping software",
    price: "19",
    bestFor: ["Paper-register farms", "Excel-based farms", "Growing livestock businesses", "Multi-location farms", "Farms needing audit-ready records"],
    painPoints: [
      "Registers are hard to search, back up, and share.",
      "Excel sheets become messy when multiple people update records.",
      "Important vaccine, breeding, and payment dates get missed.",
      "Owners need clean reports for decisions, audits, and buyers."
    ],
    features: [
      { title: "Animal Record Templates", desc: "Standardize tag, breed, age, purchase, status, parentage, and ownership details." },
      { title: "Health Records", desc: "Keep treatment, medicine, vaccine, vet visit, and next due date histories." },
      { title: "Breeding Records", desc: "Track mating, insemination, pregnancy, birth events, and offspring links." },
      { title: "Inventory Records", desc: "Record feed, medicine, expiry, stock movement, and low-stock alerts." },
      { title: "Financial Records", desc: "Track purchases, sales, expenses, customer credit, vendor balances, and profit." },
      { title: "Reports And Exports", desc: "Generate operational summaries for farm owners, managers, accountants, and field teams." }
    ],
    workflow: ["Import existing register or Excel data.", "Create animal and inventory records.", "Record daily farm activity.", "Set due dates and review reminders.", "Generate reports for owners and teams."],
    reports: ["Animal master register", "Health history", "Breeding history", "Inventory ledger", "Customer/vendor ledger", "Farm profit report"],
    faqs: [
      { q: "Can I migrate from Excel?", a: "Yes. AnimalCare360 can help prepare starting data for animals, stock, customers, vendors, and balances." },
      { q: "Is digital record keeping useful for small farms?", a: "Yes. Small farms benefit from clean records early, especially for health, breeding, feed, and sale decisions." },
      { q: "Can records be used for reporting?", a: "Yes. AnimalCare360 turns daily records into searchable reports for operations and finance." }
    ],
    relatedLinks: [
      { label: "Livestock management", href: "/solutions/livestock-management-software" },
      { label: "Cattle management", href: "/solutions/cattle-management" },
      { label: "Inventory management", href: "/features/inventory-management" }
    ]
  }
};

export const seoLandingPageSlugs = Object.keys(seoLandingPages);
