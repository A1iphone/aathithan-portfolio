"use client";

import { Typography } from "@material-tailwind/react";

const TESTIMONIALS = [
  {
    name: "Business Owner",
    feedback:
      "We saw a significant improvement in our website traffic and started receiving quality leads within just a few weeks.",
  },
  {
    name: "Startup Founder",
    feedback:
      "Professional approach and clear communication. The results from SEO and Google Ads exceeded our expectations.",
  },
  {
    name: "Local Business Client",
    feedback:
      "Our Google ranking improved quickly, and we started getting daily inquiries from potential customers.",
  },
];

export function Testimonial() {
  return (
    <section className="py-20 px-6 bg-gray-50 text-center">
      <div className="max-w-4xl mx-auto">

        <Typography variant="h2" color="blue-gray" className="mb-6">
          What Clients Say
        </Typography>

        <Typography
          variant="lead"
          className="mb-12 text-gray-600"
        >
          Here’s what businesses say about working with me.
        </Typography>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item, index) => (
            <div
              key={index}
              className="p-6 border rounded-xl shadow-sm bg-white"
            >
              <p className="text-gray-600">"{item.feedback}"</p>
              <h4 className="mt-4 font-semibold text-blue-600">
                {item.name}
              </h4>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Testimonial;