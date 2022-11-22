import Vue from "vue";
import VueRouter from "vue-router";
import LoginView from "../views/LoginView.vue";
import ManageView from "../views/ManageView.vue";
import EmptyView from '../views/EmptyView.vue'

import IndexForm from "../components/company/IndexForm.vue";

import DepartForm from "../components/company/department/DepartForm.vue"
import DepartInfo from "../components/company/department/DepartInfo.vue"

import ProductForm from "../components/company/product/ProductForm.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/manage",
    component: ManageView,
    children: [
      {
        path: "/manage",
        name: "index",
        component: IndexForm,
      },
      {
        path: "/depart_manage",
        name: "depart_manage",
        component: DepartForm,
      },
      {
        path: "/depart_info",
        name: "depart_info",
        component: DepartInfo,
      },
      {
        path: "/product_add",
        name: "product_add",
        component: EmptyView,
      },
      {
        path: "/product_info",
        name: "product_info",
        component: ProductForm,
      },
      {
        path: "/link_depart",
        name: "link_depart",
        component: EmptyView,
      },
      {
        path: "/link_product",
        name: "link_product",
        component: EmptyView,
      },
      {
        path: "/send_info",
        name: "send_info",
        component: EmptyView,
      },
      {
        path: "/admin_set",
        name: "admin_set",
        component: EmptyView,
      },
      {
        path: "/direction",
        name: "direction",
        component: EmptyView,
      }
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
