import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
import { W as WelcomeHeader } from "../../chunks/WelcomeHeader.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(WelcomeHeader, "WelcomeHeader").$$render($$result, {}, {}, {})} <div class="columns is-vcentered is-centered mt-6 pt-6 mx-0 px-0" data-svelte-h="svelte-19o45b8"><div class="column is-four-fifths"><img alt="Chelsea London F.C. stadium" src="/stadium-background.jpeg"></div> <div class="column is-one-fifth is-vcentered is-centered"><div class="box"><div class="block"><span class="is-size-3">Hi there!</span></div> <div class="block"><span class="block is-size-4">Login or register and be a part of the community!</span></div></div></div></div>`;
});
export {
  Page as default
};
