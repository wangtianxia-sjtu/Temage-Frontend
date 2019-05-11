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

// 用例编号: 002
// 测试单元描述: 测试关键组件gallery cards渲染
// 用例目的: 验证关键组件gallery cards渲染正常
// 前提条件:
//        1.用户已登录
//        2.画廊数据不为空
// 特殊的规程说明: card数据字段与流入数据字段一致, 流入数据有效
// 用例间的依赖关系: exhibition card渲染正常
// 具体流程:
//    步骤1
//        输入: cards数组, 包含card实例
//        期望输出: gallery card渲染正确
//        实际输出: gallery card渲染正确
//        备注: 无
// 测试结果综合分析及建议: gallery card渲染正确, 组件编写正常
// 测试经验总结: 该流程可用于测试其他vue组件类渲染情况
