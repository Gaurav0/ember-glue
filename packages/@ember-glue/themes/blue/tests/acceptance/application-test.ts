import { module, test } from 'qunit';
import { visit, currentURL, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import a11yAudit from 'ember-a11y-testing/test-support/audit';

module('Acceptance | application', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting /', async function (assert) {
    await visit('/');
    await a11yAudit();

    assert.equal(currentURL(), '/');
    assert.dom('button.glue-button').exists();
    assert.dom('label.glue-toggle').exists();
    assert.dom('input.glue-toggle--checkbox').exists();
    assert.dom('span.glue-toggle--switch').exists();
    assert.dom('div.glue-menu').exists();
    assert.dom('button.glue-menu--trigger').exists();

    await click('button.glue-menu--trigger');

    assert.dom('button.glue-menu--item').exists({ count: 4 });
  });
});
