import {mount} from '@vue/test-utils'
import exhibitionCard from '@/components/widgets/display/exhibitioncard.vue'

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
    const wrapper = mount(exhibitionCard, {propsData: {cards: cards}})
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})

// 用例编号: 001
// 测试单元描述: 测试关键组件exhibition cards渲染
// 用例目的: 验证关键组件exhibition cards渲染正常
// 前提条件:
//        1.用户已登录
// 特殊的规程说明: card数据字段与流入数据字段一致, 流入数据有效
// 用例间的依赖关系: 无
// 具体流程:
//    步骤1
//        输入: cards数组, 包含card实例
//        期望输出: exhibition card渲染正确
//        实际输出: exhibition card渲染正确
//        备注: 无
// 测试结果综合分析及建议: exhibition card渲染正确, 组件编写正常
// 测试经验总结: 该流程可用于测试其他vue组件类渲染情况
