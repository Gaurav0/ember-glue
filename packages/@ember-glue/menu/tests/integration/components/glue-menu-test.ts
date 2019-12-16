import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | glue-menu', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders as a block element', async function(assert) {
    await render(hbs`<GlueMenu title="My Title">My Menu</GlueMenu>`);

    assert.dom('.glue-menu').containsText('My Menu');
  });

  test('it shows content only after clicking on trigger', async function(assert) {
    await render(hbs`
      <GlueMenu title="My Title" as |menu|>
        My Menu
        <menu.Trigger>My Trigger</menu.Trigger>
        <menu.Content @renderInPlace={{true}}>My Content</menu.Content>
      </GlueMenu>
    `);

    assert.dom('.glue-menu').containsText('My Menu');
    assert.dom('.glue-menu--trigger').containsText('My Trigger');
    assert.dom('.glue-menu--content').isNotVisible;

    await click ('.glue-menu--trigger');

    assert.dom('.glue-menu').containsText('My Menu');
    assert.dom('.glue-menu--trigger').containsText('My Trigger');
    assert.dom('.glue-menu--content').isVisible;
    assert.dom('.glue-menu--content').containsText('My Content');
  });

  test('Upon clicking an item, it closes', async function(assert) {
    await render(hbs`
      <GlueMenu title="My Title" as |menu|>
        My Menu
        <menu.Trigger>My Trigger</menu.Trigger>
        <menu.Content @renderInPlace={{true}} as |mc|>
          <mc.Item>Item 1</mc.Item>
        </menu.Content>
      </GlueMenu>
    `);

    assert.dom('.glue-menu').containsText('My Menu');
    assert.dom('.glue-menu--trigger').containsText('My Trigger');
    assert.dom('.glue-menu--content').isNotVisible;

    await click ('.glue-menu--trigger');

    assert.dom('.glue-menu').containsText('My Menu');
    assert.dom('.glue-menu--trigger').containsText('My Trigger');
    assert.dom('.glue-menu--content').isVisible;
    assert.dom('.glue-menu--item').containsText('Item 1');

    await click ('.glue-menu--item');

    assert.dom('.glue-menu--content').isNotVisible;
  });
});
