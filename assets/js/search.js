{{- $searchData := resources.Get "list.json" | resources.ExecuteAsTemplate "search-data.json" . -}}
const searchDataURL = '{{ $searchData.RelPermalink }}';
let index;

const init = async () => {
  try {
    const response = await fetch(searchDataURL);
    const pages = await response.json();

    index = new FlexSearch.Document({
      tokenize: 'reverse',
      document: {
        field: ['title', 'body'],
        store: ['title', 'href', 'body'],
      },
    });

    for (let i = 0; i < pages.length; i++) {
      index.add(i, pages[i]);
    }

    // Initialize search for the navbar
    const searchBoxNav = document.querySelector('#search-by');
    if (searchBoxNav) {
      searchBoxNav.addEventListener('keyup', (event) => {
        const query = event.currentTarget.value;
        const searchResultsArea = document.querySelector('#searchResults');
        if (query.length < 2) {
          searchResultsArea.style.display = 'none';
          return;
        }
        const results = search(query, 5);
        renderResults(results, query, 'navbar');
        searchResultsArea.style.display = 'block';
      });
    }

    // Initialize search for the search page
    const searchBoxPage = document.querySelector('#searchBox');
    if (searchBoxPage) {
      const searchResultsContainer = document.getElementById('searchResultsPage');
      const urlParams = new URLSearchParams(window.location.search);
      const query = urlParams.get('q');

      if (query) {
        searchBoxPage.value = query;
        const results = search(query);
        renderResults(results, query, 'page', searchResultsContainer);
      }

      searchBoxPage.addEventListener('keyup', (event) => {
        const query = event.currentTarget.value;
        if (query.length > 2) {
          const results = search(query);
          renderResults(results, query, 'page', searchResultsContainer);
        } else {
          searchResultsContainer.innerHTML = '';
        }
      });
    }
  } catch (error) {
    console.error('Error initializing search:', error);
  }
};

const search = (query, limit = 10) => {
  return index.search(query, limit, { enrich: true });
};

const renderResults = (results, query, context, container) => {
  let searchResults;
  if (context === 'navbar') {
    searchResults = document.querySelector('#searchResults');
  } else {
    searchResults = container;
  }

  while (searchResults.firstChild) {
    searchResults.removeChild(searchResults.firstChild);
  }

  if (!results.length) {
    const noResultItem = document.createElement(context === 'navbar' ? 'li' : 'div');
    noResultItem.innerHTML = `<span class="dropdown-item-text">No results found for query "${query}"</span>`;
    searchResults.append(noResultItem);
    return;
  }

  let arr = results.flatMap(result => result.result);
  arr = arr.filter((element, index, self) => self.findIndex(e => e.id === element.id) === index);

  const instance = new Mark(searchResults);

  arr.forEach((result) => {
    if (context === 'navbar') {
      const resultItem = document.createElement('li');
      resultItem.setAttribute('role', 'presentation');
      const resultLink = document.createElement('a');
      resultLink.className = 'dropdown-item text-truncate small';
      resultLink.href = result.doc.href;
      resultLink.setAttribute('role', 'menuitem');
      resultLink.setAttribute('tabindex', '-1');
      resultLink.innerHTML = `<span class="icon baseline mr-1" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-square" viewBox="0 0 16 16" style="vertical-align: text-bottom;"><path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.5 8a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 0-1H6a.5.5 0 0 0-.5.5z"/><path fill-rule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708L8.207 4.207a.5.5 0 0 0-.708.708L10.293 7.5H6a.5.5 0 0 0 0 1h4.293l-2.794 2.793a.5.5 0 0 0 .708.708l3.647-3.647z"/></svg></span> ${result.doc.title}`;
      resultItem.appendChild(resultLink);
      searchResults.appendChild(resultItem);
    } else {
      const resultItem = document.createElement('div');
      resultItem.className = 'search-result-item';
      const title = document.createElement('h3');
      const link = document.createElement('a');
      link.href = result.doc.href;
      link.textContent = result.doc.title;
      title.appendChild(link);
      const description = document.createElement('p');
      description.textContent = result.doc.body.substring(0, 125) + '...';
      resultItem.appendChild(title);
      resultItem.appendChild(description);
      searchResults.appendChild(resultItem);
    }
  });

  if (context === 'navbar') {
    const showAllItem = document.createElement('li');
    showAllItem.setAttribute('role', 'presentation');
    showAllItem.className = 'border-top bg-light';
    const showAllLink = document.createElement('a');
    showAllLink.className = 'dropdown-item text-truncate small';
    showAllLink.href = `/search?q=${encodeURIComponent(query)}`;
    showAllLink.setAttribute('role', 'menuitem');
    showAllLink.setAttribute('tabindex', '-1');
    showAllLink.innerHTML = `<span class="icon baseline mr-1" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search-fill" viewBox="0 0 16 16" style="vertical-align: text-bottom;"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/></svg></span> <strong>Show all results & advanced filters →</strong>`;
    showAllItem.appendChild(showAllLink);
    searchResults.appendChild(showAllItem);
  }

  instance.mark(query);
};

init();

