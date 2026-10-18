interface MenuHeaderProps {
  searchQuery: string;
  onResetSearch: () => void;
}

export default function MenuHeader({ searchQuery, onResetSearch }: MenuHeaderProps) {
  return (
    <div className="text-center max-w-2xl mx-auto mb-10">
      <span className="text-xs font-semibold uppercase tracking-widest text-coffee">
        Curated Offerings
      </span>
      <h2 className="font-adventor font-bold text-3xl sm:text-4xl text-stone-900 tracking-tight mt-2">
        Explore Aura&apos;s Curated Menu
      </h2>
      <p className="text-silver text-sm mt-3">
        Checkout our coffee
      </p>

      {searchQuery && (
        <div className="mt-4 inline-flex items-center gap-2 bg-stone-900/5 text-stone-700 text-xs px-3.5 py-1.5 rounded-full">
          <span>
            Results for: <strong>&ldquo;{searchQuery}&rdquo;</strong>
          </span>
          <button
            type="button"
            onClick={onResetSearch}
            className="underline hover:text-stone-900 ml-1"
          >
            Reset
          </button>
        </div>
      )}
    </div>
  );
}