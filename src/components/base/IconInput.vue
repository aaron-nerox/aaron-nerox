<script setup>
import { shallowRef, watchEffect, defineAsyncComponent } from 'vue'


const props = defineProps(["modelValue", "src", "placeholder", "type"])
defineEmits(["update:modelValue"])

const icon = shallowRef()

watchEffect(async ()=>{
    // (await import(`../../assets/icons/${props.src}.vue`)).default
    icon.value =  defineAsyncComponent(()=> import(/* @vite-ignore */`../../assets/icons/vue/${props.src}.vue`))
})

</script>

<template>
    <div class="p-4 inline-flex flex-row items-center bg-dark-70 border-dark-50 border-2">
        <div>
            <icon
            class="w-5 h-5 fill-white stroke-white mr-3"
                alt="input icon"
            />
        </div>
        <input 
            :type="type"
            :placeholder="placeholder"
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
            class="w-full bg-transparent outline-none text-white font-normal placeholder-dark-50 text-sm"
        />
    </div>
</template>