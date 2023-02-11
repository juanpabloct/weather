import { ReactNode } from "react";

export const SectionInformation = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon?: ReactNode;
}) => {
  return (
    <section className="flex font-mono">
      <h1 className="font-bold ">{title}: </h1>
      <div className="flex items-center">
        {icon}
        <p className="font-medium ">{description}</p>
      </div>
    </section>
  );
};
