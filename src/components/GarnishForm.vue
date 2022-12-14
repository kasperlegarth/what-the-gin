<template>
    <div class="form">
        <input type="text" v-model="garnishName" />
    </div>
</template>

<script>
    export default {
        name: 'Garnish Form',
        data() {
            return {
                garnishName: '',
            }
        }
    }
</script>