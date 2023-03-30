<template>
  <aside>
    <router-link v-if="$route.name != 'dashboard'" :to="{ name: 'dashboard' }"></router-link>
    <router-link v-else :to="{ name: 'guide' }"></router-link>
  </aside>
  <main>
    <router-view 
      :gins="gins"
      :typesOfGin="typesOfGin"
      :tonics="tonics"
      :typesOfTonic="typesOfTonic"
      :garnish="garnish"
      :typesOfGarnish="typesOfGarnish"
      @newGarnish="addGarnish"
      @newGarnishType="addGarnishType"
      @newTonicType="addTonicType"
      @newGinType="addGinType" />
  </main>
</template>

<script>
export default {
  name: "What the Gin?",
  data() {
    return {
      gins: null,
      typesOfGin: null,
      tonics: null,
      typesOfTonic: null,
      garnish: null,
      typesOfGarnish: null
    }
  },
  created() {
    this.getAllData();
  },
  methods: {
    getAllData() {
      this.getGin()
      this.getTonic()
      this.getGarnish()
    },
    async getGin() {
      const headers = { "X-Master-Key": process.env.VUE_APP_MASTERKEY, "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept" }
      let request = await fetch(`https://api.jsonbin.io/v3/b/${process.env.VUE_APP_ENDPOINT_GIN}/latest`, { headers })
          .then(response => response.json())

      this.gins = request.record.gins
      this.typesOfGin = request.record.types
    },
    addGin(gin) {
      console.log("Add the gin: ", gin)
    },
    async addGinType(typeName) {
      let newId = null;
      if(this.typesOfGin.length > 0) {
        let lastIdInArray = this.typesOfGin.at(-1).id;
        newId = lastIdInArray + 1;
      } else {
        newId = 1;
      }

      const newData = {
        types: this.typesOfGin,
        gins: this.gins
      }

      newData.types.push({
        id: newId,
        name: typeName
      })

      const options =  {
        method: "PUT",
        headers: { "X-Master-Key": process.env.VUE_APP_MASTERKEY, "Content-Type": "application/json" },
        body: JSON.stringify(newData)
      }

      await fetch(`https://api.jsonbin.io/v3/b/${process.env.VUE_APP_ENDPOINT_GIN}`, options)
        .then(response => {
          if(response.ok) {
            this.getGin()
          }
        })
    },
    async getTonic() {
      const headers = { "X-Master-Key": process.env.VUE_APP_MASTERKEY }
      let request = await fetch(`https://api.jsonbin.io/v3/b/${process.env.VUE_APP_ENDPOINT_TONIC}/latest`, { headers })
          .then(response => response.json())

      this.tonics = request.record.tonics;
      this.typesOfTonic = request.record.types;
    },
    addTonic(tonic) {
      console.log("Add the tonic: ", tonic)
    },
    async addTonicType(type) {
      let newId = null

      if(this.typesOfTonic.length > 0) {
        let lastIdInArray = this.typesOfTonic.at(-1).id;
        newId = lastIdInArray + 1
      } else {
        newId = 1
      }

      const newData = {
        types: this.typesOfTonic,
        tonics: this.tonics
      }

      newData.types.push({
        id: newId,
        name: type.name,
        description: type.description
      })

      const options = {
        method: "PUT",
        headers: { "X-Master-Key": process.env.VUE_APP_MASTERKEY, "Content-Type": "application/json" },
        body: JSON.stringify(newData)
      }

      await fetch(`https://api.jsonbin.io/v3/b/${process.env.VUE_APP_ENDPOINT_TONIC}`, options)
        .then(response => {
          if(response.ok) {
            this.getGarnish()
          }
        })
    },
    async getGarnish() {
      const headers = { "X-Master-Key": process.env.VUE_APP_MASTERKEY }
      let request = await fetch(`https://api.jsonbin.io/v3/b/${process.env.VUE_APP_ENDPOINT_GARNISH}/latest`, { headers })
          .then(response => response.json())

      this.garnish = request.record.garnish
      this.typesOfGarnish = request.record.types
    },
    async addGarnish(garnish) {
      let newId = null;

      if(this.garnish.length > 0) {
        let lastIdInArray = this.garnish.at(-1).id
        newId = lastIdInArray + 1
      } else {
        newId = 1
      }

      const newData = {
        types: this.typesOfGarnish,
        garnish: this.garnish
      }

      newData.garnish.push({
        id: newId,
        name: garnish.name,
        type: garnish.type
      })

      const options = {
        method: "PUT",
        headers: { "X-Master-Key": process.env.VUE_APP_MASTERKEY, "Content-Type": "application/json" },
        body: JSON.stringify(newData)
      }

      await fetch(`https://api.jsonbin.io/v3/b/${process.env.VUE_APP_ENDPOINT_GARNISH}`, options)
        .then(response => {
          if(response.ok) {
            this.getGarnish()
          }
        })
    },
    async addGarnishType(typeName) {
      let newId = null

      if(this.typesOfGarnish.length > 0) {
        let lastIdInArray = this.typesOfGarnish.at(-1).id
        newId = lastIdInArray + 1
      } else {
        newId = 1
      }

      const newData = {
        types: this.typesOfGarnish,
        garnish: this.garnish
      }

      newData.types.push({
        id: newId,
        name: typeName
      })

      const options = {
        method: "PUT",
        headers: { "X-Master-Key": process.env.VUE_APP_MASTERKEY, "Content-Type": "application/json" },
        body: JSON.stringify(newData)
      }

      await fetch(`https://api.jsonbin.io/v3/b/${process.env.VUE_APP_ENDPOINT_GARNISH}`, options)
        .then(response => {
          if(response.ok) {
            this.getGarnish()
          }
        })
    }
  }
}
</script>

<style lang="scss">
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;900&display=swap");

  * {
    box-sizing: border-box;
  }

  html {
    height: 100%;
  }

  body {
    margin: 0;
    height: 100%;
    font-size: 16px;
    background-color: $color--chalky;
    overflow: hidden;
  }

  h1 {
    color: $color--liberty;
    font-weight: 900;
    font-size: clamp(42px, 3.25vw, 72px);
  }

  h2,h3,h4,h5,h6,strong {
    font-weight: 600;
  }

  a {
    color: $color--liberty;
    text-decoration: none;
    font-weight: 700;
  }

  aside {
    position: absolute;
    top: 0;
    left: 0;
    width: 100px;
    height: 100px;
    z-index: 222;

    a {
      display: block;
      width: 100%;
      height: 100%;
    }
  }

  .button {
    display: inline-block;
    padding: 12px 24px;
    font-size: 18px;
    border: none;
    border-radius: 3px;
    text-decoration: none;

    &--main {
      color: $color--white;
      background-color: $color--liberty;
    }

    &--small {
      padding: 8px 12px;
      font-size: 14px;
    }
  }

  .form {
    &__group {
      $group: &;

      &-title {
        display: block;
        margin-top: 36px;
        margin-bottom: 12px;
      }

      &:first-child {
        #{$group}-title {
          margin-top: 0;
        }
      }

      &-field {
        position: relative;
        display: flex;
        margin-bottom: 4px;
        align-items: center;

        &:last-child {
          margin-bottom: 0;
        }

        &--column {
          flex-direction: column;
          align-items: flex-start;

          .small {
            margin-top: 0;
            margin-bottom: 10px;
          }
        }

        textarea {
          margin-top: 12px;
          padding: 12px;
          width: 100%;
          min-height: 125px;
          font-family: "Poppins", sans-serif;
          font-size: 16px;
          border-radius: 3px;
          border: solid 1px lighten($color--crocodile-tooth, 10);
          background-color: lighten($color--crocodile-tooth, 18);

          &.small {
              padding: 6px;
              font-size: 12px;
              min-height: 75px;
            }
        }

        input {
          &:not(:last-child):not(:nth-last-child(2)) {
            margin-bottom: 10px;
          }

          &[type="text"] {
            display: block;
            width: 100%;
            padding: 12px;
            font-family: "Poppins", sans-serif;
            font-size: 16px;
            border-radius: 3px;
            border: solid 1px lighten($color--crocodile-tooth, 10);
            background-color: lighten($color--crocodile-tooth, 18);

            &:focus-visible {
              outline-color: $color--liberty;
            }

            &.small {
              padding: 6px;
              font-size: 12px;
            }
          }

          &[type="radio"] {
            margin-right: 12px;
            width: 24px;
            height: 24px;
            accent-color: $color--liberty;
          }

          & + .button {
            margin-left: 10px;
          }
        }
      }
      &-footer {
        margin-top: 20px;

        a {
          font-size: 13px;
        }
      }
    }
  }

  @font-face {
    font-family: "Garnett";
    src: url(@/assets/fonts/Garnett-Regular.otf);
    font-weight: 400;
  }

  @font-face {
    font-family: "Garnett";
    src: url(@/assets/fonts/Garnett-Medium.otf);
    font-weight: 500;
  }
</style>
