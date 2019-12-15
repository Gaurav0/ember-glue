import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { TestContext } from 'ember-test-helpers';

type Context = TestContext & { triggerClick: () => void };

module('Integration | Component | glue-menu-trigger', function(hooks) {
  setupRenderingTest(hooks);

  test('it works inline with label', async function(this: Context, assert) {
    let clickCalled = 0;
    this.triggerClick = () => {
      clickCalled++;
    };

    await render(hbs`<GlueMenuTrigger title="My Title" @label="Some Text" @triggerClick={{action this.triggerClick}} />`);

    await click('.glue-menu--trigger');

    assert.dom('.glue-menu--trigger').containsText('Some Text');
    assert.dom('.glue-menu--trigger').hasAttribute('title', 'My Title');
    assert.equal(clickCalled, 1, 'triggerClick was called once');
  });

  test('it works as a block element', async function(this: Context, assert) {
    let clickCalled = 0;
    this.triggerClick = () => {
      clickCalled++;
    };

    await render(hbs`<GlueMenuTrigger title="My Title" @triggerClick={{action this.triggerClick}}>Some Text</GlueMenuTrigger>`);

    await click('.glue-menu--trigger');

    assert.dom('.glue-menu--trigger').containsText('Some Text');
    assert.dom('.glue-menu--trigger').hasAttribute('title', 'My Title');
    assert.equal(clickCalled, 1, 'triggerClick was called once');
  });
});
