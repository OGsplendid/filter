import classes from './project-list.module.css';

export const ProjectList = ({ projects }) => {

  return (
    <div className={classes['cards']}>
      {projects.map((project) => (
        <div key={`${Math.random() * 100}`} className={classes['card']}>
          <img src={project.img} className={project.category} />
        </div>
      ))}
    </div>
  )
}
