<template>
  <div class="mb-3">
    <label :for="name" class="form-label">{{ $t(`message.${name}`) }}</label>
    <input
      class="form-control"
      :type="type"
      :id="name"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  props: ["name", "type", "modelValue"],
  emits: ["update:modelValue"],
};
</script>
