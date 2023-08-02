import { reactive } from "vue";

const store = reactive({
    name: '',
    age: '',
    childrenList: [] as Array<CHILDREN.IChild>,
    savedChildrenList: [] as Array<CHILDREN.IChild>,

    addNewChild() {
        if(this.childrenList.length > 4) return;
        this.childrenList = [...this.childrenList, {id: this.childrenList.length + 1, name: '', age: ''}];
    },

    saveChildrenList() {
        this.savedChildrenList = this.childrenList;
        this.addListInStorage();
    },

    addListInStorage() {
        const localStorageData = {childrenList: this.savedChildrenList};
        localStorage.setItem('childrenList', JSON.stringify(localStorageData));
    },

    getDataFromStorage() {
        const localStorageData = localStorage.getItem('childrenList');
        if (localStorageData) {
            const data = JSON.parse(localStorageData);
            this.savedChildrenList = data.childrenList;
        } 
    }
});

export default store;
