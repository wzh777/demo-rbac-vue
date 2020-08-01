/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'
import userView from '@/views/table/user'
import roleView from '@/views/table/role'
import preView from '@/views/table/permissions'

const tableRouter = {
  path: '/table',
  component: Layout,
  // redirect: '/table',
  name: 'Table',
  meta: {
    title: '基础管理',
    icon: 'table'
  },
  children: [
    {
      path: '/userView',
      component: () => import('@/views/table/user'),
      name: 'user',
      meta: { title: '用户管理' }
    },
    {
      path: '/roleView',
      component: () => import('@/views/table/role'),
      name: 'role',
      meta: { title: '角色管理' }
    },
    {
      path: '/preView',
      component: () => import('@/views/table/permissions'),
      name: 'permissions',
      meta: { title: '权限管理' }
    }
  ]
}
export default tableRouter
