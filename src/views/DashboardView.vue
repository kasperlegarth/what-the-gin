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
                    <button @click="addGin" class="button button--main">Add Gin</button>
                </div>
            </div>
        </article>
        <aside v-if="gins" class="dashboard__gins">
            <div class="panel">
                <h2 class="panel__header">Gin stock</h2>
                <div class="panel__body">
                    <GinList @listChanged="getGin" :gins="gins" />
                </div>
            </div>
        </aside>
    </section>
</template>

<script>
    import GinList from '../components/GinList.vue';

    export default {
        name: 'DashboardView',
        components: { GinList },
        data() {
            return {
                name: null,
                type: null,
                gins: null
            }
        },
        created() {
            this.getGin()
        },
        methods: {
            getGin() {
                const headers = { "X-Master-Key": this.key }
                fetch(`https://api.jsonbin.io/v3/b/${process.env.VUE_APP_ENDPOINT_GIN}/latest`, { headers })
                    .then(response => response.json())
                    .then(data => (this.gins = data.record))
            },
            addGin() {
                const newID = this.gins.length > 0 ? this.gins[this.gins.length - 1].id + 1 : 1;
                const tempGin = JSON.parse(JSON.stringify(this.gins));

                tempGin.push({ id: newID, name: this.name, type: this.type });

                const requestOptions = {
                    method: 'PUT',
                    headers: { 'X-Master-Key': this.key, 'Content-Type': 'application/json'},
                    body: JSON.stringify(tempGin)
                }
                
                fetch(`https://api.jsonbin.io/v3/b/${process.env.VUE_APP_ENDPOINT_GIN}`, requestOptions)
                    .then(response => response.json())
                    .then(() => {
                        this.getGin()
                        this.name = null;
                        this.type = null;
                    })
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