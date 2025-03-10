function getWeekDays() {
  const daysOfWeek = ["D", "S", "T", "Q", "Q", "S", "S"]; // Abreviação dos dias
  const today = new Date();
  const todayDayIndex = today.getDay(); // Índice do dia atual (0 = Domingo, 6 = Sábado)
  const startDate = new Date();

  startDate.setDate(today.getDate() - todayDayIndex); // Define o início da semana (domingo)

  return daysOfWeek.map((day, index) => {
    const date = new Date(startDate);
    date.setDate(startDate.getDate() + index); // Ajusta a data de acordo com o índice

    return {
      label: day, // Letra do dia
      date: date.getDate(), // Número do dia
      isToday: index === todayDayIndex, // Marca se é o dia atual
    };
  });
}

export default getWeekDays;
