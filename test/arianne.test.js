test('Arianne test', async () => {
    const response = await fetch('http://localhost:3000/arianne');
    const name = await response.text();
    expect(name).toBe("arianne");
  });