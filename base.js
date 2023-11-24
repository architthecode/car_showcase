AFRAME.registerComponent("base", {
  schema: {
    radius: { type: "number", default: 150 },
    height: { type: "number", default: 3 },
    rotation_y : {type: "number", default: 0},
  },

  init: function() {
    this.el.setAttribute("geometry", {
      primitive: "cylinder",
      radius: this.data.radius,
      height: this.data.height
    });
    this.el.setAttribute("material", { color: "#1769aa" });
  },
  tick : function() {
    this.data.rotation_y = this.data.rotation_y + 0.5;
    var rotation_y = this.data.rotation_y;
    var rotation = { x: 0, y: rotation_y, z: 0 };
    this.el.setAttribute("rotation", rotation);
  }
});
