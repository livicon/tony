<script>
  import { lang, currentLang } from "$lib/cash/lang";
  let site = null;
  currentLang.subscribe((e) => (site = e));
  let toTop = () => {
    document.body.scrollIntoView({ behavior: "smooth", block: "start" });
  };
</script>

<footer class="footer">
  <div class="footer__container">
    <div class="footer__section">
      <h3 class="footer__title">{site?.QUICK}</h3>
      <ul class="footer__list">
        <li class="footer__item">
          <a href="/">{site?.HOME_PAGE}</a>
        </li>
        <li class="footer__item">
          <a href="/agencies">{site?.AGENCIES}</a>
        </li>
        <li class="footer__item">
          <a href="/airlines">{site?.AIRLINES}</a>
        </li>
        <li class="footer__item">
          <a href="/blog">{site?.BLOG}</a>
        </li>
        <li class="footer__item">
          <a href="/">{site?.ABOUT_US}</a>
        </li>
        <li class="footer__item">
          <a href="/about">{site?.CONTACT_US}</a>
        </li>
      </ul>
    </div>
    <div class="footer__section">
      <h3 class="footer__title">{site?.GUIDE}</h3>
      <ul class="footer__list">
        <li class="footer__item">
          <a href="/agencies">{site?.guide_1}</a>
        </li>
        <li class="footer__item">
          <a href="/agencies">{site?.guide_2}</a>
        </li>
        <li class="footer__item">
          <a href="/agencies">{site?.guide_3}</a>
        </li>
        <li class="footer__item">
          <a href="/agencies">{site?.guide_4}</a>
        </li>
      </ul>
    </div>
    <div class="footer__section">
      <h3 class="footer__title">chamedansafar.ir</h3>
      <ul class="footer__list">
        <li class="footer__item text-left">تلفن تماس: 4038 51 44 021</li>
        <li class="footer__item text-left">
          آدرس: مشهد، میدان گلدشت ، ساختمان چمدان سفر
        </li>
        <div class="grid grid-cols-3 gap-3">
          <div class="bg-white flex justify-center rounded-md p-1 items-center">
            <img class="footer__icon" src="/images/meli.jpg" />
          </div>
          <div class="bg-white flex justify-center rounded-md p-1 items-center">
            <img class="footer__icon" src="/images/enamad.jpg" />
          </div>
          <div class="bg-white flex justify-center rounded-md p-1 items-center">
            <img class="footer__icon" src="/images/meli.jpg" />
          </div>
        </div>
        <div class="flex gap-4 justify-center">
          <div class="footer__social__icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              viewBox="0 0 24 24"
              fill="var(--blue-color)"
              ><path
                d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
              /></svg
            >
          </div>
          <div class="footer__social__icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              fill="var(--blue-color)"
              viewBox="0 0 24 24"
              ><path
                d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"
              /></svg
            >
          </div>

          <div class="footer__social__icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              fill="var(--blue-color)"
              viewBox="0 0 24 24"
              ><path
                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
              /></svg
            >
          </div>

          <div class="footer__social__icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240"
              ><defs
                ><linearGradient id="a" x1=".667" x2=".417" y1=".167" y2=".75"
                  ><stop offset="0" stop-color="#37aee2" /><stop
                    offset="1"
                    stop-color="#1e96c8"
                  /></linearGradient
                ><linearGradient id="b" x1=".66" x2=".851" y1=".437" y2=".802"
                  ><stop offset="0" stop-color="#eff7fc" /><stop
                    offset="1"
                    stop-color="#fff"
                  /></linearGradient
                ></defs
              ><circle cx="120" cy="120" r="120" fill="url(#a)" /><path
                fill="#c8daea"
                d="M98 175c-3.888 0-3.227-1.468-4.568-5.17L82 132.207 170 80"
              /><path
                fill="#a9c9dd"
                d="M98 175c3 0 4.325-1.372 6-3l16-15.558-19.958-12.035"
              /><path
                fill="url(#b)"
                d="M100.04 144.41l48.36 35.729c5.519 3.045 9.501 1.468 10.876-5.123l19.685-92.763c2.015-8.08-3.08-11.746-8.36-9.349l-115.59 44.571c-7.89 3.165-7.843 7.567-1.438 9.528l29.663 9.259 68.673-43.325c3.242-1.966 6.218-.91 3.776 1.258"
              /></svg
            >
          </div>
        </div>
      </ul>
    </div>
  </div>

  <button
    on:click={toTop}
    class="fixed bottom-0 left-0 m-5 w-14 h-14 rounded-full bg-white shadow text-blue flex justify-center items-center"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="2"
    >
      <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" />
    </svg>
  </button>
</footer>
