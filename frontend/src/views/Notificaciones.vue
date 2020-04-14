<template>
    <div>
        <h1>this is a notification page {{ usuarioid }} </h1>
    </div>
</template>
<script>
import { mapState} from 'vuex'
export default {
    computed: {
    ...mapState(['usuarioid'])
  },
}
</script>