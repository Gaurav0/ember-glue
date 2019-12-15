import Component from '@glimmer/component';
import { action } from '@ember/object';

interface Args {}

export default class GlueMenu extends Component<Args> {
  open: boolean = false;

  constructor(owner: unknown, args: Args) {
    super(owner, args);
  }

  @action triggerClick() {
    this.open = !this.open;
  }
}
