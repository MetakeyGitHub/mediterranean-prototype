import { motion, useReducedMotion } from "framer-motion";

const variants = {
  up: { hidden: { opacity: 0, y: 48 }, show: { opacity: 1, y: 0 } },
  left: { hidden: { opacity: 0, x: -48 }, show: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: 48 }, show: { opacity: 1, x: 0 } },
  scale: { hidden: { opacity: 0, scale: 0.92 }, show: { opacity: 1, scale: 1 } },
};

export default function SectionReveal({
  children,
  as: Component = "div",
  variant = "up",
  delay = 0,
  duration = 0.9,
  amount = 0.25,
  className,
  ...rest
}) {
  const reduce = useReducedMotion();
  const MotionComp = motion[Component] || motion.div;

  if (reduce) {
    return (
      <Component className={className} {...rest}>
        {children}
      </Component>
    );
  }

  return (
    <MotionComp
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
      variants={variants[variant] || variants.up}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </MotionComp>
  );
}
