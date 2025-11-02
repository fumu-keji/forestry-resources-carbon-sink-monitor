import { createRouter, createWebHashHistory } from "vue-router";
// 引入模块路由

const routes = [
  {
    path: "/",
    component: () => import("@/components/singleComponent/Skeleton.vue"),
    redirect: { name: "ForestOverviewDashboard" },
    children: [
      {
        path: "ForestOverviewDashboard",
        name: "ForestOverviewDashboard",
        meta: { activeMenuIndex: ""},
        component: () => import("@/views/business/ForestOverviewDashboard/ForestOverviewDashboard.vue"),
      },
      {
        path: "CarbonAccountingDashboard",
        name: "CarbonAccountingDashboard",
        meta: { activeMenuIndex: ""},
        component: () => import("@/views/business/CarbonAccountingDashboard/CarbonAccountingDashboard.vue"),
      },
      {
        path: "DynamicMonitoringDashboard",
        name: "DynamicMonitoringDashboard",
        meta: { activeMenuIndex: ""},
        component: () => import("@/views/business/DynamicMonitoringDashboard/DynamicMonitoringDashboard.vue"),
      },
      {
        path: "DecisionAnalysisDashboard",
        name: "DecisionAnalysisDashboard",
        meta: { activeMenuIndex: ""},
        component: () => import("@/views/business/DecisionAnalysisDashboard/DecisionAnalysisDashboard.vue"),
      },

    ],
  },

];
export const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
});
