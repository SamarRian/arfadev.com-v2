import React from "react";
import Section from "../section";
import ServiceCard from "../service-card";

function Services() {
  return (
    <Section
      fullWidth
      options={{
        section: "3. Our Services",
        title: "Who we help?",
        subtitle:
          "Our goal is to maximize your revenue by having more clients, irrespective of services you provide.",
      }}
    >
      <div className="w-full grid-cols-5 grid">
        <ServiceCard index={1} className="col-span-1 col-start-1" />
        <ServiceCard index={2} className="col-span-1 col-start-2" />
        <ServiceCard index={3} className="col-span-1 col-start-3" />
        <ServiceCard index={4} className="col-span-1 col-start-4" />
      </div>
    </Section>
  );
}

export default Services;
