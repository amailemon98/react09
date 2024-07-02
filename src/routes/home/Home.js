import React from 'react'
import { motion } from 'framer-motion'
import Tabs from '../../components/tabs/Tabs'
import Accordion from '../../components/accordion/Accordion'
import Slider from '../../components/slider/Slider'

const Home = () => {
  return (
    <div style={{ display : 'flex', flexDirection : 'column', gap : '50px' }}>
        {/* <motion.div
                initial={{ x : 1000 }}
                animate={{ x : 0 }}
        > Home </motion.div>

        <Tabs />
        <Accordion /> */}
        <Slider />
    </div>
  )
}

export default Home