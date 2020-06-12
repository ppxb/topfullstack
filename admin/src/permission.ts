import { Route } from 'vue-router'
import router from './router'
import { AdminModule } from './store/modules/admin'
import { PermissionModule } from './store/modules/permission'

const whiteList = ['/login']

router.beforeEach(async (to: Route, _: Route, next: any) => {
  if (AdminModule.token) {
    if (to.path === '/login') {
      next({ path: '/' })
    } else {
      if (AdminModule.roles.length === 0) {
        try {
          const roles = ['admin']
          PermissionModule.generateRoutes(roles)
          router.addRoutes(PermissionModule.dynamicRoutes)
          AdminModule.SET_ROLES(roles)
          next({ ...to, replace: true })
        } catch (e) {
          AdminModule.ResetToken()
          next(`/login?redirect=${to.path}`)
        }
      } else {
        next()
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next('/login')
    }
  }
})
