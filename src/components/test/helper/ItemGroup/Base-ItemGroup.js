// Styles
import "./VItemGroup.sass"

// Composables
import { makeComponentProps } from "@/composables/component"
import { makeGroupProps, useGroup } from "@/composables/group"
import { makeTagProps } from "@/composables/tag"
import { makeThemeProps, provideTheme } from "@/composables/theme"

// Utilities
import { genericComponent, propsFactory } from "@/util"

export const VItemGroupSymbol = Symbol.for("vuetify:v-item-group")

export const makeVItemGroupProps = propsFactory(
  {
    ...makeComponentProps(),
    ...makeGroupProps({
      selectedClass: "v-item--selected"
    }),
    ...makeTagProps(),
    ...makeThemeProps()
  },
  "VItemGroup"
)

export const VItemGroup = genericComponent()({
  name: "VItemGroup",

  props: makeVItemGroupProps(),

  emits: {
    "update:modelValue": value => true
  },

  setup(props, { slots }) {
    const { themeClasses } = provideTheme(props)
    const { isSelected, select, next, prev, selected } = useGroup(
      props,
      VItemGroupSymbol
    )

    return () => (
      <props.tag
        class={["v-item-group", themeClasses.value, props.class]}
        style={props.style}
      >
        {slots.default?.({
          isSelected,
          select,
          next,
          prev,
          selected: selected.value
        })}
      </props.tag>
    )
  }
})
