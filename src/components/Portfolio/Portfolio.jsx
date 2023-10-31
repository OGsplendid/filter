import { Toolbar } from '../Toolbar';
import { ProjectList } from '../Project-list';
import { projects } from '../projects';
import { useState } from 'react';

const state = {
  filters: ["All", "Websites", "Flayers", "Business Cards"],
  activeFilter: 'All',
  projects,
}

export const Portfolio = () => {
  const [actualState, setFilter] = useState(state);

  const onSelectFilter = (e) => {
    console.log(actualState.projects);
    setFilter((prev) => ({
      ...prev,
      activeFilter: e.target.textContent,
      projects: projects.filter((project) => e.target.textContent === 'All' ?
        project : project.category === e.target.textContent),
    }))
  }

  return (
    <>
      <Toolbar filters={actualState.filters} selected={actualState.activeFilter} onSelectFilter={onSelectFilter} />
      <ProjectList projects={actualState.projects} />
    </>
  )
}
