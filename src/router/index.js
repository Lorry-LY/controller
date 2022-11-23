import Vue from "vue";
import VueRouter from "vue-router";
import LoginView from "../views/LoginView.vue";
import CompanyView from "../views/CompanyView.vue";
import DepartmentView from "../views/DepartmentView.vue";
import EmptyView from '../views/EmptyView.vue'

import IndexForm from "../components/company/IndexForm.vue";

import DepartForm from "../components/company/department/DepartForm.vue"
import DepartInfo from "../components/company/department/DepartInfo.vue"

import ProductForm from "../components/company/product/ProductForm.vue"
import LinkForm from "../components/company/link/BookManage.vue"

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
    path: "/index_manage",
    component: CompanyView, 
    meta: '首页',
    redirect: '/manage',
    children: [
      {
        path: "/manage",
        component: IndexForm,
        meta: '首页'
      },
      {
        path: "/manage/depart_manage",
        component: DepartForm,
        meta: '部门管理'
      },
      {
        path: "/manage/depart_info",
        component: DepartInfo,
        meta: '部门信息'
      },
      {
        path: "/manage/product_info",
        component: ProductForm,
        meta: '产品信息'
      },
      {
        path: "/manage/link_product",
        component: LinkForm,
        meta: '信息链'
      },
      {
        path: "/manage/send_info",
        component: EmptyView,
        meta: '通知'
      },
      {
        path: "/manage/admin_set",
        component: EmptyView,
        meta: '管理员设置'
      },
      {
        path: "/manage/direction",
        component: EmptyView,
        meta: '说明'
      }
    ],
  },
  {
    path: "/index_department",
    component: DepartmentView,
    meta: '首页',
    redirect: '/department',
    children: [
      {
        path: "/department",
        component: IndexForm,
        meta: '首页'
      },
      {
        path: "/department/depart_manage",
        component: DepartForm,
        meta: '部门管理'
      },
      {
        path: "/department/depart_info",
        component: DepartInfo,
        meta: '部门信息'
      },
      {
        path: "/department/product_info",
        component: ProductForm,
        meta: '产品信息'
      },
      {
        path: "/department/link_product",
        component: LinkForm,
        meta: '信息链'
      },
      {
        path: "/department/send_info",
        component: EmptyView,
        meta: '通知'
      },
      {
        path: "/department/admin_set",
        component: EmptyView,
        meta: '管理员设置'
      },
      {
        path: "/department/direction",
        component: EmptyView,
        meta: '说明'
      }
    ],
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
