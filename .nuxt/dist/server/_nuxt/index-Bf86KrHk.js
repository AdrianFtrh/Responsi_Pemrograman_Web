import { ssrRenderStyle, ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "ufo";
import "devalue";
const _sfc_main$1 = {
  name: "HeroSection"
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css" data-v-4ecd66ca><section class="hero" data-v-4ecd66ca><div class="container" data-v-4ecd66ca><div class="main-body" data-v-4ecd66ca><div class="row gutters-sm" data-v-4ecd66ca><div class="col-md-4 mb-3" data-v-4ecd66ca><div class="card" data-v-4ecd66ca><div class="card-body" data-v-4ecd66ca><div class="d-flex flex-column align-items-center text-center" data-v-4ecd66ca><img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" class="rounded-circle" width="150" data-v-4ecd66ca><div class="mt-3" data-v-4ecd66ca><h4 data-v-4ecd66ca>Dr. Mujiyanto M.Kom</h4><p class="text-secondary mb-1" data-v-4ecd66ca>Full Stack Developer</p><p class="text-muted font-size-sm" data-v-4ecd66ca>Bay Area, San Francisco, CA</p><button class="btn btn-primary" data-v-4ecd66ca>Follow</button><button class="btn btn-outline-primary" data-v-4ecd66ca>Message</button></div></div></div></div><div class="card mt-3" data-v-4ecd66ca><ul class="list-group list-group-flush" data-v-4ecd66ca><li class="list-group-item d-flex justify-content-between align-items-center flex-wrap" data-v-4ecd66ca><h6 class="mb-0" data-v-4ecd66ca><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-globe mr-2 icon-inline" data-v-4ecd66ca><circle cx="12" cy="12" r="10" data-v-4ecd66ca></circle><line x1="2" y1="12" x2="22" y2="12" data-v-4ecd66ca></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" data-v-4ecd66ca></path></svg>Website</h6><span class="text-secondary" data-v-4ecd66ca>https://bootdey.com</span></li><li class="list-group-item d-flex justify-content-between align-items-center flex-wrap" data-v-4ecd66ca><h6 class="mb-0" data-v-4ecd66ca><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github mr-2 icon-inline" data-v-4ecd66ca><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" data-v-4ecd66ca></path></svg>Github</h6><span class="text-secondary" data-v-4ecd66ca>bootdey</span></li><li class="list-group-item d-flex justify-content-between align-items-center flex-wrap" data-v-4ecd66ca><h6 class="mb-0" data-v-4ecd66ca><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitter mr-2 icon-inline text-info" data-v-4ecd66ca><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" data-v-4ecd66ca></path></svg>Twitter</h6><span class="text-secondary" data-v-4ecd66ca>@bootdey</span></li><li class="list-group-item d-flex justify-content-between align-items-center flex-wrap" data-v-4ecd66ca><h6 class="mb-0" data-v-4ecd66ca><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram mr-2 icon-inline text-danger" data-v-4ecd66ca><rect x="2" y="2" width="20" height="20" rx="5" ry="5" data-v-4ecd66ca></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" data-v-4ecd66ca></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" data-v-4ecd66ca></line></svg>Instagram</h6><span class="text-secondary" data-v-4ecd66ca>bootdey</span></li><li class="list-group-item d-flex justify-content-between align-items-center flex-wrap" data-v-4ecd66ca><h6 class="mb-0" data-v-4ecd66ca><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-facebook mr-2 icon-inline text-primary" data-v-4ecd66ca><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" data-v-4ecd66ca></path></svg>Facebook</h6><span class="text-secondary" data-v-4ecd66ca>bootdey</span></li></ul></div></div><div class="col-md-8" data-v-4ecd66ca><div class="card mb-3" data-v-4ecd66ca><div class="card-body" data-v-4ecd66ca><div class="row" data-v-4ecd66ca><div class="col-sm-3" data-v-4ecd66ca><h6 class="mb-0" data-v-4ecd66ca>Full Name</h6></div><div class="col-sm-9 text-secondary" data-v-4ecd66ca> Kenneth Valdez </div></div><hr data-v-4ecd66ca><div class="row" data-v-4ecd66ca><div class="col-sm-3" data-v-4ecd66ca><h6 class="mb-0" data-v-4ecd66ca>Email</h6></div><div class="col-sm-9 text-secondary" data-v-4ecd66ca> fip@jukmuh.al </div></div><hr data-v-4ecd66ca><div class="row" data-v-4ecd66ca><div class="col-sm-3" data-v-4ecd66ca><h6 class="mb-0" data-v-4ecd66ca>Phone</h6></div><div class="col-sm-9 text-secondary" data-v-4ecd66ca> (239) 816-9029 </div></div><hr data-v-4ecd66ca><div class="row" data-v-4ecd66ca><div class="col-sm-3" data-v-4ecd66ca><h6 class="mb-0" data-v-4ecd66ca>Mobile</h6></div><div class="col-sm-9 text-secondary" data-v-4ecd66ca> (320) 380-4539 </div></div><hr data-v-4ecd66ca><div class="row" data-v-4ecd66ca><div class="col-sm-3" data-v-4ecd66ca><h6 class="mb-0" data-v-4ecd66ca>Address</h6></div><div class="col-sm-9 text-secondary" data-v-4ecd66ca> Bay Area, San Francisco, CA </div></div><hr data-v-4ecd66ca><div class="row" data-v-4ecd66ca></div></div></div><div class="row gutters-sm" data-v-4ecd66ca><div class="col-sm-6 mb-3" data-v-4ecd66ca><div class="card h-100" data-v-4ecd66ca><div class="card-body" data-v-4ecd66ca><h6 class="d-flex align-items-center mb-3" data-v-4ecd66ca>Project Status</h6><small data-v-4ecd66ca>Web Design</small><div class="progress mb-3" style="${ssrRenderStyle({ "height": "5px" })}" data-v-4ecd66ca><div class="progress-bar bg-primary" role="progressbar" style="${ssrRenderStyle({ "width": "80%" })}" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" data-v-4ecd66ca></div></div><small data-v-4ecd66ca>Website Markup</small><div class="progress mb-3" style="${ssrRenderStyle({ "height": "5px" })}" data-v-4ecd66ca><div class="progress-bar bg-primary" role="progressbar" style="${ssrRenderStyle({ "width": "72%" })}" aria-valuenow="72" aria-valuemin="0" aria-valuemax="100" data-v-4ecd66ca></div></div><small data-v-4ecd66ca>One Page</small><div class="progress mb-3" style="${ssrRenderStyle({ "height": "5px" })}" data-v-4ecd66ca><div class="progress-bar bg-primary" role="progressbar" style="${ssrRenderStyle({ "width": "89%" })}" aria-valuenow="89" aria-valuemin="0" aria-valuemax="100" data-v-4ecd66ca></div></div><small data-v-4ecd66ca>Mobile Template</small><div class="progress mb-3" style="${ssrRenderStyle({ "height": "5px" })}" data-v-4ecd66ca><div class="progress-bar bg-primary" role="progressbar" style="${ssrRenderStyle({ "width": "55%" })}" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100" data-v-4ecd66ca></div></div><small data-v-4ecd66ca>Backend API</small><div class="progress mb-3" style="${ssrRenderStyle({ "height": "5px" })}" data-v-4ecd66ca><div class="progress-bar bg-primary" role="progressbar" style="${ssrRenderStyle({ "width": "66%" })}" aria-valuenow="66" aria-valuemin="0" aria-valuemax="100" data-v-4ecd66ca></div></div></div></div></div><div class="col-sm-6 mb-3" data-v-4ecd66ca><div class="card h-100" data-v-4ecd66ca><div class="card-body" data-v-4ecd66ca><h6 class="d-flex align-items-center mb-3" data-v-4ecd66ca>Project Status</h6><small data-v-4ecd66ca>Web Design</small><div class="progress mb-3" style="${ssrRenderStyle({ "height": "5px" })}" data-v-4ecd66ca><div class="progress-bar bg-primary" role="progressbar" style="${ssrRenderStyle({ "width": "80%" })}" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" data-v-4ecd66ca></div></div><small data-v-4ecd66ca>Website Markup</small><div class="progress mb-3" style="${ssrRenderStyle({ "height": "5px" })}" data-v-4ecd66ca><div class="progress-bar bg-primary" role="progressbar" style="${ssrRenderStyle({ "width": "72%" })}" aria-valuenow="72" aria-valuemin="0" aria-valuemax="100" data-v-4ecd66ca></div></div><small data-v-4ecd66ca>One Page</small><div class="progress mb-3" style="${ssrRenderStyle({ "height": "5px" })}" data-v-4ecd66ca><div class="progress-bar bg-primary" role="progressbar" style="${ssrRenderStyle({ "width": "89%" })}" aria-valuenow="89" aria-valuemin="0" aria-valuemax="100" data-v-4ecd66ca></div></div><small data-v-4ecd66ca>Mobile Template</small><div class="progress mb-3" style="${ssrRenderStyle({ "height": "5px" })}" data-v-4ecd66ca><div class="progress-bar bg-primary" role="progressbar" style="${ssrRenderStyle({ "width": "55%" })}" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100" data-v-4ecd66ca></div></div><small data-v-4ecd66ca>Backend API</small><div class="progress mb-3" style="${ssrRenderStyle({ "height": "5px" })}" data-v-4ecd66ca><div class="progress-bar bg-primary" role="progressbar" style="${ssrRenderStyle({ "width": "66%" })}" aria-valuenow="66" aria-valuemin="0" aria-valuemax="100" data-v-4ecd66ca></div></div></div></div></div></div></div></div></div></div></section><!--]-->`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HeroSection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-4ecd66ca"]]);
const _sfc_main = {
  components: {
    HeroSection: __nuxt_component_0
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_HeroSection = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_HeroSection, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  index as default
};
//# sourceMappingURL=index-Bf86KrHk.js.map
