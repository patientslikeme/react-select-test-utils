import React from 'react';
import sinon from 'sinon';
import Select from 'react-select';
import { describe, it } from 'mocha';
import { mount } from 'enzyme';
import { expect } from 'chai';
import { search, chooseOption } from '../src/index';

describe('react-select-test-utils', () => {
  const options = [
    { value: 'one', label: 'One' },
    { value: 'two', label: 'Two' },
  ];

  describe('plain Select', () => {
    it('runs a search', (callback) => {
      const wrapper = mount(
        <Select
          name="form-field-name"
          options={options}
        />,
      );

      expect(wrapper.find('.Select-option').length).to.equal(0);

      search(wrapper, 'one', () => {
        expect(wrapper.find('.Select-option').length).to.equal(1);
        callback();
      });
    });

    it('chooses a displayed option', (callback) => {
      const onChange = sinon.spy();
      const wrapper = mount(
        <Select
          name="form-field-name"
          options={options}
          onChange={onChange}
        />,
      );

      search(wrapper, 'two', () => {
        expect(onChange.callCount).to.equal(0);
        chooseOption(wrapper, 'Two');
        expect(onChange.callCount).to.equal(1);
        callback();
      });
    });
  });

  describe('Select.Async', () => {
    const loadOptions = (input, callback) => {
      setTimeout(() => {
        callback(null, {
          options,
          complete: true,
        });
      }, 0);
    };

    it('runs a search', (callback) => {
      const wrapper = mount(
        <Select.Async
          name="form-field-name"
          loadOptions={loadOptions}
        />,
      );

      expect(wrapper.find('.Select-option').length).to.equal(0);

      search(wrapper, 'one', () => {
        expect(wrapper.find('.Select-option').length).to.equal(1);
        callback();
      });
    });

    it('chooses a displayed option', (callback) => {
      const onChange = sinon.spy();
      const wrapper = mount(
        <Select.Async
          name="form-field-name"
          loadOptions={loadOptions}
          onChange={onChange}
        />,
      );

      search(wrapper, 'two', () => {
        expect(onChange.callCount).to.equal(0);
        chooseOption(wrapper, 'Two');
        expect(onChange.callCount).to.equal(1);
        callback();
      });
    });
  });
});
