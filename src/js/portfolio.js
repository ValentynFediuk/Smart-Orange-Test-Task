
/*
Fetch + render portfolio cards from a JSON endpoint (vanilla JS).
Adds tabs filtering, initial render of max 3 items, and a Load More button with spinner.
Comments are in English as requested.
*/

const API_URL = (process.env.API_URL) || 'https://test.smarto.agency/smarto_complexes_list.json';
const CONTAINER_SELECTOR = '#portfolio-list';
const TABS_SELECTOR = '.portfolio__tabs';
const FALLBACK_IMG = '/assets/images/mock.jpg'; // fallback if JSON has no image
const PAGE_SIZE = Number(process.env.PAGE_SIZE) || 3; // show max 3 at start and per page

// State
let ALL_ITEMS = [];
let currentFilter = 'Усі';
let visibleCount = PAGE_SIZE;
let isLoadingMore = false;
let loadMoreBtn = null;

// sanitize text by setting textContent (prevents html injection)
function createText(tag, text, className) {
  const el = document.createElement(tag);
  if (className) el.className = className;
  el.textContent = text ?? '';
  return el;
}

// create the tags list <ul> from an array of strings
function createTagsList(tags = []) {
  const wrapper = document.createElement('div');
  wrapper.className = 'portfolio__card-tags';

  const title = createText('h5', 'Види робіт:', 'portfolio__card-tags-title');
  wrapper.appendChild(title);

  const ul = document.createElement('ul');
  ul.className = 'portfolio__card-tags-list';

  // limit tags to reasonable number to avoid layout explosion
  const MAX_TAGS = 12;
  (Array.isArray(tags) ? tags.slice(0, MAX_TAGS) : []).forEach(tag => {
    const li = createText('li', tag, 'portfolio__card-tags-list-item');
    ul.appendChild(li);
  });

  wrapper.appendChild(ul);
  return wrapper;
}

// build single card DOM from item object
function buildCard(item) {
  // Item shape is unknown; try common field names and fallback sensibly.
  // English comments here; textual content set with textContent to avoid XSS.
  const year = item.year || item.date || item.top_year || '';
  const type = item.type || item.category || item.top_type || '';
  const imgSrc = item.image || item.img || item.picture || item.thumbnail || FALLBACK_IMG;
  const title = item.title || item.name || item.project || 'Без назви';
  const address = item.address || item.location || item.adress || '';

  const tags = item.tags || item.work_types || item.categories || [];

  // create elements
  const card = document.createElement('div');
  card.className = 'portfolio__card';

  const inner = document.createElement('div');
  inner.className = 'portfolio__card-inner';

  const top = document.createElement('div');
  top.className = 'portfolio__card-top';
  top.appendChild(createText('div', year ? `${year}` : '', 'portfolio__card-top-year'));
  top.appendChild(createText('div', type ? `${type}` : '', 'portfolio__card-top-type'));

  const img = document.createElement('img');
  img.className = 'portfolio__card-image';
  img.alt = title;
  img.src = imgSrc;
  img.loading = 'lazy';
  // if image fails to load, use fallback
  img.onerror = () => { img.onerror = null; img.src = FALLBACK_IMG; };

  const h4 = createText('h4', title, 'portfolio__card-title');
  const pAddr = createText('p', address, 'portfolio__card-address');

  inner.appendChild(top);
  inner.appendChild(img);
  inner.appendChild(h4);
  inner.appendChild(pAddr);
  inner.appendChild(createTagsList(tags));

  card.appendChild(inner);
  return card;
}

function matchesFilter(item, filterLabel) {
  if (!filterLabel || filterLabel === 'Усі') return true;
  const type = (item.type || item.category || item.top_type || '').toString().toLowerCase();
  const label = filterLabel.toString().toLowerCase();
  return type.includes(label);
}

function getFilteredItems() {
  return (ALL_ITEMS || []).filter(item => matchesFilter(item, currentFilter));
}

function ensureLoadMoreButton(container) {
  if (loadMoreBtn) return loadMoreBtn;
  loadMoreBtn = document.createElement('button');
  loadMoreBtn.type = 'button';
  loadMoreBtn.className = 'portfolio__load-more';
  loadMoreBtn.innerHTML = `
  <span class="portfolio__load-more-text">Завантажити ще</span>
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 2.24988C7.58579 2.24988 7.25 2.58566 7.25 2.99988V11.0946L5.54883 9.26648C5.26667 8.96354 4.7924 8.94651 4.48926 9.22839C4.1861 9.51065 4.16892 9.98578 4.45117 10.2889L7.45117 13.5106L8 14.1005L8.54883 13.5106L11.5488 10.2889C11.8311 9.98578 11.8139 9.51065 11.5107 9.22839C11.2076 8.94651 10.7333 8.96354 10.4512 9.26648L8.75 11.0946V2.99988C8.75 2.58567 8.41421 2.24988 8 2.24988Z" fill="#0A0F13"/>
</svg>
  <span class="portfolio__spinner" aria-hidden="true"></span>
  `;
  loadMoreBtn.addEventListener('click', async () => {
    if (isLoadingMore) return;
    isLoadingMore = true;
    loadMoreBtn.classList.add('is-loading');
    loadMoreBtn.disabled = true;

    // Simulate async delay for UX; could be used with server-side pagination in future.
    await new Promise(r => setTimeout(r, 700));

    visibleCount += PAGE_SIZE;
    renderList(container);

    isLoadingMore = false;
    loadMoreBtn.classList.remove('is-loading');
    loadMoreBtn.disabled = false;
  });

  // insert after container
  container.parentNode.insertBefore(loadMoreBtn, container.nextSibling);
  return loadMoreBtn;
}

function renderList(container) {
  const items = getFilteredItems();
  container.innerHTML = '';

  const slice = items.slice(0, visibleCount);
  slice.forEach(item => container.appendChild(buildCard(item)));

  // handle empty
  if (slice.length === 0) {
    container.innerHTML = '<p class="portfolio__empty">Нічого не знайдено.</p>';
  }

  // load more button logic
  const btn = ensureLoadMoreButton(container);
  if (items.length > visibleCount) {
    btn.style.display = '';
  } else {
    btn.style.display = 'none';
  }
}

function setupTabs(container) {
  const tabsRoot = document.querySelector(TABS_SELECTOR);
  if (!tabsRoot) return;

  tabsRoot.addEventListener('click', (e) => {
    const li = e.target.closest('.portfolio__tabs-item');
    if (!li) return;

    // set active class
    tabsRoot.querySelectorAll('.portfolio__tabs-item').forEach(el => el.classList.remove('portfolio__tabs-item--active'));
    li.classList.add('portfolio__tabs-item--active');

    // update filter and reset visible count
    currentFilter = (li.textContent || '').trim();
    visibleCount = PAGE_SIZE;
    renderList(container);
  });
}

function getUniqueTypes(items = []) {
  const seen = new Set();
  const result = [];
  items.forEach(it => {
    const raw = (it.type || it.category || it.top_type || '').toString().trim();
    if (!raw) return;
    const key = raw.toLowerCase();
    if (!seen.has(key)) {
      seen.add(key);
      result.push(raw);
    }
  });
  return result;
}

function buildTabsFromItems(items = []) {
  const tabsRoot = document.querySelector(TABS_SELECTOR);
  if (!tabsRoot) return;

  const types = getUniqueTypes(items);
  // Always include 'Усі' first
  const labels = ['Усі', ...types];

  // Rebuild list
  tabsRoot.innerHTML = '';
  labels.forEach((label, idx) => {
    const li = document.createElement('li');
    li.className = 'portfolio__tabs-item' + (idx === 0 ? ' portfolio__tabs-item--active' : '');
    li.textContent = label;
    tabsRoot.appendChild(li);
  });
}

// main init
async function initPortfolio(apiUrl = API_URL, containerSelector = CONTAINER_SELECTOR) {
  const container = document.querySelector(containerSelector);
  if (!container) {
    console.error('Portfolio container not found:', containerSelector);
    return;
  }

  // initial loading state
  container.innerHTML = '<p class="portfolio__loading">Завантаження…</p>';

  try {
    const resp = await fetch(apiUrl, { cache: 'no-store' });
    if (!resp.ok) throw new Error(`HTTP ${resp.status}`);

    const data = await resp.json();

    // attempt to extract an array from various possible shapes
    let items = null;
    if (Array.isArray(data)) items = data;
    else if (Array.isArray(data.data)) items = data.data;
    else if (Array.isArray(data.complexes)) items = data.complexes;
    else if (Array.isArray(data.items)) items = data.items;
    else if (Array.isArray(data.projects)) items = data.projects;
    else if (Array.isArray(data.list)) items = data.list;
    else {
      for (const k in data) {
        if (Array.isArray(data[k])) { items = data[k]; break; }
      }
    }

    ALL_ITEMS = Array.isArray(items) ? items : [];

    // build tabs based on item types and prepare UI
    buildTabsFromItems(ALL_ITEMS);
    setupTabs(container);

    // initial render
    currentFilter = 'Усі';
    visibleCount = PAGE_SIZE;
    renderList(container);
  } catch (err) {
    console.error('Failed to fetch/render portfolio:', err);
    container.innerHTML = `<p class="portfolio__error">Помилка завантаження даних: ${err.message}</p>`;
  }
}

// auto init
initPortfolio();