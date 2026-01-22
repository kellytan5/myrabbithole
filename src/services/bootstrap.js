import api from '../api';
import { loadingStore } from '../stores/loading';
import { mainStore } from '../stores/main';

export async function bootstrapAppData() {
  if (mainStore.isReady) return; 

  loadingStore.isLoading = true;
  loadingStore.progress = 0;
  loadingStore.error = false;

  // track start time for real-time data-fetching progress loading feature 
  const startTime = Date.now();
  const MIN_LOADING_TIME = 1200;

  try {

    // Data fetching using bootstrap 
    const endpoints = [
      '/api/education/',
      '/api/experiences/',
      '/api/projects/',
    ]

    const results = [];

    for (let i = 0; i < endpoints.length; i++) {
      const res = await api.get(endpoints[i]);
      results.push(res.data);
      loadingStore.progress = Math.round(((i + 1) / endpoints.length) * 70); // first 70% is fetching data)
      for (let j = 0; j <= loadingStore.progress; j++) {
        await new Promise(r => setTimeout(r, 20));
      }
    }

    mainStore.setData({
      education: results[0],
      experiences: results[1],
      projects: results[2]
    })

    // fake loading
    const elapsed = Date.now() - startTime;
    const remaining = Math.max(MIN_LOADING_TIME - elapsed, 0);

    if (remaining > 0) {
      await new Promise(r => setTimeout(r, remaining));
    }
    
    for (let p = loadingStore.progress; p <= 100; p += 23) {
      loadingStore.progress = p;
      await new Promise(r => setTimeout(r, 200));
    }
  } catch (err) {
    console.error('Failed to fetch data.', err);
    loadingStore.error = true;
  } 
}
