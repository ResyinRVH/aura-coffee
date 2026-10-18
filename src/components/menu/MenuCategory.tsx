import { MENU_CATEGORIES } from '@/data/menu';

interface MenuCategoriesProps {
  activeCategory: string;
  onSelectCategory: (id: string) => void;
}

export default function MenuCategories({
  activeCategory,
  onSelectCategory,
}: MenuCategoriesProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
      {MENU_CATEGORIES.map((cat) => {
        const isActive = activeCategory === cat.id;
        return (
          <button
            key={cat.id}
            type="button"
            onClick={() => onSelectCategory(cat.id)}
            className={`px-5 py-2.5 rounded-full text-xs font-medium transition-all duration-200 ${
              isActive
                ? 'bg-stone-900 text-white shadow-md'
                : 'bg-white/80 text-stone-600 hover:bg-white hover:text-stone-900 shadow-sm border border-stone-200/40'
            }`}
          >
            {cat.label}
          </button>
        );
      })}
    </div>
  );
}