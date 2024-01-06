
import { defineStore } from "pinia"
import { useFetch } from '@vueuse/core'
import { computed, ref } from 'vue'


export const useNetwork = defineStore('network', () => {

    const headerProjects = ref({})

    const getHeaderApps = computed(() => headerProjects.value.apps)

    async function fetchData() {
        const {isFetching, error , data } = await useFetch('http://localhost:9000/api/v1/main/header').get().json()
        
        headerProjects.value = data.value.response
    }

    return { headerProjects, getHeaderApps, fetchData }
})