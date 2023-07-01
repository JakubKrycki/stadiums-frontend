import { c as create_ssr_component, a as add_attribute, v as validate_component } from "../../../chunks/ssr.js";
import { W as WelcomeHeader } from "../../../chunks/WelcomeHeader.js";
const LoginForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let email = "";
  let password = "";
  return `<form><div class="field is-size-3"><label class="label is-size-5" for="username" data-svelte-h="svelte-nw08pp">Email</label> <input class="input is-size-6 is-rounded" id="email" name="email" placeholder="Enter email" type="email"${add_attribute("value", email, 0)}></div> <div class="field"><label class="label is-size-5" for="password" data-svelte-h="svelte-vohjx5">Password</label> <input class="input is-size-6 is-rounded" id="password" name="password" placeholder="Enter Password" type="password"${add_attribute("value", password, 0)}></div> <div class="field" data-svelte-h="svelte-j2v7o"><button class="button is-link is-size-5 is-rounded">Log In</button></div></form> ${``}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(WelcomeHeader, "WelcomeNavigator").$$render($$result, {}, {}, {})} <section class="columns is-full is-vcentered is-centered"><div class="column is-three-quaters has-text-centered" data-svelte-h="svelte-4vaeef"><img alt="Chelsea London F.C. stadium" src="/stadium-background.jpeg"></div> <div class="column is-one-quater hero is-fullheight"><div class="hero-body"><div class="container"><h1 class="title is-size-3 has-text-centered" data-svelte-h="svelte-18fl0z9">Login</h1> ${validate_component(LoginForm, "LoginForm").$$render($$result, {}, {}, {})}</div></div></div></section>`;
});
export {
  Page as default
};
