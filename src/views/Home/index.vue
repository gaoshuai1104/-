<template>
    <model-collada
        :src="`${publicPath}static/models/collada/PGYrev2.dae`"></model-collada>
</template>

<script>
    import { ModelCollada } from 'vue-3d-model'

    export default {
              components: {
            ModelCollada 
        },
      data() {
        return {
          publicPath: process.env.BASE_URL,
        }
      },
    }
</script>

