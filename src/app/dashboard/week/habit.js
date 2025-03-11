import Friday from "./friday";
import Monday from "./monday";
import Saturday from "./saturday";
import Sunday from "./sunday";
import Thursday from "./thursday";
import Tuesday from "./tuesday";
import Wednesday from "./wednesday";

class Habit {
  #days;

  constructor(...days) {
    this.#days = days;
  }

  map(callback) {
    return this.#days.map(callback);
  }

  static async now() {
    const { default: supabase } = await import("artifact/supabase");
    const { data: days } = await supabase
      .from("habit")
      .select("date, goalAchieved")
      .order("date", { ascending: true })
      .limit(7);

    return new Habit(
      Sunday.from(days),
      Monday.from(days),
      Tuesday.from(days),
      Wednesday.from(days),
      Thursday.from(days),
      Friday.from(days),
      Saturday.from(days),
    );
  }
}

export default Habit;
