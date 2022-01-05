import { useState } from 'react';

const detailsCategories = [
  'How long do you need the professional for',
  'Number of Professionals',
  'Level of commitment',
  'When do you need professional to start?'
];

const categoryItems = [
  ['Less then 1 month', '1-4 months', '5-12 months', 'More then 12 months', 'I will decide later'],
  [
    'One Professional',
    'Two professionals',
    'A cross functional team of professionals',
    'I will decide later'
  ],
  [
    'Full time (40 hrs for more a week )',
    'Part time ( less then 40 hrs a week )',
    'Hourly',
    'I will decide later'
  ],
  ['Immediately', 'In 1 to 2 weeks', 'More then 2 weeks from now', 'I will decide later']
];

const initialDetails = detailsCategories.map((detailCategory, detailId) => ({
  id: detailId,
  category: detailCategory,
  activeOption: null,
  items: categoryItems[detailId].map((item, itemId) => ({
    id: `${detailId}-${itemId}`,
    label: item
  }))
}));

export const useProfessionalsNeedData = () => {
  const [details, setDetails] = useState(initialDetails);

  const updateDetail = ({ id, parentId }) => {
    const updateItem = (items, updatedProps, indexCallback) => {
      const index = items.findIndex(indexCallback);

      if (index < 0) return [...items];

      const itemToUpdate = items[index];
      const updatedItem = {
        ...itemToUpdate,
        ...(typeof updatedProps === 'function' ? updatedProps(itemToUpdate) : updatedProps)
      };

      return [...items.slice(0, index), updatedItem, ...items.slice(index + 1)];
    };

    const updatedDetails = updateItem(
      details,
      { activeOption: id },
      (detail) => detail.id === parentId
    );

    setDetails(updatedDetails);
  };

  return {
    details,

    updateDetail
  };
};
