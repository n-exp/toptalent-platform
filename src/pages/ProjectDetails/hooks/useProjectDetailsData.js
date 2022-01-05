import { useCallback, useState } from 'react';

const projectNames = [
  'New bussiness never started',
  'Existing bussiness that is expanding',
  'Ongoiing adivse and mentorship',
  'None of the above, I am interested to learn about kimbocorp'
];

const initialProjectTypes = projectNames.map((projectName, projectId) => ({
  id: projectId,
  name: projectName,
  isSelected: false
}));

export const useProjectDetailsData = () => {
  const [projects, setProjects] = useState(initialProjectTypes);

  const toggleProject = useCallback(({ id, checked }) => {
    const updateItem = (items, updatedProps, indexCallback) => {
      const index = items.findIndex(indexCallback);

      if (index < 0) return items;

      return [
        ...items.slice(0, index),
        { ...items[index], ...updatedProps },
        ...items.slice(index + 1)
      ];
    };

    setProjects((projects) =>
      updateItem(projects, { isSelected: checked }, (project) => project.id === id)
    );
  }, []);

  return { projects, toggleProject };
};
