<template>
    <div class="form">
        <div class="form__group">
            <strong class="form__group-title">Garnish</strong>
            <div class="form__group-field">
                <input type="text" v-model="garnishName" placeholder="Name of the Garnish" />
            </div>
        </div>
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