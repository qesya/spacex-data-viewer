import Text from "@/components/atoms/Text";

type CardProps = {
  title: string;
  description: string;
};
export default function Card({ title, description }: CardProps) {
  return (
    <div className="border rounded p-4 shadow hover:shadow-lg transition">
      <Text as="h2" className="text-xl font-bold">
        {title}
      </Text>
      <Text as="p">{description}</Text>
    </div>
  );
}
