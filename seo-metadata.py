import os

base_path = r"c:\Users\Logic-Unit\Documents\Animcalcare360\website\src\app"

pages = {
    "solutions": {
        "title": "AnimalCare360 Solutions | Farm, Feed, Trading & Pet Hospital ERP",
        "description": "Explore AnimalCare360 modules for cattle farms, wanda and feed retailers, animal traders, and pet hospitals in Pakistan. Start with one module and scale your ERP."
    },
    "features": {
        "title": "AnimalCare360 Features | Livestock ERP, FBR Billing, Inventory & EMR",
        "description": "See AnimalCare360 features for livestock records, feed inventory, FBR QR invoices, animal trading, veterinary EMR, pharmacy stock, milk tracking, and reporting."
    },
    "pricing": {
        "title": "AnimalCare360 Pricing Pakistan | Farm, Feed & Pet Hospital ERP Plans",
        "description": "See AnimalCare360 pricing for cattle farms, wanda shops, feed retailers, animal traders, and pet hospitals in Pakistan. Start small and scale by users, animals, and locations."
    },
    "feed-retail": {
        "title": "Wanda & Feed Retail Software Pakistan | POS, Stock & FBR Invoices",
        "description": "Manage wanda, feed, pet food, pharmacy stock, customer credit, supplier payments, expiry, multi-warehouse inventory, and FBR invoices with AnimalCare360."
    },
    "cattle-management": {
        "title": "Cattle & Dairy Farm Management Software Pakistan | AnimalCare360",
        "description": "Manage cattle records, milk yield, breeding, vaccination, weight gain, feed cost, fattening lots, partner ROI, and farm reports with AnimalCare360."
    },
    "animal-trading": {
        "title": "Animal Trading Software Pakistan | Sale, Purchase & Commission Records",
        "description": "Track animal sale and purchase, mandi deals, broker commission, buyer/seller ledgers, transport costs, payments, and profit per animal with AnimalCare360."
    },
    "pet-hospital": {
        "title": "Pet Hospital Software Pakistan | Veterinary EMR, Pharmacy & Billing",
        "description": "Run a veterinary clinic or pet hospital with patient EMR, appointments, surgery logs, lab records, pharmacy stock, medicine expiry, billing, and WhatsApp reminders."
    },
    "resources": {
        "title": "Livestock Business Resources Pakistan | AnimalCare360 Guides",
        "description": "Practical guides for dairy farms, cattle records, wanda shops, animal trading, FBR invoices, veterinary clinics, inventory, and livestock ERP in Pakistan."
    },
    "download-app": {
        "title": "Download AnimalCare360 Android App | Farm & Livestock Management App",
        "description": "Download the AnimalCare360 Android app for farm, cattle, milk, vaccination, feed, and field staff records. Built for livestock businesses in Pakistan."
    }
}

template = """import type {{ Metadata }} from 'next';

export const metadata: Metadata = {{
  title: '{title}',
  description: '{description}',
}};

export default function Layout({{ children }}: {{ children: React.ReactNode }}) {{
  return <>{{children}}</>;
}}
"""

for page, meta in pages.items():
    dir_path = os.path.join(base_path, page)
    if os.path.exists(dir_path):
        file_path = os.path.join(dir_path, "layout.tsx")
        with open(file_path, "w", encoding="utf-8") as f:
            f.write(template.format(
                title=meta["title"].replace("'", "\\'"), 
                description=meta["description"].replace("'", "\\'")
            ))
        print(f"Created {file_path}")
