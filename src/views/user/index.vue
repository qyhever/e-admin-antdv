<template>
  <div class="com-page">
    <LayoutTable
      tableTitle="查询表格"
      :columns="columns"
      :dataSource="dataSource"
      :pagination="false"
    >
      <template #search>
        <a-form
          layout="inline"
          :model="formInline"
          @submit="handleSubmit"
          @submit.prevent
        >
          <a-form-item label="名称">
            <a-input v-model:value="formInline.user" placeholder="请输入"></a-input>
          </a-form-item>
          <a-form-item>
            <a-space>
              <a-button type="primary" html-type="submit">
                查询
              </a-button>
              <a-button>
                重置
              </a-button>
            </a-space>
          </a-form-item>
        </a-form>
      </template>
      <template #buttons>
        <a-input-search
          v-model:value="userName"
          placeholder="请输入用户名"
          enter-button
          allowClear
          @search="onSearch"
        />
      </template>
      <template #extraIcons>
        <ArrowDownOutlined />
      </template>
      <template #action="{ record }">
        <span>
          <a @click="onUpdate(record)">编辑</a>
        </span>
      </template>
    </LayoutTable>
  </div>
</template>

<script>
import LayoutTable from '@/components/layout-table'
import {
  ArrowDownOutlined
} from '@ant-design/icons-vue'
const columns = [
  {
    dataIndex: 'name',
    key: 'name',
    align: 'center',
    title: '序号'
  },
  {
    dataIndex: 'age',
    key: 'age',
    align: 'center',
    title: 'id'
  },
  {
    dataIndex: 'address',
    key: 'address',
    align: 'center',
    title: 'email'
  },
  {
    dataIndex: 'tags',
    key: 'tags',
    align: 'center',
    title: '名称'
  },
  {
    key: 'action',
    title: 'Action',
    align: 'center',
    slots: { customRender: 'action' }
  }
]

const dataSource = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer']
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser']
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher']
  }
]
export default {
  name: 'User',
  components: {
    LayoutTable,
    ArrowDownOutlined
  },
  data() {
    return {
      formInline: {
        user: '',
        password: ''
      },
      columns,
      dataSource,
      userName: ''
    }
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault()
      console.log('e', e)
      console.log(this.formInline)
    },
    onUpdate(row) {
      console.log(row)
    },
    onSearch() {
      console.log('onSearch')
    }
  }
}
</script>
