import React from "react";
import { FormComponent } from "../form";
import Section from "../section";

function ContactModule() {
  return (
    <Section
      fullWidth
      options={{
        section: "Contact Us",
        title: "Only one appointment you need see if we're right fit for you.",
        subtitle:
          "Don't hestiate to reach us, we offer free consultation services.",
      }}
    >
      <div className="w-full h-screen grid grid-cols-12 items-start">
        <FormComponent className="col-span-4 col-start-7" />
      </div>
    </Section>
  );
}

export default ContactModule;
