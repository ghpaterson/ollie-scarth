export const pageTransition = {
  hidden: {
    opacity: 0,
    y: 30,
    transition: {
      duration: 2,
      ease: "easeIn",
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeIn",
      delayChildren: 1,
    },
  },
};

export const elementFade = {
  hidden: {
    opacity: 0,
    y: 5,
    transition: {
      duration: 2,
      ease: "easeIn",
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 2,
      ease: "easeIn",
      delayChildren: 1,
    },
  },
};

export const heroImageFade = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeIn",
    },
  },
};

export const imageReveal = {
  hidden: {
    height: 0,
  },
  show: {
    height: "100%",
    transition: {
      duration: 2,
      ease: [],
    },
  },
};
