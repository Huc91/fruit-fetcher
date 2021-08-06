import Vue from 'vue'
import Vuetify from 'vuetify'

import { createLocalVue, mount } from '@vue/test-utils'
import FruitCard from '@/components/FruitCard/Index.vue'

Vue.use(Vuetify);

describe('FruitCard.vue', () => {

  const localVue = createLocalVue();
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify()
  })

  it('renders the name correctly', () => {
    const testName = 'The Avocado test fruit';
    const wrapper = mount(FruitCard, {
      localVue,
      vuetify,
      propsData: {
          fruit: {
            name: testName
          }
       }
    })
    expect(wrapper.text()).toMatch(testName)
  })

  it('call to action should emit the event when v-btn is clicked', () => {
    const wrapper = mount(FruitCard, {
      localVue,
      vuetify,
      propsData: {
        fruit: {
          name: 'Grape'
        }
     }
    })

    const event = jest.fn()
    const button = wrapper.find('.v-btn')

    wrapper.vm.$on('call-to-action-click', event)

    expect(event).toHaveBeenCalledTimes(0)

    button.trigger('click')

    expect(event).toHaveBeenCalledTimes(1)
  })

})
