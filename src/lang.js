import { writable } from "svelte/store";
export let lang = writable({
    "en": {
        "BRANDNAME": "CHamedan Safar",
        "HOME_PAGE": "Home",
        "AGENCIES": "Agencies",
        "AIRLINES": "Airlines",
        "CONTACT_US": "Contact Us",
        "ABOUT_US": "About Us",
        "BLOG": "Blog",
        "SHOWMORE": "Show more"
    },
    "fa": {
        "BRANDNAME": "چمدان سفر",
        "HOME_PAGE": "خانه",
        "AGENCIES": "آژانس ها",
        "AIRLINES": "شرکت های هواپیمایی",
        "CONTACT_US": "تماس با ما",
        "ABOUT_US": "درباره ی ما",
        "BLOG": "مقاله ها",
        "SHOWMORE": "مشاهده جزعیات"
    },
    "ab": {
        "BRANDNAME": "جمدان السفر",
        "HOME_PAGE": "الصفحة الریسیسة",
        "AGENCIES": "وكالات طيران",
        "AIRLINES": "شركة طيران",
        "CONTACT_US": "اتصل بنا",
        "ABOUT_US": "معلومات عنا",
        "BLOG": "مقالات",
        "SHOWMORE": "یتصور الجزعیات"
    }
})