export default function AboutSection() {
  return (
    <main>
      <div className="mt-10 h grid grid-cols-1 md:grid-cols-12 bg-gray-300 rounded-lg ">
        <div className="md:col-span-6 bg-slate-600 rounded-lg px-4 py-20 md:py-32 md:px-20  flex items-center">
          <p className="text-bone md:text-xl">
            Hi! I'm Ollie, a director and producer with a chameleon-like
            approach to storytelling. I believe that the best way to create
            impactful content is to adapt to the unique vision and voice of each
            client. My goal is not to impose my own style, but rather to
            seamlessly blend my expertise with your project goals, crafting
            narratives that resonate with your target audience. My primary focus
            lies in video directing, production and editing. My versatility
            allows me to tackle a wide range of projects with confidence and
            expertise.
          </p>
        </div>
        <div className="md:col-span-6 rounded-lg px-10 flex items-center justify-center py-20">
          <p className="text-7xl">IMAGE</p>
        </div>
      </div>
    </main>
  );
}
