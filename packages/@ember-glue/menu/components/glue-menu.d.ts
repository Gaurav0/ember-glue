import Component from '@glimmer/component';
import { Dropdown } from 'ember-basic-dropdown/addon/components/basic-dropdown';
interface Args {
}
export default class GlueMenuTrigger extends Component<Args> {
    dropdown: Dropdown | null;
    constructor(owner: unknown, args: Args);
    onOpen(dropdown: Dropdown): void;
}
export {};
