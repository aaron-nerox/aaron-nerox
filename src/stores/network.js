
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
    const isLoading = ref(true)
    const isFormSubmitSuccess = ref("hidden")
    const formSubmissionMessage = ref("")

    //read/write state
    const userContact = reactive({
        name : "",
        email: "",
        message : ""
    })

    //an async function that is called before the Home component is mounted fetches all the needed data for homescreen
    async function fetchHomeData() {
        const {isFetching : isHeaderLoading, headerError , data: headerData } = await useFetch(`${PRODUCTION_URL}/main/header`).get().json()
        const {isFetching : isAboutFetching, aboutError, data : aboutData } = await useFetch(`${PRODUCTION_URL}/main/about`).get().json()
        const {isFetching : isLinksFetching, linksError, data : linksData } = await useFetch(`${PRODUCTION_URL}/main/links`).get().json()
        const {isFetching : isskillsFetching, skillsError, data: skillData} = await useFetch(`${PRODUCTION_URL}/contribution/skills`).get().json()
        const {isFetching : isServicesFetching, servicesError, data: servicesData} = await useFetch(`${PRODUCTION_URL}/contribution/services`).get().json()
        const {isFetching : isProductsFetching, productsError, data: productsData} = await useFetch(`${PRODUCTION_URL}/contribution/products`).get().json()
        const {isFetching : isContactsFetching, contactsError, data: contactsData} = await useFetch(`${PRODUCTION_URL}/contacts/contactpoints`).get().json()


        headerProjects.value = headerData.value.response
        displayDescription.value = aboutData.value.response
        services.value = servicesData.value.response
        products.value = productsData.value.response
        contactPoints.value = contactsData.value.response
        socialLinks.value = linksData.value.response
        skills.value = skillData.value.response

        isLoading.value = (isHeaderLoading.value || 
        isAboutFetching.value || 
        isLinksFetching.value || 
        isServicesFetching.value || 
        isProductsFetching.value || 
        isContactsFetching.value ||
        isskillsFetching.value)
    }

    async function fetchLinkHubProfile() {

    }

    async function fetchSkills() {
        

    }

    async function sendClientMessage() {
        isFormSubmitSuccess.value = "loading"
        formSubmissionMessage.value = "👍 Sending your message now! Please wait"
        //TODO: create a way to show a success toast or an error toast when the message gets sent or not
        const {isContactsFetching, error: contactsError, data: contactsData} = await useFetch(`${PRODUCTION_URL}/contacts/sendForm`).json().post(userContact)


        if(contactsError.value) {
            formSubmissionMessage.value = "😞 Ouch an error happened, please check your info and try again."
            isFormSubmitSuccess.value = "error"
            return
        }

        if(contactsData.value.is_success) {
            formSubmissionMessage.value = "🐦 I got your message, i will be in touch with you soon."
            isFormSubmitSuccess.value = "success"
        } else {
            formSubmissionMessage.value = "😑 Ouch an error happened, please try again in a moment."
            isFormSubmitSuccess.value = "error"
        }
        
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
        isLoading,
        isFormSubmitSuccess,
        formSubmissionMessage,
        fetchHomeData,
        fetchSkills,
        fetchLinkHubProfile,
        sendClientMessage
    }
})