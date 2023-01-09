<template>
  <div class="figure">
      <svg class="body" viewBox="0 0 1079 1440" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M-601.853 1827.16C-1349.69 1415.69 -1356.97 841.37 -1183.22 439.961C-993.433 1.51337 -584.273 -383.323 -107.513 -380.774C768.878 -376.077 1226.78 502.328 1029.15 1211.65C917.969 1610.74 -33.2031 2139.97 -601.853 1827.13V1827.16Z" fill="#4CA886" stroke="black" stroke-width="7" stroke-miterlimit="10"/>
      </svg>

      <div class="face">
        <div class="eye eye--left"></div>
        <div class="eye eye--right"></div>

        <svg class="mouth" viewBox="0 0 83 34" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M79.028 4.26442C62.9547 29.8343 29.1911 37.54 3.62122 21.4666" stroke="black" stroke-width="7" stroke-miterlimit="10" stroke-linecap="round"/>
        </svg>
      </div>

      <div class="hand"></div>
    </div>
  <div class="welcome-screen">
    <transition name="slide-up">
      <div v-if="transitionStep == 1" class="transition-text transition-text--big">
        Hi there!
      </div>
      <div v-else-if="transitionStep == 2" class="transition-text transition-text--big">
        I'm the gin bot
      </div>
      <div v-else-if="transitionStep == 3" class="transition-text">
        I can help you make the perfect Gin & Tonic
      </div>
      <div v-else-if="transitionStep == 4" class="transition-text">
        Just push the button, and follow the tree easy steps
      </div>
      <div v-else class="transition-text">
        Need a quick fix? push the speed drink button
      </div>
    </transition>
  </div>
</template>

<script>
import { Transition } from 'vue';

export default {
    name: "Guide",
    props: {
      gins: {
        type: Array,
        default: Array.empty
      },
      typesOfGin: {
          type: Array,
          default: Array.empty
      },
      tonics: {
          type: Array,
          default: Array.empty
      },
      typesOfTonic: {
          type: Array,
          default: Array.empty
      },
      garnish: {
          type: Array,
          default: Array.empty
      },
      typesOfGarnish: {
          type: Array,
          default: Array.empty
      }
    },
    components: { Transition },
    data() {
      return {
        transitionStep: 1
      }
    },
    mounted() {
      setTimeout(this.changeTransitionStep, 3000)
    },
    methods: {
      changeTransitionStep() {
        if(this.transitionStep == 5) {
          this.transitionStep = 1
        } else {
          this.transitionStep++
        }

        setTimeout(this.changeTransitionStep, 3000)
      }
    }
}
</script>

<style lang="scss">
  .figure {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;

    .face {
      position: absolute;
      top: 31%;
      left: 17.5%;
      z-index: 2;

      .eye {
        position: absolute;
        width: 0.86vw;
        border-radius: 50%;
        background-color: $color--black;
        transform: rotate(-12deg);
        animation: blink 10s linear infinite;

        &::after {
          padding-top: 100%;
          content: '';
          display: block;
        }

        &--left {
          margin-top: 0.7vh;
        }

        &--right {
          margin-left: 2.07vw;
        }
      }

      .mouth {
        position: absolute;
        top: 4.2vh;
        left: 0.5vw;
        width: 3.125vw;
      }
    }

    .body {
      position: relative;
      height: 100%;
      z-index: 1;
    }
  }

  .welcome-screen {
    position: absolute;
    top: 50%;
    right: 10.75vw;
    width: 43.5vw;
    font-family: "Garnett", sans-serif;
    text-align: center;
    transform: translate(0, -50%);

    .transition-text {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 100%;
      font-weight: 500;
      line-height: 1.4;
      transform: translate(-50%, -50%);
      font-size: clamp(50px, 4vw, 102px);

      &--big {
        font-size: clamp(75px, 6vw, 142px)
      }

      &.slide-up-enter-active,
      &.slide-up-leave-active {
        transition: all 0.5s ease;
      }

      &.slide-up-enter-from {
        opacity: 0;
        transform: translate(-50%, 50%);
      }

      &.slide-up-leave-to {
        opacity: 0;
        transform: translate(-50%, -150%);
      }
    }
  }

  @keyframes blink {
    0%,
    25% {
      transform: rotate(-12deg) scaleY(1);
    }

    27% {
      transform: rotate(-12deg) scaleY(0);
    }

    30%,
    50% {
      transform: rotate(-12deg) scaleY(1);
    }

    52% {
      transform: rotate(-12deg) scaleY(0);
    }

    55%,
    58% {
      transform: rotate(-12deg) scaleY(1)
    }

    60% {
      transform: rotate(-12deg) scaleY(0)
    }

    63%,
    84% {
      transform: rotate(-12deg) scaleY(1)
    }

    86% {
      transform: rotate(-12deg) scaleY(0)
    }

    89% {
      transform: rotate(-12deg) scaleY(1)
    }
  }
</style>