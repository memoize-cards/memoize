import Learn from "./learn";
import Relearn from "./relearn";
import Review from "./review";

const Phase = {
  from(data) {
    if (Review.is(data)) return Review.from(data);
    if (Relearn.is(data)) return Relearn.from(data);
    if (Learn.is(data)) return Learn.from(data);
  },
};

export default Phase;
