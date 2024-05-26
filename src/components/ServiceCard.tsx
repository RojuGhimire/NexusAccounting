import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { Meteors } from "@/components/ui/Metors";
import { ServiceCardProps } from "@/types";

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  image,
}) => {
  return (
    <CardContainer className="overflow-hidden bg-transparent border border-border rounded-md group">
      <CardBody className="text-center flex flex-col gap-y-1">
        <img
          src={image}
          alt={title}
          className="mb-4 w-full h-48 object-cover group-hover:scale-[1.035] duration-500 transition z-50"
        />
        <CardItem rotateZ={1} className="text-lg font-bold my-2 mx-auto">
          {title}
        </CardItem>
        <CardItem rotateZ={1} className="z-50 px-1">
          {description}
        </CardItem>
      </CardBody>
      <Meteors number={10} />
    </CardContainer>
  );
};
