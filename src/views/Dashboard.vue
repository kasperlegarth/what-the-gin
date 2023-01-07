<template>
    <section class="dashboard">
        <h1>Dashbaord</h1>
        <article class="dashboard__form">
            <Panel headline="Add new Garnish" @confirm="addGarnish" confirmText="Add garnish">
                <template v-slot:body>
                    <GarnishForm ref="garnishForm" :typesOfGarnish="typesOfGarnish" @newType="addNewGarnishType"></GarnishForm>
                </template>
                <template v-if="garnishError" v-slot:error>
                    <p>Test</p>
                </template>
            </Panel>
        </article>
        <article class="dashboard__form">
            <Panel headline="Add new Tonic" @confirm="addTonic" confirmText="Add tonic">
                <template v-slot:body>
                    <TonicForm ref="tonicForm" :typesOfTonic="typesOfTonic" @newType="addNewTonicType"></TonicForm>
                </template>
            </Panel>
        </article>
        <article class="dashboard__form">
            <Panel headline="Add new Gin" @confirm="addGin" confirmText="Add gin">
                <template v-slot:body>
                    <GinForm ref="ginForm" :typesOfGin="typesOfGin"></GinForm>
                </template>
            </Panel>
        </article>
    </section>
</template>

<script>
    import Panel from "@/components/Panel.vue";
    import GarnishForm from "@/components/GarnishForm.vue";
    import TonicForm from "@/components/TonicForm.vue";
    import GinForm from "@/components/GinForm.vue";

    export default {
        name: "Dashboard",
        components: {
            Panel,
            GarnishForm,
            TonicForm,
            GinForm
        },
        props: {
            gins: {
                type: Array,
                default: Array.empty
            },
            typesOfGin: {
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
                garnishError: null,
            }
        },
        methods: {
            addGarnish() {
                this.garnishError = null;

                let garnish = this.$refs.garnishForm.$data.garnishName
                let garnishType = this.$refs.garnishForm.$data.pickedGarnishType
            
                if(garnish == "") {
                    this.garnishError = ["Remember to fill out the name of the garnish"]
                }

                if(garnishType == "") {
                    if(this.garnishError == null) {
                        this.garnishError = ["Remember to pick af type of garnish"]
                    } else {
                        this.garnishError.push("Remember to pick af type of garnish")
                    }
                }

                if(garnishType != null) {
                    this.$emit('newGarnish', { name: garnish, type: garnishType })
                    this.$refs.garnishForm.reset()
                }
            },
            addNewGarnishType(payload) {
                this.$emit("newGarnishType", payload)
            },
            addTonic() {
                console.log("add tonic")
            },
            addNewTonicType(payload) {
                this.$emit("newTonicType", payload)
            },
            addGin() {
                console.log("add gin")
            }
        }
    }
</script>

<style lang="scss">
    .dashboard {
        display: flex;
        margin: 5vh auto 0;
        width: 80vw;
        justify-content: space-between;
        flex-wrap: wrap;

        h1 {
            width: 100%;
        }

        &__form {
            width: 400px;
            max-width: 30%;
            flex-shrink: 0;

            @media(max-width: 1024px) {
                width: 100%;
            }
        }

        &__gins {
            flex-grow: 1;

            @media(max-width: 1024px) {
                width: 100%;
            }
        }
    }
</style>