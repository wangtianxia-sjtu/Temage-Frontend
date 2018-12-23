import {mount} from '@vue/test-utils'
import gallerycard from '@/components/widgets/display/gallery_card.vue'

describe('gallery_card.vue', () => {
  it('renders correctly', () => {
    const cards = [
      {
        imagesrc: '@/assets/cat1.png',
        title: 'Card title that wraps to a new line',
        head: 'Quote',
        maintext: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit',
        foottext: 'Footer Text'
      }
    ]
    const wrapper = mount(gallerycard, {propsData: {imagesrc: cards[0].imagesrc, title: cards[0].title, head: cards[0].head, maintext: cards[0].maintext, foottext: cards[0].foottext}} )
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
  it('renders correct number of items', () => {
    const cards = [
      {
        imagesrc: '@/assets/cat1.png',
        title: 'Card title that wraps to a new line',
        head: 'Quote',
        maintext: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit',
        foottext: 'Footer Text'
      }
    ]
    const wrapper = mount(gallerycard, {propsData: {imagesrc: cards[0].imagesrc, title: cards[0].title, head: cards[0].head, maintext: cards[0].maintext, foottext: cards[0].foottext}} )
    expect(wrapper.findAll('Button')).toHaveLength(1)
  })
})
