async function createDemoPaywall() {
  const res = await fetch("http://localhost:8080/create-paywall", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      url: "https://example.com/article",
      price: "2.99"
    })
  });
  const data = await res.json();
  document.getElementById("result").textContent = JSON.stringify(data, null, 2);
}
