export default {
    methods: {
        $getData() {
            const headers = { "X-Master-Key": process.env.VUE_APP_MASTERKEY }
            let lists = null;
            
            fetch(`https://api.jsonbin.io/v3/b/${process.env.VUE_APP_ENDPOINT_GIN}/latest`, { headers })
                .then(response => response.json())
                .then(data => lists = data.record)

                console.log(lists)

            return lists;
        }
    }
}