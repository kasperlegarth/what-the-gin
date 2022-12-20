<template>
    <div class="form">
        <div class="form__group">
            <strong class="form__group-title">Garnish</strong>
            <div class="form__group-field">
                <input type="text" v-model="garnishName" placeholder="Name of the Garnish" />
            </div>
        </div>
        <div class="form__group">
            <strong class="form__group-title">Garnish type</strong>
            <div v-for="type in typesOfGarnish" class="form__group-field" :key="type.id">
                <input type="radio" v-model="garnishType" name="type" :value="type.id" :id="type.id" />
                <label :for="type.id">{{ type.name }}</label>
            </div>
            <div class="form__group-footer">
                <a href="#" @click.prevent="showNewType = true">Add new type</a>
                <input v-if="showNewType" @keyup.enter="addType" type="text" v-model="newType" />
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Garnish Form',
        props: {
            garnish: {
                type: Array,
                default: Array.empty
            },
            typesOfGarnish: {
                type: Array,
                default: Array.empty
            }
        },
        data() {
            return {
                showNewType: false,
                newType: '',
                garnishName: '',
                garnishType: '',
            }
        },
        methods: {
            addGarnish() {
                console.log('something worked')
            },
            addType() {
                console.log('test');
                this.newType = '';
                this.showNewType = false;
            }
        }
    }
</script>