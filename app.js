var d = function () {
  function e() {
    var e = new TimelineLite,
      t = d.getElementsByClassName("vortrag");
    return e.staggerTo(t[0].children, 2, {
      scale: 1,
      ease: Back.easeOut
    }, 2), e
  }

  function t() {
    var e = new TimelineLite,
      t = d.getElementsByClassName("hex");
    return TweenLite.set(t, {
      scale: .1,
      rotation: .1,
      autoAlpha: 0
    }), e.to(t, .3, {
      autoAlpha: 1
    }), e.to(t, 7, {
      scale: 1,
      ease: Linear.easeNone,
      autoRound: !1
    }, 0), e.to(t, 6, {
      rotation: 360.2
    }, 1), e.to(t, .3, {
      x: 60,
      ease: Power1.easeInOut
    }, 2.2), e.to(t, 1.8, {
      x: 0,
      ease: Elastic.easeOut
    }, 2.5), e.to(t, 3, {
      rotationX: 360,
      ease: Elastic.easeOut
    }, 3.5), e.to(t, .5, {
      autoAlpha: 0
    }, 7.4), e.to(t, 2.6, {
      autoAlpha: 1
    }), e.to(t, 1, {
      scale: .5
    }, 9), e.to(t, 3, {
      scale: 1
    }, 9.8), e
  }
  var a = new TimelineMax({
      delay: 1.2
    }),
    o = document.body.scrollHeight,
    n = document.documentElement.clientHeight,
    s = !0;
  window.onscroll = function () {
    s && document.body.scrollTop >= .4 * (o - n) && (a.add(e()).add(t(), "-=1.2"), s = !s)
  }
};
d();
