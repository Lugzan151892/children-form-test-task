<template>
    <div class="form">
        <div class="form__main">
            <h1 class="form__main-title">
                Персональные данные
            </h1>
            <InputComponent :value="store.name" placeholder="Имя" @input="handleNameInput" />
            <InputComponent :value="store.age" placeholder="Возраст" @input="handleAgeInput" />
        </div>
        <div class="form__children">
            <h2>Дети (макс. 5)</h2>
            <button class="form__children-btn" @click="store.addNewChild" :disabled="store.childrenList.length > 4">
                <img src="../assets/plus.svg" alt="plus">
                Добавить ребенка
            </button>
            <ChildrenListComponent class="form__children-list" />
        </div>
        <button class="form__save" @click="store.saveChildrenList"> Сохранить </button>
    </div>
</template>
<script lang="ts" setup>
    import store from '@/store/store';
    import InputComponent from '@/components/InputComponent.vue';
    import ChildrenListComponent from '@/components/ChildrenListComponent.vue';
    import { onMounted } from 'vue';

    onMounted(() => {
        store.getDataFromStorage();
        store.childrenList = store.savedChildrenList;
    });

    const handleNameInput = (val: string): void => {
        store.name = val;
    };
    const handleAgeInput = (val: string): void => {
        store.age = val;
    };
</script>
<style lang="css" scoped>
    .form {
        max-width: 650px;
        width: 100%;
        align-self: center;
        height: 100%;
    }
    .form__main {
        display: grid;
        margin: 30px 0 33px;
        grid-template-columns: 1fr;
        grid-template-rows: repeat(3, max-content);
        row-gap: 10px;
    }
    .form__main-title {
        margin-bottom: 10px;
        font-size: 16px;
        font-weight: 500;
    }
    .form__children {
        display: grid;
        grid-template-columns: 1fr max-content;
        grid-template-rows: max-content max-content;
    }
    .form__children-list {
        grid-area: 2 / 1 / 3 / 3;
    }
    .form__children-btn {
        display: grid;
        grid-template-columns: min-content max-content;
        column-gap: 4px;
        align-items: center;
        background: none;
        cursor: pointer;
        color:  #01A7FD;
        text-align: center;
        border-radius: 100px;
        border: 2px solid #01A7FD;
        padding: 10px 20px;
    }
    .form__save {
        padding: 10px 20px;
        cursor: pointer;
        border-radius: 100px;
        background: #01A7FD;
        border: none;
        color: #FFFFFF;
    }
</style>
