import { getByTestId, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";

test("check that the initial state is correct", () => {
  const { getByText, container } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  // check that initially we see left
  const e = getByText(/left/i);
  expect(e).toBeInTheDocument();

  // check that initially we show icon (img) on the left
  const b = getByTestId(container, "main-button");
  expect(b.firstChild?.nodeName).toBe("IMG");
});
