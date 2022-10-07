<template>
  <router-link v-if="$route.name == 'dashboard'" :to="{ name: 'gin' }" class="button button--main floating-button">Gin Roulette</router-link>
  <main>
    <router-view/>
  </main>
</template>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;900&display=swap');

  $color--lucky-point: #2c2c54;
  $color--liberty: #706fd3; 
  $color--white: #fff;
  $color--swan-white: #f7f1e3;
  $color--crocodile-tooth: #d1ccc0;

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: 'Poppins', sans-serif;
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
  }

  .floating-button {
    position: fixed;
    top: 30px;
    right: 30px;
  }

  .panel {
    background-color: $color--white;
    border: solid 1px lighten($color--crocodile-tooth, 12);
    border-radius: 3px;;

    &__header {
      margin: 0;
      padding: 16px 24px;
      color: $color--liberty;
      font-size: 22px;
    }

    &__body {
      padding: 24px;
      border-top: solid 1px lighten($color--crocodile-tooth, 12);
      border-bottom: solid 1px lighten($color--crocodile-tooth, 12);
    }

    &__footer {
      padding: 24px;
      display: flex;
      justify-content: flex-end;
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

        input {
          &[type="text"] {
            display: block;
            width: 100%;
            padding: 12px;
            font-family: 'Poppins', sans-serif;
            font-size: 16px;
            border-radius: 3px;
            border: solid 1px lighten($color--crocodile-tooth, 10);
            background-color: lighten($color--crocodile-tooth, 18);

            &:focus-visible {
              outline-color: $color--liberty;
            }
          }

          &[type="radio"] {
            margin-right: 12px;
            width: 24px;
            height: 24px;
            accent-color: $color--liberty;
          }
        }
      }
    }
  }
</style>
