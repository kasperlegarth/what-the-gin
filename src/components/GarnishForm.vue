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
            <div v-for="garnishType in typesOfGarnish" class="form__group-field" :key="garnishType.id">
                <input type="radio" v-model="pickedGarnishType" name="type" :value="garnishType.id" :id="garnishType.id" />
                <label :for="garnishType.id">{{ garnishType.name }}</label>
            </div>
            <div class="form__group-footer">
                <a href="#" @click.prevent="showNewType = true">Add new type</a>
                <div class="form__group-field">
                    <input v-if="showNewType" @keyup.enter="addType" type="text" class="small" placeholder="Name of new type" v-model="newType" />
                    <button v-if="showNewType" @click="addType" type="button" class="button button--main button--small">Add</button>
                </div>
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
                pickedGarnishType: '',
            }
        },
        methods: {
            addGarnish() {
                console.log('something worked')
            },
            addType() {
                this.$emit('newType', this.newType);
                
                this.newType = '';
                this.showNewType = false;                
            }
        }
    }
</script>