import Image from "next/image";
import React from "react";
import ServiceCard from "./ServiceCard";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import Link from "next/link";



const pricing = [
  {
title: "Payroll Services",
description: "End-to-end payroll compliance and submissions",
// price: "From R1,500 / month",
features: [
"Monthly payslip preparation",
"PAYE calculation & EMP201 submission",
"Bi-annual EMP501 & IRP5 certificates",
"Monthly UIF submissions",
],
},
{
title: "Bookkeeping",
description: "Accurate records and financial clarity",
//price: "From R2,000 / month",
features: [
"Record keeping & reconciliations",
"Monthly bank statements",
"Management reports",
"Annual financial statements",
],
},
{
title: "Tax Consultation",
description: "Professional tax compliance & support",
//price: "From R1,200 / service",
features: [
"VAT 201 calculations & submissions",
"Provisional tax calculations",
"Annual income tax returns",
"Employees’ tax & reconciliations",
"SARS audits assistance",
],
},
{
title: "CIPC & SARS Registrations",
description: "Business registrations made simple",
//price: "From R850 / service",
features: [
"Company registrations",
"VAT & income tax registrations",
"Updating SARS eFiling details",
"Beneficial ownership declarations",
"Annual returns submissions",
],
},
{
title: "Advisory & Compliance",
description: "Strategic support for your business",
//price: "Custom pricing",
features: [
"Accounting advisory services",
"Tax planning & compliance",
"Business support & guidance",
],
},
]

const Services = () => {






  return (
    <div className="pt-20 pb-20 relative ">
      {/* Side image pattern */}
      <Image
        src="/images/service_bg.png"
        alt="bg"
        width={300}
        height={300}
        className="absolute right-0"
      />

      <div className="w-[80%] mx-auto ">
        <h1 className="text-[#eeb956] text-lg font-medium tracking-widest">
          Our Services
        </h1>

        <h1 className="text-3xl md:text-5xl mt-4 font-bold text-white">
          We provide the <br />
          following services:
        </h1>

        <div className="grid mt-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ">
          
          {/* PRICING CARD */}
          {pricing.map((plan) => (
            <Card
              key={plan.title}
              className="rounded-2xl bg-background shadow-sm hover:shadow-md transition rounded-lg group overflow-hidden bg-white"
            >
              <CardHeader>
                <CardTitle className="text-xl">{plan.title}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>

              <CardContent>
                {/* <p className="text-2xl font-semibold mb-4">{plan.price}</p> */}
                <ul className="space-y-2 text-sm">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Link href="/Contact">
                <Button className="w-full">Get Started</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
