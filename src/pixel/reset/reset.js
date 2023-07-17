import css from '@standard/css'

/**
 * The reset CSS styles.
 *
 * The styles include resetting the box-sizing to border-box, setting margins and paddings to 0 for all elements,
 * and setting cursor to pointer and user-select to none for anchor links and buttons.
 */
const style = css`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');

  *,
  *::after,
  *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`

export default style
