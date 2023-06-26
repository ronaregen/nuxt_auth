import { defineStore } from "pinia";
export const useUser = defineStore('useUser',{
    state: () => {
        return {
            username: '',
            name: '',
            workgroup: ''
        }
    },
    persist: true
})
