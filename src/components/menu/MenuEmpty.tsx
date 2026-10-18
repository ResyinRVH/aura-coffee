import { SearchX } from 'lucide-react';

interface MenuEmptyStateProps {
  onReset: () => void;
}

export default function MenuEmptyState({ onReset }: MenuEmptyStateProps) {
  return (
    <div className="text-center py-16 bg-white/40 rounded-3xl border border-stone-200/40 max-w-md mx-auto">
      <SearchX className="w-10 h-10 text-stone-400 mx-auto mb-3" />
      <h3 className="font-adventor font-bold text-stone-800 text-base">
        No Offerings Found
      </h3>
      <p className="text-xs text-stone-500 mt-1 max-w-xs mx-auto">
        Try another keyword or switch category filters.
      </p>
      <button
        type="button"
        onClick={onReset}
        className="mt-4 text-xs font-semibold text-[#f67b52] hover:underline"
      >
        View All Offerings
      </button>
    </div>
  );
}