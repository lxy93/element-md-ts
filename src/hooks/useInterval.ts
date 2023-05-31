import { onUnmounted } from "vue"

export function useInterval(fn: ()=> void, delay: number) {
    let timer = setInterval(()=> {
        fn()
    },delay)
    const clear = ()=> {
        clearInterval(timer)
    }
    onUnmounted(()=>{
        clear()
    })
    return clear
}