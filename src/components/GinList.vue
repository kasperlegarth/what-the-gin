<template>
    <div class="gin-stock">
        <ul class="gin-stock__list">
            <li v-for="gin in gins" class="gin-stock__list-item" :key="gin.id">{{ gin.name }}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'GinList',
        props: {
            gins: {
                type: Array,
                default: Array
            }
        }
    }
</script>