import Ember from 'ember';

export default Ember.Mixin.create({
  rippleOut: function(evt, targetElement) {
    console.log("rippling out on ", evt);
    console.log("targetElement", targetElement);

//    var rippleSvg = $("<circle></circle>");
//    rippleSvg.prop('cx', evt.offsetX);
//    rippleSvg.prop('cy', evt.offsetY);

    var svgImg = this.$("<svg><g id=\"two\"> <circle fill=\"rgba(255,255,255,0.3)\" " +
        "cx=\"" + evt.offsetX + "\" cy=\"" + evt.offsetY +  "\" r=\"20\"/> </g></svg>");
    svgImg.css("position", "absolute");
    svgImg.css("float", "left");
    svgImg.css("left", "0px");
    svgImg.css("top", "0px");
    svgImg.prop("background","red");
    svgImg.prop("z-index", 100);
    targetElement.append(svgImg);


    var c = this.$(svgImg).find("circle");
    c.animate({
      "r" : this.$(svgImg).outerWidth()
    }, {
      duration: 400,
      step : function(val){
        c.attr("r", val);
      },
      complete:  function() {
        console.log("removing");
        svgImg.remove();
      }
    });

  }
});

