import {mount} from '@vue/test-utils'
import homepage from '@/components/inline_page/homepage.vue'

describe('homepage.vue', () => {
  it('主页卡片数据渲染测试', () => {
    const cards = [
      {
        imgsrc: '@/assets/cat4.png',
        title: '测试样例'
      }
    ]
    const wrapper = mount(homepage)
    wrapper.setData({ cards_recent: cards })
    expect(wrapper.html()).toContain('<span>测试样例</span>')
  })
  it('主页卡片数量测试', () => {
    const cards = [
      {
        imgsrc: '@/assets/cat4.png',
        title: '测试样例'
      },
      {
        imgsrc: '@/assets/cat4.png',
        title: '测试样例'
      },
      {
        imgsrc: '@/assets/cat4.png',
        title: '测试样例'
      },
      {
        imgsrc: '@/assets/cat4.png',
        title: '测试样例'
      },
      {
        imgsrc: '@/assets/cat4.png',
        title: '测试样例'
      }
    ]
    const wrapper = mount(homepage)
    wrapper.setData({ cards_recent: cards })
    expect(wrapper.findAll('time')).toHaveLength(cards.length)
  })
})
