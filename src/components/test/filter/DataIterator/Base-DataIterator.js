// Composables
import {
  makeDataIteratorItemsProps,
  useDataIteratorItems
} from "./composables/items"
import { makeComponentProps } from "@/composables/component"
import { makeFilterProps, useFilter } from "@/composables/filter"
import { useProxiedModel } from "@/composables/proxiedModel"
import { makeTagProps } from "@/composables/tag"
import {
  makeDataTableExpandProps,
  provideExpanded
} from "@/labs/VDataTable/composables/expand"
import {
  makeDataTableGroupProps,
  provideGroupBy,
  useGroupedItems
} from "@/labs/VDataTable/composables/group"
import { useOptions } from "@/labs/VDataTable/composables/options"
import {
  createPagination,
  makeDataTablePaginateProps,
  providePagination,
  usePaginatedItems
} from "@/labs/VDataTable/composables/paginate"
import {
  makeDataTableSelectProps,
  provideSelection
} from "@/labs/VDataTable/composables/select"
import {
  createSort,
  makeDataTableSortProps,
  provideSort,
  useSortedItems
} from "@/labs/VDataTable/composables/sort"

// Utilities
import { computed, toRef } from "vue"
import { genericComponent, propsFactory, useRender } from "@/util"

export const makeVDataIteratorProps = propsFactory(
  {
    search: String,
    loading: Boolean,

    ...makeComponentProps(),
    ...makeDataIteratorItemsProps(),
    ...makeDataTableSelectProps(),
    ...makeDataTableSortProps(),
    ...makeDataTablePaginateProps({ itemsPerPage: 5 }),
    ...makeDataTableExpandProps(),
    ...makeDataTableGroupProps(),
    ...makeFilterProps(),
    ...makeTagProps()
  },
  "VDataIterator"
)

export const VDataIterator = genericComponent()({
  name: "VDataIterator",

  props: makeVDataIteratorProps(),

  emits: {
    "update:modelValue": value => true,
    "update:groupBy": value => true,
    "update:page": value => true,
    "update:itemsPerPage": value => true,
    "update:sortBy": value => true,
    "update:options": value => true,
    "update:expanded": value => true
  },

  setup(props, { slots }) {
    const groupBy = useProxiedModel(props, "groupBy")
    const search = toRef(props, "search")

    const { items } = useDataIteratorItems(props)
    const { filteredItems } = useFilter(props, items, search, {
      transform: item => item.raw
    })

    const { sortBy, multiSort, mustSort } = createSort(props)
    const { page, itemsPerPage } = createPagination(props)

    const { toggleSort } = provideSort({ sortBy, multiSort, mustSort, page })
    const {
      sortByWithGroups,
      opened,
      extractRows,
      isGroupOpen,
      toggleGroup
    } = provideGroupBy({ groupBy, sortBy })

    const { sortedItems } = useSortedItems(
      props,
      filteredItems,
      sortByWithGroups
    )
    const { flatItems } = useGroupedItems(sortedItems, groupBy, opened)

    const itemsLength = computed(() => flatItems.value.length)

    const {
      startIndex,
      stopIndex,
      pageCount,
      prevPage,
      nextPage,
      setItemsPerPage,
      setPage
    } = providePagination({ page, itemsPerPage, itemsLength })
    const { paginatedItems } = usePaginatedItems({
      items: flatItems,
      startIndex,
      stopIndex,
      itemsPerPage
    })

    const paginatedItemsWithoutGroups = computed(() =>
      extractRows(paginatedItems.value)
    )

    const {
      isSelected,
      select,
      selectAll,
      toggleSelect
    } = provideSelection(props, {
      allItems: items,
      currentPage: paginatedItemsWithoutGroups
    })
    const { isExpanded, toggleExpand } = provideExpanded(props)

    useOptions({
      page,
      itemsPerPage,
      sortBy,
      groupBy,
      search
    })

    const slotProps = computed(() => ({
      page: page.value,
      itemsPerPage: itemsPerPage.value,
      sortBy: sortBy.value,
      pageCount: pageCount.value,
      toggleSort,
      prevPage,
      nextPage,
      setPage,
      setItemsPerPage,
      isSelected,
      select,
      selectAll,
      toggleSelect,
      isExpanded,
      toggleExpand,
      isGroupOpen,
      toggleGroup,
      items: paginatedItemsWithoutGroups.value,
      groupedItems: paginatedItems.value
    }))

    useRender(() => (
      <props.tag class={["v-data-iterator", props.class]} style={props.style}>
        {slots.header?.(slotProps.value)}

        {!paginatedItems.value.length
          ? slots["no-data"]?.()
          : slots.default?.(slotProps.value)}

        {slots.footer?.(slotProps.value)}
      </props.tag>
    ))

    return {}
  }
})
