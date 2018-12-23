import {mount} from '@vue/test-utils'
import workspace from '@/components/inline_page/workspace.vue'

describe('workspace.vue', () => {
  it('workspace初始状态测试', () => {
    const wrapper = mount(workspace)
    expect(wrapper.vm.status).toBe(0)
  })
  it('workspace状态推进测试1', () => {
    const wrapper = mount(workspace)
    wrapper.setData({status: 1})
    expect(wrapper.vm.status).toBe(1)
    expect(wrapper.html()).toContain('<row><p class="guess">初步推断，您的风格可能是...</p></row>')
  })
  it('workspace状态推进测试2', () => {
    const wrapper = mount(workspace)
    wrapper.setData({status: 2})
    expect(wrapper.vm.status).toBe(2)
    expect(wrapper.html()).toContain('需要HTML代码？')
  })
  it('workspace按钮触发测试', () => {
    const wrapper = mount(workspace)
    wrapper.setData({status: 3})
    const button = wrapper.find('Button.lastt')
    button.trigger('click')
    expect(wrapper.vm.status).toBe(2)
  })
  it('workspace异常触发测试', () => {
    const wrapper = mount(workspace)
    wrapper.setData({status: 0})
    const button = wrapper.find('Button.lastt')
    button.trigger('click')
    expect(wrapper.vm.status).toBe(0)
  })
})
