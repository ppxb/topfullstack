import { authRoutes, publicRoutes } from '@/router'
import { RouteConfig } from 'vue-router'
import {
  Action,
  getModule,
  Module,
  Mutation,
  VuexModule
} from 'vuex-module-decorators'
import store from '../index'

export interface IPermissionState {
  routes: RouteConfig[]
  dynamicRoutes: RouteConfig[]
}

export const filterAsyncRoutes = (routes: RouteConfig[], roles: string[]) => {
  const res: RouteConfig[] = []

  routes.forEach(route => {
    const r = { ...route }
    if (hasPermission(r, roles)) {
      if (r.children) {
        r.children = filterAsyncRoutes(r.children, roles)
      }
      res.push(r)
    }
  })
  return res
}

const hasPermission = (route: RouteConfig, roles: string[]) => {
  if (route.meta && route.meta.auth) {
    return roles.some(role => route.meta.auth.includes(role))
  } else {
    return true
  }
}

@Module({ dynamic: true, store, name: 'permission' })
class Permission extends VuexModule implements IPermissionState {
  routes: RouteConfig[] = []
  dynamicRoutes: RouteConfig[] = []

  @Mutation
  private SET_ROUTES(routes: RouteConfig[]) {
    this.routes = publicRoutes.concat(routes)
    this.dynamicRoutes = routes
  }

  @Action
  generateRoutes(roles: string[]) {
    const authedRoutes = filterAsyncRoutes(authRoutes, roles)
    this.SET_ROUTES(authedRoutes)
  }
}

export const PermissionModule = getModule(Permission)
