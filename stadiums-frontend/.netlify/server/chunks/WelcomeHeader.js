import { c as create_ssr_component } from "./ssr.js";
const WelcomeHeader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<nav class="navbar is-fixed-top has-shadow" aria-label="main navigation" data-svelte-h="svelte-u8pagd"><div id="navbarBasicExample" class="navbar-menu m-auto"><div class="navbar-brand has-text-centered m-auto"><a href="/" class="is-size-3 navbar-item has-text-weight-bold">STADIUMS</a></div> <div class="navbar-end m-auto"><div class="navbar-item"><div class="buttons"><button class="button is-link is-inverted is-rounded is-size-6"><a href="/login" class="columns is-variable is-size-5 has-text-black"><span class="icon column"><i class="fas fa-light fa-lock"></i></span> <p class="column">Login</p></a></button> <button class="button is-info is-rounded is-size-6"><a href="/register" class="columns is-variable is-size-5"><p class="column has-text-white">Register</p></a></button></div></div></div></div></nav>`;
});
export {
  WelcomeHeader as W
};
