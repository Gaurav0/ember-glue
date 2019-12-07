import Component from '@glimmer/component';
import { action } from '@ember/object';

interface Args {
  handleClick?: Function
}

export default class GlueToggle extends Component<Args> {

  constructor(owner: unknown, args: Args) {
    super(owner, args);
  }

  @action handleClick(ev: Event) {
    ev.stopPropagation();
    ev.cancelBubble = true;
    this.toggleSwitch();
    if (typeof this.args.handleClick === 'function') {
      this.args.handleClick();
    }
  }

  @action handleDrag() {}

  toggleSwitch() {}
}
