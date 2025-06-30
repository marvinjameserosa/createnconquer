import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl p-6 sm:p-8 md:p-12 shadow-lg">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
            Ready to transform your construction management?
          </h2>
          <p className="text-white/90 text-base sm:text-lg mb-6 sm:mb-8">
            Join thousands of construction professionals who are already enjoying a more interactive, efficient, and enjoyable project management experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-orange-600 hover:bg-gray-100 h-10 sm:h-12 px-6 sm:px-8 rounded-full">
              Start Your Free Trial
            </Button>
            <Button variant="outline" className="text-white border-white hover:bg-white/20 h-10 sm:h-12 px-6 sm:px-8 rounded-full">
              Request a Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;