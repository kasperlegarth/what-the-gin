export const $api = {
    methods: {
        getGinList() {
            let req = new XMLHttpRequest();

            req.onreadystatechange = () => {
            if (req.readyState == XMLHttpRequest.DONE) {
                console.log(req.responseText);
            }
            };

            req.open("GET", `https://api.jsonbin.io/v3/b/${process.env.VUE_APP_ENDPOINT_GIN}/latest>`, true);
            req.setRequestHeader("X-Master-Key", process.env.VUE_APP_KEY);
            req.send();
        }
    }
}