function timeUntilReview(validity = 0) {
  const now = Date.now();
  const diff = validity - now;

  if (diff <= 0) return "";

  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  if (years > 0) return `${years} ano${years > 1 ? "s" : ""}`;
  if (months > 0) return `${months} mês${months > 1 ? "es" : ""}`;
  if (weeks > 0) return `${weeks} semana${weeks > 1 ? "s" : ""}`;
  if (days > 0) return `${days} dia${days > 1 ? "s" : ""}`;
  if (hours > 0) return `${hours} hora${hours > 1 ? "s" : ""}`;
  if (minutes > 0) return `${minutes} minuto${minutes > 1 ? "s" : ""}`;
  if (seconds > 0) return `${seconds} segundo${seconds > 1 ? "s" : ""}`;

  return "";
}

export default timeUntilReview;
