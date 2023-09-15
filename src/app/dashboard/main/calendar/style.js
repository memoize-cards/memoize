import css from '@standard/css'

const style = css`
  .calendar {
    display: flex;
    gap: var(--spacing_inset-nano);
    width: 100%;
  }

  .calendar__dayOfTheWeek {
    align-items: center;
    border-radius: var(--border-radius-sm);
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-quarck);
    padding: var(--spacing_inset-xs) 0;
    width: 100%;
  }

  .calendar__dayOfTheWeek[today] {
    background-color: var(--color-master-dark);
  }

  .calendar__nameDayOfTheWeek {
    color: var(--color-master);
    font-family: var(--font-family-base);
    font-size: var(--font-size-xxxs);
    font-weight: var(--font-weight-regular);
    line-height: var(--line-height-default);
    text-align: center;
  }

  [today] .calendar__nameDayOfTheWeek {
    color: var(--color-pure-white);
  }

  .calendar__day {
    color: var(--color-master-dark);
    font-family: var(--font-family-highlight);
    font-size: var(--font-size-md);
    font-weight: var(--font-weight-bold);
    line-height: var(--line-height-default);
    text-align: center;
  }

  [today] .calendar__day {
    color: var(--color-pure-white);
  }
`

export default style
