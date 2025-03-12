function goToEmailProvider(url) {
  window.open(`https://${url}`, "_blank");
  return this;
}

export default goToEmailProvider;
