<template>
    <section class="dashboard">
        <h1>Dashbaord</h1>
        <article class="dashboard__form">
            <div class="panel">
                <h2 class="panel__header">Add new Gin</h2>
                <div class="panel__body">
                    <div class="form">
                        <div class="form__group">
                            <strong class="form__group-title">Gin</strong>
                            <div class="form__group-field">
                                <input type="text" v-model="name" placeholder="Name of the gin" />
                            </div>
                        </div>
                        <div class="form__group">
                            <strong class="form__group-title">Type</strong>
                            <div class="form__group-field">
                                <input type="radio" v-model="type" id="london-dry" value="london-dry" /> <label for="london-dry">London Dry Gin</label>
                            </div>
                            <div class="form__group-field">
                                <input type="radio" v-model="type" id="dry" value="dry" /> <label for="dry">Dry Gin</label>
                            </div>
                            <div class="form__group-field">
                                <input type="radio" v-model="type" id="old-tom" value="old-tom" /> <label for="old-tom">Old Tom Gin</label>
                            </div>
                            <div class="form__group-field">
                                <input type="radio" v-model="type" id="sloe" value="sloe" /> <label for="sloe">Sloe Gin</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="panel__footer">
                    <button class="button button--main">Add Gin</button>
                </div>
            </div>
        </article>
        <aside class="dashboard__gins">
            <h2>Gin stock</h2>
        </aside>
    </section>
</template>

<script>
    export default {
        name: 'DashboardView',
        data() {
            return {
                name: "",
                type: "",
                gins: []
            }
        },
        mounted() {
            console.log(process.env.VUE_APP_KEY)
            this.$api.getGinList();
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
            flex-shrink: 0;

            @media(max-width: 1024px) {
                width: 100%;
            }
        }

        &__gins {
            width: 60%;
            min-width: 500px;

            @media(max-width: 1024px) {
                width: 100%;
                min-width: 0;
            }
        }
    }
</style>