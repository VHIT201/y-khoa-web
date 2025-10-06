export default function TestPage() {
  return (
    <div className="min-h-screen bg-primary flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-primary mb-4">Test Primary Color</h1>
        <p className="text-primary/80 mb-4">This should be primary color with 80% opacity</p>
        <button className="bg-primary text-primary-foreground px-4 py-2 rounded hover:bg-primary/80">
          Primary Button
        </button>
      </div>
    </div>
  );
}