import { ref, type Ref } from "vue";

/**
 * @method 搜索框点击
 */
export function useToggle(initState:boolean):[Ref<boolean>,()=> void]{
    const state = ref(initState)
    const toggle = ()=> {
        state.value = !state.value
    }
    return [state,toggle]
}