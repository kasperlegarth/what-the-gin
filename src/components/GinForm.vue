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
            }
        },
        data() {
            return {
                ginName: "",
                ginDescription: ""
            }
        }
    }
</script>