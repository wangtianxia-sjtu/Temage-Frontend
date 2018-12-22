import { mount } from '@vue/test-utils'
import exhibitioncard from '@/components/widgets/display/exhibitioncard.vue'

require('jsdom-global')()

describe('exhibitioncard.vue', () => {
    it('renders li for each item in props.items', () => {
        const cards = [
            {
              imgsrc: '@/assets/cat1.png',
              title: 'A lovely cat!'
            },
            {
              imgsrc: '@/assets/cat2.png',
              title: 'A lovely cat!'
            },
            {
              imgsrc: '@/assets/cat7.png',
              title: 'A lovely cat!'
            },
            {
              imgsrc: '@/assets/cat4.png',
              title: 'A lovely cat!'
            }
        ]
        const wrapper = mount(exhibitioncard, {propsData: { cards }})
        expect(wrapper.isVueInstance()).toBeTruthy()
      // expect(wrapper.findAll('time')).toHaveLength(cards.length)
    })
  })
