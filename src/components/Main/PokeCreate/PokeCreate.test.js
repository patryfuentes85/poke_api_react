import React from "react";
import { shallow } from "enzyme";
import PokeCreate from "./PokeCreate";

describe("PokeCreate", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<PokeCreate />);
    expect(wrapper).toMatchSnapshot();
  });
});
