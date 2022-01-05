import { useCallback, useState } from 'react';

const skillsCategories = ['Sales', 'Sales Executive'];

const salesTags = [
  'Sales Growth',
  'Sales Target',
  'Revenue',
  'Customer Churn Rate',
  'Lead Conversion Ratio'
];

const salesExecutiveTags = [
  'Customer Segmentation',
  'Web and Marketing Analytics',
  'Campaign Performance',
  'Lead Generation'
];

const tags = [salesTags, salesExecutiveTags];

const initialSkills = skillsCategories.map((skillCategory, skillId) => ({
  id: skillId,
  category: skillCategory,
  items: tags[skillId].map((tagName, tagId) => ({
    id: `${skillId}-${tagId}`,
    label: tagName,
    isActive: false,
    parentId: skillId
  }))
}));

export const useSkillsData = () => {
  const [tags, setTags] = useState([]);
  const [skills, setSkills] = useState(initialSkills);

  const toggleSkill = useCallback(
    ({ id, title, isActive, parentId }) => {
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

      const updatedSkills = updateItem(
        skills,
        (skill) => ({
          items: updateItem(skill.items, { isActive }, (item) => item.id === id)
        }),
        (skill) => skill.id === parentId
      );

      setSkills(updatedSkills);

      if (isActive) {
        setTags((tags) => [...tags, { id, title, isActive, parentId }]);
      } else {
        setTags((tags) => tags.filter((tag) => tag.id !== id));
      }
    },
    [skills]
  );

  return {
    tags,
    skills,

    toggleSkill
  };
};
