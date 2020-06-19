<template>
  <v-app id="keep">
    <v-app-bar app clipped-left color="amber">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <span class="title ml-3 mr-5">
        Top&nbsp;
        <span class="font-weight-light">FullStack</span>
      </span>
      <v-text-field
        solo-inverted
        flat
        hide-details
        label="Search"
        prepend-inner-icon="mdi-magnify"
      ></v-text-field>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app clipped color="grey lighten-4">
      <v-list dense class="grey lighten-4">
        <template v-for="(item, i) in items">
          <v-row v-if="item.heading" :key="i" align="center">
            <v-col cols="6">
              <v-subheader v-if="item.heading">{{ item.heading }}</v-subheader>
            </v-col>
          </v-row>
          <v-divider
            v-else-if="item.divider"
            :key="i"
            dark
            class="my-4"
          ></v-divider>
          <v-list-item
            v-else-if="hasAuth(item)"
            :key="item.text"
            link
            :to="item.path"
          >
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title class="grey--text">{{
                item.text
              }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-content>
      <v-container fluid class="grey lighten-4 fill-height">
        <router-view />
      </v-container>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { AdminModule } from '../store/modules/admin'

@Component({})
export default class Layout extends Vue {
  drawer: boolean = true
  items = [
    { icon: 'mdi-palette', text: 'Dashboard', path: '/dashboard' },
    { divider: true },
    { heading: 'Opertation' },
    {
      icon: 'mdi-radio-tower',
      text: 'Graphql',
      path: '/graphql',
      auth: ['admin']
    },
    {
      icon: 'mdi-radio-tower',
      text: 'Courses',
      path: '/graphql',
      auth: ['admin']
    },
    { divider: true },
    { heading: 'System' },
    { icon: 'mdi-cog', text: 'Settings' },
    { icon: 'mdi-police-badge', text: 'Auth' }
  ]

  hasAuth(item: any) {
    if (item.auth) {
      return AdminModule.roles.some(role => item.auth.includes(role))
    }
    return true
  }
}
</script>

<style>
#keep .v-navigation-drawer__border {
  display: none;
}
</style>
