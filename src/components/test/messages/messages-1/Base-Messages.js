// Styles
import "./VMessages.sass"

// Components
import { VSlideYTransition } from "@/components/transitions"

// Composables
import { useTextColor } from "@/composables/color"
import { makeComponentProps } from "@/composables/component"
import { makeTransitionProps, MaybeTransition } from "@/composables/transition"

// Utilities
import { computed } from "vue"
import { genericComponent, propsFactory, useRender, wrapInArray } from "@/util"

export const makeVMessagesProps = propsFactory(
  {
    active: Boolean,
    color: String,
    messages: {
      type: [Array, String],
      default: () => []
    },

    ...makeComponentProps(),
    ...makeTransitionProps({
      transition: {
        component: VSlideYTransition,
        leaveAbsolute: true,
        group: true
      }
    })
  },
  "VMessages"
)

export const VMessages = genericComponent()({
  name: "VMessages",

  props: makeVMessagesProps(),

  setup(props, { slots }) {
    const messages = computed(() => wrapInArray(props.messages))
    const { textColorClasses, textColorStyles } = useTextColor(
      computed(() => props.color)
    )

    useRender(() => (
      <MaybeTransition
        transition={props.transition}
        tag="div"
        class={["v-messages", textColorClasses.value, props.class]}
        style={[textColorStyles.value, props.style]}
        role="alert"
        aria-live="polite"
      >
        {props.active &&
          messages.value.map((message, i) => (
            <div class="v-messages__message" key={`${i}-${messages.value}`}>
              {slots.message ? slots.message({ message }) : message}
            </div>
          ))}
      </MaybeTransition>
    ))

    return {}
  }
})
