import React from 'react';
import { motion , useMotionValue, useTransform , useAnimate} from "framer-motion";


export default function Dashboard() {

  const [scope, animate] = useAnimate()
  const count = useMotionValue(0)
  const rounded = useTransform(count, latest => Math.round(latest))

  React.useEffect(() => {
    const controls = animate(count, 100)
  
    return controls.stop
  }, [])

  return(
    <motion.div animate={{ x: [0, 100, 0] }} >
      

      <motion.circle cx={500} animate={{ cx: [null, 100, 200] }} transition={{ duration: 3, times: [0, 0.2, 1] }} >
      <motion.div>{rounded}</motion.div>
      </motion.circle>
      <motion.button initial={{ opacity: 0.6 }} whileHover={{ scale: 1.2, transition: { duration: 1 },}} whileTap={{ scale: 0.9 }} whileInView={{ opacity: 1 }}> logout </motion.button>
    </motion.div>
    
  );
}