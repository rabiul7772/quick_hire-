import { Button } from '../ui/Button';

export const CTASection = () => {
  return (
    <section className="px-6 lg:px-[124px] py-16 bg-white overflow-hidden">
      <div className="bg-brand-primary min-h-[414px] flex flex-col md:flex-row items-center gap-12 px-10 md:px-16 pt-16 md:pt-0 relative">
        <div className="flex-1 flex flex-col gap-8 max-w-[464px] z-10 py-10">
          <h2 className="text-4xl lg:text-5xl font-clash font-semibold text-white leading-tight">
            Start posting <br className="hidden lg:block" /> jobs today
          </h2>
          <p className="text-white/80 text-lg font-epilogue leading-relaxed">
            Start posting jobs for only $10/month.
          </p>
          <Button
            variant="secondary"
            size="lg"
            className="w-fit bg-white text-brand-primary border-none hover:bg-neutral-0"
          >
            Sign Up for Free
          </Button>
        </div>

        <div className="flex-1 w-full relative h-[300px] md:h-full flex items-end justify-center">
          <img
            src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/957a9d47-515f-4121-aee4-88a2c9b91187"
            alt="Dashboard Preview"
            className="w-full max-w-[564px] h-auto object-contain mt-auto shadow-2xl rounded-t-xl"
          />
        </div>

        {/* Decorative background vectors from Figma */}
        <div className="absolute top-0 right-0 w-full h-full z-0 opacity-20 pointer-events-none">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 1192 414"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 63.5L0 414L999.712 414L1192 319.5L1192 0L128.706 0L0 63.5Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};
