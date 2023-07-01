import { c as create_ssr_component, e as escape, v as validate_component, b as each } from "../../../chunks/ssr.js";
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<nav class="navbar is-fixed-top has-shadow" aria-label="main navigation" data-svelte-h="svelte-uiray4"><div id="navbarBasicExample" class="navbar-menu m-auto"><div class="navbar-brand has-text-centered m-auto"><a href="/" class="is-size-3 navbar-item has-text-weight-bold">STADIUMS</a></div> <div class="navbar-start has-text-centered m-auto"></div> <div class="navbar-end m-auto"><div class="navbar-item"><div class="buttons"><button class="button is-link is-inverted is-rounded is-size-6"><a href="/logout" class="columns is-variable is-size-5 has-text-black"><span class="icon column"><i class="fas fa-light fa-lock-open"></i></span> <p class="column">Logout</p></a></button></div></div></div></div></nav>`;
});
const PlacemarkListingCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { placemark } = $$props;
  if ($$props.placemark === void 0 && $$bindings.placemark && placemark !== void 0)
    $$bindings.placemark(placemark);
  return `<div class="column is-full"><div class="card"><div class="card-content p-4"><div class="is-flex is-justify-content-space-between"><div><span class="is-size-5">${escape(placemark.name)}</span></div> <div><span class="icon-text is-size-5">${placemark.private ? `<span class="icon column" data-svelte-h="svelte-131n4lp"><i class="fas fa-light fa-lock"></i></span> <p class="column" data-svelte-h="svelte-wjlp7m">Private</p>` : `<span class="icon column" data-svelte-h="svelte-ohnlte"><i class="fas fa-light fa-lock-open"></i></span> <p class="column" data-svelte-h="svelte-1sogioi">Public</p>`}</span></div></div></div></div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})} <section class="columns is-full mt-6 pt-5 mx-6"><div class="column is-half"><div class="columns is-full is-multiline">${data.placemarks.length ? each(data.placemarks, (placemark, index) => {
    return `${validate_component(PlacemarkListingCard, "PlacemarkListingCard").$$render($$result, { placemark }, {}, {})}`;
  }) : `<span data-svelte-h="svelte-csrtv6">No placemarks for now!</span>`}</div> <button class="is-flex button is-info is-rounded is-size-5" data-svelte-h="svelte-1s5v3z8"><p class="column has-text-white is-size-5">+ Create Placemark</p></button></div> <div class="column is-half mt-5 section is-large box" data-svelte-h="svelte-4ar4qw"></div></section>`;
});
export {
  Page as default
};
