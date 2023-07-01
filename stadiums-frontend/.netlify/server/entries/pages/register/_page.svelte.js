import { c as create_ssr_component, a as add_attribute, v as validate_component } from "../../../chunks/ssr.js";
import { W as WelcomeHeader } from "../../../chunks/WelcomeHeader.js";
const RegisterForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let repeatedPassword = "";
  const user = {
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  };
  return `<form><div class="field is-horizontal"><div class="field-body"><div class="field"><label for="firstname" class="label is-size-5" data-svelte-h="svelte-m8h80x">First Name</label> <input id="firstname" class="input is-size-6 is-rounded" type="text" placeholder="Enter first name" name="firstName"${add_attribute("value", user.firstName, 0)}></div> <div class="field"><label for="lastname" class="label is-size-5" data-svelte-h="svelte-4dy7th">Last Name</label> <input id="lastname" class="input is-size-6 is-rounded" type="text" placeholder="Enter last name" name="lastName"${add_attribute("value", user.lastName, 0)}></div></div></div> <div class="field"><label for="email" class="label is-size-5" data-svelte-h="svelte-swjfwh">Email</label> <input id="email" class="input is-size-6 is-rounded" type="text" placeholder="Enter email" name="email"${add_attribute("value", user.email, 0)}></div> <div class="field"><label for="password" class="label is-size-5" data-svelte-h="svelte-16vbfnz">Password</label> <input id="password" class="input is-size-6 is-rounded" type="password" placeholder="Enter Password" name="password"${add_attribute("value", user.password, 0)}></div> <div class="field"><label for="repeatedPassword" class="label is-size-5" data-svelte-h="svelte-pwk5zw">Repeat password</label> <input id="repeatedPassword" class="input is-size-6 is-rounded" type="password" placeholder="Repeat Password" name="repeatedPassword"${add_attribute("value", repeatedPassword, 0)}></div> <div class="field is-grouped" data-svelte-h="svelte-9r42x0"><button class="button is-link is-size-5 is-rounded">Sign Up</button></div></form> ${``}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(WelcomeHeader, "WelcomeNavigator").$$render($$result, {}, {}, {})} <section class="columns is-full is-vcentered is-centered"><div class="column is-three-quaters has-text-centered" data-svelte-h="svelte-4vaeef"><img alt="Chelsea London F.C. stadium" src="/stadium-background.jpeg"></div> <div class="column is-one-quater hero is-fullheight"><div class="hero-body"><div class="container"><h1 class="title is-size-3 has-text-centered" data-svelte-h="svelte-18fl0z9">Login</h1> ${validate_component(RegisterForm, "RegisterForm").$$render($$result, {}, {}, {})}</div></div></div></section>`;
});
export {
  Page as default
};
