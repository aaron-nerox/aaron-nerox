
import { defineStore } from "pinia"
import { useFetch } from '@vueuse/core'
import { ref, reactive } from 'vue'

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
    const userContact = reactive({
        name : "",
        email: "",
        message : ""
    })

    //an async function that is called before the Home component is mounted fetches all the needed data for homescreen
    async function fetchHomeData() {
        const {isHeaderLoading, headerError , data: headerData } = await useFetch(`${STAGING_URL}/main/header`).get().json()
        const {isAboutFetching, aboutError, data : aboutData } = await useFetch(`${STAGING_URL}/main/about`).get().json()
        const {isLinksFetching, linksError, data : linksData } = await useFetch(`${STAGING_URL}/main/links`).get().json()
        const {isServicesFetching, servicesError, data: servicesData} = await useFetch(`${STAGING_URL}/contribution/services`).get().json()
        const {isProductsFetching, productsError, data: productsData} = await useFetch(`${STAGING_URL}/contribution/products`).get().json()
        const {isContactsFetching, contactsError, data: contactsData} = await useFetch(`${STAGING_URL}/contacts/contactpoints`).get().json()


        headerProjects.value = headerData.value.response
        displayDescription.value = aboutData.value.response
        services.value = servicesData.value.response
        products.value = productsData.value.response
        contactPoints.value = contactsData.value.response
        socialLinks.value = linksData.value.response
    }

    async function fetchLinkHubProfile() {

    }

    async function fetchSkills() {

    }

    async function sendClientMessage() {
        //TODO: create a way to show a success toast or an error toast when the message gets sent or not
        const {isContactsFetching, contactsError, data: contactsData} = await useFetch(`${STAGING_URL}/contacts/sendForm`).json().post(userContact)
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
        fetchLinkHubProfile,
        sendClientMessage
    }
})