import { defineStore } from "pinia";

export const useGameStore = defineStore("game", {
  state: () => {
    const completedList = [] as number[];
    return { completed: completedList };
  },
  actions: {
    add(stage: number) {
      if (!this.completed.includes(stage)) {
        console.log("hi");
        this.completed.push(stage);
      }
      console.log("nah");
    },
  },
});
