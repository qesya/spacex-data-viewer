import Text from "@/components/atoms/Text";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="perspective-distant">
        <article className="transform-3d rotate-x-51 rotate-z-43 transition-all duration-500 hover:-translate-y-4 hover:rotate-x-49 hover:rotate-z-38">
          <Text
            as="h1"
            className="bg-clip-text text-transparent bg-gradient-to-r from-slate-400 to-black text-4xl font-bold title"
          >
            SpaceX Data Viewer
          </Text>
        </article>
      </div>
    </div>
  );
}
