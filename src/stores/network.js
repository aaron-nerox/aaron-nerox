
import { defineStore } from "pinia"
import { useFetch } from '@vueuse/core'
import { ref } from 'vue'

import { STAGING_URL, PRODUCTION_URL } from "@/services"


export const useNetwork = defineStore('network', () => {

    //read only state
    const headerProjects = ref({})
    const displayDescription = ref({})
    const services = ref({})
    const skills = ref({})
    const products = ref({})
    const contactPoints = ref({})
    const socialLinks = ref({})
    const linkhubData = ref({})

    //read/write state
    const userContact = ref({
        name : "",
        email: "",
        message : ""
    })

    //an async function that is called before the Home component is mounted fetches all the needed data for homescreen
    async function fetchHomeData() {
        const {isHeaderLoading, headerError , data: headerData } = await useFetch(`${STAGING_URL}/main/header`).get().json()
        const {isAboutFetching, aboutError, data : aboutData } = await useFetch(`${STAGING_URL}/main/about`).get().json()

        headerProjects.value = headerData.value.response
        displayDescription.value = aboutData.value.response
    }

    async function fetchLinkHubProfile() {

    }

    async function fetchSkills() {

    }

    return { 
        headerProjects, 
        displayDescription,
        services,
        skills,
        products,
        contactPoints,
        socialLinks,
        linkhubData,
        userContact,
        fetchHomeData,
        fetchSkills,
        fetchLinkHubProfile
    }
})