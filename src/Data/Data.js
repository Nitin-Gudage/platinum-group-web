
// NavBar data
export const menu = [
    {
        title: "Home",
        link: "/",
    },
    {
        title: "Services",
        link: "/services",
    },
    {
        title: "Contact Us",
        link: "/contact",
    },
    {
        title: "About Us",
        link: "/about",
    }
];

export const acTypes = ['Split AC', 'HVAC', 'Ducted AC', 'Cassette AC', ' Window AC', 'Central Ac', 'Portable AC', 'Tower AC']
export const availableServices = ['Repair', 'Maintanance', 'AMC', 'Installation', "Uninstallation", 'Gas Refil', 'Cleaning']

export const logo = {
    icon: "/logo.png",
    altName: "Platinium Group Logo"
};

export const contactInfo = {
    address: {
        street: "Platinum Group, Near New Taj Bakery",
        area: "Camp",
        city: "Pune",
        state: "Maharashtra",
        pincode: "411001",
        country: "India",
    },

    mobile1: "+91 72197 77044",
    mobile2: "+91 99888 65663  ",

    email: "platinumgroup311@gmail.com",

    whatsapp: "7219777044",

    // facebook: "https://facebook.com/platinumgroup",
    instagram: "https://www.instagram.com/platinumgroup_official?igsh=MWJiZWc4cnE4eHZkcw==",
    // xTwitter: "https://twitter.com/platinumgroup",
};

// footer

export const footerLinks = {
    quickLinks: [
        { title: "Home", link: "/", icon: "home" },
        { title: "About", link: "/about", icon: "info" },
        { title: "Services", link: "/services", icon: "services" },
        { title: "Contact", link: "/contact", icon: "phone" },
        { title: "FAQ", link: "/faq", icon: "faq" }
    ],

    services: [
        { title: "Split AC", link: "#split-ac", icon: "snow" },
        { title: "Ducted AC", link: "#ducted-ac", icon: "snow" },
        { title: "Cassette AC", link: "#cassette-ac", icon: "snow" },
        { title: "Window AC", link: "#window-ac", icon: "snow" },
        { title: "Tower AC", link: "#window-ac", icon: "snow" },

    ],


    social: [
        { name: "Facebook", link: "https://facebook.com", icon: "facebook" },
        { name: "Instagram", link: "https://instagram.com", icon: "instagram" },
        { name: "Twitter", link: "https://twitter.com", icon: "twitter" },
        { name: "LinkedIn", link: "https://linkedin.com", icon: "linkedin" },
    ],
};


export const brandImages = [
    "/images/brands/voltas.png",
    "/images/brands/bluestar.png",
    "/images/brands/lg.png",
    "/images/brands/samsung.png",
    "/images/brands/daikin.png",
    "/images/brands/hitachi.png",
    "/images/brands/panasonic.png",
    "/images/brands/carrier.png",

]

export const whyToChoose = [
    {
        id: 1,
        icon: "/images/review/tool.svg",
        title: "Certified & Experienced Technicians",
        desc: "Our certified AC technicians in Mumbai have years of experience in repairing split, window, ductable, and central air conditioners. We accurately diagnose problems and deliver long-lasting repair solutions."
    },

    {
        id: 2,
        icon: "/images/review/quality.svg",
        title: "Premium Quality AC Service",
        desc: "We follow strict quality standards for AC repair, installation, and maintenance. Using genuine spare parts and advanced tools, we ensure reliable and efficient HVAC service for homes and offices."
    },

    {
        id: 3,
        icon: "/images/review/customer.svg",
        title: "Trusted by 1000+ Customers",
        desc: "With thousands of satisfied customers across Mumbai and nearby areas, Platinum Group is known for transparent pricing, timely service, and excellent customer support."
    },

    {
        id: 4,
        icon: "/images/review/cartoon.svg",
        title: "24/7 Emergency AC Support",
        desc: "We provide 24x7 AC repair and emergency breakdown support in Mumbai, Thane, and Navi Mumbai. Our technicians are available day and night to keep your cooling system running smoothly."
    }
];


export const testimonials = [
    {
        id: 1,
        name: "Rahul Sharma",
        position: "Home Owner, Mumbai",
        image: "/images/profile.webp",
        review:
            "Platinum Group provided fast and reliable split AC repair at my home in Andheri. The technician arrived on time, explained the issue clearly, and fixed it the same day. Highly recommended for AC service in Mumbai."
    },

    {
        id: 2,
        name: "Neha Patel",
        position: "Office Manager, Navi Mumbai",
        image: "/images/profile.webp",
        review:
            "We hired Platinum Group for office AC maintenance and AMC service. Their team was professional, affordable, and very responsive. Best AC service provider in Navi Mumbai."
    },

    {
        id: 3,
        name: "Amit Verma",
        position: "Business Owner, Thane",
        image: "/images/profile.webp",
        review:
            "Excellent ductable AC installation by Platinum Group in our showroom. The technicians were skilled and completed the work on time. Very satisfied with their HVAC services."
    },

    {
        id: 4,
        name: "Priya Desai",
        position: "Resident, Borivali",
        image: "/images/profile.webp",
        review:
            "My window AC stopped cooling suddenly. Platinum Group sent a technician within an hour and fixed the gas leakage. Honest pricing and great customer support."
    },

    {
        id: 5,
        name: "Rohit Malhotra",
        position: "Restaurant Owner, Bandra",
        image: "/images/profile.webp",
        review:
            "We use Platinum Group for regular AC servicing and AMC plans for our restaurant. Their service quality is excellent and helps us avoid breakdowns during peak hours."
    },

    {
        id: 6,
        name: "Sneha Kulkarni",
        position: "Flat Owner, Powai",
        image: "/images/profile.webp",
        review:
            "Booked split AC installation through Platinum Group. The team handled wiring, mounting, and testing perfectly. Very professional AC installation service in Powai."
    },

    {
        id: 7,
        name: "Karan Mehta",
        position: "IT Manager, Goregaon",
        image: "/images/profile.webp",
        review:
            "We rely on Platinum Group for annual AC maintenance in our office. Their technicians are trained, polite, and always complete the work on schedule."
    },

    {
        id: 8,
        name: "Pooja Singh",
        position: "Home Owner, Kandivali",
        image: "/images/profile.webp",
        review:
            "Very happy with their AC repair service. Transparent pricing, quick response, and genuine spare parts. One of the best HVAC companies in Mumbai."
    }
];




export const faqs = [
    {
        section: "General Questions",
        items: [
            {
                q: "What areas do you service in Mumbai?",
                a: "We provide AC repair and maintenance services across Mumbai, Thane, Navi Mumbai, and nearby suburbs including Andheri, Borivali, Bandra, Powai, and Goregaon.",
            },
            {
                q: "How soon can I get an AC service appointment?",
                a: "We usually provide same-day or next-day AC service depending on availability and your location.",
            },
            {
                q: "Do you provide 24/7 emergency AC repair?",
                a: "Yes, we offer 24/7 emergency AC repair services for urgent breakdowns and cooling issues.",
            },
            {
                q: "Are your AC technicians certified and trained?",
                a: "All our technicians are professionally trained, background verified, and certified to handle all major AC brands.",
            },
            {
                q: "Do you provide warranty on AC repair services?",
                a: "Yes, we provide service warranty on repairs and spare parts depending on the service type.",
            },
            {
                q: "Is doorstep AC service available?",
                a: "Yes, we provide doorstep AC repair and servicing for homes, offices, and commercial spaces.",
            },
            {
                q: "How can I book an AC service online?",
                a: "You can book our AC services online through our website or by calling our support team directly.",
            },
            {
                q: "Do you offer AMC (Annual Maintenance Contract)?",
                a: "Yes, we offer affordable AMC plans for regular AC maintenance and priority support.",
            },
        ],
    },

    {
        section: "Service & Repair Questions",
        items: [
            {
                q: "What types of AC units do you service?",
                a: "We service split AC, window AC, ductable AC, cassette AC, VRV, and central air conditioning systems.",
            },
            {
                q: "Do you provide AC installation and uninstallation?",
                a: "Yes, we provide professional AC installation, uninstallation, and relocation services.",
            },
            {
                q: "Do you refill AC gas?",
                a: "Yes, we provide AC gas refilling with leakage detection and pressure testing.",
            },
            {
                q: "What is included in routine AC servicing?",
                a: "Routine AC servicing includes filter cleaning, coil cleaning, gas check, drainage cleaning, and performance testing.",
            },
            {
                q: "How often should I service my AC?",
                a: "We recommend servicing your AC every 3 to 6 months for best cooling performance and energy efficiency.",
            },
            {
                q: "Why is my AC not cooling properly?",
                a: "Poor cooling may be caused by low gas, dirty filters, faulty compressor, or electrical issues. Our technicians diagnose and fix it quickly.",
            },
            {
                q: "How long does AC servicing take?",
                a: "Standard AC servicing usually takes 60 to 90 minutes depending on the condition of the unit.",
            },
            {
                q: "Do you repair inverter ACs?",
                a: "Yes, we specialize in inverter AC repair, PCB repair, and advanced diagnostics.",
            },
            {
                q: "Can you repair old or out-of-warranty AC units?",
                a: "Yes, we repair both new and old AC units, including out-of-warranty systems.",
            },
            {
                q: "Do you use genuine spare parts?",
                a: "Yes, we use genuine and high-quality spare parts to ensure long-lasting performance.",
            },
        ],
    },

    {
        section: "Pricing & Payment Questions",
        items: [
            {
                q: "What is the cost of AC servicing in Mumbai?",
                a: "AC servicing prices depend on the type of AC and service required. Contact us for a transparent quote.",
            },
            {
                q: "Are your prices affordable?",
                a: "Yes, we offer competitive and transparent pricing with no hidden charges.",
            },
            {
                q: "Do you provide upfront cost estimates?",
                a: "Yes, our technicians share the estimated cost before starting any repair work.",
            },
            {
                q: "What payment methods do you accept?",
                a: "We accept cash, UPI, Google Pay, PhonePe, Paytm, and bank transfers.",
            },
            {
                q: "Do you provide invoices for services?",
                a: "Yes, we provide proper invoices and service receipts for all completed jobs.",
            },
        ],
    },

    {
        section: "Commercial & Business Services",
        items: [
            {
                q: "Do you provide AC services for offices and businesses?",
                a: "Yes, we provide commercial AC repair, maintenance, and AMC services for offices, shops, hotels, and restaurants.",
            },
            {
                q: "Do you handle large HVAC projects?",
                a: "Yes, we manage large HVAC installations and maintenance projects for commercial buildings.",
            },
            {
                q: "Do you offer corporate AMC plans?",
                a: "Yes, we provide customized AMC plans for corporate clients and commercial properties.",
            },
            {
                q: "Can you maintain multiple AC units at one location?",
                a: "Yes, we handle bulk AC servicing and maintenance for apartments and offices.",
            },
        ],
    },

    {
        section: "Booking & Support",
        items: [
            {
                q: "How do I contact customer support?",
                a: "You can contact our support team via phone, WhatsApp, or email for quick assistance.",
            },
            {
                q: "Can I reschedule my appointment?",
                a: "Yes, appointments can be rescheduled by informing us in advance.",
            },
            {
                q: "Do you send service reminders?",
                a: "Yes, we send maintenance reminders for AMC customers.",
            },
            {
                q: "Is customer support available on weekends?",
                a: "Yes, our support team is available on weekends and holidays.",
            },
        ],
    },
];
