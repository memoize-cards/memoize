function formatStudyTime(reviewTime = 0) {
  if (reviewTime <= 0) return "0 minutos";

  const totalMinutes = Math.floor(reviewTime / 60000);
  const days = Math.floor(totalMinutes / 1440);
  const hours = Math.floor((totalMinutes % 1440) / 60);
  const minutes = totalMinutes % 60;

  const parts = [];

  if (days > 0) parts.push(`${days} dia${days > 1 ? "s" : ""}`);
  if (hours > 0) parts.push(`${hours} hora${hours > 1 ? "s" : ""}`);
  if (minutes > 0) parts.push(`${minutes} minuto${minutes > 1 ? "s" : ""}`);

  return parts.join(" ");
}

export default formatStudyTime;
