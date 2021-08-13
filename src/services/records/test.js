import { init } from "Internal/store";
import * as redux from ".";

describe("records service", () => {
  // Config
  const store = init({ records: redux.records });
  const { dispatch, getState } = store;

  // Root reducer
  it("has records reducer", () => {
    expect(getState().records).toBe(null);
  });
});
