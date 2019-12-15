import Component from '@glimmer/component';
import { action } from '@ember/object';

interface Args {
  handleClick?: Function
}

interface Args {}

export default class GlueMenuItem extends Component<Args> {
  constructor(owner: unknown, args: Args) {
    super(owner, args);
  }

  @action
  handleClick() {
    if (typeof this.args.handleClick === 'function') {
      this.args.handleClick();
    }
  }
}
