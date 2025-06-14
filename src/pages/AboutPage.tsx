
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { useInView } from "react-intersection-observer";

const AboutPage = () => {
  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const { ref: ref2, inView: inView2 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const { ref: ref3, inView: inView3 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Layout>
              <SEO title={"AboutPage"} description={`Our Story
                Shivam Forge is an amalgamation of two positive indicators of success: Synergy and Innovation. Established with a vision to provide world-class forging and casting solutions, we have grown to become a trusted partner for numerous industries worldwide.

                Our state-of-the-art manufacturing facility spans a sprawling area of 2,000 sq. m, equipped with cutting-edge technical expertise that enables us to offer quality products and cost-effective solutions that meet global standards as well as customer requirements.

                At Shivam Forge, we believe in pursuing excellence at all levels. Towards this, we continuously evolve product and process efficiencies by implementing practices that align with highest standards, nationally and globally.

                Shivam Forge Facility
                The Shivam Forge Experience
                Our team is our driving force. We bring together best in trade talents with experience in varied fields.

                01
                Expert Team
                We are guided by industry experts who have led various top forging & casting organizations.

                02
                Technical Excellence
                Our team brings expertise in heat treatment, zinc plating, galvanizing, and material technology.

                03
                Quality Focus
                At Shivam Forge, our people are quality conscious and processes are quality certified.

                Our Growth Journey
                Powered by quality and productivity, Shivam Forge is on an exciting growth trajectory.

                Growth Chart
                Growth Footprint
                Shivam Forge sales are well-poised to increase from approximately INR 6 crore to INR 100 crore in the next five years. This will entail an investment of nearly 10 crore in the same period, 86% of which will be mainly for plant and machinery.

                Focus on Innovation
                A part of Shivam Forge DNA, we strive to fuel newer insights and technologies to continuously improve plant performance and product excellence.

                Trust in Team Power
                We are leveraging the knowledge pool of best in trade talent from varied fields with the aim to provide benchmark forging & casting solutions across industries and geographies.`
              }/>


      <div className="bg-gradient-to-r from-forge-orange to-forge-red py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
            About Shivam Forge
          </h1>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            A leader in forging and casting solutions with unmatched quality and innovation
          </p>
        </div>
      </div>

      <div 
        ref={ref1}
        className={`py-20 px-4 transition-all duration-1000 transform ${
          inView1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-forge-gray-dark dark:text-white">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  Shivam Forge is an amalgamation of two positive indicators of success: Synergy and Innovation. Established with a vision to provide world-class forging and casting solutions, we have grown to become a trusted partner for numerous industries worldwide.
                </p>
                <p>
                  Our state-of-the-art manufacturing facility spans a sprawling area of 2,000 sq. m, equipped with cutting-edge technical expertise that enables us to offer quality products and cost-effective solutions that meet global standards as well as customer requirements.
                </p>
                <p>
                  At Shivam Forge, we believe in pursuing excellence at all levels. Towards this, we continuously evolve product and process efficiencies by implementing practices that align with highest standards, nationally and globally.
                </p>
              </div>
            </div>
            <div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="/lovable-uploads/giancarlo-duarte-kf1stgxeLxk-unsplash (1).jpg" 
                  alt="Shivam Forge Facility" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 dark:bg-forge-gray-dark/50 py-20 px-4">
        <div 
          ref={ref2}
          className={`container mx-auto transition-all duration-1000 transform ${
            inView2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-forge-gray-dark dark:text-white">
              The Shivam Forge Experience
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Our team is our driving force. We bring together best in trade talents with experience in varied fields.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-forge-gray rounded-xl shadow-md p-6 text-center">
              <div className="h-16 w-16 bg-forge-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-forge-orange">01</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-forge-gray-dark dark:text-white">
                Expert Team
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We are guided by industry experts who have led various top forging & casting organizations.
              </p>
            </div>
            <div className="bg-white dark:bg-forge-gray rounded-xl shadow-md p-6 text-center">
              <div className="h-16 w-16 bg-forge-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-forge-orange">02</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-forge-gray-dark dark:text-white">
                Technical Excellence
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our team brings expertise in heat treatment, zinc plating, galvanizing, and material technology.
              </p>
            </div>
            <div className="bg-white dark:bg-forge-gray rounded-xl shadow-md p-6 text-center">
              <div className="h-16 w-16 bg-forge-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-forge-orange">03</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-forge-gray-dark dark:text-white">
                Quality Focus
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                At Shivam Forge, our people are quality conscious and processes are quality certified.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div 
        ref={ref3}
        className={`py-20 px-4 transition-all duration-1000 transform ${
          inView3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-forge-gray-dark dark:text-white">
              Our Growth Journey
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Powered by quality and productivity, Shivam Forge is on an exciting growth trajectory.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="/lovable-uploads/cutting-metal-with-plasma-equipment.jpg" 
                  alt="Growth Chart" 
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-forge-gray-dark dark:text-white">
                  Growth Footprint
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Shivam Forge sales are well-poised to increase from approximately INR 6 crore to INR 100 crore in the next five years. This will entail an investment of nearly 10 crore in the same period, 86% of which will be mainly for plant and machinery.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-forge-gray-dark dark:text-white">
                  Focus on Innovation
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  A part of Shivam Forge DNA, we strive to fuel newer insights and technologies to continuously improve plant performance and product excellence.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-forge-gray-dark dark:text-white">
                  Trust in Team Power
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We are leveraging the knowledge pool of best in trade talent from varied fields with the aim to provide benchmark forging & casting solutions across industries and geographies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
