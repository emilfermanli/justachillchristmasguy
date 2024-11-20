"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ChevronDown,
  ChevronUp,
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";
import HeroImage from "@/public/sticker.webp";
import Image from "next/image";

const TwinklingLights = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-yellow-300 rounded-full animate-twinkle"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        />
      ))}
    </div>
  );
};

export default function Component() {
  const [stakingAmount, setStakingAmount] = useState("");
  const [stakingPeriod, setStakingPeriod] = useState("");
  const [reward, setReward] = useState(0);

  const calculateReward = () => {
    const amount = parseFloat(stakingAmount);
    const period = parseFloat(stakingPeriod);
    if (isNaN(amount) || isNaN(period)) {
      setReward(0);
      return;
    }
    // Simple reward calculation (adjust as needed)
    const calculatedReward = amount * (period / 12) * 0.1;
    setReward(calculatedReward);
  };

  return (
    <div className="min-h-screen bg-white text-green-900 overflow-hidden">
      <style jsx global>{`
        @keyframes snowfall {
          0% {
            transform: translateY(-10vh);
          }
          100% {
            transform: translateY(100vh);
          }
        }
        .snowflake {
          position: fixed;
          top: -10vh;
          animation: snowfall 10s linear infinite;
        }
        @keyframes twinkle {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
        .animate-twinkle {
          animation: twinkle 2s ease-in-out infinite;
        }
      `}</style>
      {[...Array(50)].map((_, index) => (
        <div
          key={index}
          className="snowflake text-2xl z-50"
          style={{
            left: `${Math.random() * 100}vw`,
            animationDuration: `${Math.random() * 5 + 5}s`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        >
          ❄
        </div>
      ))}
      <TwinklingLights />
      <header className="bg-green-800 text-white py-4">
        <nav className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">JustaChillChristmasGuy</div>
          <ul className="flex space-x-4">
            <li>
              <a href="#home" className="hover:text-yellow-300">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-yellow-300">
                About
              </a>
            </li>
            <li>
              <a href="#tokenomics" className="hover:text-yellow-300">
                Tokenomics
              </a>
            </li>
            <li>
              <a href="#roadmap" className="hover:text-yellow-300">
                Roadmap
              </a>
            </li>
            <li>
              <a href="#team" className="hover:text-yellow-300">
                Team
              </a>
            </li>
            <li>
              <a href="#community" className="hover:text-yellow-300">
                Community
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-yellow-300">
                FAQ
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="home" className="relative py-20 bg-red-600 text-white">
          <div className="container mx-auto text-center">
            <Image
              src={HeroImage}
              alt="JustaChillChristmasGuy Logo"
              width={150}
              height={150}
              className="mx-auto mb-8"
            />
            <h1 className="text-5xl font-bold mb-4">
              Chill this Christmas with Crypto
            </h1>
            <p className="text-xl mb-8">
              Join the merriest token in the crypto space!
            </p>
            <Button className="bg-yellow-400 text-green-900 hover:bg-yellow-500">
              Buy JCCG Token
            </Button>
          </div>
        </section>

        <section id="about" className="py-20">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">
              About JustaChillChristmasGuy
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
                <p>
                  JustaChillChristmasGuy aims to bring the joy and spirit of
                  Christmas to the crypto world all year round. We believe in
                  creating a community-driven token that spreads happiness and
                  rewards its holders.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
                <p>
                  Our mission is to build a strong, engaged community of crypto
                  enthusiasts who share the values of generosity, fun, and
                  innovation. We're committed to developing unique features that
                  make holding our token a delightful experience.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="tokenomics" className="py-20 bg-green-100">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">Tokenomics</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Total Supply</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold">1,000,000,000 JCCG</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5">
                    <li>50% Public Sale</li>
                    <li>20% Team & Advisors</li>
                    <li>15% Community Rewards</li>
                    <li>10% Liquidity Pool</li>
                    <li>5% Marketing</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Staking Rewards</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Earn up to 10% APY by staking your JCCG tokens!</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="roadmap" className="py-20">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">Roadmap</h2>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-500"></div>
              {[
                {
                  phase: "Phase 1",
                  title: "Token Launch",
                  description: "Initial token offering and exchange listings",
                },
                {
                  phase: "Phase 2",
                  title: "Community Growth",
                  description:
                    "Expand social media presence and engage with crypto influencers",
                },
                {
                  phase: "Phase 3",
                  title: "Feature Development",
                  description: "Implement staking and reward systems",
                },
                {
                  phase: "Phase 4",
                  title: "Partnerships",
                  description:
                    "Collaborate with other projects in the crypto space",
                },
                {
                  phase: "Phase 5",
                  title: "Ecosystem Expansion",
                  description: "Launch additional products and services",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center mb-8 ${
                    index % 2 === 0 ? "flex-row-reverse" : ""
                  }`}
                >
                  <div className="w-1/2"></div>
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div
                    className={`w-1/2 ${
                      index % 2 === 0 ? "pr-8 text-right" : "pl-8"
                    }`}
                  >
                    <h3 className="text-xl font-bold">
                      {item.phase}: {item.title}
                    </h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="team" className="py-20 bg-green-100">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "Santa Satoshi", role: "Founder & CEO" },
                { name: "Elf Ethereum", role: "Lead Developer" },
                { name: "Rudolph Ripple", role: "Marketing Director" },
              ].map((member, index) => (
                <Card key={index}>
                  <CardHeader>
                    <Image
                      src="/placeholder.svg?height=100&width=100"
                      alt={member.name}
                      width={100}
                      height={100}
                      className="rounded-full mx-auto"
                    />
                  </CardHeader>
                  <CardContent className="text-center">
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p>{member.role}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="community" className="py-20">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Join Our Community</h2>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-green-800 hover:text-green-600">
                <Twitter size={32} />
              </a>
              <a href="#" className="text-green-800 hover:text-green-600">
                <Facebook size={32} />
              </a>
              <a href="#" className="text-green-800 hover:text-green-600">
                <Instagram size={32} />
              </a>
              <a href="#" className="text-green-800 hover:text-green-600">
                <Github size={32} />
              </a>
              <a href="#" className="text-green-800 hover:text-green-600">
                <Linkedin size={32} />
              </a>
            </div>
            <div className="mt-8">
              <Button className="mr-4">Join Discord</Button>
              <Button variant="outline">Join Telegram</Button>
            </div>
          </div>
        </section>

        <section id="faq" className="py-20 bg-green-100">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <Accordion
              type="single"
              collapsible
              className="w-full max-w-3xl mx-auto"
            >
              {[
                {
                  question: "What is JustaChillChristmasGuy?",
                  answer:
                    "JustaChillChristmasGuy is a festive-themed cryptocurrency token that aims to bring the joy of Christmas to the crypto world all year round.",
                },
                {
                  question: "How can I buy JCCG tokens?",
                  answer:
                    "JCCG tokens can be purchased on various decentralized exchanges. Please check our official channels for the most up-to-date listing information.",
                },
                {
                  question: "Is there a staking program?",
                  answer:
                    "Yes, we offer a staking program where you can earn rewards for holding your JCCG tokens. Check out our Tokenomics section for more details.",
                },
                {
                  question: "What makes JCCG unique?",
                  answer:
                    "JCCG combines the fun and festivity of Christmas with the innovation of cryptocurrency, creating a unique and engaging community-driven token.",
                },
                {
                  question: "How can I get involved in the community?",
                  answer:
                    "Join our Discord and Telegram groups, follow us on social media, and participate in our community events and discussions!",
                },
              ].map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">
              Staking Calculator
            </h2>
            <Card className="max-w-md mx-auto">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="staking-amount"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Staking Amount (JCCG)
                    </label>
                    <Input
                      id="staking-amount"
                      type="number"
                      placeholder="Enter amount"
                      value={stakingAmount}
                      onChange={(e) => setStakingAmount(e.target.value)}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="staking-period"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Staking Period (months)
                    </label>
                    <Input
                      id="staking-period"
                      type="number"
                      placeholder="Enter period"
                      value={stakingPeriod}
                      onChange={(e) => setStakingPeriod(e.target.value)}
                    />
                  </div>
                  <Button onClick={calculateReward} className="w-full">
                    Calculate Reward
                  </Button>
                  {reward > 0 && (
                    <div className="text-center">
                      <p className="text-lg font-semibold">Estimated Reward:</p>
                      <p className="text-2xl font-bold text-green-600">
                        {reward.toFixed(2)} JCCG
                      </p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer className="bg-green-800 text-white py-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">JustaChillChristmasGuy</h3>
              <p>Spreading crypto cheer all year!</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-yellow-300">
                    Whitepaper
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-300">
                    Token Contract
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-300">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-300">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <p>Email: info@justachillchristmasguy.com</p>
              <p>Support: support@justachillchristmasguy.com</p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; 2023 JustaChillChristmasGuy. All rights reserved.</p>
            <p className="mt-2 text-sm">
              Disclaimer: Cryptocurrency investments are subject to market
              risks. Please invest responsibly.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
