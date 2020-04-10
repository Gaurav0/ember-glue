// Types for compiled templates
declare module '@ember-glue/button/templates/*' {
  import { TemplateFactory } from 'htmlbars-inline-precompile';
  const tmpl: TemplateFactory;
  export default tmpl;
}

declare module 'ember-a11y-testing/test-support/audit';
