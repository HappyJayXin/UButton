<script>
export default {
  name: "loading",
  functional: true,
  props: {
    outline: {
      type: Boolean,
      default: false
    }
  },
  render: function(h, { props }) {
    return h("span", {
      attrs: { id: "u-loading" },
      style: { "--color": props.outline ? "#000000" : "#ffffff" }
    });
  }
};
</script>

<style scoped lang="scss">
$color: var(--color);
$border: 2px;
$size: 12px;

#u-loading {
  display: inline-block;
  margin-right: 0.5rem;
  height: $size;
  width: $size;
  border: $border transparent solid;
  border-top: $border $color solid;
  border-right: $border $color solid;
  border-bottom: $border $color solid;
  border-radius: 50%;
  -webkit-animation: spin3 1s infinite linear;
  animation: spin3 1s infinite linear;
}

@-webkit-keyframes spin3 {
  from {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(359deg);
    transform: rotate(359deg);
  }
}
@keyframes spin3 {
  from {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(359deg);
    transform: rotate(359deg);
    -webkit-transform: rotate(359deg);
    transform: rotate(359deg);
  }
}
</style>
