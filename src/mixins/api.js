export default {
    methods: {
        $getData() {
            const headers = { "X-Master-Key": process.env.VUE_APP_MASTERKEY }
            const call = fetch(`https://api.jsonbin.io/v3/b/${process.env.VUE_APP_ENDPOINT_GIN}/latest`, { headers })
                .then(response => response.json())

            return call;
        }
    }
}