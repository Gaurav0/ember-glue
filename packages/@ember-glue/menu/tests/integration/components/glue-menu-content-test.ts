import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { TestContext } from 'ember-test-helpers';
import { Dropdown } from 'ember-basic-dropdown/components/basic-dropdown';
import { guidFor } from '@ember/object/internals';
import a11yAudit from 'ember-a11y-testing/test-support/audit';

type Context = TestContext & {
  contentComponent: string;
  dropdown: Dropdown;
};

module('Integration | Component | glue-menu-content', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders as a block element', async function (this: Context, assert) {
    this.contentComponent = 'basic-dropdown-content';
    this.dropdown = {
      uniqueId: guidFor(this),
      isOpen: true,
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
      <GlueMenuContent
        title="My Title"
        @renderInPlace={{true}}
        @contentComponent={{component this.contentComponent dropdown=this.dropdown}}
      >
        Some Text
      </GlueMenuContent>
    `);
    await a11yAudit();

    assert.dom('.glue-menu--content').containsText('Some Text');
    assert.dom('.glue-menu--content').hasAttribute('title', 'My Title');
  });

  test('it yields the glue-menu-item component', async function (this: Context, assert) {
    this.contentComponent = 'basic-dropdown-content';
    this.dropdown = {
      uniqueId: guidFor(this),
      isOpen: true,
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
      <GlueMenuContent
        title="My Title"
        @renderInPlace={{true}}
        @contentComponent={{component this.contentComponent dropdown=this.dropdown}}
        as |mc|
      >
        Some Text
        <mc.Item>Item 1</mc.Item>
        <mc.Item>Item 2</mc.Item>
      </GlueMenuContent>
    `);
    await a11yAudit();

    assert.dom('.glue-menu--content').containsText('Some Text');
    assert.dom('.glue-menu--content').hasAttribute('title', 'My Title');
    assert.dom('.glue-menu--content:first-child').containsText('Item 1');
    assert.dom('.glue-menu--content:last-child').containsText('Item 1');
  });
});
