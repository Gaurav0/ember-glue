import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { Dropdown } from 'ember-basic-dropdown/addon/components/basic-dropdown';

interface Args {}

export default class GlueMenuTrigger extends Component<Args> {
  @tracked
  dropdown: Dropdown | null = null;

  constructor(owner: unknown, args: Args) {
    super(owner, args);
  }

  @action
  onOpen(dropdown: Dropdown) {
    this.dropdown = dropdown;
  }
}
