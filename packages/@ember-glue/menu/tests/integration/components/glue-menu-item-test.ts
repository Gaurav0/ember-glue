import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { TestContext } from 'ember-test-helpers';
import a11yAudit from 'ember-a11y-testing/test-support/audit';

type Context = TestContext & { handleClick: () => void; close: () => void };

module('Integration | Component | glue-menu-item', function (hooks) {
  setupRenderingTest(hooks);

  test('it works inline with label', async function (this: Context, assert) {
    let clickCalled = 0;
    this.handleClick = (): void => {
      clickCalled++;
    };
    this.close = (): void => {
      // no body
    };

    await render(hbs`
      <GlueMenuItem
        title="My Title"
        @label="Some Text"
        @handleClick={{this.handleClick}}
        @close={{this.close}}
      />
    `);
    await a11yAudit();

    await click('.glue-menu--item');
    await a11yAudit();

    assert.dom('.glue-menu--item').containsText('Some Text');
    assert.dom('.glue-menu--item').hasAttribute('title', 'My Title');
    assert.equal(clickCalled, 1, 'handleClick was called once');
  });

  test('it works as a block element', async function (this: Context, assert) {
    let clickCalled = 0;
    this.handleClick = (): void => {
      clickCalled++;
    };
    this.close = (): void => {
      // no body
    };

    await render(hbs`
      <GlueMenuItem
        title="My Title"
        @handleClick={{this.handleClick}}
        @close={{this.close}}
      >
        Some Text
      </GlueMenuItem>
    `);
    await a11yAudit();

    await click('.glue-menu--item');
    await a11yAudit();

    assert.dom('.glue-menu--item').containsText('Some Text');
    assert.dom('.glue-menu--item').hasAttribute('title', 'My Title');
    assert.equal(clickCalled, 1, 'handleClick was called once');
  });
});
