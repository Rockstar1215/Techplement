document.addEventListener("DOMContentLoaded", () => {
    const quote = document.getElementById("quote");
    const author = document.getElementById("author");
    const api_url = "https://api.quotable.io/random";

    async function getquote(url) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            quote.innerHTML = data.content;
            author.innerHTML = data.author;
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    getquote(api_url);

    document.getElementById("new-quote-btn").addEventListener("click", () => {
        getquote(api_url);
    });

// Function to search quotes by author
async function searchByAuthor(authorName) {
    try {
        const search_url = https://api.quotable.io/quotes?author=${encodeURIComponent(authorName)};
        const response = await fetch(search_url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
}

// Function to display search results
function displaySearchResults(quotes) {
    const searchResultsContainer = document.getElementById('search-results-list');
    searchResultsContainer.innerHTML = '';
    if (quotes.length === 0) {
        searchResultsContainer.innerHTML = '<p>No quotes found for this author.</p>';
    } else {
        quotes.forEach(quote => {
            const quoteElement = document.createElement('div');
            quoteElement.classList.add('search-result');
            quoteElement.innerHTML = `<div class="quote-card">
            <blockquote>${quote.content}</blockquote>
            <span class="author">- ${quote.author}</span>
        </div>`;
            searchResultsContainer.appendChild(quoteElement);
        });
    }
}

// Event listener for search button click
document.getElementById("search-btn").addEventListener("click", async () => {
    const searchInput = document.getElementById('search-input').value.trim();
    if (searchInput !== '') {
        const searchResults = await searchByAuthor(searchInput);
        displaySearchResults(searchResults);
    }
});
});
