import css from '@standard/css'

const style = css`
  .card {
    min-width: 85%;
  }

  @media (width >= 448px) {
    .card {
      min-width: calc(50% - 8px);
    }
  }

  @media (width >= 752px) {
    .card {
      min-width: calc(33.33% - 10.666px);
    }
  }

  @media (width >= 1056px) {
    .card {
      min-width: calc(25% - 12px);
    }
  }
`

export default style
