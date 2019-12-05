import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class GlueButton extends Component {

  @action handleClick() {
    if (typeof this.args.handleClick === 'function') {
      this.args.handleClick();
    }
  }
}
