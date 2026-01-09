export function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="w-full flex items-center border-3 border-background  h-[150px]">
      <div className="w-full">
        <p className="text-background text-center text-6xl font-heading">
          {value}
        </p>
        <h5 className="text-background text-2xl text-center font-paragraph">
          {label}
        </h5>
      </div>
    </div>
  );
}
