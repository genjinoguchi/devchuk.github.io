var headroom = new Headroom(elem, {
  "tolerance": 5,
  "offset": 205,
  "classes": {
    "initial": "animated",
    "pinned": "bounceInDown",
    "unpinned": "bounceOutUp",
    "top": "headroom--top",
    "notTop": "headroom--not-top"
  }
});
headroom.init();

// to destroy
headroom.destroy();