import React from 'react';
import { motion } from "framer-motion";

export default function Dashboard() {
  return(
    <motion.div animate={{ x: [0, 100, 0] }} >
      <h2>Let us learn animation</h2>
      <motion.circle cx={500} animate={{ cx: [null, 100, 200] }} transition={{ duration: 3, times: [0, 0.2, 1] }} >
        k
      </motion.circle>
      <motion.button initial={{ opacity: 0.6 }} whileHover={{ scale: 1.2, transition: { duration: 1 },}} whileTap={{ scale: 0.9 }} whileInView={{ opacity: 1 }}> logout </motion.button>
    </motion.div>
    
  );
}