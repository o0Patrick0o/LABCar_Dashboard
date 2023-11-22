// Styles
import "./VCheckbox.sass"

// Components
import { makeVCheckboxBtnProps, VCheckboxBtn } from "./VCheckboxBtn"
import { makeVInputProps, VInput } from "@/components/VInput/VInput"

// Composables
import { useFocus } from "@/composables/focus"
import { useProxiedModel } from "@/composables/proxiedModel"

// Utilities
import { computed } from "vue"
import {
  filterInputAttrs,
  genericComponent,
  getUid,
  omit,
  propsFactory,
  useRender
} from "@/util"

export const makeVCheckboxProps = propsFactory(
  {
    ...makeVInputProps(),
    ...omit(makeVCheckboxBtnProps(), ["inline"])
  },
  "VCheckbox"
)

export const VCheckbox = genericComponent()({
  name: "VCheckbox",

  inheritAttrs: false,

  props: makeVCheckboxProps(),

  emits: {
    "update:modelValue": value => true,
    "update:focused": focused => true
  },

  setup(props, { attrs, slots }) {
    const model = useProxiedModel(props, "modelValue")
    const { isFocused, focus, blur } = useFocus(props)

    const uid = getUid()
    const id = computed(() => props.id || `checkbox-${uid}`)

    useRender(() => {
      const [rootAttrs, controlAttrs] = filterInputAttrs(attrs)
      const [inputProps, _1] = VInput.filterProps(props)
      const [checkboxProps, _2] = VCheckboxBtn.filterProps(props)

      return (
        <VInput
          class={["v-checkbox", props.class]}
          {...rootAttrs}
          {...inputProps}
          v-model={model.value}
          id={id.value}
          focused={isFocused.value}
          style={props.style}
        >
          {{
            ...slots,
            default: ({ id, messagesId, isDisabled, isReadonly }) => (
              <VCheckboxBtn
                {...checkboxProps}
                id={id.value}
                aria-describedby={messagesId.value}
                disabled={isDisabled.value}
                readonly={isReadonly.value}
                {...controlAttrs}
                v-model={model.value}
                onFocus={focus}
                onBlur={blur}
                v-slots={slots}
              />
            )
          }}
        </VInput>
      )
    })

    return {}
  }
})
