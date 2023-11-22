// Composables
import { provideDefaults } from "@/composables/defaults"

// Utilities
import { toRefs } from "vue"
import { genericComponent, propsFactory } from "@/util"

export const makeVDefaultsProviderProps = propsFactory(
  {
    defaults: Object,
    disabled: Boolean,
    reset: [Number, String],
    root: [Boolean, String],
    scoped: Boolean
  },
  "VDefaultsProvider"
)

export const VDefaultsProvider = genericComponent(false)({
  name: "VDefaultsProvider",

  props: makeVDefaultsProviderProps(),

  setup(props, { slots }) {
    const { defaults, disabled, reset, root, scoped } = toRefs(props)

    provideDefaults(defaults, {
      reset,
      root,
      scoped,
      disabled
    })

    return () => slots.default?.()
  }
})
