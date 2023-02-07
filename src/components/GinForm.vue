<template>
    <div class="form">
        <div class="form__group">
            <strong class="form__group-title">Gin</strong>
            <div class="form__group-field">
                <input type="text" v-model="ginName" placeholder="Name of the Gin" />
            </div>
            <div class="form__group-field">
                <textarea v-model="ginDescription" placeholder="Say something clever about the gin"></textarea>
            </div>
        </div>
        <div class="form__group">
            <strong class="form__group-title">Gin type</strong>
            <div v-for="ginType in typesOfGin" class="form__group-field" :key="ginType.id">
                <input type="radio" v-model="pickedGinType" name="type" :value="ginType.id" :id="ginType.id" />
                <label :for="ginType.id">{{ ginType.name }}</label>
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
        name: "Gin form",
        props: {
            garnish: {
                type: Array,
                default: Array.empty
            },
            typesOfGarnish: {
                type: Array,
                default: Array.empty
            },
            tonics: {
                type: Array,
                default: Array.empty
            },
            typesOfTonic: {
                type: Array,
                default: Array.empty
            },
            typesOfGin: {
                type: Array,
                default: Array.empty,
            }
        },
        data() {
            return {
                showNewType: false,
                newType: "",
                pickedGinType: "",
                ginName: "",
                ginDescription: ""
            }
        },
        methods: {
            addType() {
                this.$emit("newType", this.newType);
                
                this.newType = "";
                this.showNewType = false; 
            }
        }
    }
</script>