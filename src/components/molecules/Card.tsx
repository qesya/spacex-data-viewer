import Text from "@/components/atoms/Text";

type CardProps = {
  title: string;
  description: string;
};
export default function Card({ title, description }: CardProps) {
  return (
    <div className="relative flex flex-col group p-5 bg-white border border-white rounded-lg shadow shadow-slate-200 hover:border-slate-500 hover:shadow-lg transition-shadow duration-300">
      <Text as="h2" className="text-xl font-bold">
        {title}
      </Text>
      <Text as="p" className="text-slate-500">
        {description}
      </Text>
    </div>
  );
}
