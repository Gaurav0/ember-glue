import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { TestContext } from 'ember-test-helpers';

type Context = TestContext & { triggerComponent: any };

module('Integration | Component | glue-menu-trigger', function(hooks) {
  setupRenderingTest(hooks);

  test('it works inline with label', async function(this: Context, assert) {
    this.triggerComponent = 'basic-dropdown-trigger';

    await render(hbs`<GlueMenuTrigger title="My Title" @label="Some Text" @triggerComponent={{component this.triggerComponent}} />`);

    await click('.glue-menu--trigger');

    assert.dom('.glue-menu--trigger').containsText('Some Text');
    assert.dom('.glue-menu--trigger').hasAttribute('title', 'My Title');
  });

  test('it works as a block element', async function(this: Context, assert) {
    this.triggerComponent = 'basic-dropdown-trigger';

    await render(hbs`<GlueMenuTrigger title="My Title" @triggerComponent={{component this.triggerComponent}}>Some Text</GlueMenuTrigger>`);

    await click('.glue-menu--trigger');

    assert.dom('.glue-menu--trigger').containsText('Some Text');
    assert.dom('.glue-menu--trigger').hasAttribute('title', 'My Title');
  });
});
