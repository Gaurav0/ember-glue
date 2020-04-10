import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { TestContext } from 'ember-test-helpers';

type Context = TestContext & { handleClick: () => void };

module('Integration | Component | glue-toggle', function (hooks) {
  setupRenderingTest(hooks);

  test('it works inline with label', async function (this: Context, assert) {
    let clickCalled = 0;
    this.handleClick = (): void => {
      clickCalled++;
    };

    await render(
      hbs`<GlueToggle title="My Title" @label="My Toggle" @handleClick={{this.handleClick}} />`
    );

    await click('.glue-toggle');

    assert.dom('.glue-toggle').containsText('My Toggle');
    assert.dom('.glue-toggle').hasAttribute('title', 'My Title');
    assert.equal(clickCalled, 1, 'handleClick was called once');
  });

  test('it works as a block element', async function (this: Context, assert) {
    let clickCalled = 0;
    this.handleClick = (): void => {
      clickCalled++;
    };

    await render(
      hbs`<GlueToggle title="My Title" @handleClick={{this.handleClick}}>My Toggle</GlueToggle>`
    );

    await click('.glue-toggle');

    assert.dom('.glue-toggle').containsText('My Toggle');
    assert.dom('.glue-toggle').hasAttribute('title', 'My Title');
    assert.equal(clickCalled, 1, 'handleClick was called once');
  });
});
