import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does the pay-as-you-generate model work?",
    answer: "Instead of paying upfront for solar panels, you pay a small rate per kilowatt-hour (kWh) for the energy your system generates. This is typically 20-40% less than what you'd pay your utility company, so you start saving immediately with zero upfront cost.",
  },
  {
    question: "Is there really no upfront cost?",
    answer: "Correct! We cover the full cost of equipment, installation, permits, and inspections. You don't pay anything until your system is installed and generating clean energy for your home.",
  },
  {
    question: "What happens if my panels need maintenance or repairs?",
    answer: "All maintenance and repairs are included in your agreement at no extra cost. Our AI monitoring system typically detects issues before they affect your energy production, and our technicians will handle any repairs quickly.",
  },
  {
    question: "How does the real-time monitoring work?",
    answer: "Every system comes with smart monitoring technology that tracks your energy production 24/7. You can access your dashboard via our web app or mobile app to see live data, historical trends, and estimated savings.",
  },
  {
    question: "What if I sell my home?",
    answer: "You have options! You can transfer the agreement to the new homeowner (often a selling point since it locks in low energy costs), or we can discuss removing the system. Our team will work with you to find the best solution.",
  },
  {
    question: "How long does installation take?",
    answer: "Most residential installations are completed in 1-2 days. The entire process from initial consultation to activation typically takes 4-8 weeks, including permits and inspections.",
  },
  {
    question: "What warranty do you offer?",
    answer: "We provide a comprehensive 25-year warranty covering equipment, installation, and performance. If your system underperforms our guarantee, we'll compensate you for the difference.",
  },
  {
    question: "Do you service my area?",
    answer: "We're rapidly expanding nationwide! Enter your address in our quote form to check availability in your area. If we're not there yet, join our waitlist to be notified when we arrive.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Got questions? We've got answers. If you don't see what you're looking for, reach out to our team.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
