// Styles
import "./VList.sass"

// Components
import { VListChildren } from "./originale/VListChildren"

// Composables
import { createList } from "./list"
import { makeBorderProps, useBorder } from "@/composables/border"
import { useBackgroundColor } from "@/composables/color"
import { makeComponentProps } from "@/composables/component"
import { provideDefaults } from "@/composables/defaults"
import { makeDensityProps, useDensity } from "@/composables/density"
import { makeDimensionProps, useDimension } from "@/composables/dimensions"
import { makeElevationProps, useElevation } from "@/composables/elevation"
import { makeItemsProps } from "@/composables/list-items"
import { makeNestedProps, useNested } from "@/composables/nested/nested"
import { makeRoundedProps, useRounded } from "@/composables/rounded"
import { makeTagProps } from "@/composables/tag"
import { makeThemeProps, provideTheme } from "@/composables/theme"
import { makeVariantProps } from "@/composables/variant"

// Utilities
import { computed, ref, shallowRef, toRef } from "vue"
import {
  focusChild,
  genericComponent,
  getPropertyFromItem,
  pick,
  propsFactory,
  useRender
} from "@/util"

function isPrimitive(value) {
  return (
    typeof value === "string" ||
    typeof value === "number" ||
    typeof value === "boolean"
  )
}

function transformItem(props, item) {
  const type = getPropertyFromItem(item, props.itemType, "item")
  const title = isPrimitive(item)
    ? item
    : getPropertyFromItem(item, props.itemTitle)
  const value = getPropertyFromItem(item, props.itemValue, undefined)
  const children = getPropertyFromItem(item, props.itemChildren)
  const itemProps =
    props.itemProps === true
      ? pick(item, ["children"])[1]
      : getPropertyFromItem(item, props.itemProps)

  const _props = {
    title,
    value,
    ...itemProps
  }

  return {
    type,
    title: _props.title,
    value: _props.value,
    props: _props,
    children:
      type === "item" && children ? transformItems(props, children) : undefined,
    raw: item
  }
}

function transformItems(props, items) {
  const array = []

  for (const item of items) {
    array.push(transformItem(props, item))
  }

  return array
}

function useListItems(props) {
  const items = computed(() => transformItems(props, props.items))

  return { items }
}

export const makeVListProps = propsFactory(
  {
    baseColor: String,
    /* @deprecated */
    activeColor: String,
    activeClass: String,
    bgColor: String,
    disabled: Boolean,
    lines: {
      type: [Boolean, String],
      default: "one"
    },
    nav: Boolean,

    ...makeNestedProps({
      selectStrategy: "single-leaf",
      openStrategy: "list"
    }),
    ...makeBorderProps(),
    ...makeComponentProps(),
    ...makeDensityProps(),
    ...makeDimensionProps(),
    ...makeElevationProps(),
    itemType: {
      type: String,
      default: "type"
    },
    ...makeItemsProps(),
    ...makeRoundedProps(),
    ...makeTagProps(),
    ...makeThemeProps(),
    ...makeVariantProps({
      variant: "text"
    })
  },
  "VList"
)

export const VList = genericComponent()({
  name: "VList",

  props: makeVListProps(),

  emits: {
    "update:selected": val => true,
    "update:opened": val => true,
    "click:open": value => true,
    "click:select": value => true
  },

  setup(props, { slots }) {
    const { items } = useListItems(props)
    const { themeClasses } = provideTheme(props)
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(toRef(props, "bgColor"))
    const { borderClasses } = useBorder(props)
    const { densityClasses } = useDensity(props)
    const { dimensionStyles } = useDimension(props)
    const { elevationClasses } = useElevation(props)
    const { roundedClasses } = useRounded(props)
    const { open, select } = useNested(props)
    const lineClasses = computed(() =>
      props.lines ? `v-list--${props.lines}-line` : undefined
    )
    const activeColor = toRef(props, "activeColor")
    const baseColor = toRef(props, "baseColor")
    const color = toRef(props, "color")

    createList()

    provideDefaults({
      VListGroup: {
        activeColor,
        baseColor,
        color
      },
      VListItem: {
        activeClass: toRef(props, "activeClass"),
        activeColor,
        baseColor,
        color,
        density: toRef(props, "density"),
        disabled: toRef(props, "disabled"),
        lines: toRef(props, "lines"),
        nav: toRef(props, "nav"),
        variant: toRef(props, "variant")
      }
    })

    const isFocused = shallowRef(false)
    const contentRef = ref()
    function onFocusin(e) {
      isFocused.value = true
    }

    function onFocusout(e) {
      isFocused.value = false
    }

    function onFocus(e) {
      if (
        !isFocused.value &&
        !(e.relatedTarget && contentRef.value?.contains(e.relatedTarget))
      )
        focus()
    }

    function onKeydown(e) {
      if (!contentRef.value) return

      if (e.key === "ArrowDown") {
        focus("next")
      } else if (e.key === "ArrowUp") {
        focus("prev")
      } else if (e.key === "Home") {
        focus("first")
      } else if (e.key === "End") {
        focus("last")
      } else {
        return
      }

      e.preventDefault()
    }

    function focus(location) {
      if (contentRef.value) {
        return focusChild(contentRef.value, location)
      }
    }

    useRender(() => {
      return (
        <props.tag
          ref={contentRef}
          class={[
            "v-list",
            {
              "v-list--disabled": props.disabled,
              "v-list--nav": props.nav
            },
            themeClasses.value,
            backgroundColorClasses.value,
            borderClasses.value,
            densityClasses.value,
            elevationClasses.value,
            lineClasses.value,
            roundedClasses.value,
            props.class
          ]}
          style={[
            backgroundColorStyles.value,
            dimensionStyles.value,
            props.style
          ]}
          tabindex={props.disabled || isFocused.value ? -1 : 0}
          role="listbox"
          aria-activedescendant={undefined}
          onFocusin={onFocusin}
          onFocusout={onFocusout}
          onFocus={onFocus}
          onKeydown={onKeydown}
        >
          <VListChildren
            items={items.value}
            returnObject={props.returnObject}
            v-slots={slots}
          />
        </props.tag>
      )
    })

    return {
      open,
      select,
      focus
    }
  }
})
