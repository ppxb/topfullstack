import Vue from 'vue'
import Vuex from 'vuex'
import { IAdminState } from './modules/admin'
import { IPermissionState } from './modules/permission'

Vue.use(Vuex)

interface IRootStore {
  admin: IAdminState
  permission: IPermissionState
}

export default new Vuex.Store<IRootStore>({})
