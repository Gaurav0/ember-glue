import Component from '@glimmer/component';
import { action } from '@ember/object';

interface Args {
  handleClick?: Function
}

export default class GlueButton extends Component<Args> {

  constructor(owner: unknown, args: Args) {
    super(owner, args);
  }

  @action handleClick() {
    if (typeof this.args.handleClick === 'function') {
      this.args.handleClick();
    }
  }
}
