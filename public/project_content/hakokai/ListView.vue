<template>
  <v-container>
    <!-- Header -->
    <v-row class="mb-0">
      <p style="font-size: 0.7rem">Products > All Products</p>
    </v-row>
    <v-row class="align-center py-3">
      <v-text-field v-model="search" label="Search" prepend-inner-icon="mdi-magnify" rounded="xl" variant="solo-filled"
        single-line class="w-75"></v-text-field>
      <Inbox />
      <BellDot />
      <!-- Profile -->
      <v-row class="align-center">
        <v-avatar class="border-sm" size="x-large"></v-avatar>
        <v-col>
          <p>{{ username }}</p>
          <p>Status</p>
        </v-col>
      </v-row> <!-- end of profile row -->
    </v-row> <!-- end of title row -->
    <!-- Title + Filter Actions -->
    <v-row class="mt-0 py-3 align-center ga-10">
      <!-- Title -->
      <v-col>
        <h3>All Products</h3>
      </v-col>
      <!-- Right Side of Title -->
      <v-col>
        <v-row class="justify-end align-center">
          <!-- Showing -->
          <div class="d-flex flex-row align-center">
            <p>Showing:</p>
            <v-select v-model="itemsPerPage" class="ml-2" :items="[5, 10, 15]"></v-select>
          </div>
          <!-- New Product -->
          <NewButton label="New Item" :icon="Plus" @click="newProduct" />
        </v-row>
      </v-col>
    </v-row>
    <!-- List Component -->
    <List :headers="headers" :items="items" @row-click="openDetail" />
  </v-container>
</template>

<script setup>
import List from '../../components/List.vue'
import NewButton from '../../components/NewButton.vue'
import { ref, onMounted, onActivated } from 'vue'
import api from '../../api'
import { mapProduct } from '../../assets/utils/productMapper'
import { Inbox, BellDot, Plus, Funnel } from 'lucide-vue-next'
import { useRouter } from 'vue-router'

const router = useRouter()

const headers = [
  { title: 'Product ID', key: 'id', align: 'center', cols: "1/8", sortable: true },
  { title: 'Product Name', key: 'name', align: 'start', sortable: true },
  { title: 'Last Updated', key: 'updatedAt', align: 'start', cols: '1/6', sortable: true },
  { title: '# of Variants', key: 'numOfVariants', align: 'center', cols: '1/9', sortable: true },
  { title: 'Price', key: 'formattedPrice', align: 'center', cols: '1', sortable: true },
  { title: 'Stock', key: 'stock', align: 'center', cols: '1', sortable: true },
  { title: 'Status', key: 'status', align: 'center', cols: '1/10' },
  { title: 'Actions', key: 'action', align: 'center', cols: 1 },
]

const items = ref([])
const itemsPerPage = ref(10)
const loading = ref(false)
const error = ref('')
const search = ref('')

const openDetail = (item) => {
  router.push(`/products/${item.fullId}/`)
}

const fetchData = async () => {
  loading.value = true
  try {
    const response = await api.get('/products/')
    console.log('response: ', response.data)
    items.value = response.data.map(product => {
      try {
        return mapProduct(product)
      }
      catch (err) {
        console.log('mapProduct error:', err, product)
        return null
      }
    }).filter(Boolean)
    console.log('items: ', items.value)
  } catch (err) {
    error.value = err.response?.data?.error || 'Failed to fetch products'
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchData()
})

onActivated(() => {
  fetchData()
})

const newProduct = async () => {
  router.push("/products/new")
}
</script>

<style scoped>
:deep(.v-select .v-field) {
  height: 3.5vh !important;
  font-size: 0.75rem !important;
  background-color: #4682B4;
  color: #FFFFFF;
}

:deep(.v-select .v-field__input) {
  padding-top: 0 !important;
  padding-bottom: 0 !important;
  min-height: 3.5vh !important;
}
</style>