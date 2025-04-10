import Type from "./type";

function splitCardsByLearningState(data) {
  const states = data.group((card) => Type.map(card.progress?.[0]?.type));
  return {
    learn: states.learn?.length ?? 0,
    review: states.review?.length ?? 0,
    relearn: states.relearn?.length ?? 0,
  };
}

export default splitCardsByLearningState;
