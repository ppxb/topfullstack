import { authAdmin } from '@/graphql/querys'
import { getToken, removeToken, setToken } from '@/utils'
import {
  Action,
  getModule,
  Module,
  Mutation,
  VuexModule
} from 'vuex-module-decorators'
import store from '../index'

export interface IAdminState {
  roles: string[]
  token: string
}

@Module({ dynamic: true, store, name: 'admin' })
class Admin extends VuexModule implements IAdminState {
  roles: string[] = []
  token: string = getToken() || ''

  @Mutation
  private SET_TOKEN(token: string) {
    this.token = token
  }

  @Mutation
  SET_ROLES(roles: string[]) {
    this.roles = roles
  }

  @Action
  async Login(params: any) {
    const { apollo, query, router } = params
    authAdmin(apollo, query)
      .then(res => {
        const { admin, token } = res.data.auth
        setToken(token)
        this.SET_ROLES(admin.roles)
        this.SET_TOKEN(token)
        router.push('/')
      })
      .catch(e => console.log(e))
  }

  @Action
  ResetToken() {
    removeToken()
    this.SET_TOKEN('')
    location.reload()
  }
}

export const AdminModule = getModule(Admin)
