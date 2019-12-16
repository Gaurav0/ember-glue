'use strict';

module.exports = {
  name: require('./package').name,

  included() {
    this._super.included.apply(this, arguments);

    this.import('vendor/styles/menu.css', { prepend: true });
  },

  contentFor(type, config) {
    let emberBasicDropdown = this.addons.find(
      addon => addon.name === 'ember-basic-dropdown'
    );
    return emberBasicDropdown.contentFor(type, config);
  }
};
