<template>
  <div class="toggle-wrapper">
    <label class="toggle">
      <input
        type="checkbox"
        :checked="(mode === 'dark') ? 'checked' : false"
        @change="$emit('toggle')"
      />
    </label>
  </div>
</template>

<script>
export default {
  data () {
    return {
      mode: "dark"
    }
  }
}
</script>

<style lang="scss">

</style>
