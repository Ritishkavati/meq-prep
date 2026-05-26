export interface TextHL {
  id: string;
  text: string;
  color: "yellow" | "green" | "blue" | "pink" | "underline";
}

type Store = Record<string, TextHL[]>;

const KEY = (cid: string) => `meq_thl_v1_${cid}`;

export function loadTextHLs(cid: string): Store {
  try {
    return JSON.parse(localStorage.getItem(KEY(cid)) || "{}");
  } catch {
    return {};
  }
}

export function saveTextHLs(cid: string, store: Store) {
  localStorage.setItem(KEY(cid), JSON.stringify(store));
}
