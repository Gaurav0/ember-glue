import Component from '@glimmer/component';
interface Args {
    handleClick?: Function;
}
export default class GlueButton extends Component<Args> {
    constructor(owner: unknown, args: Args);
    handleClick(): void;
}
export {};
