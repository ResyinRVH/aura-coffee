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
            className={`px-5 py-2.5 rounded-full text-xs font-poppins font-medium transition-all duration-200 ${
              isActive
                ? 'bg-navy text-white shadow-md'
                : 'bg-white/80 text-silver hover:bg-white hover:text-silver shadow-sm border border-silver/10'
            }`}
          >
            {cat.label}
          </button>
        );
      })}
    </div>
  );
}