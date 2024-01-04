import React from 'react';
import { motion } from "framer-motion";

export default function Dashboard() {
  return(
    <motion.div
  animate={{ x: [0, 100, 0] }}
>
<h2>Dashboard</h2>
</motion.div>
    
  );
}