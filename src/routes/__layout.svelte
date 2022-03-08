<script>
  import "../sass/app.scss";
  import { browser } from "$app/env";1
  import { lang, currentLang } from "../lib/cash/lang";
  import Header from "$lib/Header.svelte";
  import Footer from "$lib/Footer.svelte";
  let site = null;
  let layat = null;
  let defaultLang = "fa";
  let func = (e) => {
    sessionStorage.setItem("deflang", e.detail);
    defaultLang = sessionStorage.getItem("deflang");
    if (defaultLang !== "en") layat = "rtl";
    lang.subscribe((e) => {
      site = e[sessionStorage.getItem("deflang")];
      currentLang.update((n) => (n = e[sessionStorage.getItem("deflang")]));
    });
  };
  if (browser) {
    if (!window.sessionStorage.getItem("deflang"))
      window.sessionStorage.setItem("deflang", "en");
    lang.subscribe((e) => {
      site = e[sessionStorage.getItem("deflang")];
      currentLang.update((n) => (n = e[sessionStorage.getItem("deflang")]));
    });
  }
</script>

<section class="max-w-screen-xl mx-auto">
  <Header site={site} on:langChange={func} layat={layat} />
  <main class="my-10 px-6">
    <slot />
  </main>
</section>
<Footer />
