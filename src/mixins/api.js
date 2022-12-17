export default {
    methods: {
        async $getGarnish() {
            const headers = { "X-Master-Key": process.env.VUE_APP_MASTERKEY }
            let request = await fetch(`https://api.jsonbin.io/v3/b/${process.env.VUE_APP_ENDPOINT_GARNISH}/latest`, { headers })
                .then(response =>response.json())
                .catch(error => {
                    console.log(error);
                })

            return request
        },
        async $getTonic() {
            const headers = { "X-Master-Key": process.env.VUE_APP_MASTERKEY }
            let request = await fetch(`https://api.jsonbin.io/v3/b/${process.env.VUE_APP_ENDPOINT_TONIC}/latest`, { headers })
                .then(response =>response.json())
                .catch(error => {
                    console.log(error);
                })

            return request
        },
        async $getGin() {
            const headers = { "X-Master-Key": process.env.VUE_APP_MASTERKEY }
            let request = await fetch(`https://api.jsonbin.io/v3/b/${process.env.VUE_APP_ENDPOINT_GIN}/latest`, { headers })
                .then(response =>response.json())
                .catch(error => {
                    console.log(error);
                })

            return request
        }
    }
}