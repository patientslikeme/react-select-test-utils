import Select from 'react-select';

function findSelect(wrapper) {
  const plainSelect = wrapper.find(Select);
  if (plainSelect.length > 0) {
    return plainSelect;
  }

  const asyncSelect = wrapper.find(Select.Async);
  if (asyncSelect.length > 0) {
    return asyncSelect;
  }

  throw new Error("Couldn't find Select or Select.Async in wrapper");
}

export function search(wrapper, queryString, callback) {
  findSelect(wrapper).find('.Select-input input').simulate('change', { target: { value: queryString } });
  setTimeout(callback, 0);
}

export function chooseOption(wrapper, optionText) {
  const options = findSelect(wrapper).find('.Select-option');
  const matchingOptions = options.filterWhere((option) => option.text() === optionText);
  matchingOptions.simulate('mouseDown');
}

export function chooseOptionBySearching(wrapper, queryString, optionText, callback) {
  search(wrapper, queryString, () => {
    chooseOption(wrapper, optionText);
    callback();
  });
}
