import { emojis } from "./data";

function shuffle(emojis) {
  for (let i = 0; i < emojis.length; i++) {
    const j = Math.floor(Math.random() * (i + 1));
    [emojis[i], emojis[j]] = [emojis[j], emojis[i]];
  }

  return emojis;
}

export function generateEmojis(totalEmojis, matchCount) {
  const emojisPerGroup = totalEmojis / matchCount;

  if (emojis.length < emojisPerGroup) {
    throw new Error("don't have enough emojis, please add some!");
  }

  let allEmojis = [];
  for (let i = 0; i < matchCount; i++) {
    allEmojis = [...allEmojis, ...emojis.slice(0, emojisPerGroup)];
  }

  return shuffle(allEmojis);
}
