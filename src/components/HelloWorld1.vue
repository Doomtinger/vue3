<template>
    <div>
        <h1>{{state.count}}*2={{double}}</h1>
        <button @click="add">累加</button>
    </div>
</template>
<script>
import { reactive, computed } from 'vue';
export default {
    setup() {
        const state = reactive({
            count: 1
        })
        function add () {
            state.count++
        }
        const double = computed(() => state.count*2)
        return { state, add, double }
    }
}
</script>