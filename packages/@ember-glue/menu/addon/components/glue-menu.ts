import Component from '@glimmer/component';
import { action } from '@ember/object';

interface Args {
  handleClick?: Function
}

export default class GlueMenu extends Component<Args> {

  constructor(owner: unknown, args: Args) {
    super(owner, args);
  }

  @action handleClick() {
    this.toggleSwitch();
    if (typeof this.args.handleClick === 'function') {
      this.args.handleClick();
    }
  }

  @action handleDrag() {}

  toggleSwitch() {}
}
