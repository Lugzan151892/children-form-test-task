<template>
    <input v-model="inputValue" class="input" type="text" :placeholder="placeholder" @input="handleInput">
</template>
<script lang="ts" setup>
    import { ref } from 'vue'
    const props = defineProps<{placeholder: string; value: string | number}>();
    const emit = defineEmits(['input']);

    const inputValue = ref(props.value);
    const handleInput = () => {
        emit('input', inputValue.value);
    }
</script>
<style lang="css" scoped>
    .input {
        height: 100%;
        min-height: 56px;
        padding: 8px 16px 0;
    }
    .input::placeholder {
        transition: 0.5s;
        margin-bottom: 8px;
        color: rgba(17, 17, 17, 0.48);
    }
    .input:focus::placeholder { 
        font-size: 13px;
        transform: translateY(-16px);
    }
</style>
