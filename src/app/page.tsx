"use client";

import { homepageContent } from "@/content/homepage";
import { ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import Spline from "@splinetool/react-spline";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedText from "@/components/AnimatedText";
import Header from "@/components/Header";

export default function HomePage() {
  const {
    hero,
    coreComponents,
    memoryConcept,
    crossChain,
    iobExplanation,
    community,
    finalCta,
  } = homepageContent;

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
        {/* 3D Background */}
        <div className="absolute inset-0 z-0 scale-90 origin-center">
          <Spline scene="https://prod.spline.design/vQLHTozlITRVd8JV/scene.splinecode" />{" "}
        </div>

        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20 z-10 pointer-events-none"></div>

        {/* Glassy effect section to hide Spline attribution */}
        <div className="absolute bottom-0 left-0 w-full h-24 z-50  bg-black/100 "></div>

        {/* Content */}
        <div className="absolute bottom-20 left-0 right-0 z-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-8xl font-display tracking-tight text-white mb-8"
              style={{ color: "#ffffff" }}
            >
              NUCLEUS IOB
            </h1>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-7xl font-display tracking-tight mb-8 text-white">
              INTERNET OF BLOCKCHAINS
            </h2>
          </div>
        </div>
      </section>

      {/* Core Components Section */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: "#000000" }}
      >
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl font-display mb-6 text-white"
            >
              {coreComponents.title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-elegant text-muted-foreground max-w-2xl mx-auto"
            >
              {coreComponents.description}
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreComponents.components.map((component, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  rotateY: 5,
                  transition: { duration: 0.3 },
                }}
                className="relative overflow-hidden group hover:shadow-2xl transition-all duration-500 bg-black backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-white"
              >
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-gray-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Floating particles effect */}
                <div className="absolute inset-0 overflow-hidden">
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                      opacity: [0.3, 0.8, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.5,
                    }}
                    className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full"
                  />
                  <motion.div
                    animate={{
                      y: [0, 10, 0],
                      opacity: [0.2, 0.6, 0.2],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: index * 0.3,
                    }}
                    className="absolute bottom-6 left-6 w-1 h-1 bg-purple-400 rounded-full"
                  />
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className="w-16 h-16 rounded-2xl bg-gray-800 flex items-center justify-center border border-gray-600"
                    >
                      <span className="text-3xl">{component.icon}</span>
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">
                        {component.title}
                      </h3>
                    </div>
                  </div>
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-gray-300 leading-relaxed"
                  >
                    {component.description}
                  </motion.p>
                </div>

                {/* Animated border effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Memory Concept Section */}
      <section
        className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{ backgroundColor: "#000000" }}
      >
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 to-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-800/20 via-transparent to-transparent"></div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full"
              animate={{
                x: [0, Math.random() * 100, 0],
                y: [0, Math.random() * 100, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="text-8xl block mb-8 text-white"
              >
                {memoryConcept.icon}
              </motion.span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-display mb-8 text-white"
            >
              {memoryConcept.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed"
            >
              {memoryConcept.description}
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {memoryConcept.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
                  whileHover={{
                    scale: 1.05,
                    rotateY: 10,
                    transition: { duration: 0.3 },
                  }}
                  className="relative group"
                >
                  <div className="bg-black backdrop-blur-sm rounded-3xl p-8 border border-gray-800 hover:border-white transition-all duration-500 h-full">
                    {/* Animated background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-gray-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

                    <div className="relative z-10">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.6 }}
                        className="text-6xl mb-6 block"
                      >
                        {feature.icon}
                      </motion.div>
                      <h3 className="text-2xl font-bold mb-4 text-white">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What is IOB Section */}
      <section
        className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{ backgroundColor: "#000000" }}
      >
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800/30 to-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-700/10 via-transparent to-transparent"></div>

        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.1)_50%,transparent_100%)] bg-[length:50px_50px] animate-pulse"></div>
        </div>

        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display mb-8 text-white">
              {iobExplanation.title}
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              {iobExplanation.description}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-3xl font-bold mb-8 text-white">
                Key Features
              </h3>
              <div className="space-y-6">
                {iobExplanation.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="flex items-start gap-4 p-4 rounded-2xl bg-black backdrop-blur-sm border border-gray-800 hover:border-white transition-all duration-300"
                  >
                    <motion.span
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6 }}
                      className="text-3xl flex-shrink-0"
                    >
                      {feature.icon}
                    </motion.span>
                    <span className="text-lg text-gray-200 font-medium">
                      {feature.title}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="relative"
            >
              <div className="bg-black backdrop-blur-sm rounded-3xl p-12 border border-gray-800 hover:border-white transition-all duration-500">
                {/* Animated background glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-gray-500/5 rounded-3xl opacity-0 hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10 text-center">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="text-8xl mb-8 block"
                  >
                    🌐
                  </motion.div>
                  <h4 className="text-2xl font-bold mb-4 text-white">
                    {iobExplanation.highlight.title}
                  </h4>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {iobExplanation.highlight.description}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section
        className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{ backgroundColor: "#000000" }}
      >
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 to-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gray-800/10 via-transparent to-transparent"></div>

        {/* Floating orbs */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-4 h-4 bg-white/10 rounded-full blur-sm"
              animate={{
                x: [0, Math.random() * 200 - 100, 0],
                y: [0, Math.random() * 200 - 100, 0],
                scale: [0.5, 1, 0.5],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: Math.random() * 8 + 8,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display mb-8 text-white">
              {community.title}
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              {community.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.div
                whileHover={{ scale: 1.05, rotateY: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={community.cta.primary.href}
                  target="_blank"
                  className="inline-flex items-center justify-center px-10 py-4 text-lg font-bold rounded-2xl bg-gray-800 text-white hover:bg-gray-700 transition-all duration-300 shadow-2xl"
                >
                  {community.cta.primary.text}
                  <ArrowRight className="ml-3 h-5 w-5" />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, rotateY: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={community.cta.secondary.href}
                  target="_blank"
                  className="inline-flex items-center justify-center px-10 py-4 text-lg font-bold rounded-2xl border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 hover:border-white/50 transition-all duration-300"
                >
                  {community.cta.secondary.text}
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section
        className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{ backgroundColor: "#000000" }}
      >
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800/30 to-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700/10 via-transparent to-transparent"></div>

        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(25)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full"
              animate={{
                x: [0, Math.random() * 300 - 150, 0],
                y: [0, Math.random() * 300 - 150, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 12 + 8,
                repeat: Infinity,
                delay: Math.random() * 4,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display mb-8 text-white">
              {finalCta.title}
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              {finalCta.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.div
                whileHover={{ scale: 1.05, rotateY: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={finalCta.cta.primary.href}
                  className="inline-flex items-center justify-center px-12 py-5 text-xl font-bold rounded-2xl bg-gray-800 text-white hover:bg-gray-700 transition-all duration-300 shadow-2xl"
                >
                  {finalCta.cta.primary.text}
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, rotateY: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={finalCta.cta.secondary.href}
                  className="inline-flex items-center justify-center px-12 py-5 text-xl font-bold rounded-2xl border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 hover:border-white/50 transition-all duration-300"
                >
                  {finalCta.cta.secondary.text}
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
