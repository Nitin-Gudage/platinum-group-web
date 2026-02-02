

// NavBar data

export const logo = {
    icon: "/src/assets/logo.png",
    altName: "Platinium Group Logo"
};

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

//Footer data

// Data/Data.js

export const footerLinks = {
    quickLinks: [
        { title: "Home", link: "#home", icon: "home" },
        { title: "About", link: "#about", icon: "info" },
        { title: "Services", link: "#services", icon: "services" },
        { title: "Contact", link: "#contact", icon: "phone" },
    ],

    services: [
        { title: "Split AC", link: "#split-ac", icon: "snow" },
        { title: "Ducted AC", link: "#ducted-ac", icon: "snow" },
        { title: "Cassette AC", link: "#cassette-ac", icon: "snow" },
        { title: "Window AC", link: "#window-ac", icon: "snow" },
    ],

    contact: [
        {
            title: "1234 Platinum St, Cool City, AC 56789",
            icon: "location",
        },
        {
            title: "+1 (234) 567-8901",
            icon: "phone",
        },
        {
            title: "platiniumgroup@gmail.com",
            icon: "email",
        },
    ],
    social: [
        { name: "Facebook", link: "https://facebook.com", icon: "facebook" },
        { name: "Instagram", link: "https://instagram.com", icon: "instagram" },
        { name: "Twitter", link: "https://twitter.com", icon: "twitter" },
        { name: "LinkedIn", link: "https://linkedin.com", icon: "linkedin" },
    ],
};




// Swiper images

export const heroSwiper = [{
    image: "/src/assets/hero1.png",
    title: "Free AC Inspection",
    subtitle: "This Week !",
    rating: 4.5,
    text: 'Expert technicians can Boost your AC performance'
}, {
    image: "/src/assets/hero2.png",
    title: "Flat 30% Off",
    subtitle: "On Split & window AC Services",
    text: 'Valid till 15 Feb'
}, {
    image: "/src/assets/hero3.png",
    title: "Affordable AC Solutions",
    subtitle: "Quality Service Within Your Budget",
    text: 'Experience top-notch AC services at prices you can afford'
}];

// Home page AC Types data

export const ACTypesData = [
    {
        id: 1,
        title: "Split AC",
        image: "/src/assets/split-ac.jpeg"
    },
    {
        id: 2,
        title: "Ducted AC",
        image: "/src/assets/ducted-ac.webp"
    },
    {
        id: 3,
        title: "Cassette AC",
        image: "/src/assets/cassette-ac.jpg"
    },
    {
        id: 4,
        title: "Window AC",
        image: "/src/assets/window-ac.webp"
    }, {
        id: 5,
        title: "Central AC",
        image: "/src/assets/central-ac.webp"
    }, {
        id: 6,
        title: "AHU AC",
        image: "/src/assets/portable-ac.png"
    }
]

export const OurServicesData = [{
    id: 1,
    title: "AC Installation",
    description: "Professional installation services for all types of air conditioners, ensuring optimal performance and efficiency.",
    icon: 'src/assets/installation.png',
}, {
    id: 2,
    title: "AC Repair",
    description: "Expert repair services to fix any issues with your air conditioner, restoring its functionality and comfort.",
    icon: 'src/assets/repair.png',
}, {
    id: 3,
    title: "AC Maintenance (AMC)",
    description: "Regular maintenance services to keep your air conditioner running efficiently and extend its lifespan.",
    icon: 'src/assets/amc.png',
}, {
    id: 4,
    title: "AC Duct Cleaning",
    description: "Thorough cleaning services to remove dust and debris from your air conditioner, improving air quality and performance.",
    icon: 'src/assets/duct-cleaning.png',
}, {
    id: 5,
    title: "Gas Refill & Replacement",
    description: "Professional replacement services for outdated or malfunctioning air conditioners, ensuring you have the best cooling solution.",
    icon: 'src/assets/gas-refil.png',
}, {
    id: 6,
    title: "Coil Cleaning",
    description: "Professional cleaning of AC coils to improve efficiency and prevent breakdowns.",
    icon: 'src/assets/cleaning.png',
}];

export const brandImages = [
    "/src/assets/brands/voltas.png",
    "/src/assets/brands/bluestar.png",
    "/src/assets/brands/lg.png",
    "/src/assets/brands/samsung.png",
    "/src/assets/brands/daikin.png",
    "/src/assets/brands/hitachi.png",
    "/src/assets/brands/panasonic.png",
    "/src/assets/brands/carrier.png",

]

export const whyToChoose = [{
    id: 1,
    icon: "/src/assets/review/tool.svg",
    title: "Qualified Experts",
    desc: "Our team consists of skilled technicians with extensive experience in repairing all types of air conditioning systems. We have the knowledge and expertise to diagnose and resolve any AC issue effectively.",
}, {
    id: 2,
    icon: "/src/assets/review/quality.svg",
    title: "Quality Service",
    desc: "We are committed to providing high-quality service and ensuring customer satisfaction. From thorough diagnostics to using genuine parts for repairs, we maintain the highest standards of quality in everything we do.",
},
{
    id: 3,
    icon: "/src/assets/review/customer.svg",
    title: "Customer Satisfaction",
    desc: "Your satisfaction is our top priority. We go above and beyond to ensure that every customer receives personalized attention and exceptional service throughout the repair process.",
}, {
    id: 4,
    icon: "/src/assets/review/cartoon.svg",
    title: "24x7 Service",
    desc: "Platinium group offers 24/7 air conditioner repair and maintenance to keep your cooling systems running smoothly. Our expert technicians provide fast, reliable service for homes and businesses. Stay cool and worry-free with our professional AC solutions!",
},];

export const testimonials = [
    {
        id: 1,
        name: "John Doe",
        position: "Home Owner",
        image: "/src/assets/profile.webp",
        review: "Platinium Group provided excellent AC repair services. Their technicians were prompt, professional, and fixed my AC quickly. Highly recommend!"
    },
    {
        id: 2,
        name: "Jane Smith",
        position: "Office Manager",
        image: "/src/assets/profile.webp",
        review: "I was impressed with the professionalism and efficiency of Platinium Group's AC repair service. They fixed my issue quickly and at a fair price."
    },
    {
        id: 3,
        name: "Mike Johnson",
        position: "Business Owner",
        image: "/src/assets/profile.webp",
        review: "Platinium Group's AC repair service exceeded my expectations. Their technicians were knowledgeable and courteous, and they got my AC up and running in no time."
    },
    {
        id: 4,
        name: "Emily Davis",
        position: "Resident",
        image: "/src/assets/profile.webp",
        review: "I had a great experience with Platinium Group. Their AC repair service was top-notch, and their team was friendly and professional. I will definitely use their services again."
    },
    {
        id: 5,
        name: "Mike Johnson",
        position: "Business Owner",
        image: "/src/assets/profile.webp",
        review: "Platinium Group's AC repair service exceeded my expectations. Their technicians were knowledgeable and courteous, and they got my AC up and running in no time."
    },
]


// Book Service Data

export const serviceByType = [
    {
        id: 1,
        type: "Split AC",
        service: [
            {
                id: 11,
                name: "Installation & Commissioning",
                price: 699,
                data: [
                    { id: 1101, title: "Site Inspection & Capacity Assessment", desc: "Checking site location and cooling capacity requirements." },
                    { id: 1102, title: "Indoor & Outdoor Unit Installation", desc: "Installing indoor and outdoor units securely." },
                    { id: 1103, title: "Copper Piping & Insulation", desc: "Installing insulated copper pipes for efficient cooling." },
                    { id: 1104, title: "Electrical & Drainage Connections", desc: "Connecting power supply and drainage system properly." },
                    { id: 1105, title: "Performance Testing & Handover", desc: "Testing cooling performance before final handover." },
                ],
            },
            {
                id: 12,
                name: "Maintenance & AMC Services",
                price: 599,
                data: [
                    { id: 1201, title: "Wet Chemical Cleaning", desc: "Deep cleaning using approved wet chemical solutions." },
                    { id: 1202, title: "Dry Chemical Cleaning", desc: "Removing grease and dust with dry chemicals." },
                    { id: 1203, title: "Filter Cleaning & Hygiene Treatment", desc: "Cleaning filters for better airflow and hygiene." },
                    { id: 1204, title: "Electrical Component Check", desc: "Inspecting wiring and internal electrical components." },
                    { id: 1205, title: "Drain Pipe Cleaning", desc: "Removing blockages from drain pipes." },
                ],
            },
            {
                id: 13,
                name: "Repair & Gas Refill Services",
                price: 799,
                data: [
                    { id: 1301, title: "Gas Top-up & Leak Detection", desc: "Detecting leaks and refilling refrigerant gas." },
                    { id: 1302, title: "Compressor Repair/Replacement", desc: "Repairing or replacing faulty compressor units." },
                    { id: 1303, title: "Fan Motor Repair/Replacement", desc: "Fixing or replacing damaged fan motors." },
                    { id: 1304, title: "PCB Board Repair/Replacement", desc: "Repairing electronic control boards professionally." },
                ],
            },
        ],
    },

    {
        id: 2,
        type: "Window AC",
        service: [
            {
                id: 21,
                name: "Installation & Commissioning",
                price: 649,
                data: [
                    { id: 2101, title: "Window Frame Preparation", desc: "Preparing window frame for stable AC installation." },
                    { id: 2102, title: "Unit Mounting", desc: "Mounting window AC unit securely." },
                    { id: 2103, title: "Electrical Connection", desc: "Connecting AC unit to safe power source." },
                    { id: 2104, title: "Water Drain Setup", desc: "Setting proper water drainage outlet." },
                    { id: 2105, title: "Operational Testing", desc: "Testing cooling and operational performance." },
                ],
            },
            {
                id: 22,
                name: "Maintenance & AMC Services",
                price: 499,
                data: [
                    { id: 2201, title: "Filter & Coil Cleaning", desc: "Cleaning filters and cooling coils thoroughly." },
                    { id: 2202, title: "Blower Cleaning", desc: "Removing dust from blower components." },
                    { id: 2203, title: "Electrical Inspection", desc: "Checking internal wiring and safety components." },
                    { id: 2204, title: "Drain Cleaning", desc: "Cleaning drain pipes to prevent leakage." },
                ],
            },
            {
                id: 23,
                name: "Repair & Gas Refill Services",
                price: 749,
                data: [
                    { id: 2301, title: "Gas Refill", desc: "Refilling refrigerant gas to optimal level." },
                    { id: 2302, title: "Compressor Repair", desc: "Repairing damaged or malfunctioning compressor." },
                    { id: 2303, title: "Fan & Motor Repair", desc: "Fixing blower fan and motor issues." },
                    { id: 2304, title: "Thermostat Repair", desc: "Repairing temperature control system accurately." },
                ],
            },
        ],
    },

    {
        id: 3,
        type: "Ducted AC",
        service: [
            {
                id: 31,
                name: "Installation & Commissioning",
                price: 2499,
                data: [
                    { id: 3101, title: "Duct Design & Planning", desc: "Designing airflow ducts for balanced cooling." },
                    { id: 3102, title: "Indoor & Outdoor Installation", desc: "Installing central units and main equipment." },
                    { id: 3103, title: "Duct Fabrication & Insulation", desc: "Fabricating insulated ducts for temperature control." },
                    { id: 3104, title: "Control System Setup", desc: "Configuring thermostats and automation systems." },
                    { id: 3105, title: "System Testing", desc: "Testing airflow pressure and cooling efficiency." },
                ],
            },
            {
                id: 32,
                name: "Maintenance & AMC Services",
                price: 1999,
                data: [
                    { id: 3201, title: "Duct Cleaning", desc: "Removing dust and debris from ducts." },
                    { id: 3202, title: "Coil Cleaning", desc: "Cleaning evaporator and condenser coils." },
                    { id: 3203, title: "Airflow Check", desc: "Balancing air distribution across all zones." },
                    { id: 3204, title: "Electrical Check", desc: "Inspecting control panels and wiring." },
                ],
            },
            {
                id: 33,
                name: "Repair & Gas Refill Services",
                price: 2999,
                data: [
                    { id: 3301, title: "Leak Detection", desc: "Detecting refrigerant leaks using advanced tools." },
                    { id: 3302, title: "Compressor Repair", desc: "Repairing high capacity central compressors." },
                    { id: 3303, title: "Control Board Repair", desc: "Fixing automation and control circuit boards." },
                    { id: 3304, title: "Gas Refill", desc: "Recharging refrigerant gas for proper cooling." },
                ],
            },
        ],
    },

    {
        id: 4,
        type: "Tower AC",
        service: [
            {
                id: 41,
                name: "Installation & Commissioning",
                price: 1299,
                data: [
                    { id: 4101, title: "Placement Planning", desc: "Selecting ideal location for tower AC unit." },
                    { id: 4102, title: "Outdoor Unit Setup", desc: "Installing condenser unit at proper location." },
                    { id: 4103, title: "Piping & Wiring", desc: "Connecting refrigerant pipes and electrical wiring." },
                    { id: 4104, title: "Stability Mounting", desc: "Ensuring stable placement without vibrations." },
                    { id: 4105, title: "Performance Testing", desc: "Testing cooling output and airflow levels." },
                ],
            },
            {
                id: 42,
                name: "Maintenance & AMC Services",
                price: 999,
                data: [
                    { id: 4201, title: "Filter Cleaning", desc: "Cleaning high capacity air filters." },
                    { id: 4202, title: "Coil Washing", desc: "Washing condenser and evaporator coils." },
                    { id: 4203, title: "Motor Inspection", desc: "Inspecting blower motor for smooth operation." },
                    { id: 4204, title: "Drain Cleaning", desc: "Removing water blockages from drain pipes." },
                ],
            },
            {
                id: 43,
                name: "Repair & Gas Refill Services",
                price: 1499,
                data: [
                    { id: 4301, title: "Gas Charging", desc: "Charging refrigerant gas to required pressure." },
                    { id: 4302, title: "Fan Repair", desc: "Repairing damaged blower fan systems." },
                    { id: 4303, title: "PCB Repair", desc: "Fixing faulty electronic control boards." },
                    { id: 4304, title: "Compressor Repair", desc: "Repairing or replacing compressor units." },
                ],
            },
        ],
    },

    {
        id: 5,
        type: "AHU",
        service: [
            {
                id: 51,
                name: "Installation & Commissioning",
                price: 3999,
                data: [
                    { id: 5101, title: "System Planning", desc: "Planning airflow layout for air handling units." },
                    { id: 5102, title: "Unit Installation", desc: "Installing industrial grade air handling systems." },
                    { id: 5103, title: "Duct & Damper Setup", desc: "Installing airflow dampers and control ducts." },
                    { id: 5104, title: "Control Panel Setup", desc: "Configuring automation and monitoring panels." },
                    { id: 5105, title: "Load Testing", desc: "Testing system performance under working load." },
                ],
            },
            {
                id: 52,
                name: "Maintenance & AMC Services",
                price: 2999,
                data: [
                    { id: 5201, title: "Filter Replacement", desc: "Replacing industrial air filters regularly." },
                    { id: 5202, title: "Coil Cleaning", desc: "Deep cleaning of cooling and heating coils." },
                    { id: 5203, title: "Bearing Lubrication", desc: "Lubricating blower bearings for smooth rotation." },
                    { id: 5204, title: "Sensor Calibration", desc: "Calibrating temperature and pressure sensors." },
                ],
            },
            {
                id: 53,
                name: "Repair & Gas Refill Services",
                price: 3499,
                data: [
                    { id: 5301, title: "Motor Repair", desc: "Repairing heavy duty blower motors." },
                    { id: 5302, title: "Valve Repair", desc: "Fixing chilled water and control valves." },
                    { id: 5303, title: "Refrigerant Charging", desc: "Charging refrigerant gas to standard levels." },
                    { id: 5304, title: "Panel Repair", desc: "Repairing automation and electrical panels." },
                ],
            },
        ],
    },

    {
        id: 6,
        type: "Cassette AC",
        service: [
            {
                id: 61,
                name: "Installation & Commissioning",
                price: 1799,
                data: [
                    { id: 6101, title: "Ceiling Inspection", desc: "Inspecting false ceiling strength and layout." },
                    { id: 6102, title: "Cassette Mounting", desc: "Mounting cassette unit inside ceiling frame." },
                    { id: 6103, title: "Drain & Wiring Setup", desc: "Connecting drainage pipes and electrical wiring." },
                    { id: 6104, title: "Panel Installation", desc: "Installing decorative front panel carefully." },
                    { id: 6105, title: "Testing & Handover", desc: "Testing airflow and cooling before handover." },
                ],
            },
            {
                id: 62,
                name: "Maintenance & AMC Services",
                price: 1399,
                data: [
                    { id: 6201, title: "Panel Cleaning", desc: "Cleaning cassette panel and air outlets." },
                    { id: 6202, title: "Coil Cleaning", desc: "Washing evaporator and condenser coils." },
                    { id: 6203, title: "Pump Cleaning", desc: "Cleaning drain pump and water outlet." },
                    { id: 6204, title: "Electrical Inspection", desc: "Checking wiring and PCB connections." },
                ],
            },
            {
                id: 63,
                name: "Repair & Gas Refill Services",
                price: 1899,
                data: [
                    { id: 6301, title: "Leak Detection", desc: "Detecting refrigerant leaks using electronic tools." },
                    { id: 6302, title: "Gas Charging", desc: "Refilling refrigerant gas to correct level." },
                    { id: 6303, title: "Drain Pump Repair", desc: "Repairing faulty water drainage pumps." },
                    { id: 6304, title: "PCB Repair", desc: "Fixing damaged electronic control boards." },
                ],
            },
        ],
    },
];

