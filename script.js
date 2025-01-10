// Example JavaScript for a basic search function
document.getElementById("searchButton").addEventListener("click", function() {
    const query = document.getElementById("searchInput").value.trim();
    const resultsContainer = document.getElementById("resultsContainer");

    // Clear previous results
    resultsContainer.innerHTML = "";

    if (query === "") {
        alert("Please enter a search query!");
        return;
    }

    // Simulated search results (replace this with a real API call or logic)
    const dummyData = [
        { title: "Result 1", description: "This is the first result." },
        { title: "Result 2", description: "This is the second result." },
        { title: "Result 3", description: "This is the third result." }
    ];

    // Filter results based on the query (simple matching logic)
    const filteredResults = dummyData.filter(item => 
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase())
    );

    // Display results
    if (filteredResults.length > 0) {
        filteredResults.forEach(item => {
            const resultDiv = document.createElement("div");
            resultDiv.innerHTML = `<h3>${item.title}</h3><p>${item.description}</p>`;
            resultsContainer.appendChild(resultDiv);
        });
    } else {
        resultsContainer.innerHTML = "<p>No results found.</p>";
    }
});
