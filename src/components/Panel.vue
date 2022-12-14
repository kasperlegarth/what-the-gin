<template>
    <div class="panel">
        <h2 class="panel__header">{{ headline }}</h2>
        <div class="panel__body">
            <slot name="body"></slot>
        </div>
        <div class="panel__footer">
            <button class="button button--main">{{ confirmText }}</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Panel',
        props: {
            headline: {
                type: String,
                default: '',
                required: true
            },
            confirmText: {
                type: String,
                default: 'Ok'
            }
        }
    }
</script>

<style lang="scss">
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

</style>