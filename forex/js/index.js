
const urlParams = new URLSearchParams(window.location.search);
let source = urlParams.get('adv');

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

// Optional: save final link too if you want
localStorage.setItem('tgActionLink', tgActionLink);

console.log("!!!!! Source:", source);
console.log("!!!!! Telegram Link:", tgActionLink);

// Example usage: attach to a button
// document.querySelector('#tg-btn').href = tgActionLink;
