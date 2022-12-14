<template>
    <section class="dashboard">
        <h1>Dashbaord</h1>
        <article class="dashboard__form">
            <div class="panel">
                <h2 class="panel__header">Add new Garnish</h2>
                <div class="panel__body">
                    <div class="form">
                        <div class="form__group">
                            <strong class="form__group-title">Garnish</strong>
                            <div class="form__group-field">
                                <input type="text" v-model="newGarnishName" placeholder="Name of the Garnish" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="panel__footer">
                    <button class="button button--main">Add Gin</button>
                </div>
            </div>
            <Panel headline="Add new Garnish" confirmText="Add garnish">
                <template v-slot:body>
                    test
                </template>
            </Panel>
        </article>
    </section>
</template>

<script>
    import Panel from '../components/Panel.vue';
    export default {
        name: 'DashboardView',
        components: {
            Panel
        },
        data() {
            return {
                garnishTypes: [],
                tonicTypes: [],
                ginTypes: [],

                newGarnishName: '',
            }
        },
        async created() {
            const response = await this.$getData();

            console.log(response.record)
        },
        methods: {

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
            margin-right: 40px;
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