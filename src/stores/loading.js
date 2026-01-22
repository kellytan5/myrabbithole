import { reactive } from 'vue';

export const loadingStore = reactive({
  progress: 0,
  isLoading: false,
  error: false,
});