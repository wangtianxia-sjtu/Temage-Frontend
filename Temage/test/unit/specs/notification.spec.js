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
