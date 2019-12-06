import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click, settled } from '@ember/test-helpers';
import { hbs }from 'ember-cli-htmlbars';

module('Integration | Component | glue-button', function(hooks) {
  setupRenderingTest(hooks);

  test('it works with label', async function(assert) {
    let clickCalled = 0;
    this.handleClick = () => {
      clickCalled++;
    };

    await render(hbs`<GlueButton title="My Title" @label="My Button" @handleClick={{action this.handleClick}} />`);
    await settled();
    await click('.glue-button');

    assert.dom('.glue-button').containsText('My Button');
    assert.dom('.glue-button').hasAttribute('title', 'My Title');
    assert.equal(clickCalled, 1, 'handleClick was called once');
  });
});
