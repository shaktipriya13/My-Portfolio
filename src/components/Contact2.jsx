import React from 'react';
import { motion } from 'framer-motion';
// import css from "../components/index.css"
const Contact2 = () => {
    return (
        <motion.section 
            className="text-white-600 body-font relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-12">
                    <motion.h1
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: -100 }}
                        transition={{ duration: 0.5 }}
                        className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white"
                    >
                        Get in Touch
                    </motion.h1>
                    <motion.p
                        whileInView={{ opacity: 1 }}
                        initial={{ opacity: 0 }}
                        transition={{ duration: 0.5, delay: 0.01 }}
                        className="lg:w-2/3 mx-auto leading-relaxed text-base text-white"
                    >
                        Let's TEAM up for an Amazing project!
                    </motion.p>
                </div>
                <motion.div
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 50 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="lg:w-1/2 md:w-2/3 mx-auto"
                >
                    <form action="https://formspree.io/f/mzzpbgpb" method="POST">
                        <div className="flex flex-wrap -m-2">
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label htmlFor="name" className="leading-7 text-sm text-white-600">Name</label>
                                    <input type="text" id="name" name="name" className="w-full bg-white-100 bg-opacity-50 rounded border border-white-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-white-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out text-black" />
                                </div>
                            </div>
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label htmlFor="email" className="leading-7 text-sm text-white-600">Email</label>
                                    <input type="email" id="email" name="email" className="w-full bg-white-100 bg-opacity-50 rounded border border-white-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-white-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out text-black" />
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label htmlFor="message" className="leading-7 text-sm text-white-600">Message</label>
                                    <textarea id="message" name="message" className="w-full bg-white-100 bg-opacity-50 rounded border border-white-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 h-32 text-base outline-none text-white-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out text-black" />
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <button className="flex mx-auto text-white bg-purple-500 border-0 py-2 px-8 focus:outline-none hover:bg-purple-600 rounded text-lg">SUBMIT</button>
                            </div>
                            <div className="p-2 w-full pt-8 mt-8 border-t border-white-200 text-center">
                                <a className="text-purple-500">priyashakti68@email.com</a>
                                <p className="leading-normal my-5">Jharkhand, INDIA</p>
                            </div>
                        </div>
                    </form>
                </motion.div>
            </div>
        </motion.section>
    );
}

export default Contact2;
