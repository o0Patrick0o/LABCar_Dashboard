// Styles
import "./VCombobox.sass"

// Components
import { VCheckboxBtn } from "@/components/VCheckbox"
import { VChip } from "@/components/VChip"
import { VDefaultsProvider } from "@/components/VDefaultsProvider"
import { VIcon } from "@/components/VIcon"
import { VList, VListItem } from "@/components/VList"
import { VMenu } from "@/components/VMenu"
import { makeSelectProps } from "@/components/VSelect/VSelect"
import { VTextField } from "@/components/VTextField"
import { makeVTextFieldProps } from "@/components/VTextField/VTextField"
import { VVirtualScroll } from "@/components/VVirtualScroll"

// Composables
import { useScrolling } from "../VSelect/useScrolling"
import { useTextColor } from "@/composables/color"
import { makeFilterProps, useFilter } from "@/composables/filter"
import { useForm } from "@/composables/form"
import { forwardRefs } from "@/composables/forwardRefs"
import { transformItem, useItems } from "@/composables/list-items"
import { useLocale } from "@/composables/locale"
import { useProxiedModel } from "@/composables/proxiedModel"
import { makeTransitionProps } from "@/composables/transition"

// Utilities
import { computed, mergeProps, nextTick, ref, shallowRef, watch } from "vue"
import {
  genericComponent,
  IN_BROWSER,
  noop,
  omit,
  propsFactory,
  useRender,
  wrapInArray
} from "@/util"

function highlightResult(text, matches, length) {
  if (matches == null) return text

  if (Array.isArray(matches))
    throw new Error("Multiple matches is not implemented")

  return typeof matches === "number" && ~matches ? (
    <>
      <span class="v-combobox__unmask">{text.substr(0, matches)}</span>
      <span class="v-combobox__mask">{text.substr(matches, length)}</span>
      <span class="v-combobox__unmask">{text.substr(matches + length)}</span>
    </>
  ) : (
    text
  )
}

export const makeVComboboxProps = propsFactory(
  {
    autoSelectFirst: {
      type: [Boolean, String]
    },
    delimiters: Array,

    ...makeFilterProps({ filterKeys: ["title"] }),
    ...makeSelectProps({ hideNoData: true, returnObject: true }),
    ...omit(
      makeVTextFieldProps({
        modelValue: null,
        role: "combobox"
      }),
      ["validationValue", "dirty", "appendInnerIcon"]
    ),
    ...makeTransitionProps({ transition: false })
  },
  "VCombobox"
)

export const VCombobox = genericComponent()({
  name: "VCombobox",

  props: makeVComboboxProps(),

  emits: {
    "update:focused": focused => true,
    "update:modelValue": val => true,
    "update:search": val => true,
    "update:menu": val => true
  },

  setup(props, { emit, slots }) {
    const { t } = useLocale()
    const vTextFieldRef = ref()
    const isFocused = shallowRef(false)
    const isPristine = shallowRef(true)
    const listHasFocus = shallowRef(false)
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
    const selectionIndex = shallowRef(-1)
    let cleared = false
    const color = computed(() => vTextFieldRef.value?.color)
    const label = computed(() =>
      menu.value ? props.closeText : props.openText
    )
    const { items, transformIn, transformOut } = useItems(props)
    const { textColorClasses, textColorStyles } = useTextColor(color)
    const model = useProxiedModel(
      props,
      "modelValue",
      [],
      v => transformIn(wrapInArray(v)),
      v => {
        const transformed = transformOut(v)
        return props.multiple ? transformed : transformed[0] ?? null
      }
    )
    const form = useForm()
    const _search = shallowRef(
      !props.multiple ? model.value[0]?.title ?? "" : ""
    )
    const search = computed({
      get: () => {
        return _search.value
      },
      set: val => {
        _search.value = val ?? ""
        if (!props.multiple) {
          model.value = [transformItem(props, val)]
        }

        if (val && props.multiple && props.delimiters?.length) {
          const values = val.split(
            new RegExp(`(?:${props.delimiters.join("|")})+`)
          )
          if (values.length > 1) {
            values.forEach(v => {
              v = v.trim()
              if (v) select(transformItem(props, v))
            })
            _search.value = ""
          }
        }

        if (!val) selectionIndex.value = -1

        isPristine.value = !val
      }
    })
    watch(_search, value => {
      if (cleared) {
        // wait for clear to finish, VTextField sets _search to null
        // then search computed triggers and updates _search to ''
        nextTick(() => (cleared = false))
      } else if (isFocused.value && !menu.value) {
        menu.value = true
      }

      emit("update:search", value)
    })
    watch(model, value => {
      if (!props.multiple) {
        _search.value = value[0]?.title ?? ""
      }
    })

    const { filteredItems, getMatches } = useFilter(props, items, () =>
      isPristine.value ? "" : search.value
    )

    const displayItems = computed(() => {
      if (props.hideSelected) {
        return filteredItems.value.filter(
          filteredItem => !model.value.some(s => s.value === filteredItem.value)
        )
      }
      return filteredItems.value
    })

    const selectedValues = computed(() =>
      model.value.map(selection => selection.value)
    )

    const highlightFirst = computed(() => {
      const selectFirst =
        props.autoSelectFirst === true ||
        (props.autoSelectFirst === "exact" &&
          search.value === displayItems.value[0]?.title)
      return (
        selectFirst &&
        displayItems.value.length > 0 &&
        !isPristine.value &&
        !listHasFocus.value
      )
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
      cleared = true

      if (props.openOnClear) {
        menu.value = true
      }
    }
    function onMousedownControl() {
      if (menuDisabled.value) return

      menu.value = true
    }
    function onMousedownMenuIcon(e) {
      if (menuDisabled.value) return

      if (isFocused.value) {
        e.preventDefault()
        e.stopPropagation()
      }
      menu.value = !menu.value
    }
    function onKeydown(e) {
      if (props.readonly || form?.isReadonly.value) return

      const selectionStart = vTextFieldRef.value.selectionStart
      const length = model.value.length

      if (
        selectionIndex.value > -1 ||
        ["Enter", "ArrowDown", "ArrowUp"].includes(e.key)
      ) {
        e.preventDefault()
      }

      if (["Enter", "ArrowDown"].includes(e.key)) {
        menu.value = true
      }

      if (["Escape"].includes(e.key)) {
        menu.value = false
      }

      if (["Enter", "Escape", "Tab"].includes(e.key)) {
        if (highlightFirst.value && ["Enter", "Tab"].includes(e.key)) {
          select(filteredItems.value[0])
        }

        isPristine.value = true
      }

      if (e.key === "ArrowDown" && highlightFirst.value) {
        listRef.value?.focus("next")
      }

      if (!props.multiple) return

      if (["Backspace", "Delete"].includes(e.key)) {
        if (selectionIndex.value < 0) {
          if (e.key === "Backspace" && !search.value) {
            selectionIndex.value = length - 1
          }

          return
        }

        const originalSelectionIndex = selectionIndex.value
        const selectedItem = model.value[selectionIndex.value]
        if (selectedItem && !selectedItem.props.disabled) select(selectedItem)

        selectionIndex.value =
          originalSelectionIndex >= length - 1
            ? length - 2
            : originalSelectionIndex
      }

      if (e.key === "ArrowLeft") {
        if (selectionIndex.value < 0 && selectionStart > 0) return

        const prev =
          selectionIndex.value > -1 ? selectionIndex.value - 1 : length - 1

        if (model.value[prev]) {
          selectionIndex.value = prev
        } else {
          selectionIndex.value = -1
          vTextFieldRef.value.setSelectionRange(
            search.value.length,
            search.value.length
          )
        }
      }

      if (e.key === "ArrowRight") {
        if (selectionIndex.value < 0) return

        const next = selectionIndex.value + 1

        if (model.value[next]) {
          selectionIndex.value = next
        } else {
          selectionIndex.value = -1
          vTextFieldRef.value.setSelectionRange(0, 0)
        }
      }

      if (e.key === "Enter" && search.value) {
        select(transformItem(props, search.value))
        search.value = ""
      }
    }
    function onAfterLeave() {
      if (isFocused.value) {
        isPristine.value = true
        vTextFieldRef.value?.focus()
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

        search.value = ""
      } else {
        model.value = [item]
        _search.value = item.title

        // watch for search watcher to trigger
        nextTick(() => {
          menu.value = false
          isPristine.value = true
        })
      }
    }

    function onFocusin(e) {
      isFocused.value = true
      setTimeout(() => {
        listHasFocus.value = true
      })
    }
    function onFocusout(e) {
      listHasFocus.value = false
    }
    function onUpdateModelValue(v) {
      if (v == null || (v === "" && !props.multiple)) model.value = []
    }

    watch(filteredItems, val => {
      if (!val.length && props.hideNoData) menu.value = false
    })

    watch(isFocused, (val, oldVal) => {
      if (val || val === oldVal) return

      selectionIndex.value = -1
      menu.value = false

      if (
        highlightFirst.value &&
        !listHasFocus.value &&
        !model.value.some(({ value }) => value === displayItems.value[0].value)
      ) {
        select(displayItems.value[0])
      } else if (props.multiple && search.value) {
        model.value = [...model.value, transformItem(props, search.value)]
        search.value = ""
      }
    })

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

      return (
        <VTextField
          ref={vTextFieldRef}
          {...textFieldProps}
          v-model={search.value}
          onUpdate:modelValue={onUpdateModelValue}
          v-model:focused={isFocused.value}
          validationValue={model.externalValue}
          counterValue={
            props.multiple ? model.value.length : search.value.length
          }
          dirty={isDirty}
          class={[
            "v-combobox",
            {
              "v-combobox--active-menu": menu.value,
              "v-combobox--chips": !!props.chips,
              "v-combobox--selection-slot": !!slots.selection,
              "v-combobox--selecting-index": selectionIndex.value > -1,
              [`v-combobox--${props.multiple ? "multiple" : "single"}`]: true
            },
            props.class
          ]}
          style={props.style}
          readonly={props.readonly}
          placeholder={isDirty ? undefined : props.placeholder}
          onClick:clear={onClear}
          onMousedown:control={onMousedownControl}
          onKeydown={onKeydown}
        >
          {{
            ...slots,
            default: () => (
              <>
                <VMenu
                  ref={vMenuRef}
                  v-model={menu.value}
                  activator="parent"
                  contentClass="v-combobox__content"
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
                      onFocusout={onFocusout}
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
                            active:
                              highlightFirst.value && index === 0
                                ? true
                                : undefined,
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
                                  ),
                                  title: () => {
                                    return isPristine.value
                                      ? item.title
                                      : highlightResult(
                                          item.title,
                                          getMatches(item)?.title,
                                          search.value?.length ?? 0
                                        )
                                  }
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
                    <div
                      key={item.value}
                      class={[
                        "v-combobox__selection",
                        index === selectionIndex.value && [
                          "v-combobox__selection--selected",
                          textColorClasses.value
                        ]
                      ]}
                      style={
                        index === selectionIndex.value
                          ? textColorStyles.value
                          : {}
                      }
                    >
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
                          <span class="v-combobox__selection-text">
                            {item.title}
                            {props.multiple &&
                              index < model.value.length - 1 && (
                                <span class="v-combobox__selection-comma">
                                  ,
                                </span>
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
                {(!props.hideNoData || props.items.length) && props.menuIcon ? (
                  <VIcon
                    class="v-combobox__menu-icon"
                    icon={props.menuIcon}
                    onMousedown={onMousedownMenuIcon}
                    onClick={noop}
                    aria-label={t(label.value)}
                    title={t(label.value)}
                  />
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
        isPristine,
        menu,
        search,
        selectionIndex,
        filteredItems,
        select
      },
      vTextFieldRef
    )
  }
})
