import { shallowMount } from "@vue/test-utils";
import UButton from "@/components/UButton.vue";
import Loading from "@/components/Loading";
import hexToRgb from "@/helpers/hexToRgb";

describe("UButton.vue", () => {
  const target = "_top";
  const outline = true;
  const round = "2";

  const wrapper = shallowMount(UButton, {
    propsData: {
      target,
      outline,
      round
    }
  });

  it("renders props.target when passed", () => {
    expect(wrapper.vm.target).toMatch(target);
  });

  it("renders props.outline when passed", () => {
    expect(wrapper.vm.outline).toBe(outline);
  });

  it("renders props.round when passed", () => {
    expect(wrapper.vm.round).toMatch(round);
  });

  describe("props.disabled", () => {
    const disabled = true;
    const wrapper = shallowMount(UButton, { propsData: { disabled } });

    it("renders props.disabled when passed", () => {
      expect(wrapper.vm.disabled).toBe(disabled);
    });

    it("should not emitted button click event", () => {
      // Because of disabled is true.
      wrapper.find("button").trigger("click");
      expect(wrapper.emitted("click")).toBeFalsy();
    });
  });

  describe("props.href", () => {
    const href = "https://abc.com";

    const wrapperWithHref = shallowMount(UButton, { propsData: { href } });
    const wrapper = shallowMount(UButton);

    it("renders props.href when passed", () => {
      expect(wrapperWithHref.vm.href).toMatch(href);
    });

    it("should render as <a>", () => {
      expect(wrapperWithHref.contains("a")).toBe(true);
    });

    it("should render as <button>", () => {
      expect(wrapper.contains("button")).toBe(true);
    });

    it("should emitted button click event", () => {
      wrapper.find("button").trigger("click");
      expect(wrapper.emitted("click")).toBeTruthy();
    });
  });

  describe("props.theme", () => {
    const theme = "#ffffff";
    const themeShort = "#fff";
    const wrapper = shallowMount(UButton, { propsData: { theme } });

    it("renders props.theme when passed", () => {
      expect(wrapper.vm.theme).toMatch(theme);
    });

    it("should get hexToRgb result", () => {
      const result = "255,255,255";
      expect(hexToRgb(theme)).toMatch(result);
      expect(hexToRgb(themeShort)).toMatch(result);
    });
  });

  describe("props.loading", () => {
    const loading = true;
    const wrapper = shallowMount(UButton, { propsData: { loading } });

    it("renders props.loading when passed", () => {
      expect(wrapper.vm.loading).toBe(loading);
    });

    it("should contains loading componeent", () => {
      expect(wrapper.contains(Loading)).toBe(true);
    });

    it("should not contains loading componeent", () => {
      const loading = false;
      const wrapper = shallowMount(UButton, { propsData: { loading } });
      expect(wrapper.contains(Loading)).toBe(false);
    });
  });
});
