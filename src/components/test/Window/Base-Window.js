// Styles
import "./VWindow.sass"

// Components
import { VBtn } from "@/components/VBtn"

// Composables
import { makeComponentProps } from "@/composables/component"
import { useGroup } from "@/composables/group"
import { useLocale, useRtl } from "@/composables/locale"
import { makeTagProps } from "@/composables/tag"
import { makeThemeProps, provideTheme } from "@/composables/theme"

// Directives
import { Touch } from "@/directives/touch"

// Utilities
import { computed, provide, ref, shallowRef, watch } from "vue"
import { genericComponent, propsFactory, useRender } from "@/util"

export const VWindowSymbol = Symbol.for("vuetify:v-window")
export const VWindowGroupSymbol = Symbol.for("vuetify:v-window-group")

export const makeVWindowProps = propsFactory(
  {
    continuous: Boolean,
    nextIcon: {
      type: [Boolean, String, Function, Object],
      default: "$next"
    },
    prevIcon: {
      type: [Boolean, String, Function, Object],
      default: "$prev"
    },
    reverse: Boolean,
    showArrows: {
      type: [Boolean, String],
      validator: v => typeof v === "boolean" || v === "hover"
    },
    touch: {
      type: [Object, Boolean],
      default: undefined
    },
    direction: {
      type: String,
      default: "horizontal"
    },

    modelValue: null,
    disabled: Boolean,
    selectedClass: {
      type: String,
      default: "v-window-item--active"
    },
    // TODO: mandatory should probably not be exposed but do this for now
    mandatory: {
      type: [Boolean, String],
      default: "force"
    },

    ...makeComponentProps(),
    ...makeTagProps(),
    ...makeThemeProps()
  },
  "VWindow"
)

export const VWindow = genericComponent()({
  name: "VWindow",

  directives: {
    Touch
  },

  props: makeVWindowProps(),

  emits: {
    "update:modelValue": v => true
  },

  setup(props, { slots }) {
    const { themeClasses } = provideTheme(props)
    const { isRtl } = useRtl()
    const { t } = useLocale()

    const group = useGroup(props, VWindowGroupSymbol)

    const rootRef = ref()
    const isRtlReverse = computed(() =>
      isRtl.value ? !props.reverse : props.reverse
    )
    const isReversed = shallowRef(false)
    const transition = computed(() => {
      const axis = props.direction === "vertical" ? "y" : "x"
      const reverse = isRtlReverse.value ? !isReversed.value : isReversed.value
      const direction = reverse ? "-reverse" : ""

      return `v-window-${axis}${direction}-transition`
    })
    const transitionCount = shallowRef(0)
    const transitionHeight = ref(undefined)

    const activeIndex = computed(() => {
      return group.items.value.findIndex(item =>
        group.selected.value.includes(item.id)
      )
    })

    watch(activeIndex, (newVal, oldVal) => {
      const itemsLength = group.items.value.length
      const lastIndex = itemsLength - 1

      if (itemsLength <= 2) {
        isReversed.value = newVal < oldVal
      } else if (newVal === lastIndex && oldVal === 0) {
        isReversed.value = true
      } else if (newVal === 0 && oldVal === lastIndex) {
        isReversed.value = false
      } else {
        isReversed.value = newVal < oldVal
      }
    })

    provide(VWindowSymbol, {
      transition,
      isReversed,
      transitionCount,
      transitionHeight,
      rootRef
    })

    const canMoveBack = computed(
      () => props.continuous || activeIndex.value !== 0
    )
    const canMoveForward = computed(
      () =>
        props.continuous || activeIndex.value !== group.items.value.length - 1
    )

    function prev() {
      canMoveBack.value && group.prev()
    }

    function next() {
      canMoveForward.value && group.next()
    }

    const arrows = computed(() => {
      const arrows = []

      const prevProps = {
        icon: isRtl.value ? props.nextIcon : props.prevIcon,
        class: `v-window__${isRtlReverse.value ? "right" : "left"}`,
        onClick: group.prev,
        ariaLabel: t("$vuetify.carousel.prev")
      }

      arrows.push(
        canMoveBack.value ? (
          slots.prev ? (
            slots.prev({ props: prevProps })
          ) : (
            <VBtn {...prevProps} />
          )
        ) : (
          <div />
        )
      )

      const nextProps = {
        icon: isRtl.value ? props.prevIcon : props.nextIcon,
        class: `v-window__${isRtlReverse.value ? "left" : "right"}`,
        onClick: group.next,
        ariaLabel: t("$vuetify.carousel.next")
      }

      arrows.push(
        canMoveForward.value ? (
          slots.next ? (
            slots.next({ props: nextProps })
          ) : (
            <VBtn {...nextProps} />
          )
        ) : (
          <div />
        )
      )

      return arrows
    })

    const touchOptions = computed(() => {
      if (props.touch === false) return props.touch

      const options = {
        left: () => {
          isRtlReverse.value ? prev() : next()
        },
        right: () => {
          isRtlReverse.value ? next() : prev()
        },
        start: ({ originalEvent }) => {
          originalEvent.stopPropagation()
        }
      }

      return {
        ...options,
        ...(props.touch === true ? {} : props.touch)
      }
    })

    useRender(() => (
      <props.tag
        ref={rootRef}
        class={[
          "v-window",
          {
            "v-window--show-arrows-on-hover": props.showArrows === "hover"
          },
          themeClasses.value,
          props.class
        ]}
        style={props.style}
        v-touch={touchOptions.value}
      >
        <div
          class="v-window__container"
          style={{
            height: transitionHeight.value
          }}
        >
          {slots.default?.({ group })}

          {props.showArrows !== false && (
            <div class="v-window__controls">{arrows.value}</div>
          )}
        </div>

        {slots.additional?.({ group })}
      </props.tag>
    ))

    return {
      group
    }
  }
})
