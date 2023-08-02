<template>
    <div class="preview">
        <div class="preview__data">
            <h1 class="preview__data-title">Персональные данные</h1>
            <h2 v-if="store.name && store.age" class="preview__data-name"> {{ store.name }}, {{ store.age }} лет</h2>
            <h2 v-else class="preview__data-name"> Данные не введены. </h2>
        </div>
        <div class="preview__children">
            <h2 class="preview__children-title">Дети</h2>
            <div
                v-if="store.savedChildrenList.length"
                class="preview__children-child preview__data-name"
                v-for="child in store.savedChildrenList"
                :key="child.id"
            >
                {{ child.name }}, {{ child.age }} лет
            </div>
            <div
                v-else
                class="preview__data-name" 
            >
                Список детей пуст.
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import store from '@/store/store';
</script>
<style lang="css" scoped>
    .preview {
        max-width: 650px;
        width: 100%;
        align-self: center;
        height: 100%;
    }
    .preview__data {
        margin: 30px 0 60px;
        display: grid;
        grid-template-columns: 1fr;
        row-gap: 20px;
    }
    .preview__data-title {
        font-size: 16px;
        font-weight: 500;
    }
    .preview__data-name {
        font-size: 16px;
        font-weight: 700;
    }
    .preview__children {
        display: grid;
        row-gap: 20px;
    }
    .preview__children-child {
        padding: 10px 20px;
        text-align: center;
        border-radius: 5px;
        background: #F1F1F1;
        width: max-content;
    }
</style>
