// Composables
import { VItemGroupSymbol } from "./originale/VItemGroup"
import { makeGroupItemProps, useGroupItem } from "@/composables/group"

// Utilities
import { genericComponent } from "@/util"

export const VItem = genericComponent()({
  name: "VItem",

  props: makeGroupItemProps(),

  emits: {
    "group:selected": val => true
  },

  setup(props, { slots }) {
    const {
      isSelected,
      select,
      toggle,
      selectedClass,
      value,
      disabled
    } = useGroupItem(props, VItemGroupSymbol)
    return () =>
      slots.default?.({
        isSelected: isSelected.value,
        selectedClass: selectedClass.value,
        select,
        toggle,
        value: value.value,
        disabled: disabled.value
      })
  }
})
