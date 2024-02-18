import css from '@standard/css'

css`
  m-markdown {
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-xs);
    overflow-x: hidden;
    width: 100%;
  }

  m-markdown :where(h1, h2, h3, h4, h5, h6) {
    color: var(--color-master-dark);
    font-family: var(--font-family-highlight);
    font-weight: var(--font-weight-bold);
  }

  m-markdown h1 {
    font-size: var(--font-size-lg);
  }

  m-markdown h2 {
    font-size: var(--font-size-md);
  }

  m-markdown h3 {
    font-size: var(--font-size-sm);
  }

  m-markdown h4 {
    font-size: var(--font-size-xs);
  }

  m-markdown h5 {
    font-size: var(--font-size-xxs);
  }

  m-markdown h6 {
    font-size: var(--font-size-xxxs);
  }

  m-markdown img {
    max-width: 100%;
    object-fit: contain;
  }

  m-markdown li,
  m-markdown p {
    color: var(--color-master);
    font-family: var(--font-family-base);
    font-size: var(--font-size-xxxs);
    font-weight: var(--font-weight-regular);
    line-height: var(--line-height-xl);
  }

  m-markdown ul {
    padding-left: var(--spacing-xxs);
  }

  m-markdown p code {
    background-color: var(--color-master-light);
    border-radius: 3px;
    padding: 1.5px 3px;
  }

  m-markdown blockquote {
    background-color: var(--color-master-lighter);
    border-left: var(--border-width-thick) solid var(--color-master-light);
    padding: var(--spacing_inset-xs);
  }
`
