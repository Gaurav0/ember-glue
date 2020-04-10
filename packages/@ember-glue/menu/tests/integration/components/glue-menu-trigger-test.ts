import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { TestContext } from 'ember-test-helpers';
import { Dropdown } from 'ember-basic-dropdown/components/basic-dropdown';
import { guidFor } from '@ember/object/internals';

type Context = TestContext & {
  triggerComponent: string;
  dropdown: Dropdown;
};

module('Integration | Component | glue-menu-trigger', function (hooks) {
  setupRenderingTest(hooks);

  test('it works inline with label', async function (this: Context, assert) {
    this.triggerComponent = 'basic-dropdown-trigger';
    this.dropdown = {
      uniqueId: guidFor(this),
      isOpen: false,
      disabled: false,
      actions: {
        toggle(): void {
          /* no body */
        },
        close(): void {
          /* no body */
        },
        open(): void {
          /* no body */
        },
        reposition(...args): undefined {
          args;
          return undefined;
        },
      },
    };

    await render(hbs`
      <GlueMenuTrigger
        title="My Title"
        @label="Some Text"
        @triggerComponent={{component this.triggerComponent dropdown=this.dropdown}}
      />
    `);
    await click('.glue-menu--trigger');

    assert.dom('.glue-menu--trigger').containsText('Some Text');
    assert.dom('.glue-menu--trigger').hasAttribute('title', 'My Title');
  });

  test('it works as a block element', async function (this: Context, assert) {
    this.triggerComponent = 'basic-dropdown-trigger';
    this.dropdown = {
      uniqueId: guidFor(this),
      isOpen: false,
      disabled: false,
      actions: {
        toggle(): void {
          /* no body */
        },
        close(): void {
          /* no body */
        },
        open(): void {
          /* no body */
        },
        reposition(...args): undefined {
          args;
          return undefined;
        },
      },
    };

    await render(hbs`
      <GlueMenuTrigger
        title="My Title"
        @triggerComponent={{component this.triggerComponent dropdown=this.dropdown}}
      >
        Some Text
      </GlueMenuTrigger>
    `);

    await click('.glue-menu--trigger');

    assert.dom('.glue-menu--trigger').containsText('Some Text');
    assert.dom('.glue-menu--trigger').hasAttribute('title', 'My Title');
  });
});
