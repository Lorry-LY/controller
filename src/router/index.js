import Vue from "vue";
import VueRouter from "vue-router";
import LoginView from "../views/LoginView.vue";
import ManageView from "../views/ManageView.vue";
import EmptyView from '../views/EmptyView.vue'

import IndexForm from "../components/company/IndexForm.vue";

import DepartForm from "../components/company/department/DepartForm.vue"
import DepartInfo from "../components/company/department/DepartInfo.vue"

import ProductForm from "../components/company/product/ProductForm.vue"
import LinkForm from "../components/company/link/LinkForm.vue"

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
    path: "/index",
    component: ManageView,
    meta: '首页',
    redirect: '/manage',
    children: [
      {
        path: "/manage",
        name: "index",
        component: IndexForm,
        meta: '首页'
      },
      {
        path: "/depart_manage",
        name: "depart_manage",
        component: DepartForm,
        meta: '部门管理'
      },
      {
        path: "/depart_info",
        name: "depart_info",
        component: DepartInfo,
        meta: '部门信息'
      },
      {
        path: "/product_info",
        name: "product_info",
        component: ProductForm,
        meta: '产品信息'
      },
      {
        path: "/link_product",
        name: "link_product",
        component: LinkForm,
        meta: '信息链'
      },
      {
        path: "/send_info",
        name: "send_info",
        component: EmptyView,
        meta: '通知'
      },
      {
        path: "/admin_set",
        name: "admin_set",
        component: EmptyView,
        meta: '管理员设置'
      },
      {
        path: "/direction",
        name: "direction",
        component: EmptyView,
        meta: '说明'
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
