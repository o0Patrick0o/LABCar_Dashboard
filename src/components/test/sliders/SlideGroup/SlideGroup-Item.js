// Composables
import { makeGroupItemProps, useGroupItem } from "@/composables/group"

// Utilities
import { VSlideGroupSymbol } from "./VSlideGroup"
import { genericComponent } from "@/util"

export const VSlideGroupItem = genericComponent()({
  name: "VSlideGroupItem",

  props: makeGroupItemProps(),

  emits: {
    "group:selected": val => true
  },

  setup(props, { slots }) {
    const slideGroupItem = useGroupItem(props, VSlideGroupSymbol)

    return () =>
      slots.default?.({
        isSelected: slideGroupItem.isSelected.value,
        select: slideGroupItem.select,
        toggle: slideGroupItem.toggle,
        selectedClass: slideGroupItem.selectedClass.value
      })
  }
})
