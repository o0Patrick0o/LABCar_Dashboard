// Styles
import "./VDialog.sass"

// Components
import { VDialogTransition } from "@/components/transitions"
import { VDefaultsProvider } from "@/components/VDefaultsProvider"
import { VOverlay } from "@/components/VOverlay"
import { makeVOverlayProps } from "@/components/VOverlay/VOverlay"

// Composables
import { forwardRefs } from "@/composables/forwardRefs"
import { useProxiedModel } from "@/composables/proxiedModel"
import { useScopeId } from "@/composables/scopeId"

// Utilities
import { computed, mergeProps, nextTick, ref, watch } from "vue"
import {
  focusableChildren,
  genericComponent,
  IN_BROWSER,
  propsFactory,
  useRender
} from "@/util"

export const makeVDialogProps = propsFactory(
  {
    fullscreen: Boolean,
    retainFocus: {
      type: Boolean,
      default: true
    },
    scrollable: Boolean,

    ...makeVOverlayProps({
      origin: "center center",
      scrollStrategy: "block",
      transition: { component: VDialogTransition },
      zIndex: 2400
    })
  },
  "VDialog"
)

export const VDialog = genericComponent()({
  name: "VDialog",

  props: makeVDialogProps(),

  emits: {
    "update:modelValue": value => true
  },

  setup(props, { slots }) {
    const isActive = useProxiedModel(props, "modelValue")
    const { scopeId } = useScopeId()

    const overlay = ref()
    function onFocusin(e) {
      const before = e.relatedTarget
      const after = e.target

      if (
        before !== after &&
        overlay.value?.contentEl &&
        // We're the topmost dialog
        overlay.value?.globalTop &&
        // It isn't the document or the dialog body
        ![document, overlay.value.contentEl].includes(after) &&
        // It isn't inside the dialog body
        !overlay.value.contentEl.contains(after)
      ) {
        const focusable = focusableChildren(overlay.value.contentEl)

        if (!focusable.length) return

        const firstElement = focusable[0]
        const lastElement = focusable[focusable.length - 1]

        if (before === firstElement) {
          lastElement.focus()
        } else {
          firstElement.focus()
        }
      }
    }

    if (IN_BROWSER) {
      watch(
        () => isActive.value && props.retainFocus,
        val => {
          val
            ? document.addEventListener("focusin", onFocusin)
            : document.removeEventListener("focusin", onFocusin)
        },
        { immediate: true }
      )
    }

    watch(isActive, async val => {
      await nextTick()
      if (val) {
        overlay.value.contentEl?.focus({ preventScroll: true })
      } else {
        overlay.value.activatorEl?.focus({ preventScroll: true })
      }
    })

    const activatorProps = computed(() =>
      mergeProps(
        {
          "aria-haspopup": "dialog",
          "aria-expanded": String(isActive.value)
        },
        props.activatorProps
      )
    )

    useRender(() => {
      const [overlayProps] = VOverlay.filterProps(props)

      return (
        <VOverlay
          ref={overlay}
          class={[
            "v-dialog",
            {
              "v-dialog--fullscreen": props.fullscreen,
              "v-dialog--scrollable": props.scrollable
            },
            props.class
          ]}
          style={props.style}
          {...overlayProps}
          v-model={isActive.value}
          aria-modal="true"
          activatorProps={activatorProps.value}
          role="dialog"
          {...scopeId}
        >
          {{
            activator: slots.activator,
            default: (...args) => (
              <VDefaultsProvider root="VDialog">
                {slots.default?.(...args)}
              </VDefaultsProvider>
            )
          }}
        </VOverlay>
      )
    })

    return forwardRefs({}, overlay)
  }
})
