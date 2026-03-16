"use client";
import Image from "next/image";
import React from "react";
import Tilt from "react-parallax-tilt";
import { Card, CardHeader, CardTitle, CardContent } from "@/app/components/ui/card";
import { HeartHandshake, MessageCircle, Lightbulb } from "lucide-react";

const values = [
  {
    title: "Care",
    description:
      "We support you and your company vigorously — with care. It’s in our DNA.",
    icon: HeartHandshake,
  },
  {
    title: "Communication",
    description:
      "We keep you informed every step of the way, so you get the support you need when you need it.",
    icon: MessageCircle,
  },
  {
    title: "Real Solutions",
    description:
      "We offer practical accounting and tax solutions that support your growth.",
    icon: Lightbulb,
  },
];



const Project = () => {
  return (
    <div className="pt-16 pb-16 bg-black">
      <h2 className="text-[#b69974] text-lg text-center font-medium tracking-widest">
        Why choose us? 
      </h2>
      <h1 className="text-3xl md:text-5xl mt-4 text-white font-bold text-center">
        Hustle free accounting <br />
        and tax solutions
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-20 w-[80%] mx-auto gap-6">
  {values.map((item, idx) => (
    <div
      key={item.title}
      data-aos="zoom-in"
      data-aos-anchor-placement="top-center"
      data-aos-delay={idx * 100}
    >
      <Tilt
        tiltMaxAngleX={8}
        tiltMaxAngleY={8}
        scale={1.03}
        transitionSpeed={1000}
        glareEnable={false}
      >
        <Card className="rounded-2xl bg-white shadow-sm hover:shadow-md transition">
          <CardHeader className="flex flex-row items-center gap-4">
            <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-primary/10 text-primary">
              <item.icon className="h-6 w-6" />
            </div>
            <CardTitle className="text-xl">{item.title}</CardTitle>
          </CardHeader>

          <CardContent className="text-sm text-muted-foreground">
            {item.description}
          </CardContent>
        </Card>
      </Tilt>
    </div>
  ))}
</div>

    </div>
  );
};

export default Project;
