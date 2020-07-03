describe("Teste do toContain", () => {
  it("Deve demonstrar o uso do toContain", () => {
    let texto = "Meu nome é Rafael";
    let frutas = ["laranja", "banana", "pera"];

    expect(texto).toContain("Rafael");
    expect(texto).not.toContain("rafael");

    expect(frutas).toContain("laranja");
    expect(frutas).not.toContain("melancia");
  });
});
