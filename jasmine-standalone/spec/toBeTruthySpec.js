describe("Teste do toBeTruthy", () => {
  it("Deve demonstrar o uso do toBeTruthy", () => {
    let n1 = 10;
    let n2 = undefined;
    let n3 = 0;
    let n4 = "";
    let n5 = null;
    let n6 = NaN;
    let n7;

    expect(n1).toBeTruthy();
    expect("teste").toBeTruthy();
    expect(true).toBeTruthy();

    expect(n2).not.toBeTruthy();
    expect(n3).not.toBeTruthy();
    expect(n4).not.toBeTruthy();
    expect(n5).not.toBeTruthy();
    expect(n6).not.toBeTruthy();
    expect(n7).not.toBeTruthy();
    expect(false).not.toBeTruthy();
  });
});
