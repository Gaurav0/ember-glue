import Component from '@glimmer/component';
import { Dropdown } from 'ember-basic-dropdown/addon/components/basic-dropdown';
interface Args {
    renderInPlace?: boolean;
    dropdown: Dropdown;
}
export default class GlueMenuTrigger extends Component<Args> {
    constructor(owner: unknown, args: Args);
    get renderInPlace(): boolean;
    close(): void;
}
export {};
