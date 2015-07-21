import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'borrowers/tests/helpers/start-app';

var application;

module('Acceptance | friends/new', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting /friends/new', function(assert) {
  visit('/friends/new');

  andThen(function() {
    assert.equal(currentURL(), '/friends/new');
  });
});

test('Creating a new friend', function(assert) {
  visit('/');

  click('a[href="/friends/new"]');

  andThen(function() {
    assert.equal(currentPath(), 'friends.new');
  });

  fillIn('input[placeholder="First Name"]', 'Johnny');
  fillIn('input[placeholder="Last Name"]', 'Arkham');
  fillIn('input[placeholder="Email"]', 'j@ark.ham');
  fillIn('input[placeholder="Twitter"]', 'jark');
  click('input[value="Save"]');

  andThen(function() {
    assert.equal(
      currentRouteName(),
      'friends.show.index',
      'Redirects to friends.show after create'
    );
  });
});

test('Clicking without filling all fields', function(assert) {
  visit('/');

  click('a[href="/friends/new"]');

  andThen(function() {
    assert.equal(currentPath(), 'friends.new');
  });

  fillIn('input[placeholder="First Name"]', 'Johnny');
  fillIn('input[placeholder="Last Name"]', 'Arkham');
  click('input[value="Save"]');

  andThen(function() {
    assert.equal(
      currentRouteName(),
      'friends.new',
      'Remains on the same page'
    );

    assert.equal(
      find('h2:contains(You have to fill all the fields)').length,
      1,
      'Displays error message'
    );
  });
});
