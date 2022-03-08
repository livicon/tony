import { writable } from "svelte/store";
export let lang = writable({
  en: {
    BRANDNAME: "CHamedan Safar",
    HOME_PAGE: "Home",
    AGENCIES: "Agencies",
    AIRLINES: "Airlines",
    CONTACT_US: "Contact Us",
    ABOUT_US: "About Us",
    BLOG: "Blog",
    SHOWMORE: "Show more",
    GUIDE: "Guide",
    QUICK: "Quick Access",
    guide_1: 'Hotel booking guide',
    guide_2: "Ticket reservation guide",
    guide_3: "Site registration guide",
    guide_4: "Support Ticket Registration Guide",
  },
  fa: {
    BRANDNAME: "چمدان سفر",
    HOME_PAGE: "خانه",
    AGENCIES: "آژانس ها",
    AIRLINES: "شرکت های هواپیمایی",
    CONTACT_US: "تماس با ما",
    ABOUT_US: "درباره ی ما",
    BLOG: "مقاله ها",
    SHOWMORE: "مشاهده جزعیات",
    GUIDE: "راهنما",
    QUICK: "دسترسی سریع",
    guide_1: 'راهنمای رزرو هتل',
    guide_2: 'راهنمای رزرو بلیط',
    guide_3: 'راهنمای ثبت نام در سایت',
    guide_4: 'راهنمای ثبت تیکت پشتیبانی'
  },
  ab: {
    BRANDNAME: "جمدان السفر",
    HOME_PAGE: "الصفحة الریسیسة",
    AGENCIES: "وكالات طيران",
    AIRLINES: "شركة طيران",
    CONTACT_US: "اتصل بنا",
    ABOUT_US: "معلومات عنا",
    BLOG: "مقالات",
    SHOWMORE: "یتصور الجزعیات",
    GUIDE: "یرشد",
    QUICK: "وصول سریع",
    guide_1: 'دليل حجز تذکرة',
    guide_2: 'دليل حجز الفنادق',
    guide_3: 'دليل التسجيل بالموقع',
    guide_4: 'دليل تسجيل تذاكر الدعم',
  }
});

export let currentLang = writable({})