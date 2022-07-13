import ImageComponent from "next/image";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "store";
import { MiniCardProduct } from ".";

export default Image;

jest.mock('next/image', () => {
    return {
        default: () => {
            return <ImageComponent src="https://avatars.githubusercontent.com/u/70301260?v=4" alt="" />
        }
    }
});


describe("MiniCardProduct Component", () => {
  it("renders correctly", () => {
    const miniCardProductProps = {
      product: {
        id: 1,
        name: "",
        brand: "",
        description: "",
        photo: "",
        price: "",
        priceNumber: 1,
      },
      quantity: 1,
      subtotal: 1,
    };

    render(
        <Provider store={store}>
            <MiniCardProduct data={miniCardProductProps} />
        </Provider>
    );
  });
});
