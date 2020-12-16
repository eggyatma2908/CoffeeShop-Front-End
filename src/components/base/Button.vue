<template>
    <div>
        <button :type="type" :class="btn">{{name}}</button>
    </div>
</template>

<script>
export default {
  name: 'Button',
  props: {
    name: String,
    type: String,
    btn: String
  }
}
</script>

<style scoped>
.btn {
  color: #6A4029;
}
</style>
