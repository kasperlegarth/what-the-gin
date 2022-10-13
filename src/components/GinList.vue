<template>
    <div class="gin-stock">
        <ul class="gin-stock__list">
            <li v-for="gin in gins" class="gin-stock__list-item" :key="gin.id">{{ gin.name }} <button @click="removeGin(gin.id)">Slet</button></li>
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
        },
        methods: {
            removeGin(id) {
                const tempGin = JSON.parse(JSON.stringify(this.gins.filter(x => x.id != id)));
                const requestOptions = {
                    method: 'PUT',
                    headers: { 'X-Master-Key': this.key, 'Content-Type': 'application/json'},
                    body: JSON.stringify(tempGin)
                }
                
                fetch(`https://api.jsonbin.io/v3/b/${process.env.VUE_APP_ENDPOINT_GIN}`, requestOptions)
                    .then(response => response.json())
                    .then(() => {
                        this.$emit('listChanged');
                    })
            }
        }
    }
</script>