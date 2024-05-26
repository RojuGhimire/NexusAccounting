import { cn } from "@/utils/cn";

const SectionHeading = ({
  sectionTitle,
  className,
}: {
  sectionTitle: string;
  className?: string;
}) => {
  return (
    <h1
      className={cn(
        "text-4xl font-medium capitalize mb-6 text-gray-950 text-center",
        className
      )}
    >
      {sectionTitle}
    </h1>
  );
};

export default SectionHeading;
