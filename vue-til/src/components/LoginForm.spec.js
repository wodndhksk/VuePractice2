import { shallowMount } from '@vue/test-utils';
// import Vue from 'vue';
import LoginForm from './LoginForm.vue';

describe('LoginForm.vue', () => {
  test('ID가 이메일 형식이 아니면 경고 메시지가 출력된다. ', () => {
    // const instance = new Vue(LoginForm).$mount();
    const wrapper = shallowMount(LoginForm, {
      data() {
        return {
          username: 'test',
        };
      },
    });
    // const idInput = wrapper.find('#username');
    // console.log('input 박스의 값 ' + idInput.element.value);
    // console.log(wrapper.vm.isUsernameValid);
    // console.log(idInput.html());

    // expect(wrapper.vm.username).toBe('');

    const warninnText = wrapper.find('.warning');
    // console.log(warninnText.html());
    expect(warninnText.exists()).toBeTruthy();
  });

  test('ID와 PW 가 입력되지 않으면 로그인 버튼이 비활성화 된다.', () => {
    const wrapper = shallowMount(LoginForm, {
      data() {
        return {
          username: '',
          password: '',
        };
      },
    });
    const button = wrapper.find('.btn');
    // button.element.ariaDisabled
    expect(button.element.disabled).toBeTruthy();
  });
});
