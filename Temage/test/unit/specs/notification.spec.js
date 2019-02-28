import {mount} from '@vue/test-utils'
import ntside from '@/components/widgets/display/notification-side.vue'

describe('notification-side.vue', () => {
  it('notification测试1', () => {
    const wrapper = mount(ntside)
    const testObj = [
      {
        name: '测试数据',
        content: '测试数据',
        time: '2018-12-24'
      }
    ]
    wrapper.setData({events: testObj})
    expect(wrapper.html()).toContain('<p>测试数据</p>')
  })
})

// 用例编号: 003
// 测试单元描述: 测试关键组件通知栏渲染
// 用例目的: 验证关键组件通知栏渲染正常
// 前提条件:
//        1.用户已登录
//        2.用户通知不空
// 特殊的规程说明: 通知栏数据字段与流入数据字段一致, 流入数据有效
// 用例间的依赖关系: 无
// 具体流程:
//    步骤1
//        输入: 通知类数组, 包含通知实例
//        期望输出: 通知栏渲染正确
//        实际输出: 通知栏渲染正确
//        备注: 无
// 测试结果综合分析及建议: 通知栏渲染正确, 组件编写正常
// 测试经验总结: 该流程可用于测试其他vue组件类渲染情况
