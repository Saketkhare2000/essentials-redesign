export const titleAnim = {
  hidden: { y: 200 },
  show: {
    y: 0,
    staggerChildren: 0.25,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};
export const photoAnim = {
  hidden: {
    scale: 1.5,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      ease: "easeOut",
      duration: 0.75,
    },
  },
};
export const fade = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      ease: "easeOut",
      duration: 0.5,
    },
  },
};
