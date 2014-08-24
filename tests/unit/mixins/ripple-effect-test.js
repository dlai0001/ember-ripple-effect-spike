import Ember from 'ember';
import RippleEffectMixin from 'ember-ripple-effect-spike/mixins/ripple-effect';

module('RippleEffectMixin');

// Replace this with your real tests.
test('it works', function() {
  var RippleEffectObject = Ember.Object.extend(RippleEffectMixin);
  var subject = RippleEffectObject.create();
  ok(subject);
});
