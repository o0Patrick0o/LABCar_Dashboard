// Styles
import "./VTimeline.sass"

// Composables
import { makeComponentProps } from "@/composables/component"
import { provideDefaults } from "@/composables/defaults"
import { makeDensityProps, useDensity } from "@/composables/density"
import { useRtl } from "@/composables/locale"
import { makeTagProps } from "@/composables/tag"
import { makeThemeProps, provideTheme } from "@/composables/theme"

// Utilities
import { computed, toRef } from "vue"
import {
  convertToUnit,
  genericComponent,
  propsFactory,
  useRender
} from "@/util"

export const makeVTimelineProps = propsFactory(
  {
    align: {
      type: String,
      default: "center",
      validator: v => ["center", "start"].includes(v)
    },
    direction: {
      type: String,
      default: "vertical",
      validator: v => ["vertical", "horizontal"].includes(v)
    },
    justify: {
      type: String,
      default: "auto",
      validator: v => ["auto", "center"].includes(v)
    },
    side: {
      type: String,
      validator: v => v == null || ["start", "end"].includes(v)
    },
    lineInset: {
      type: [String, Number],
      default: 0
    },
    lineThickness: {
      type: [String, Number],
      default: 2
    },
    lineColor: String,
    truncateLine: {
      type: String,
      validator: v => ["start", "end", "both"].includes(v)
    },

    ...makeComponentProps(),
    ...makeDensityProps(),
    ...makeTagProps(),
    ...makeThemeProps()
  },
  "VTimeline"
)

export const VTimeline = genericComponent()({
  name: "VTimeline",

  props: makeVTimelineProps(),

  setup(props, { slots }) {
    const { themeClasses } = provideTheme(props)
    const { densityClasses } = useDensity(props)
    const { rtlClasses } = useRtl()

    provideDefaults({
      VTimelineDivider: {
        lineColor: toRef(props, "lineColor")
      },
      VTimelineItem: {
        density: toRef(props, "density"),
        lineInset: toRef(props, "lineInset")
      }
    })

    const sideClasses = computed(() => {
      const side = props.side
        ? props.side
        : props.density !== "default"
        ? "end"
        : null

      return side && `v-timeline--side-${side}`
    })

    const truncateClasses = computed(() => {
      const classes = [
        "v-timeline--truncate-line-start",
        "v-timeline--truncate-line-end"
      ]

      switch (props.truncateLine) {
        case "both":
          return classes
        case "start":
          return classes[0]
        case "end":
          return classes[1]
        default:
          return null
      }
    })

    useRender(() => (
      <props.tag
        class={[
          "v-timeline",
          `v-timeline--${props.direction}`,
          `v-timeline--align-${props.align}`,
          `v-timeline--justify-${props.justify}`,
          truncateClasses.value,
          {
            "v-timeline--inset-line": !!props.lineInset
          },
          themeClasses.value,
          densityClasses.value,
          sideClasses.value,
          rtlClasses.value,
          props.class
        ]}
        style={[
          {
            "--v-timeline-line-thickness": convertToUnit(props.lineThickness)
          },
          props.style
        ]}
        v-slots={slots}
      />
    ))

    return {}
  }
})
