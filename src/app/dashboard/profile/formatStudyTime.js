function formatStudyTime(ms = 0) {
  if (ms <= 0) return "0 minutos";

  const totalMinutes = Math.floor(ms / 60000);
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  if (hours > 0) {
    return `${hours} hora${hours > 1 ? "s" : ""}`;
  }

  return `${minutes} minuto${minutes > 1 ? "s" : ""}`;
}

export default formatStudyTime;
