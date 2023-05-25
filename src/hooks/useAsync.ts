import { ref } from "vue"
import type { UnwrapRef } from 'vue'
export function useAsync<T>(asyncFn: ()=> Promise<T>, initValue: T, immediate = true) {
    const pedding = ref(false)
    const data = ref(initValue)
    const error = ref(null)
    const execute = function() {
        pedding.value = true
        error.value = null
        return asyncFn().then(res=> {
            data.value = res as UnwrapRef<T>
            pedding.value = false
        })
        .catch(err=> {
            error.value = err
            pedding.value = false
        })
    }
    if(immediate){
        execute()
    }
    return {
        pedding,
        data,
        error,
        execute,
    }
}