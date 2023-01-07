<template>
  <aside>
    <router-link v-if="$route.name != 'dashboard'" :to="{ name: 'dashboard' }" class="button button--main floating-button">Dashboard</router-link>
    <router-link v-else :to="{ name: 'welcome' }" class="button button--main floating-button">Forside</router-link>
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
      @newTonicType="addTonicType" />
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
      const headers = { "X-Master-Key": process.env.VUE_APP_MASTERKEY }
      let request = await fetch(`https://api.jsonbin.io/v3/b/${process.env.VUE_APP_ENDPOINT_GIN}/latest`, { headers })
          .then(response =>response.json())

      this.gins = request.record.gins;
      this.typesOfGin = request.record.types;
    },
    addGin(gin) {
      console.log("Add the gin: ", gin)
    },
    addGinType(typeName) {
      console.log("Add the type: ", typeName)
    },
    async getTonic() {
      const headers = { "X-Master-Key": process.env.VUE_APP_MASTERKEY }
      let request = await fetch(`https://api.jsonbin.io/v3/b/${process.env.VUE_APP_ENDPOINT_TONIC}/latest`, { headers })
          .then(response =>response.json())

      this.tonics = request.record.tonics;
      this.typesOfTonic = request.record.types;
    },
    addTonic(tonic) {
      console.log("Add the tonic: ", tonic)
    },
    async addTonicType(typeName) {
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
        name: typeName
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
          .then(response =>response.json())

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

  body {
    margin: 0;
    font-family: "Poppins", sans-serif;
    font-size: 16px;
    background-color: $color--swan-white;
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

  .floating-button {
    position: fixed;
    top: 30px;
    right: 30px;
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

        textarea {
          padding: 12px;
          width: 100%;
          font-family: "Poppins", sans-serif;
          font-size: 16px;
          border-radius: 3px;
          border: solid 1px lighten($color--crocodile-tooth, 10);
          background-color: lighten($color--crocodile-tooth, 18);
        }

        input {
          &:not(:last-child) {
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
</style>
