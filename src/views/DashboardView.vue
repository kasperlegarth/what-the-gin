<template>
    <section class="dashboard">
        <h1>Dashbaord</h1>
        <article class="dashboard__form">
            <Panel headline="Add new Garnish" confirmText="Add garnish">
                <template v-slot:body>
                    <GarnishForm></GarnishForm>
                </template>
            </Panel>
        </article>
    </section>
</template>

<script>
    import Panel from '@/components/Panel.vue';
    import GarnishForm from '@/components/GarnishForm.vue';

    export default {
        name: 'Dashboard',
        components: {
            Panel,
            GarnishForm
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