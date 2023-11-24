AFRAME.registerComponent("car-model", {
  schema: {
    modelRef: { type: "string", default: "./car/scene.gltf" },
    rotation_y : {type: "number", default: 0},
  },
  init: function() {
    this.el.setAttribute("gltf-model", this.data.modelRef);
    var position = { x: 0, y: 50, z: 80 };
    this.el.setAttribute("position", position);
  },
  tick : function() {
    this.data.rotation_y = this.data.rotation_y + 0.5;
    var rotation_y = this.data.rotation_y;
    var rotation = { x: 0, y: rotation_y, z: 0 };
    this.el.setAttribute("rotation", rotation);
  }
});
