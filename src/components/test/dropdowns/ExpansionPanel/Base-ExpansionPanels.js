// Styles
import "./VExpansionPanel.sass"

// Composables
import { makeComponentProps } from "@/composables/component"
import { provideDefaults } from "@/composables/defaults"
import { makeGroupProps, useGroup } from "@/composables/group"
import { makeTagProps } from "@/composables/tag"
import { makeThemeProps, provideTheme } from "@/composables/theme"

// Utilities
import { computed, toRef } from "vue"
import { genericComponent, propsFactory, useRender } from "@/util"

export const VExpansionPanelSymbol = Symbol.for("vuetify:v-expansion-panel")

const allowedVariants = ["default", "accordion", "inset", "popout"]

export const makeVExpansionPanelsProps = propsFactory(
  {
    color: String,
    variant: {
      type: String,
      default: "default",
      validator: v => allowedVariants.includes(v)
    },
    readonly: Boolean,

    ...makeComponentProps(),
    ...makeGroupProps(),
    ...makeTagProps(),
    ...makeThemeProps()
  },
  "VExpansionPanels"
)

export const VExpansionPanels = genericComponent()({
  name: "VExpansionPanels",

  props: makeVExpansionPanelsProps(),

  emits: {
    "update:modelValue": val => true
  },

  setup(props, { slots }) {
    useGroup(props, VExpansionPanelSymbol)

    const { themeClasses } = provideTheme(props)

    const variantClass = computed(
      () => props.variant && `v-expansion-panels--variant-${props.variant}`
    )

    provideDefaults({
      VExpansionPanel: {
        color: toRef(props, "color")
      },
      VExpansionPanelTitle: {
        readonly: toRef(props, "readonly")
      }
    })

    useRender(() => (
      <props.tag
        class={[
          "v-expansion-panels",
          themeClasses.value,
          variantClass.value,
          props.class
        ]}
        style={props.style}
        v-slots={slots}
      />
    ))

    return {}
  }
})
