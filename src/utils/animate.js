const easingEquations = {
  linear: pos => pos,

  easeInQuad: pos => pos ** 2,

  easeOutQuad: pos => -(((pos - 1) ** 2) - 1),

  easeInOutQuad: (pos) => {
    let deltaPos = pos / 0.5;

    if (deltaPos < 1) {
      return 0.5 * (pos ** 2);
    }

    deltaPos -= 2;

    return -0.5 * (deltaPos * deltaPos - 2);
  },
};

const animate = (draw = () => {}, easing = 'easeInQuad', duration = 1000) => {
  const start = performance.now();

  const tick = (time) => {
    let deltaTime = (time - start) / duration;

    if (deltaTime > 1) {
      deltaTime = 1;
    }

    draw(easingEquations[easing](deltaTime));

    if (deltaTime < 1) {
      requestAnimationFrame(tick);
    }
  };

  // TODO возможно, нужен полифил
  requestAnimationFrame(tick);
};

export default animate;
