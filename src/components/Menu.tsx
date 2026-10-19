'use client';

import { useState, useMemo } from 'react';
import { MENU_ITEMS, MenuItem } from '@/data/menu';
import { useSearch } from '@/context/SearchContext';
import { useCart } from '@/context/CartContext';
import MenuHeader from './menu/MenuHeader';
import MenuCategories from '@/components/menu/MenuCategory'
import MenuItemCard from './menu/MenuCard';
import MenuEmptyState from '@/components/menu/MenuEmpty';

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const { searchQuery, setSearchQuery } = useSearch();
  const { addToCart } = useCart();

  const filteredItems = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();

    return MENU_ITEMS.filter((item: MenuItem) => {
      const matchesCategory =
        activeCategory === 'all' || item.category === activeCategory;

      if (!query) return matchesCategory;

      const matchesName = item.name.toLowerCase().includes(query);
      const matchesDesc = item.description.toLowerCase().includes(query);
      const matchesNotes = item.tastingNotes?.some((note) =>
        note.toLowerCase().includes(query)
      );

      return matchesCategory && (matchesName || matchesDesc || matchesNotes);
    });
  }, [activeCategory, searchQuery]);

  const handleResetAll = () => {
    setSearchQuery('');
    setActiveCategory('all');
  };

  return (
    <section id="menu" className="scroll-mt-24 w-full bg-silver-100 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <MenuHeader
          searchQuery={searchQuery}
          onResetSearch={() => setSearchQuery('')}
        />

        <MenuCategories
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
        />

        {filteredItems.length === 0 ? (
          <MenuEmptyState onReset={handleResetAll} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredItems.map((item: MenuItem) => (
              <MenuItemCard
                key={item.id}
                item={item}
                onAddToCart={addToCart}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}