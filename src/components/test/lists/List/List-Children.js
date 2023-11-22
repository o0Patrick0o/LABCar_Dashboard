// Components
import { VListGroup } from "./VListGroup"
import { VListItem } from "./VListItem"
import { VListSubheader } from "./VListSubheader"
import { VDivider } from "../VDivider"

// Utilities
import { createList } from "./list"
import { genericComponent, propsFactory } from "@/util"

export const makeVListChildrenProps = propsFactory(
  {
    items: Array,
    returnObject: Boolean
  },
  "VListChildren"
)

export const VListChildren = genericComponent()({
  name: "VListChildren",

  props: makeVListChildrenProps(),

  setup(props, { slots }) {
    createList()

    return () =>
      slots.default?.() ??
      props.items?.map(({ children, props: itemProps, type, raw: item }) => {
        if (type === "divider") {
          return (
            slots.divider?.({ props: itemProps }) ?? <VDivider {...itemProps} />
          )
        }

        if (type === "subheader") {
          return (
            slots.subheader?.({ props: itemProps }) ?? (
              <VListSubheader {...itemProps} />
            )
          )
        }

        const slotsWithItem = {
          subtitle: slots.subtitle
            ? slotProps => slots.subtitle?.({ ...slotProps, item })
            : undefined,
          prepend: slots.prepend
            ? slotProps => slots.prepend?.({ ...slotProps, item })
            : undefined,
          append: slots.append
            ? slotProps => slots.append?.({ ...slotProps, item })
            : undefined,
          title: slots.title
            ? slotProps => slots.title?.({ ...slotProps, item })
            : undefined
        }

        const [listGroupProps, _1] = VListGroup.filterProps(itemProps)

        return children ? (
          <VListGroup value={itemProps?.value} {...listGroupProps}>
            {{
              activator: ({ props: activatorProps }) => {
                const listItemProps = {
                  ...itemProps,
                  ...activatorProps,
                  value: props.returnObject ? item : itemProps.value
                }

                return slots.header ? (
                  slots.header({ props: listItemProps })
                ) : (
                  <VListItem {...listItemProps} v-slots={slotsWithItem} />
                )
              },
              default: () => <VListChildren items={children} v-slots={slots} />
            }}
          </VListGroup>
        ) : slots.item ? (
          slots.item({ props: itemProps })
        ) : (
          <VListItem
            {...itemProps}
            value={props.returnObject ? item : itemProps.value}
            v-slots={slotsWithItem}
          />
        )
      })
  }
})
