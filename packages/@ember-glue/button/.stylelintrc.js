module.exports = {
  extends: 'stylelint-config-recommended',
  rules: {
    'no-empty-source': null,
    'function-calc-no-unspaced-operator': null, // trips up on var(--)
    'function-calc-no-invalid': null // trips up on var(--)
  }
};
