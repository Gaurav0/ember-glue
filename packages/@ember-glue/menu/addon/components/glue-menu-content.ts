import Component from '@glimmer/component';

interface Args {
  renderInPlace?: boolean;
}

export default class GlueMenuTrigger extends Component<Args> {
  constructor(owner: unknown, args: Args) {
    super(owner, args);
  }

  get renderInPlace() {
    return this.args.renderInPlace || false;
  }
}
