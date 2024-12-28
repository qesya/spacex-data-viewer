export default function Spinner() {
  return (
    <div data-testid="spinner" className="flex h-full justify-center items-center">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-black" />
    </div>
  );
}
