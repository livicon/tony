import { writable } from "svelte/store"
export let cash = writable({
    flight: [
        {
            from: "thr",
            to: "msd",
            dates: [
                {
                    day: 21,
                    mount: 2,
                    year: 2020,
                    airlines: [
                        { name: "" }
                    ]
                }
            ]
        }
    ],
    cities: [
        {
            id: "thr",
            en: "tehran",
            fa: "تهران",
            ab: "طهران",
        }, {
            id: "msd",
            en: "mashhad",
            fa: "مشهد",
            ab: "مشهد",
        },
        {
            id: "shz",
            en: "shiraz",
            fa: "شیراز",
            ab: "شیراز",
        },
        {
            id: "rms",
            en: "ramsar",
            fa: "رامسر",
            ab: "رامسر",
        },
        {
            id: "kih",
            en: "kish",
            fa: "کیش",
            ab: "کیش",
        },
        {
            id: "dou",
            en: "doubey",
            fa: "دوبی",
            ab: "دوبی",
        },
        {
            id: "ist",
            en: "istanbul",
            fa: "استانبول",
            ab: "استانبول",
        },
        {
            id: "krm",
            en: "kermanshah",
            fa: "کرمانشاه",
            ab: "کرمانشاه",
        }
        , {
            id: "brl",
            en: "berlin",
            fa: "برلین",
            ab: "برلین",
        }
    ],
    AirLines: [

        {
            name: "Iran_Air",
            more: {
                PassengerRating: {
                    "Food": "85",
                    "Timing": "100",
                    "Personnel": "100",
                    "Clean": "95"
                },
                AnnualHundred: "",
                Revenue: "329.7 million USD (2013)",
                Founded: "May 1944",
                FleetSize: "40",
                Headquarters: ["Tehran, Iran"],
                website: "https://ebooking.iranair.com",
                iconUrl: "/images/airlines/iranair.jpg",
                "text": {
                    "en": {
                        "title": "The National Airline of Iran",
                        "content": "The National Airline of Iran, branded as Iran Air, is the flag carrier of Iran, which is headquartered at Mehrabad Airport in Tehran. As of 2018, it operates scheduled services to 71 destinations in Asia and Europe. Iran Air's main bases are Tehran International Airport and Mehrabad Airport, both situated in Tehran, the capital of Iran. Domestically, Iran Air is commonly known as Homa, which is the name of a mythical Persian griffin, and also the acronym of Iran National Airlines in the Persian language. The airline's cargo division, Iran Air Cargo, operates scheduled services internationally using one cargo aircraft."
                    },
                    "fa": {
                        "title": "شرکت هواپیمایی ملی ایران",
                        "content": "هواپیمایی ملی ایران با نام تجاری ایران ایر، حامل پرچم ایران است که مقر آن در فرودگاه مهرآباد تهران است. از سال 2018، خدمات برنامه ریزی شده را به 71 مقصد در آسیا و اروپا انجام می دهد. پایگاه های اصلی ایران ایر فرودگاه بین المللی تهران و فرودگاه مهرآباد هستند که هر دو در تهران، پایتخت ایران واقع شده اند. ایران ایر در داخل کشور عموما با نام هما که نام یک گریفین اسطوره ای ایرانی است و همچنین مخفف خطوط هوایی ایران ملی در زبان فارسی شناخته می شود. بخش بار این ایرلاین، ایران ایر کارگو، خدمات برنامه ریزی شده بین المللی را با استفاده از یک هواپیمای باری انجام می دهد."
                    }
                }
            }
        },
        {
            name: "Iran_Air_Tour",
            more:
            {
                PassengerRating: {
                    "Food": "100",
                    "Timing": "76",
                    "Personnel": "90",
                    "Clean": "100"
                },
                AnnualHundred: "",
                Revenue: "",
                Founded: "1973",
                FleetSize: "11",
                Headquarters: ["Tehran, Iran"],
                website: "http://www.iranairtour.ir/",
                iconUrl: "/images/airlines/iranairtur.jpg",
                "text": {
                    "en": {
                        "title": "Iran Airtour airline",
                        "content": "Iran Airtour is an airline based in Tehran, Iran. Iran Airtour's hubs are at Mehrabad International Airport and Mashhad International Airport. In total, the group has 11 aircraft in service. It operates scheduled domestic and international passenger service, Iran Airtours is one of IATA members in Iran and has IATA Operational Safety Audit certificate. Iran Airtour is the one of the biggest Iranian Airline which has the most flight between Iran and Turkey, and connects Iran to Istanbul where the Istanbul connected to the whole world. These cities in Iran are Tehran, Mashhad, Tabriz, Isfahan, Shiraz and Ahwaz."
                    },
                    "fa": {
                        "title": "ایران ایرتور شرکت هواپیمایی",
                        "content": "ایران ایرتور یک شرکت هواپیمایی مستقر در تهران، ایران است. هاب های ایران ایرتور در فرودگاه بین المللی مهرآباد و فرودگاه بین المللی مشهد می باشد. در مجموع، این گروه 11 هواپیما در خدمت دارد. این شرکت خدمات مسافربری داخلی و بین‌المللی برنامه‌ریزی شده را انجام می‌دهد، ایران ایرتور یکی از اعضای یاتا در ایران است و دارای گواهینامه ممیزی ایمنی عملیات یاتا است. ایران ایرتور یکی از بزرگترین ایرلاین های ایرانی است که بیشترین پرواز را بین ایران و ترکیه دارد و ایران را به استانبول وصل می کند که استانبول به تمام دنیا متصل می شود. این شهرهای ایران تهران، مشهد، تبریز، اصفهان، شیراز و اهواز هستند."
                    }
                }
            }
        },
        {
            name: "aseman_air",
            more:
            {
                PassengerRating: {
                    "Food": "100",
                    "Timing": "80",
                    "Personnel": "10",
                    "Clean": "50"
                },
                AnnualHundred: "",
                Revenue: "",
                Founded: "1970",
                FleetSize: "20",
                Headquarters: [""],
                website: "http://www.iaa.ir/",
                iconUrl: "/images/airlines/aseman.jpg",
                "text": {
                    "en": {
                        "title": "Aseman Service Company",
                        "content": "Aseman Service Company was formed in 1980 from the merger of four airlines: Air Taxi, Air, Air and Hoor Aseman. Aseman has established three flight centers in Tehran, Shiraz and Mashhad, respectively, to better cover its flight network. Each of the three centers has its own flight crew and independent maintenance hangars to attract and train indigenous specialists on daily flights of sufficient independence. Aseman Aseman was presented to the National Pension Fund in 2002. This has caused the sky to grow faster and faster. Since its establishment, Aseman has considered two important indicators, namely the development of the fleet and the development of the technical-operational capabilities of the company, and in this way has achieved important results, including those in the prestigious air assemblies of the world such as IATA. , The rate increased. Passenger transportation, expansion of the flight network, recruitment and training of specialized personnel, construction of numerous hangars and repair engineering workshops, and obtaining international certifications from reputable aviation organizations were mentioned. The latest valid certificate in this regard is called IOSA issued by IATA for the sky. Sky, like other airlines in the world, pays special attention to flight safety before any other indicator. Therefore, by creating a safety management system called SMS, it applies the latest global safety approaches in its organization and sees to provide a safe and comfortable trip for you. Sky currently has scheduled flights with 40 aircraft to 40 domestic cities and 13 foreign countries."
                    },
                    "fa": {
                        "title": "شرکت خدمات آسمان",
                        "content": "شرکت سرویس آسمان در سال 1359 از ادغام چهار شرکت هوایی ایر تاکسی ، ایر ، ایر و هور آسمان تشکیل یافت . آسمان برای پوشش هر چه بهتر شبکه پروازی خود، سه مرکز پروازی به ترتیب در تهران، شیراز و مشهد دایر شده است. هر یک از سه مرکز یاد شده، خدمه پروازی و آشیانه های تعمیر و نگهداری مستقل دارند تا از این طریق ضمن جذب و آموزش نیروی متخصص بومی پروازهای روزانه از استقلال کافی، باشند. آسمان آسمان در سال ۱۳۸۱ به صندوق بازنشستگی کشوری ارائه شد . این امر باعث شده تا آهنگ رشد و توسعه آسمان بیش از پیش فرونی شود. آسمان از بدو تاسیس تا کنون دو شاخص مهم یعنی توسعه ناوگان و توسعه توانمندی های فنی – عملیاتی شرکت را مد نظر داشته و در این راه به نتایج مهمی دست یافته است که از آن جمله می توان از آن در مجامع معتبر هوایی جهان به عنوان یاتا، نرخ افزایش یافت. جابجایی مسافر، گسترش شبکه پروازی، جذب و آموزش نیروی متخصص، ساخت آشیانه ها و کارگاه های متعدد مهندسی تعمیرات و دریافت گواهینامه های بین المللی از سازمان های معتبر هوایی اشاره کرد. آخرین گواهی معتبر در این خصوص IOSA خوانده می شود که از سوی یاتا برای آسمان صادر شده است . آسمان مانند سایر خطوط هوایی جهان به ایمنی پرواز قبل از هر شاخص دیگری توجه خاص دارد. از این رو با ایجاد سیستم مدیریت ایمنی که در اصطلاح اس.ام.اس خوانده می شود، آخرین رهیافت های ایمنی جهانی را در سازمان خود اعمال می کند و می بیند تا از این طریق سفری امن و راحت را برای شما فراهم کند. هوای آسمان هم اکنون با ۳۳ فروند هواپیما به ۴۰ شهر داخلی و ۱۳ کشور خارجی پرواز منظم برنامه ای دارد ."
                    }
                }
            }
        },
        {
            name: "Kish_Air",
            more:
            {
                PassengerRating: {
                    "Food": "50",
                    "Timing": "72",
                    "Personnel": "100",
                    "Clean": "100"
                },
                AnnualHundred: "",
                Revenue: "",
                Founded: "1989",
                FleetSize: "11",
                Headquarters: ["Tehran, Iran", "Kish, Iran, Iran"],
                website: "https://www.kishairlines.ir/",
                iconUrl: "/images/airlines/kish.jpg",
                "text": {
                    "en": {
                        "title": "What is Kish Air?",
                        "content": "Kish Airlines is an airline operating from Kish Island, Iran. It operates international, domestic and charter services as a scheduled carrier. Its main bases are Kish International Airport and Mehrabad International Airport, Tehran."
                    },
                    "fa": {
                        "title": "شرکت هواپیمایی کیش ایر",
                        "content": "هواپیمایی کیش یک شرکت هواپیمایی است که از جزیره کیش در ایران فعالیت می کند. خدمات بین المللی، داخلی و چارتر را به عنوان یک حامل برنامه ریزی شده انجام می دهد. پایگاه های اصلی آن فرودگاه بین المللی کیش و فرودگاه بین المللی مهرآباد تهران است."
                    }
                }
            }
        },
        {
            name: "Saha_Airlines",
            more:
            {
                PassengerRating: {
                    "Food": "90",
                    "Timing": "100",
                    "Personnel": "100",
                    "Clean": "100"
                },
                AnnualHundred: "",
                Revenue: "",
                Founded: "1990",
                FleetSize: "3",
                Headquarters: ["Tehran, Iran"],
                website: "http://sahaair.com/",
                iconUrl: "/images/airlines/saha.jpg",
                "text": {
                    "en": {
                        "title": "Saha Airlines",
                        "content": "The military organization was established in 1990 with the standards of the national military organization and began to provide services to the client. Saha is one of the oldest airline companies with the first history in the domestic industry. Using an experienced management team and specialized staff, the program aims to start service updates with technical and operational standards in the context of ensuring peace and security, as well as respect for the goal. One of the most significant cases of using the latest technologies in the world in the aviation industry along with young and motivated personnel to satisfy customers can be named. Simultaneous development of the country's fleet along with the growth of technical, operational and safety capabilities has been an important indicator of this airline in its goals. Continuous training in the construction and development of very important military units is one of the things that must be done to advance military goals. At present, the Saha planning team pursues goals with precise goals that either have not been serviced or, if serviced, have not been of the required quality."
                    },
                    "fa": {
                        "title": "شرکت هواپیمایی ساها",
                        "content": "هواپیمایی ساها در سال 1369 منطبق با استانداردهای سازمان هواپیمایی کشوری تاسیس و خدمات رسانی به مشتریان محترم را آغاز نمود. ساها از جمله شرکت های حمل و نقل هوایی قدیمی ، با بیشترین سابقه در صنعت هواپیمایی داخلی است. این هواپیمایی با استفاده از تیم مدیریت مجرب و کارکنان متخصص ، خدمت رسانی به مشتریان را با استاندارد های بالای فنی و عملیاتی در بستر جدیدی آغاز کرده و تضمین آرامش و امنیت و همچنین احترام به مشتری هدف قرار داده است. یکی از شاخص ترین موارد این هواپیمایی استفاده از بروز ترین تکنولوژی های دنیا در صنعت هوانوردی در کنار پرسنل جوان و با انگیزه جهت جلب رضایت مشتریان را می توان نام برد. توسعه همزمان و همسوی ناوگان هواپیمایی کشوردر کنار رشد توانمندیهای فنی و عملیاتی و ایمنی از شاخصه های مهم این ایر لاین در هدف گذاریهای خود بوده است. آموزش های مستمر کارکنان و توسعه ی زیر ساخت های عظیم هواپیمایی ساها از جمله اقداماتی است که مسئولان ذی ربط در جهت پیشبرد اهداف هواپیمایی بر میدارند. هم اکنون تیم برنامه ریزی ساها با هدف گذاری های دقیق در پی مقاصدی است که یا خدمت رسانی در آنها صورت نگرفته یا در صورت خدمت رسانی ، از کیفیت لازم برخوردار نبوده است."
                    }
                }
            }
        },
        {
            name: "Mahan_airways",
            more:
            {
                PassengerRating: {
                    "Food": "30",
                    "Timing": "40",
                    "Personnel": "60",
                    "Clean": "80"
                },
                AnnualHundred: "",
                Revenue: "",
                Founded: "1991",
                FleetSize: "54",
                Headquarters: ["Tehran, Iran"],
                website: "http://www.mahan.aero/",
                iconUrl: "/images/airlines/mahan.jpg",
                "text": {
                    "en": {
                        "title": "Mahan Airlines",
                        "content": "Mahan Airlines, operating under the name Mahan Air is a privately owned Iranian airline based in Tehran, Iran. It operates scheduled domestic services and international flights to the Far East, Middle East, Central Asia and Europe. Its main home bases are Tehran Imam Khomeini International Airport and Mehrabad International Airport."
                    },
                    "fa": {
                        "title": "شرکت هواپیمایی ماهان",
                        "content": "هواپیمایی ماهان که با نام ماهان ایر فعالیت می کند یک شرکت هواپیمایی خصوصی ایرانی است که در تهران، ایران واقع شده است. این شرکت خدمات داخلی برنامه ریزی شده و پروازهای بین المللی را به خاور دور، خاورمیانه، آسیای مرکزی و اروپا انجام می دهد. مقر اصلی آن فرودگاه بین المللی امام خمینی تهران و فرودگاه بین المللی مهرآباد است."
                    }
                }
            }
        },
        {
            name: "Karun_Airlines",
            more:
            {
                PassengerRating: {
                    "Food": "100",
                    "Timing": "100",
                    "Personnel": "100",
                    "Clean": "100"
                },
                AnnualHundred: "",
                Revenue: "",
                Founded: "1992",
                FleetSize: "10",
                Headquarters: ["Ahvaz, Iran", "Tehran, Iran"],
                website: "https://www.karunair.ir/",
                iconUrl: "/images/airlines/karun.jpg",
                "text": {
                    "en": {
                        "title": "Karun Airlines",
                        "content": "Karun Airlines (formerly Iranian Naft Airlines) is an airline based in Tehran, Iran. It operates cargo and passenger scheduled and charter services within Iran and to neighbouring regions. Its main bases are Tehran-Mehrabad and Ahvaz International Airport."
                    },
                    "fa": {
                        "title": "شرکت هواپیمایی کارون",
                        "content": "هواپیمایی کارون (ایران نفت سابق) یک شرکت هواپیمایی مستقر در تهران، ایران است. خدمات باربری و مسافری به صورت برنامه ای و چارتر در داخل ایران و مناطق همجوار انجام می دهد. مقر اصلی آن تهران – مهرآباد و فرودگاه بین المللی اهواز است."
                    }
                }
            }
        },
        {
            name: "Caspian_Airlines",
            more:
            {
                PassengerRating: {
                    "Food": "50",
                    "Timing": "60",
                    "Personnel": "90",
                    "Clean": "10"
                },
                AnnualHundred: "",
                Revenue: "",
                Founded: "1993",
                FleetSize: "10",
                Headquarters: ["Tehran, Iran"],
                website: "http://caspian.aero/",
                iconUrl: "/images/airlines/caspian.jpg",
                "text": {
                    "en": {
                        "title": "Caspian Airlines",
                        "content": "Caspian Airlines (Persian: هواپیمایی کاسپین, Hevapimaii-ye Kaspyen) is an airline headquartered in Tehran, Iran. Established in 1993, it operates services between Tehran and other major cities in Iran and international flights to Armenia, Syria, Turkey, United Arab Emirates and Ukraine. Its main base is Mehrabad International Airport, Tehran."
                    },
                    "fa": {
                        "title": "شرکت هواپیمایی کاسپین",
                        "content": "خطوط هوایی کاسپین (به فارسی: هواپیمایی کاسپین، Hevapimaii-ye Kaspyen) یک شرکت هواپیمایی است که دفتر مرکزی آن در تهران، ایران است. این شرکت که در سال 1993 تأسیس شد، خدمات بین تهران و سایر شهرهای بزرگ ایران و پروازهای بین المللی به ارمنستان، سوریه، ترکیه، امارات متحده عربی و اوکراین را انجام می دهد. پایگاه اصلی آن فرودگاه بین المللی مهرآباد تهران است."
                    }
                }
            }
        },
        {
            name: "Qeshm_Airlines",
            more:
            {
                PassengerRating: {
                    "Food": "80",
                    "Timing": "100",
                    "Personnel": "100",
                    "Clean": "100"
                },
                AnnualHundred: "",
                Revenue: "",
                Founded: "1993",
                FleetSize: "19",
                Headquarters: ["Qeshm Island, Iran"],
                website: "http://www.qeshm-air.com/",
                iconUrl: "/images/airlines/qheshm.jpg",
                "text": {
                    "en": {
                        "title": "Qeshm Air",
                        "content": "Qeshm Air is an Iranian airline; it has its headquarters in Tehran, Iran and operates scheduled domestic and international passenger services as well as charter flights. The airline was founded in 1993 as Faraz Qeshm Airline."
                    },
                    "fa": {
                        "title": "قشم ایر",
                        "content": "قشم ایر یک شرکت هواپیمایی ایرانی است. دفتر مرکزی آن در تهران، ایران است و خدمات مسافری داخلی و بین المللی و همچنین پروازهای چارتر را انجام می دهد. این شرکت هواپیمایی در سال 1993 با نام هواپیمایی فراز قشم تاسیس شد."
                    }
                }
            }
        },
        {
            name: "Taftan_Airlines",
            more:
            {
                PassengerRating: {
                    "Food": "50",
                    "Timing": "100",
                    "Personnel": "100",
                    "Clean": "75"
                },
                AnnualHundred: "",
                Revenue: "",
                Founded: "2004",
                FleetSize: "8",
                Headquarters: ["Tehran, Iran"],
                website: "http://www.taftanair.com/",
                iconUrl: "/images/airlines/taftan.jpg",
                "text": {
                    "en": {
                        "title": "Taftan Airlines",
                        "content": "Taftan Airlines is an airline from Iran. The airline was founded in 2004 and commenced operations the same year. It ceased operations in 2006 and launched again in 2014, only to cease operations the next year. For the third time, the airline launched operations in August 2016. The airline has its main hub at the Zahedan Airport."
                    },
                    "fa": {
                        "title": "شرکت هواپیمایی تفتان",
                        "content": "هواپیمایی تفتان یک شرکت هواپیمایی از ایران است. این شرکت هواپیمایی در سال 2004 تاسیس شد و در همان سال فعالیت خود را آغاز کرد. در سال 2006 فعالیت خود را متوقف کرد و دوباره در سال 2014 راه اندازی شد، اما در سال بعد فعالیت خود را متوقف کرد. این ایرلاین برای سومین بار در آگوست 2016 فعالیت خود را آغاز کرد. این ایرلاین هاب اصلی خود را در فرودگاه زاهدان دارد."
                    }
                }
            }
        }
    ]


})