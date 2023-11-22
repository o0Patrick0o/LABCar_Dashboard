<script>
  export default {
    functional: true,
    props: {
      Tag: { type: String, default: 'div' }
    },
    render (createElement, { children, data, listeners }) {
      return createElement(this.Tag, {...data, on: listeners }, children)
    }
  }
</script>
