// Styles
import "./VSelect.sass"

// Components
import { VDialogTransition } from "@/components/transitions"
import { VCheckboxBtn } from "@/components/VCheckbox"
import { VChip } from "@/components/VChip"
import { VDefaultsProvider } from "@/components/VDefaultsProvider"
import { VIcon } from "@/components/VIcon"
import { VList, VListItem } from "@/components/VList"
import { VMenu } from "@/components/VMenu"
import {
  makeVTextFieldProps,
  VTextField
} from "@/components/VTextField/VTextField"
import { VVirtualScroll } from "@/components/VVirtualScroll"

// Composables
import { useScrolling } from "./useScrolling"
import { useForm } from "@/composables/form"
import { forwardRefs } from "@/composables/forwardRefs"
import { IconValue } from "@/composables/icons"
import { makeItemsProps, useItems } from "@/composables/list-items"
import { useLocale } from "@/composables/locale"
import { useProxiedModel } from "@/composables/proxiedModel"
import { makeTransitionProps } from "@/composables/transition"

// Utilities
import { computed, mergeProps, ref, shallowRef, watch } from "vue"
import {
  genericComponent,
  IN_BROWSER,
  matchesSelector,
  omit,
  propsFactory,
  useRender,
  wrapInArray
} from "@/util"

export const makeSelectProps = propsFactory(
  {
    chips: Boolean,
    closableChips: Boolean,
    closeText: {
      type: String,
      default: "$vuetify.close"
    },
    openText: {
      type: String,
      default: "$vuetify.open"
    },
    eager: Boolean,
    hideNoData: Boolean,
    hideSelected: Boolean,
    menu: Boolean,
    menuIcon: {
      type: IconValue,
      default: "$dropdown"
    },
    menuProps: {
      type: Object
    },
    multiple: Boolean,
    noDataText: {
      type: String,
      default: "$vuetify.noDataText"
    },
    openOnClear: Boolean,
    itemColor: String,

    ...makeItemsProps({ itemChildren: false })
  },
  "Select"
)

export const makeVSelectProps = propsFactory(
  {
    ...makeSelectProps(),
    ...omit(
      makeVTextFieldProps({
        modelValue: null,
        role: "button"
      }),
      ["validationValue", "dirty", "appendInnerIcon"]
    ),
    ...makeTransitionProps({ transition: { component: VDialogTransition } })
  },
  "VSelect"
)

export const VSelect = genericComponent()({
  name: "VSelect",

  props: makeVSelectProps(),

  emits: {
    "update:focused": focused => true,
    "update:modelValue": val => true,
    "update:menu": val => true
  },

  setup(props, { slots }) {
    const { t } = useLocale()
    const vTextFieldRef = ref()
    const vMenuRef = ref()
    const vVirtualScrollRef = ref()
    const _menu = useProxiedModel(props, "menu")
    const menu = computed({
      get: () => _menu.value,
      set: v => {
        if (_menu.value && !v && vMenuRef.value?.ΨopenChildren) return
        _menu.value = v
      }
    })
    const { items, transformIn, transformOut } = useItems(props)
    const model = useProxiedModel(
      props,
      "modelValue",
      [],
      v => transformIn(v === null ? [null] : wrapInArray(v)),
      v => {
        const transformed = transformOut(v)
        return props.multiple ? transformed : transformed[0] ?? null
      }
    )
    const form = useForm()
    const selectedValues = computed(() =>
      model.value.map(selection => selection.value)
    )
    const isFocused = shallowRef(false)
    const label = computed(() =>
      menu.value ? props.closeText : props.openText
    )

    let keyboardLookupPrefix = ""
    let keyboardLookupLastTime

    const displayItems = computed(() => {
      if (props.hideSelected) {
        return items.value.filter(item => !model.value.some(s => s === item))
      }
      return items.value
    })

    const menuDisabled = computed(
      () =>
        (props.hideNoData && !items.value.length) ||
        props.readonly ||
        form?.isReadonly.value
    )

    const listRef = ref()
    const { onListScroll, onListKeydown } = useScrolling(listRef, vTextFieldRef)
    function onClear(e) {
      if (props.openOnClear) {
        menu.value = true
      }
    }
    function onMousedownControl() {
      if (menuDisabled.value) return

      menu.value = !menu.value
    }
    function onKeydown(e) {
      if (!e.key || props.readonly || form?.isReadonly.value) return

      if (
        ["Enter", " ", "ArrowDown", "ArrowUp", "Home", "End"].includes(e.key)
      ) {
        e.preventDefault()
      }

      if (["Enter", "ArrowDown", " "].includes(e.key)) {
        menu.value = true
      }

      if (["Escape", "Tab"].includes(e.key)) {
        menu.value = false
      }

      if (e.key === "Home") {
        listRef.value?.focus("first")
      } else if (e.key === "End") {
        listRef.value?.focus("last")
      }

      // html select hotkeys
      const KEYBOARD_LOOKUP_THRESHOLD = 1000 // milliseconds

      function checkPrintable(e) {
        const isPrintableChar = e.key.length === 1
        const noModifier = !e.ctrlKey && !e.metaKey && !e.altKey
        return isPrintableChar && noModifier
      }

      if (props.multiple || !checkPrintable(e)) return

      const now = performance.now()
      if (now - keyboardLookupLastTime > KEYBOARD_LOOKUP_THRESHOLD) {
        keyboardLookupPrefix = ""
      }
      keyboardLookupPrefix += e.key.toLowerCase()
      keyboardLookupLastTime = now

      const item = items.value.find(item =>
        item.title.toLowerCase().startsWith(keyboardLookupPrefix)
      )
      if (item !== undefined) {
        model.value = [item]
      }
    }
    function select(item) {
      if (props.multiple) {
        const index = model.value.findIndex(selection =>
          props.valueComparator(selection.value, item.value)
        )

        if (index === -1) {
          model.value = [...model.value, item]
        } else {
          const value = [...model.value]
          value.splice(index, 1)
          model.value = value
        }
      } else {
        model.value = [item]
        menu.value = false
      }
    }
    function onBlur(e) {
      if (!listRef.value?.$el.contains(e.relatedTarget)) {
        menu.value = false
      }
    }
    function onAfterLeave() {
      if (isFocused.value) {
        vTextFieldRef.value?.focus()
      }
    }
    function onFocusin(e) {
      isFocused.value = true
    }
    function onModelUpdate(v) {
      if (v == null) model.value = []
      else if (
        matchesSelector(vTextFieldRef.value, ":autofill") ||
        matchesSelector(vTextFieldRef.value, ":-webkit-autofill")
      ) {
        const item = items.value.find(item => item.title === v)
        if (item) {
          select(item)
        }
      } else if (vTextFieldRef.value) {
        vTextFieldRef.value.value = ""
      }
    }

    watch(menu, () => {
      if (!props.hideSelected && menu.value && model.value.length) {
        const index = displayItems.value.findIndex(item =>
          model.value.some(s => props.valueComparator(s.value, item.value))
        )
        IN_BROWSER &&
          window.requestAnimationFrame(() => {
            index >= 0 && vVirtualScrollRef.value?.scrollToIndex(index)
          })
      }
    })

    useRender(() => {
      const hasChips = !!(props.chips || slots.chip)
      const hasList = !!(
        !props.hideNoData ||
        displayItems.value.length ||
        slots["prepend-item"] ||
        slots["append-item"] ||
        slots["no-data"]
      )
      const isDirty = model.value.length > 0
      const [textFieldProps] = VTextField.filterProps(props)

      const placeholder =
        isDirty ||
        (!isFocused.value && props.label && !props.persistentPlaceholder)
          ? undefined
          : props.placeholder

      return (
        <VTextField
          ref={vTextFieldRef}
          {...textFieldProps}
          modelValue={model.value.map(v => v.props.value).join(", ")}
          onUpdate:modelValue={onModelUpdate}
          v-model:focused={isFocused.value}
          validationValue={model.externalValue}
          counterValue={model.value.length}
          dirty={isDirty}
          class={[
            "v-select",
            {
              "v-select--active-menu": menu.value,
              "v-select--chips": !!props.chips,
              [`v-select--${props.multiple ? "multiple" : "single"}`]: true,
              "v-select--selected": model.value.length,
              "v-select--selection-slot": !!slots.selection
            },
            props.class
          ]}
          style={props.style}
          inputmode="none"
          placeholder={placeholder}
          onClick:clear={onClear}
          onMousedown:control={onMousedownControl}
          onBlur={onBlur}
          onKeydown={onKeydown}
          aria-label={t(label.value)}
          title={t(label.value)}
        >
          {{
            ...slots,
            default: () => (
              <>
                <VMenu
                  ref={vMenuRef}
                  v-model={menu.value}
                  activator="parent"
                  contentClass="v-select__content"
                  disabled={menuDisabled.value}
                  eager={props.eager}
                  maxHeight={310}
                  openOnClick={false}
                  closeOnContentClick={false}
                  transition={props.transition}
                  onAfterLeave={onAfterLeave}
                  {...props.menuProps}
                >
                  {hasList && (
                    <VList
                      ref={listRef}
                      selected={selectedValues.value}
                      selectStrategy={
                        props.multiple ? "independent" : "single-independent"
                      }
                      onMousedown={e => e.preventDefault()}
                      onKeydown={onListKeydown}
                      onFocusin={onFocusin}
                      onScrollPassive={onListScroll}
                      tabindex="-1"
                      color={props.itemColor ?? props.color}
                    >
                      {slots["prepend-item"]?.()}

                      {!displayItems.value.length &&
                        !props.hideNoData &&
                        (slots["no-data"]?.() ?? (
                          <VListItem title={t(props.noDataText)} />
                        ))}

                      <VVirtualScroll
                        ref={vVirtualScrollRef}
                        renderless
                        items={displayItems.value}
                      >
                        {({ item, index, itemRef }) => {
                          const itemProps = mergeProps(item.props, {
                            ref: itemRef,
                            key: index,
                            onClick: () => select(item)
                          })

                          return (
                            slots.item?.({
                              item,
                              index,
                              props: itemProps
                            }) ?? (
                              <VListItem {...itemProps}>
                                {{
                                  prepend: ({ isSelected }) => (
                                    <>
                                      {props.multiple && !props.hideSelected ? (
                                        <VCheckboxBtn
                                          key={item.value}
                                          modelValue={isSelected}
                                          ripple={false}
                                          tabindex="-1"
                                        />
                                      ) : (
                                        undefined
                                      )}

                                      {item.props.prependIcon && (
                                        <VIcon icon={item.props.prependIcon} />
                                      )}
                                    </>
                                  )
                                }}
                              </VListItem>
                            )
                          )
                        }}
                      </VVirtualScroll>

                      {slots["append-item"]?.()}
                    </VList>
                  )}
                </VMenu>

                {model.value.map((item, index) => {
                  function onChipClose(e) {
                    e.stopPropagation()
                    e.preventDefault()

                    select(item)
                  }

                  const slotProps = {
                    "onClick:close": onChipClose,
                    onMousedown(e) {
                      e.preventDefault()
                      e.stopPropagation()
                    },
                    modelValue: true,
                    "onUpdate:modelValue": undefined
                  }

                  return (
                    <div key={item.value} class="v-select__selection">
                      {hasChips ? (
                        !slots.chip ? (
                          <VChip
                            key="chip"
                            closable={props.closableChips}
                            size="small"
                            text={item.title}
                            disabled={item.props.disabled}
                            {...slotProps}
                          />
                        ) : (
                          <VDefaultsProvider
                            key="chip-defaults"
                            defaults={{
                              VChip: {
                                closable: props.closableChips,
                                size: "small",
                                text: item.title
                              }
                            }}
                          >
                            {slots.chip?.({ item, index, props: slotProps })}
                          </VDefaultsProvider>
                        )
                      ) : (
                        slots.selection?.({ item, index }) ?? (
                          <span class="v-select__selection-text">
                            {item.title}
                            {props.multiple &&
                              index < model.value.length - 1 && (
                                <span class="v-select__selection-comma">,</span>
                              )}
                          </span>
                        )
                      )}
                    </div>
                  )
                })}
              </>
            ),
            "append-inner": (...args) => (
              <>
                {slots["append-inner"]?.(...args)}
                {props.menuIcon ? (
                  <VIcon class="v-select__menu-icon" icon={props.menuIcon} />
                ) : (
                  undefined
                )}
              </>
            )
          }}
        </VTextField>
      )
    })

    return forwardRefs(
      {
        isFocused,
        menu,
        select
      },
      vTextFieldRef
    )
  }
})