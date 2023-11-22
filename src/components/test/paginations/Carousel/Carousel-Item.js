// Components
import { makeVImgProps, VImg } from "@/components/VImg/VImg"
import {
  makeVWindowItemProps,
  VWindowItem
} from "@/components/VWindow/VWindowItem"

// Utilities
import { genericComponent, propsFactory, useRender } from "@/util"

export const makeVCarouselItemProps = propsFactory(
  {
    ...makeVImgProps(),
    ...makeVWindowItemProps()
  },
  "VCarouselItem"
)

export const VCarouselItem = genericComponent()({
  name: "VCarouselItem",

  inheritAttrs: false,

  props: makeVCarouselItemProps(),

  setup(props, { slots, attrs }) {
    useRender(() => {
      const [imgProps] = VImg.filterProps(props)
      const [windowItemProps] = VWindowItem.filterProps(props)

      return (
        <VWindowItem class="v-carousel-item" {...windowItemProps}>
          <VImg {...attrs} {...imgProps} v-slots={slots} />
        </VWindowItem>
      )
    })
  }
})
