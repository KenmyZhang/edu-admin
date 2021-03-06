import Main from '@/components/main'
import parentView from '@/components/parent-view'

/**
 * iview-admin中meta除了原生参数外可配置的参数:
 * meta: {
 *  title: { String|Number|Function }
 *         显示在侧边栏、面包屑和标签栏的文字
 *         使用'{{ 多语言字段 }}'形式结合多语言使用，例子看多语言的路由配置;
 *         可以传入一个回调函数，参数是当前路由对象，例子看动态路由和带参路由
 *  hideInBread: (false) 设为true后此级路由将不会出现在面包屑中，示例看QQ群路由配置
 *  hideInMenu: (false) 设为true后在左侧菜单不会显示该页面选项
 *  notCache: (false) 设为true后页面在切换标签后不会缓存，如果需要缓存，无需设置这个字段，而且需要设置页面组件name属性和路由配置的name一致
 *  access: (null) 可访问该页面的权限数组，当前路由设置的权限会影响子路由
 *  icon: (-) 该页面在左侧菜单、面包屑和标签导航处显示的图标，如果是自定义图标，需要在图标名称前加下划线'_'
 *  beforeCloseName: (-) 设置该字段，则在关闭当前tab页时会去'@/router/before-close.js'里寻找该字段名对应的方法，作为关闭前的钩子函数
 * }
 */

export default [
  {
    path: '/login',
    name: 'login',
    meta: {
      title: 'Login - 登录',
      hideInMenu: true
    },
    component: () => import('@/view/login/login.vue')
  },
  {
    path: '/',
    name: '_home',
    redirect: '/home',
    component: Main,
    meta: {
      hideInMenu: true,
      notCache: true
    },
    children: [
      {
        path: '/home',
        name: 'home',
        meta: {
          hideInMenu: true,
          title: '首页',
          notCache: true,
          icon: 'md-home'
        },
        component: () => import('@/view/components/org-tree')
      }
    ]
  },
  {
    path: '/exam',
    name: 'exam_analysis',
    meta: {
      icon: 'md-menu',
      title: '考试诊断'
    },
    component: Main,
    children: [
      {
        path: 'monthly_exam',
        name: 'monthly_exam',
        meta: {
          icon: 'md-funnel',
          title: '月考'
        },
        component: () => import('@/view/multilevel/level-2-3.vue')
      },
      {
        path: 'midterm_exam',
        name: 'midterm_exam',
        meta: {
          icon: 'md-menu',
          title: '期中考'
        },
        component: () => import('@/view/components/org-tree')
      },
      {
        path: 'final_exam',
        name: 'final_exam',
        meta: {
          icon: 'md-funnel',
          title: '期末考'
        },
        component: () => import('@/view/multilevel/level-2-3.vue')
      }
    ]
  },
  {
    path: '/chemical_knowledge_point',
    name: 'chemical_knowledge_point',
    meta: {
      icon: 'md-menu',
      title: '化学知识点'
    },
    component: Main,
    children: [
      {
        path: 'knowledge_point_structure',
        name: 'knowledge_point_structure',
        meta: {
          access: ['super_admin'],
          icon: 'md-menu',
          title: '知识点结构图'
        },
        component: () => import('@/view/components/org-tree')
      },
      {
        path: 'level_2_3',
        name: 'level_2_3',
        meta: {
          icon: 'md-funnel',
          title: '二级-3'
        },
        component: () => import('@/view/multilevel/level-2-3.vue')
      }
    ]
  },
  {
    path: '/multilevel',
    name: 'chem_question_bank',
    meta: {
      icon: 'md-menu',
      title: '化学题库'
    },
    component: Main,
    children: [
      {
        path: 'level_2_2',
        name: 'knowledge_points',
        meta: {
          access: ['super_admin'],
          icon: 'md-funnel',
          showAlways: true,
          title: '知识点'
        },
        component: parentView,
        children: [
          {
            path: 'level_2_2',
            name: 'chemical_experiment_basis',
            meta: {
              icon: 'md-funnel',
              showAlways: true,
              title: '化学实验基础'
            },
            component: parentView,
            children: [
              {
                path: 'tables_page',
                name: 'basic_knowledge_of_chemical_experiments',
                meta: {
                  icon: 'md-funnel',
                  title: '化学实验基础知识'
                },
                component: () => import('@/view/components/question-tables/tables.vue')
              },
              {
                path: 'level_2_3',
                name: 'identify_typical_laboratory_equipment',
                meta: {
                  icon: 'md-funnel',
                  title: '识别典型的实验仪器装置'
                },
                component: () => import('@/view/multilevel/level-2-2/level-2-2-1.vue')
              },
              {
                path: 'level_2_3',
                name: 'separation_purification_and_inspection_of_substances',
                meta: {
                  icon: 'md-funnel',
                  title: '物质的分离、提纯和检验'
                },
                component: () => import('@/view/multilevel/level-2-2/level-2-2-1.vue')
              },
              {
                path: 'level_2_3',
                name: 'preparation_collection_and_purification_of_substances',
                meta: {
                  icon: 'md-funnel',
                  title: '物质的制备、收集和净化'
                },
                component: () => import('@/view/multilevel/level-2-2/level-2-2-1.vue')
              },
              {
                path: 'level_2_3',
                name: 'design_and_evaluation_of_chemical_experiments_experimental_research',
                meta: {
                  icon: 'md-funnel',
                  title: '化学实验的设计与评价，实验研究'
                },
                component: () => import('@/view/multilevel/level-2-2/level-2-2-1.vue')
              },
              {
                path: 'level_2_3',
                name: 'configuration_solution',
                meta: {
                  icon: 'md-funnel',
                  title: '配置溶液'
                },
                component: () => import('@/view/multilevel/level-2-2/level-2-2-1.vue')
              },
              {
                path: 'level_2_3',
                name: 'laboratory_method_for_common_gases',
                meta: {
                  icon: 'md-funnel',
                  title: '常见气体的实验室制法'
                },
                component: () => import('@/view/multilevel/level-2-2/level-2-2-1.vue')
              },
              {
                path: 'level_2_3',
                name: 'discrimination_of_substances_in_chemical_experiments',
                meta: {
                  icon: 'md-funnel',
                  title: '化学实验中物质的判别'
                },
                component: () => import('@/view/multilevel/level-2-2/level-2-2-1.vue')
              }
            ]
          },
          {
            path: 'level_2_2_2',
            name: 'chemical_calculation',
            meta: {
              icon: 'md-funnel',
              title: '化学计算'
            },
            component: () => import('@/view/multilevel/level-2-2/level-2-2-2.vue')
          },
          {
            path: 'level_2_2_1',
            name: 'basic_concept_of_chemistry',
            meta: {
              icon: 'md-funnel',
              title: '化学的基本概念'
            },
            component: () => import('@/view/multilevel/level-2-2/level-2-2-1.vue')
          },
          {
            path: 'level_2_2_1',
            name: 'structure_and_nature_of_matter',
            meta: {
              icon: 'md-funnel',
              title: '物质的结构与性质'
            },
            component: () => import('@/view/multilevel/level-2-2/level-2-2-1.vue')
          },
          {
            path: 'level_2_2_2',
            name: 'important_inorganic_matter',
            meta: {
              icon: 'md-funnel',
              title: '重要的无机物'
            },
            component: () => import('@/view/multilevel/level-2-2/level-2-2-2.vue')
          },
          {
            path: 'level_2_2_1',
            name: 'common_organic_matter_and_its_application',
            meta: {
              icon: 'md-funnel',
              title: '常见的有机物及其应用'
            },
            component: () => import('@/view/multilevel/level-2-2/level-2-2-1.vue')
          },
          {
            path: 'level_2_2_1',
            name: 'principle_of_chemical_reaction',
            meta: {
              icon: 'md-funnel',
              title: '化学反应原理'
            },
            component: () => import('@/view/multilevel/level-2-2/level-2-2-1.vue')
          },
          {
            path: 'level_2_2_2',
            name: 'chemistry_and_life_and_technology',
            meta: {
              icon: 'md-funnel',
              title: '化学与生活和技术'
            },
            component: () => import('@/view/multilevel/level-2-2/level-2-2-2.vue')
          },
          {
            path: 'level_2_2_1',
            name: 'organic_chemistry_foundation',
            meta: {
              icon: 'md-funnel',
              title: '有机化学基础'
            },
            component: () => import('@/view/multilevel/level-2-2/level-2-2-1.vue')
          }
        ]
      },
      {
        path: 'level_2_2',
        name: 'question_type',
        meta: {
          access: ['super_admin'],
          icon: 'md-funnel',
          showAlways: true,
          title: '题型'
        },
        component: parentView,
        children: [
          {
            path: 'level_2_2_1',
            name: 'single_choice',
            meta: {
              icon: 'md-funnel',
              title: '单选题'
            },
            component: () => import('@/view/multilevel/level-2-2/level-2-2-1.vue')
          },
          {
            path: 'level_2_2_2',
            name: 'multiple_choices',
            meta: {
              icon: 'md-funnel',
              title: '多选题'
            },
            component: () => import('@/view/multilevel/level-2-2/level-2-2-2.vue')
          },
          {
            path: 'level_2_2_1',
            name: 'non_choice',
            meta: {
              icon: 'md-funnel',
              title: '非选择题'
            },
            component: () => import('@/view/multilevel/level-2-2/level-2-2-1.vue')
          }
        ]
      }
    ]
  },
  {
    path: '/argu',
    name: 'argu',
    meta: {
      hideInMenu: true
    },
    component: Main,
    children: [
      {
        path: 'params/:id',
        name: 'params',
        meta: {
          icon: 'md-flower',
          title: route => `{{ params }}-${route.params.id}`,
          notCache: true,
          beforeCloseName: 'before_close_normal'
        },
        component: () => import('@/view/argu-page/params.vue')
      },
      {
        path: 'query',
        name: 'query',
        meta: {
          icon: 'md-flower',
          title: route => `{{ query }}-${route.query.id}`,
          notCache: true
        },
        component: () => import('@/view/argu-page/query.vue')
      }
    ]
  },
  {
    path: '/401',
    name: 'error_401',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/401.vue')
  },
  {
    path: '/500',
    name: 'error_500',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/500.vue')
  },
  {
    path: '*',
    name: 'error_404',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/404.vue')
  }
]
