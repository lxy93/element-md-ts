import { onUnmounted } from "vue"

export function useTimeout(fn: ()=> void, delay: number) {
    let timer = setTimeout(()=> {
        fn()
    },delay)
    let clear = ()=> {
        clearTimeout(timer)
    }
    onUnmounted(()=> {
        clear()
    })
    return clear
}