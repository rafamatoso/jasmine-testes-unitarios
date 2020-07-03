describe("teste do toBeFalsy", () => {
  it("Deve demonstrar o uso do toBeFalsy", () => {
    expect(null).toBeFalsy();
    expect(undefined).toBeFalsy();
    expect("").toBeFalsy();
    expect(false).toBeFalsy();
    expect(NaN).toBeFalsy();
    expect(0).toBeFalsy();

    expect(true).not.toBeFalsy();
  });
});
