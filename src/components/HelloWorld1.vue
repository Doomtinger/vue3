<template>
    <div>
        <h1>{{state.count}}*2={{double}}</h1>
        <button @click="add">累加</button>
        <button @click="isOpen = true">打开</button>
        <Teleport to="#foot-container">
            <div v-if="isOpen">我是teleport</div>
        </Teleport>
    </div>
</template>
<script>
import { ref, reactive, computed } from 'vue';
export default {
    setup() {
        const isOpen = ref(false)
        const state = reactive({
            count: 1
        })
        function add () {
            state.count++
        }
        const double = computed(() => state.count*2)
        return { state, add, double, isOpen }
    }
}
</script>