<template>
    <div class="form__group">
            <strong class="form__group-title">Tonic</strong>
            <div class="form__group-field">
                <input type="text" v-model="tonicName" placeholder="Name of the Tonic" />
            </div>
        </div>
        <div class="form__group">
            <strong class="form__group-title">Tonic type</strong>
            <div v-for="tonicType in typesOfTonic" class="form__group-field" :key="tonicType.id">
                <input type="radio" v-model="pickedTonicType" name="type" :value="tonicType.id" :id="tonicType.id" />
                <label :for="tonicType.id">{{ tonicType.name }}</label>
            </div>
            <div class="form__group-footer">
                <a href="#" @click.prevent="showNewType = true">Add new type</a>
                <div class="form__group-field">
                    <input v-if="showNewType" @keyup.enter="addType" type="text" class="small" placeholder="Name of new type" v-model="newType" />
                    <button v-if="showNewType" @click="addType" type="button" class="button button--main button--small">Add</button>
                </div>
            </div>
        </div>
</template>
<script>
    export default {
        name: "Tonic Form",
        emits: ["newType"],
        props: {
            tonics: {
                type: Array,
                default: Array.empty
            },
            typesOfTonic: {
                type: Array,
                default: Array.empty
            }
        },
        data() {
            return {
                showNewType: false,
                newType: "",
                tonicName: "",
                pickedTonicType: "",
            }
        },
        methods: {
            addGarnish() {
                console.log("something worked")
            },
            addType() {
                this.$emit("newType", this.newType);
                
                this.newType = "";
                this.showNewType = false;                
            }
        }
    }
</script>