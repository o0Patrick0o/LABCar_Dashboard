// Components
import { VExpansionPanelSymbol } from "./originale/VExpansionPanels"
import { VExpansionPanelText } from "./originale/VExpansionPanelText"
import {
  makeVExpansionPanelTitleProps,
  VExpansionPanelTitle
} from "./originale/VExpansionPanelTitle"

// Composables
import { useBackgroundColor } from "@/composables/color"
import { makeComponentProps } from "@/composables/component"
import { provideDefaults } from "@/composables/defaults"
import { makeElevationProps, useElevation } from "@/composables/elevation"
import { makeGroupItemProps, useGroupItem } from "@/composables/group"
import { makeLazyProps } from "@/composables/lazy"
import { makeRoundedProps, useRounded } from "@/composables/rounded"
import { makeTagProps } from "@/composables/tag"

// Utilities
import { computed, provide, toRef } from "vue"
import { genericComponent, propsFactory, useRender } from "@/util"

export const makeVExpansionPanelProps = propsFactory(
  {
    title: String,
    text: String,
    bgColor: String,

    ...makeComponentProps(),
    ...makeElevationProps(),
    ...makeGroupItemProps(),
    ...makeLazyProps(),
    ...makeRoundedProps(),
    ...makeTagProps(),
    ...makeVExpansionPanelTitleProps()
  },
  "VExpansionPanel"
)

export const VExpansionPanel = genericComponent()({
  name: "VExpansionPanel",

  props: makeVExpansionPanelProps(),

  emits: {
    "group:selected": val => true
  },

  setup(props, { slots }) {
    const groupItem = useGroupItem(props, VExpansionPanelSymbol)
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(props, "bgColor")
    const { elevationClasses } = useElevation(props)
    const { roundedClasses } = useRounded(props)
    const isDisabled = computed(
      () => groupItem?.disabled.value || props.disabled
    )

    const selectedIndices = computed(() =>
      groupItem.group.items.value.reduce((arr, item, index) => {
        if (groupItem.group.selected.value.includes(item.id)) arr.push(index)
        return arr
      }, [])
    )

    const isBeforeSelected = computed(() => {
      const index = groupItem.group.items.value.findIndex(
        item => item.id === groupItem.id
      )
      return (
        !groupItem.isSelected.value &&
        selectedIndices.value.some(selectedIndex => selectedIndex - index === 1)
      )
    })

    const isAfterSelected = computed(() => {
      const index = groupItem.group.items.value.findIndex(
        item => item.id === groupItem.id
      )
      return (
        !groupItem.isSelected.value &&
        selectedIndices.value.some(
          selectedIndex => selectedIndex - index === -1
        )
      )
    })

    provide(VExpansionPanelSymbol, groupItem)

    provideDefaults({
      VExpansionPanelText: {
        eager: toRef(props, "eager")
      }
    })

    useRender(() => {
      const hasText = !!(slots.text || props.text)
      const hasTitle = !!(slots.title || props.title)

      return (
        <props.tag
          class={[
            "v-expansion-panel",
            {
              "v-expansion-panel--active": groupItem.isSelected.value,
              "v-expansion-panel--before-active": isBeforeSelected.value,
              "v-expansion-panel--after-active": isAfterSelected.value,
              "v-expansion-panel--disabled": isDisabled.value
            },
            roundedClasses.value,
            backgroundColorClasses.value,
            props.class
          ]}
          style={[backgroundColorStyles.value, props.style]}
        >
          <div
            class={["v-expansion-panel__shadow", ...elevationClasses.value]}
          />

          {hasTitle && (
            <VExpansionPanelTitle
              key="title"
              collapseIcon={props.collapseIcon}
              color={props.color}
              expandIcon={props.expandIcon}
              hideActions={props.hideActions}
              ripple={props.ripple}
            >
              {slots.title ? slots.title() : props.title}
            </VExpansionPanelTitle>
          )}

          {hasText && (
            <VExpansionPanelText key="text">
              {slots.text ? slots.text() : props.text}
            </VExpansionPanelText>
          )}

          {slots.default?.()}
        </props.tag>
      )
    })

    return {}
  }
})
