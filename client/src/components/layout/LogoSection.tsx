import { logos } from '../../constants';

export const LogoSection = () => {
  return (
    <section className="px-6 lg:px-[124px] py-12 bg-white">
      <p className="text-neutral-80/50 text-lg mb-8 font-epilogue">
        Companies we helped grow
      </p>
      <div className="flex flex-wrap items-center justify-between gap-8 opacity-70 grayscale hover:grayscale-0 transition-all duration-300">
        {logos.map(logo => (
          <img
            key={logo.name}
            src={logo.url}
            alt={logo.name}
            className="h-8 lg:h-10 object-contain"
          />
        ))}
      </div>
    </section>
  );
};
