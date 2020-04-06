import Component from '@glimmer/component';
import { action } from '@ember/object';
import { Dropdown } from 'ember-basic-dropdown/addon/components/basic-dropdown';

interface Args {
  renderInPlace?: boolean;
  dropdown: Dropdown;
}

export default class GlueMenuTrigger extends Component<Args> {
  constructor(owner: unknown, args: Args) {
    super(owner, args);
  }

  get renderInPlace(): boolean {
    return this.args.renderInPlace || false;
  }

  @action
  close(): void {
    this.args.dropdown.actions.close();
  }
}
