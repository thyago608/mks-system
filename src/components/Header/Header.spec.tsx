import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "store";
import { Header } from ".";

describe("Header component", () => {
  it("renders correctly", () => {
    render(
      <Provider store={store}>
        <Header />
      </Provider>
    );

    expect(screen.getByText('mks')).toBeInTheDocument();
    expect(screen.getByText('sistemas')).toBeInTheDocument();
  });
});
