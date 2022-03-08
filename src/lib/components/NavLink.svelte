<script>

import { page } from "$app/stores";
$: isActive = $page.url.pathname === $$props.href;
</script>

<a {...$$props} class:navbar__link__active={isActive}>
    <slot />
</a>
