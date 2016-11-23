export function search(select, queryString, callback) {
  select.find('input').simulate('change', { target: { value: queryString } });
  setTimeout(() => { callback(); }, 0);
}

export function chooseOption(select, optionText) {
  const options = select.find('.Select-option span');
  const matchingOptions = options.findWhere((option) => {
    return option.text() === optionText;
  });
  matchingOptions.simulate('mouseDown');
}

export function chooseOptionBySearching(select, queryString, optionText, callback) {
  search(select, queryString, () => {
    chooseOption(select, optionText);
    callback();
  });
}

export default {
  search,
  chooseOption,
  chooseOptionBySearching
};