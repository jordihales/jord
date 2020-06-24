<template>
  <header class="header w-full py-4 md:py-6 flex fixed justify-between items-center">

    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 99.30424 86"
      class="h-8 md:h-12 pl-8 header_logo"
    >
      <path
        d="M50,0,.34788,86H99.65212Zm0,12.11269,39.16223,67.831H10.83777Z"
        transform="translate(-0.34788)"
      />
      <polygon points="52.68 52.892 52.68 37.953 46.624 37.953 46.624 52.892 31.685 52.892 31.685 58.948 46.624 58.948 46.624 73.887 52.68 73.887 52.68 58.948 67.619 58.948 67.619 52.892 52.68 52.892" /></svg>
    <div class="mr-8">
      <Toggle
        :mode="mode"
        @toggle="$emit('toggle')"
      />
    </div>

  </header>
</template>



<script>
import Toggle from "@/components/Toggle";

export default {
  name: "Header",
  props: ["mode"],
  components: {
    Toggle
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
