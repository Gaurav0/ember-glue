import Component from '@glimmer/component';
interface Args {
    close: Function;
    handleClick?: Function;
}
interface Args {
}
export default class GlueMenuItem extends Component<Args> {
    constructor(owner: unknown, args: Args);
    handleClick(): void;
}
export {};
