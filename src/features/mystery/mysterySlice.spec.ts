import mysteryReducer, { MysteryState, l, r } from "./mysterySlice";

describe("mystery reducer", () => {
  const initialState: MysteryState = {
    value: "left",
  };

  it("l state itself", () => {
    const actual = mysteryReducer(initialState, l());
    expect(actual.value).toEqual("left");
  });

  it("r state itself", () => {
    const actual = mysteryReducer(initialState, r());
    expect(actual.value).toEqual("right");
  });
});
