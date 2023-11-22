// Composables
import { makeComponentProps } from "@/composables/component"
import { createForm, makeFormProps } from "@/composables/form"
import { forwardRefs } from "@/composables/forwardRefs"

// Utilities
import { ref } from "vue"
import { genericComponent, propsFactory, useRender } from "@/util"

export const makeVFormProps = propsFactory(
  {
    ...makeComponentProps(),
    ...makeFormProps()
  },
  "VForm"
)

export const VForm = genericComponent()({
  name: "VForm",

  props: makeVFormProps(),

  emits: {
    "update:modelValue": val => true,
    submit: e => true
  },

  setup(props, { slots, emit }) {
    const form = createForm(props)
    const formRef = ref()

    function onReset(e) {
      e.preventDefault()
      form.reset()
    }

    function onSubmit(_e) {
      const e = _e

      const ready = form.validate()
      e.then = ready.then.bind(ready)
      e.catch = ready.catch.bind(ready)
      e.finally = ready.finally.bind(ready)

      emit("submit", e)

      if (!e.defaultPrevented) {
        ready.then(({ valid }) => {
          if (valid) {
            formRef.value?.submit()
          }
        })
      }

      e.preventDefault()
    }

    useRender(() => (
      <form
        ref={formRef}
        class={["v-form", props.class]}
        style={props.style}
        novalidate
        onReset={onReset}
        onSubmit={onSubmit}
      >
        {slots.default?.(form)}
      </form>
    ))

    return forwardRefs(form, formRef)
  }
})
