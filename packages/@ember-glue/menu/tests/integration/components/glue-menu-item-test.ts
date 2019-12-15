import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { TestContext } from 'ember-test-helpers';

type Context = TestContext & { handleClick: () => void };

module('Integration | Component | glue-menu-item', function(hooks) {
  setupRenderingTest(hooks);

  test('it works inline with label', async function(this: Context, assert) {
    let clickCalled = 0;
    this.handleClick = () => {
      clickCalled++;
    };

    await render(hbs`<GlueMenuItem title="My Title" @label="Some Text" @handleClick={{action this.handleClick}} />`);

    await click('.glue-menu--item');

    assert.dom('.glue-menu--item').containsText('Some Text');
    assert.dom('.glue-menu--item').hasAttribute('title', 'My Title');
    assert.equal(clickCalled, 1, 'handleClick was called once');
  });

  test('it works as a block element', async function(this: Context, assert) {
    let clickCalled = 0;
    this.handleClick = () => {
      clickCalled++;
    };

    await render(hbs`<GlueMenuItem title="My Title" @handleClick={{action this.handleClick}}>Some Text</GlueMenuItem>`);

    await click('.glue-menu--item');

    assert.dom('.glue-menu--item').containsText('Some Text');
    assert.dom('.glue-menu--item').hasAttribute('title', 'My Title');
    assert.equal(clickCalled, 1, 'handleClick was called once');
  });
});
