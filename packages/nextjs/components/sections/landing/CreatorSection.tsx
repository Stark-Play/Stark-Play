"use client";

import { motion } from "framer-motion";
import { SocialButton } from "~~/components/shared/social-cta";
import { Card, CardContent } from "~~/components/ui/card";
import {
  Apple,
  Facebook,
  Globe,
  Mail,
  Shield,
  Target,
  Zap,
  Settings,
} from "lucide-react";

export const CreatorSection = () => {
  const features = [
    {
      icon: <Zap className="w-6 h-6 text-blue-700" />,
      title: "Seamless Web3 Integration",
      description:
        "Interact with ease using blockchain-powered features designed for both players and developers.",
    },
    {
      icon: <Target className="w-6 h-6 text-purple-700" />,
      title: "Community-Driven Growth",
      description:
        "Harness the power of the community to amplify your gaming experience or boost your games impact.",
    },
    {
      icon: <Shield className="w-6 h-6 text-blue-700" />,
      title: "Transparent Blockchain Technology",
      description:
        "Trust and transparency are at the core of StarkPlay Hub, powered by Starknet zk-rollup technology.",
    },
  ];

  const socialButtons = [
    {
      icon: <Mail className="w-5 h-5" />,
      provider: "Correo",
      onClick: () => console.log("Email login"),
      className: "bg-teal-600 hover:bg-teal-700 text-white",
    },
    {
      icon: <Globe className="w-5 h-5" />,
      provider: "Google",
      onClick: () => console.log("Google login"),
      className: "bg-teal-600 hover:bg-teal-700 text-white",
    },
    {
      icon: <Facebook className="w-5 h-5" />,
      provider: "Facebook",
      onClick: () => console.log("Facebook login"),
      className: "bg-teal-600 hover:bg-teal-700 text-white",
    },
    {
      icon: <Apple className="w-5 h-5" />,
      provider: "Apple",
      onClick: () => console.log("Apple login"),
      className: "bg-teal-600 hover:bg-teal-700 text-white",
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="relative container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h2 className="text-5xl font-bold text-white mb-6">
            Built by Web3 Innovators for a
            <span className="block gradient-text py-2">
              Thriving Gaming Ecosystem
            </span>
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            Join the first platform that connects gamers and developers in the
            Starknet ecosystem, revolutionizing how games are discovered,
            played, and developed. StarkPlay is your gateway to a future where
            gaming meets blockchain innovation.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Features List */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={`feature-${index}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-2 rounded-xl bg-teal-50">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed pl-14">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Stats Card */}
            <Card className="bg-white shadow-sm border-gray-100">
              <CardContent className="p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-text mb-2">
                      100+
                    </div>
                    <div className="text-gray-600">Verified Games</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-text mb-2">
                      $720M
                    </div>
                    <div className="text-gray-600">Funds Contributed</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CTA Card */}
            <Card className="bg-white border-gray-100 shadow-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Join the Starknet Revolution!
                </h3>
                <p className="text-gray-600 mb-8">
                  Be part of a growing movement to redefine gaming. Whether you
                  are a gamer seeking the next adventure or a developer aiming
                  to make an impact, StarkPlay is your platform to succeed.
                </p>
                <div className="space-y-3">
                  {socialButtons.map((button, index) => (
                    <SocialButton
                      key={`social-${
                        // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                        index
                      }`}
                      {...button}
                      className={`w-full ${button.className}`}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
