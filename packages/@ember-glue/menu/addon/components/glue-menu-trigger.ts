import Component from '@glimmer/component';

interface Args {
  triggerComponent: any;
}

export default class GlueMenuTrigger extends Component<Args> {
  constructor(owner: unknown, args: Args) {
    super(owner, args);
  }

  get triggerComponent() {
    return this.args.triggerComponent;
  }
}
