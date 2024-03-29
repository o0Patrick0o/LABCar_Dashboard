// Components
import {
  makeVSelectionControlProps,
  VSelectionControl
} from "@/components/VSelectionControl/VSelectionControl"

// Utilities
import { genericComponent, propsFactory, useRender } from "@/util"

export const makeVRadioProps = propsFactory(
  {
    ...makeVSelectionControlProps({
      falseIcon: "$radioOff",
      trueIcon: "$radioOn"
    })
  },
  "VRadio"
)

export const VRadio = genericComponent()({
  name: "VRadio",

  props: makeVRadioProps(),

  setup(props, { slots }) {
    useRender(() => (
      <VSelectionControl
        {...props}
        class={["v-radio", props.class]}
        style={props.style}
        type="radio"
        v-slots={slots}
      />
    ))

    return {}
  }
})
