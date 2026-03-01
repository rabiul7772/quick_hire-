interface JobDescriptionProps {
  description: string;
}

export const JobDescription = ({ description }: JobDescriptionProps) => {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-clash font-semibold text-neutral-100 mb-4">
          Job Description
        </h2>
        <div className="prose prose-neutral max-w-none font-epilogue text-neutral-80 leading-relaxed whitespace-pre-wrap">
          {description}
        </div>
      </section>
    </div>
  );
};
