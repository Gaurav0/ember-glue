import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { TestContext } from 'ember-test-helpers';

type Context = TestContext & { handleClick: () => void };

module('Integration | Component | glue-menu', function(hooks) {
  setupRenderingTest(hooks);

  test('it works as a block element', async function(this: Context, assert) {
    await render(hbs`<GlueMenu title="My Title">My Menu</GlueMenu>`);

    await click('.glue-menu');

    assert.dom('.glue-menu').containsText('My Menu');
  });
});
