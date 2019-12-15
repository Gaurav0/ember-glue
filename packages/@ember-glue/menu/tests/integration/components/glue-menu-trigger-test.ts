import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | glue-menu-trigger', function(hooks) {
  setupRenderingTest(hooks);

  test('it works inline with label', async function(assert) {

    await render(hbs`<GlueMenuTrigger title="My Title" @label="Some Text" />`);

    await click('.glue-menu--trigger');

    assert.dom('.glue-menu--trigger').containsText('Some Text');
    assert.dom('.glue-menu--trigger').hasAttribute('title', 'My Title');
  });

  test('it works as a block element', async function(assert) {

    await render(hbs`<GlueMenuTrigger title="My Title">Some Text</GlueMenuTrigger>`);

    await click('.glue-menu--trigger');

    assert.dom('.glue-menu--trigger').containsText('Some Text');
    assert.dom('.glue-menu--trigger').hasAttribute('title', 'My Title');
  });
});
