import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  // mode: 'history', 
  routes: [
    {
      path: '/',
      name: 'landing',
      component: () => import('./components/Landing/index.vue'),
      meta:{
        keepAlive: false
      }
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('./views/Home/index.vue'),
      meta:{
        keepAlive: true,
        title:'首页',
      }
    },
    {
      path: '/purchase',
      name: 'purchase',
      component: () => import('./views/Management/purchase.vue'),
      meta:{
        keepAlive: true,
        title:'采购管理',
      }
    },
    {
      path: '/Apply',
      name: 'Apply',
      component: () => import('./views/purchase/purchasingManagement/Apply.vue'),
      meta:{
        keepAlive: true,
        title:'申请管理',
      }
    },
    {
      path: '/query',
      name: 'query',
      component: () => import('./views/purchase/purchasingManagement/query.vue'),
      meta:{
        keepAlive: true,
        title:'申请查询',
      }
    },
    {
      path: '/OrderApply',
      name: 'OrderApply',
      component: () => import('./views/purchase/OrderManagement/OrderApply.vue'),
      meta:{
        keepAlive: true,
        title:'订单申请',
      }
    },
    {
      path: '/Orderquery',
      name: 'Orderquery',
      component: () => import('./views/purchase/OrderManagement/Orderquery.vue'),
      meta:{
        keepAlive: true,
        title:'订单查询',
      }
    },
    
    {
      path: '/Receivinggoods',
      name: 'Receivinggoods',
      component: () => import('./views/purchase/Receivinggoods/index.vue'),
      meta:{
        keepAlive: true,
        title:'收货管理',
      }
    },
    {
      path: '/warehousingApply',
      name: 'warehousingApply',
      component: () => import('./views/purchase/Warehousing/warehousingApply.vue'),
      meta:{
        keepAlive: true,
        title:'输入采购入库',
      }
    },
    {
      path: '/warehousingQuery',
      name: 'warehousingQuery',
      component: () => import('./views/purchase/Warehousing/warehousingQuery.vue'),
      meta:{
        keepAlive: true,
        title:'查询采购入库',
      }
    },
    {
      path: '/property',
      name: 'property',
      component: () => import('./views/Management/property.vue'),
      meta:{
        keepAlive: true,
        title:'资产管理',
      }
    },
    {
      path: '/Admission',
      name: 'Admission',
      component: () => import('./views/Safety/Admission.vue'),
      meta:{
        keepAlive: true,
        title:'入校登记',
      },
       },
       {
        path: '/Leavingschool',
        name: 'Leavingschool',
        component: () => import('./views/Safety/Leavingschool.vue'),
        meta:{
          keepAlive: true,
          title:'离校登记',
        },
         },
         {
          path: '/information',
          name: 'information',
          component: () => import('./views/Safety/information.vue'),
          meta:{
            keepAlive: true,
            title:'访客信息',
          },
           },
           {
            path: '/list',
            name: 'list',
            component: () => import('./views/Safety/list.vue'),
            meta:{
              keepAlive: true,
              title:'访客列表',
            },
             },
        {
          path: '/analyze',
          name: 'analyze',
          component: () => import('./views/purchase/analyze.vue'),
          meta:{
            keepAlive: true,
            title:'异情分析',
          },
        },
        {
          path: '/emergencies',
          name: 'emergencies',
          component: () => import('./views/purchase/emergencies.vue'),
          meta:{
            keepAlive: true,
            title:'应急模拟',
          },
        },
        // {
        //   path: '/entranceguard',
        //   name: 'entranceguard',
        //   component: () => import('../examples/entranceguard.vue'),
        //   meta:{
        //     keepAlive: true,
        //     title:'智慧门禁',
        //   },
        // },
        {
          path: '/monitoring',
          name: 'monitoring',
          component: () => import('./views/purchase/monitoring.vue'),
          meta:{
            keepAlive: true,
            title:'安防监控',
          },
        },
    {
      path: '/equipment',
      name: 'equipment',
      component: () => import('./views/Management/equipment.vue'),
      meta:{
        keepAlive: true,
        title:'设备运维',
      }
    },
    {
      path: '/greenshcoll',
      name: 'greenshcoll',
      component: () => import('./views/Management/greenshcoll.vue'),
      meta:{
        keepAlive: true,
        title:'绿色校园',
      }
    },
    {
      path: '/stop',
      name: 'stop',
      component: () => import('./views/Management/stop.vue'),
      meta:{
        keepAlive: true,
        title:'停车管理',
      }
    },
    {
      path: '/work',
      name: 'work',
      component: () => import('./views/Management/work.vue'),
      meta:{
        keepAlive: true,
        title:'工作场所管理',
      }
    },
    {
      path: '/demo',
      name: 'demo',
      component: () => import('../xhz/demo.vue'),
      meta:{
        keepAlive: true,
        title:'模型展示',
      }
    },
  ]
})
