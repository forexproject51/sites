
const urlParams = new URLSearchParams(window.location.search);
let source = urlParams.get('adv');

const DEFAULT_FB_PIXEL_ID = '1689534988969470';
const tgLink = "https://t.me/+NGFN-LaBss8zMmY6";

// const instplcLink = "https://t.me/+VhZd2ro4cvY1ZGZi";
// const fbplcLink = "https://t.me/+uvraxx0qkUNlOWIy";
// const defaultLink = "https://t.me/+_3rTIx_VAKowMzJi";

// If source is in URL, save it to localStorage
if (source)
{
    localStorage.setItem('advSource', source);
} else
{
    // Try to get from localStorage if not in URL
    source = localStorage.getItem('advSource');
}

// Determine final tgActionLink based on source
// let tgActionLink = defaultLink;
// if (source === "instplc")
// {
//     tgActionLink = instplcLink;
// } else if (source === "fbplc")
// {
//     tgActionLink = fbplcLink;
// }

let tgActionLink = tgLink;

//redo tgActionLink to kosher.com
// Original version (PHP syntax doesn't work in .js files):
// tgActionLink = "https://redirect-kosher.com/ldpg/aibiat3qjp5p/redirect?pixel=<?=$_GET['pixel']?>&ad_id=<?= $_GET['ad_id'] ?? '' ?>&ad_name=<?= $_GET['ad_name'] ?? '' ?>&adset_id=<?= $_GET['adset_id'] ?? '' ?>&adset_name=<?= $_GET['adset_name'] ?? '' ?>&campaign_id=<?= $_GET['campaign_id'] ?? '' ?>&campaign_name=<?= $_GET['campaign_name'] ?? '' ?>&placement=<?= $_GET['placement'] ?? '' ?>&site_source_name=<?= $_GET['site_source_name'] ?? '' ?>&fbclid=<?= $_GET['fbclid'] ?? '' ?>";

// Build URL with all query parameters using JavaScript
// const params = new URLSearchParams(window.location.search);
// const redirectParams = new URLSearchParams({
//     pixel: params.get('pixel') || '',
//     ad_id: params.get('ad_id') || '',
//     ad_name: params.get('ad_name') || '',
//     adset_id: params.get('adset_id') || '',
//     adset_name: params.get('adset_name') || '',
//     campaign_id: params.get('campaign_id') || '',
//     campaign_name: params.get('campaign_name') || '',
//     placement: params.get('placement') || '',
//     site_source_name: params.get('site_source_name') || '',
//     fbclid: params.get('fbclid') || ''
// });

// var mimitelId = "0lpgebsppnva";
// var kartlosId = "aibiat3qjp5p";

// var curId = mimitelId;
// Get the domain (hostname without 'www.' if present)
// let domain = window.location.hostname.replace(/^www\./, '').toLowerCase();

// if (domain === 'mimitel.com') {
//     curId = mimitelId;
// } else if (domain === 'kartlos.com') {
//     curId = kartlosId;
// }
// Add more domains as needed


// tgActionLink = `https://redirect-kosher.com/ldpg/${curId}/redirect?${redirectParams.toString()}`;

// --- Dynamic CTA: store query params, optional tgUrl override, apply to all TG buttons ---

function normalizeBaseUrl(raw) {
    if (!raw) return tgLink;
    const trimmed = String(raw).trim();
    if (!trimmed) return tgLink;
    if (/^https?:\/\//i.test(trimmed)) return trimmed;
    return 'https://' + trimmed;
}

// Persist current query string when present; otherwise reuse stored
const currentSearch = window.location.search;
if (currentSearch && currentSearch.length > 1) {
    localStorage.setItem('storedQueryParams', currentSearch.slice(1));
}

const resolvedQueryString =
    (currentSearch && currentSearch.length > 1
        ? currentSearch.slice(1)
        : localStorage.getItem('storedQueryParams')) || '';

const resolvedParams = new URLSearchParams(resolvedQueryString);

// Persist / resolve tgUrl override
const tgUrlFromParams = resolvedParams.get('tgUrl');
if (tgUrlFromParams) {
    localStorage.setItem('storedTgUrl', tgUrlFromParams);
}
const storedTgUrl = tgUrlFromParams || localStorage.getItem('storedTgUrl');

// Persist / resolve pixel override (same pattern as tgUrl)
const pixelFromParams = resolvedParams.get('pixel');
if (pixelFromParams) {
    localStorage.setItem('storedPixelId', pixelFromParams);
}
const FB_PIXEL_ID =
    pixelFromParams || localStorage.getItem('storedPixelId') || DEFAULT_FB_PIXEL_ID;
window.FB_PIXEL_ID = FB_PIXEL_ID;

const baseUrl = normalizeBaseUrl(storedTgUrl || tgLink);

// Build final link: base + all params except landing-only overrides
const forwardParams = new URLSearchParams(resolvedParams.toString());
forwardParams.delete('tgUrl');
forwardParams.delete('pixel');

try {
    const finalUrl = new URL(baseUrl);
    forwardParams.forEach((value, key) => {
        finalUrl.searchParams.set(key, value);
    });
    tgActionLink = finalUrl.toString();
} catch (e) {
    // Fallback if base URL is malformed
    const qs = forwardParams.toString();
    tgActionLink = qs ? baseUrl + (baseUrl.includes('?') ? '&' : '?') + qs : baseUrl;
}

window.tgActionLink = tgActionLink;

// Optional: save final link too if you want
localStorage.setItem('tgActionLink', tgActionLink);

console.log("!!!!! Source:", source);
console.log("!!!!! Telegram Link:", tgActionLink);
console.log("!!!!! FB Pixel ID:", FB_PIXEL_ID);

// Example usage: attach to a button
// document.querySelector('#tg-btn').href = tgActionLink;

function isTgCtaAnchor(anchor) {
    if (!anchor || anchor.tagName !== 'A') return false;
    if (anchor.dataset.tgCta === '1') return true;
    const href = anchor.getAttribute('href') || '';
    return href.includes('t.me') || href === 'tgActionLink';
}

function applyTgActionLinks(root) {
    const scope = root && root.querySelectorAll ? root : document;
    const candidates = scope.querySelectorAll(
        'a[data-tg-cta], a[href*="t.me"], a[href="tgActionLink"]'
    );

    candidates.forEach((anchor) => {
        if (!isTgCtaAnchor(anchor)) return;
        anchor.dataset.tgCta = '1';
        if (anchor.getAttribute('href') !== tgActionLink) {
            anchor.setAttribute('href', tgActionLink);
        }
    });

    // querySelectorAll does not include root itself
    if (root && root.nodeType === 1 && isTgCtaAnchor(root)) {
        root.dataset.tgCta = '1';
        if (root.getAttribute('href') !== tgActionLink) {
            root.setAttribute('href', tgActionLink);
        }
    }
}

applyTgActionLinks(document);

document.addEventListener('DOMContentLoaded', function () {
    applyTgActionLinks(document);
});

function startTgLinkObserver() {
    if (!document.body) return;
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            mutation.addedNodes.forEach((node) => {
                if (node.nodeType === 1) {
                    applyTgActionLinks(node);
                }
            });
            // Framer may mutate href attributes in place
            if (mutation.type === 'attributes' && mutation.target.nodeType === 1) {
                applyTgActionLinks(mutation.target);
            }
        });
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['href'],
    });
}

if (document.body) {
    startTgLinkObserver();
} else {
    document.addEventListener('DOMContentLoaded', startTgLinkObserver);
}
