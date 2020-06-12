<template>
  <v-data-table
    :headers="headers"
    :items="list"
    class="elevation-1"
    style="width:100%"
  >
    <template v-slot:top>
      <v-snackbar v-model="snackbar" color="error">
        确认删除吗？
        <v-btn text @click="snackbar = false" dark>
          取消
        </v-btn>
        <v-btn text @click="deleteRecipe" dark>
          确定
        </v-btn>
      </v-snackbar>
      <v-toolbar flat color="white">
        <v-toolbar-title>测试列表</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on"
              >新增测试用例</v-btn
            >
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">{{ _formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      v-model="editedItem.title"
                      label="菜品名称"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-textarea
                      v-model="editedItem.description"
                      label="菜品描述"
                      filled
                    ></v-textarea>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close">取消</v-btn>
              <v-btn color="blue darken-1" text @click="save">提交</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon small class="mr-2" @click="editRecipe(item)">
        mdi-pencil
      </v-icon>
      <v-icon small @click="confirm(item)">
        mdi-delete
      </v-icon>
    </template>
  </v-data-table>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import gql from 'graphql-tag'
import { getRecipes } from '../graphql/querys'

interface Recipe {
  _id?: string
  name?: string
  description?: string
  __typename?: string
}

@Component({
  apollo: {
    list: getRecipes
  }
})
export default class Test extends Vue {
  headers = [
    {
      text: '_id',
      align: 'center',
      value: '_id',
      sortable: false
    },
    {
      text: '名称',
      align: 'center',
      value: 'title',
      sortable: false
    },
    {
      text: '操作',
      value: 'actions',
      sortable: false
    }
  ]
  list!: Recipe[]
  dialog: boolean = false
  snackbar: boolean = false
  editedIndex: number = -1
  editedItem: Recipe = {}

  get _formTitle() {
    return this.editedIndex === -1 ? '新增' : '编辑'
  }

  close() {
    this.dialog = false
    this.$nextTick(() => {
      this.editedItem = {}
      this.editedIndex = -1
    })
  }

  save() {
    const recipe = this.editedItem
    if (this.editedIndex === -1) {
      this.$apollo
        .mutate({
          mutation: gql`
            mutation($recipe: NewRecipeInput!) {
              addRecipe(newRecipeInput: $recipe) {
                _id
                title
                description
              }
            }
          `,
          variables: {
            recipe
          }
        })
        .then(data => {
          this.$apollo.queries.list.refetch()
        })
    } else {
      delete recipe.__typename
      this.$apollo
        .mutate({
          mutation: gql`
            mutation($recipe: UpdateRecipeInput!) {
              updateRecipe(updateRecipeInput: $recipe) {
                _id
                title
                description
              }
            }
          `,
          variables: {
            recipe
          }
        })
        .then(data => {
          this.$apollo.queries.list.refetch()
        })
    }
    this.close()
  }

  confirm(item: Recipe) {
    this.editedItem = item
    this.snackbar = true
  }

  editRecipe(item: Recipe) {
    this.editedIndex = this.list.indexOf(item)
    this.editedItem = Object.assign({}, item)
    this.dialog = true
  }

  deleteRecipe() {
    const id = this.editedItem._id
    this.snackbar = false
    this.$apollo
      .mutate({
        mutation: gql`
          mutation del($id: String!) {
            delRecipe(id: $id)
          }
        `,
        variables: {
          id
        }
      })
      .then(data => {
        this.$apollo.queries.list.refetch()
      })
  }
}
</script>
