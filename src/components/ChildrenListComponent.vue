<template >
    <div class="children">
        <div class="children__container" v-for="child in children">
            <InputComponent :value="child.name" placeholder="Имя" @input="(e) => handleCurrentChild(e, child, 'name')"/>
            <InputComponent :value="child.age" placeholder="Возраст" @input="(e) => handleCurrentChild(e, child, 'age')"/>
            <button class="children__container-delete" @click="handleDeleteChild(child)"> Удалить </button>
        </div>
    </div>
</template>
<script lang="ts" setup>
    import store from '@/store/store';
    import { computed } from 'vue';
    import InputComponent from './InputComponent.vue';

    const children = computed((): Array<CHILDREN.IChild> => {
        return store.childrenList;
    });

    const handleCurrentChild = (val: string | number, child: CHILDREN.IChild, type: 'age' | 'name') => {
        store.childrenList = store.childrenList.map((item) => {
            if (item.id === child.id) {
                return { ...item, ...(type === 'age' && { age: String(val) }), ...(type === 'name' && { name: String(val) }) }
            } else  return item;
        });
    }

    const handleDeleteChild = (child: CHILDREN.IChild) => {
        store.childrenList = store.childrenList.filter((item) => child.id !== item.id);
    }

</script>
<style lang="css" scoped>
    .children {
        width: 100%;
        margin-top: 10px;
    }
    .children__container {
        display: grid;
        grid-template-columns: 1fr 1fr max-content;
        column-gap: 18px;
        margin-bottom: 10px;
    }
    .children__container-delete {
        cursor: pointer;
        background: none;
        border: none;
        color: #01A7FD;
    }
</style>
