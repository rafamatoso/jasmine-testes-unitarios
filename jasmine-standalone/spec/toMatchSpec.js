describe("Teste do toMatch", () => {
  it("Deve validar o uso do toMatch", () => {
    const texto = "teste com Jasmine";

    expect(texto).toMatch("jasmine");
    expect(texto).toMatch(/jasmine/i);
    expect("54684-784").toMatch(/^\d{5}-\d{3}$/);
  });
});
