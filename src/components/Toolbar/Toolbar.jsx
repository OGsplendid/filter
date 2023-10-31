import classes from './toolbar.module.css';

export const Toolbar = ({ filters, selected, onSelectFilter }) => {

  return (
    <div className={classes['toolbar-container']}>
        {filters.map((filter) => (
          <button key={filter} onClick={onSelectFilter} className={filter === selected ?
            `${classes['button']} ${classes['selected']}` : classes['button']}>{filter}</button>
        ))}
    </div>
  )
}
