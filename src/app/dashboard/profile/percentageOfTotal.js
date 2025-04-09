function percentageOfTotal(completed, total) {
  return total ? Math.round((completed / total) * 100) : 0;
}

export default percentageOfTotal;
