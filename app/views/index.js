import Ember from 'ember';
import RippleEffect from '../mixins/ripple-effect';

export default Ember.View.extend(RippleEffect, {
  didInsertElement: function() {

    var clickPanel = this.$("#target-panel");
    clickPanel.click(function(evt){
      this.rippleOut(evt, clickPanel);
    }.bind(this));
  }
});
