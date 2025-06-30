import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Hero = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8 md:pt-24 md:pb-16">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="flex-1 space-y-6">
          <Badge className="bg-orange-100 text-orange-600 hover:bg-orange-100 px-3 py-1.5 text-sm">Revolutionizing Construction Management</Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Make Construction <span className="text-orange-500">Fun</span> and <span className="text-orange-500">Interactive</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-xl">
            From blueprint to building handover, we've reimagined the entire process. Experience immersive 3D visualization and radical transparency that keeps every stakeholder connected in real-time.
No more information silos. No more surprise delays. No more wondering what's happening on your project.
Clean. Intuitive. Revolutionary.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white h-12 px-8">
              Schedule a Demo
            </Button>
            <Link href="#features">
              <Button variant="outline" className="h-12 px-8 w-full sm:w-auto">
                View Features
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex-1 relative h-[300px] sm:h-[350px] md:h-[400px] w-full mt-8 md:mt-0">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-100 to-white dark:from-orange-950/30 dark:to-black/40 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <Image 
                src="/3d-building-preview.png" 
                alt="3D Building Preview" 
                width={500} 
                height={400} 
                className="object-cover object-center w-full h-full sm:w-auto sm:h-auto rounded-lg shadow-xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;