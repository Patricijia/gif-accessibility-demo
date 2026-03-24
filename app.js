// GIF examples: Giphy search term + pre-computed captions from both models.
// GIF URLs use Giphy's public media endpoint (no API key needed for display).
const EXAMPLES = [
  {
    gif: 'https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif',
    finetuned: 'A group of people with heads turned around their shoulders up close together as if they had been walking down.',
    base: 'The image shows were an art exhibition series of famous works by renowned artists such as Van Gingd.',
  },
  {
    gif: 'https://media.giphy.com/media/26ufdipQqU2lhNA4g/giphy.gif',
    finetuned: 'A man is standing and looking surprised, then reacting with excitement.',
    base: 'The image is an edited copy of a photograph taken by someone named John Doherty on October 2.',
  },
  {
    gif: 'https://media.giphy.com/media/3o7TKSjRrfIPjeiVyM/giphy.gif',
    finetuned: 'A group of three men were playing chess. The first woman played one game, then another came down.',
    base: 'This is an exercise game where you have to complete your own health by doing as much of it on.',
  },
  {
    gif: 'https://media.giphy.com/media/l2JhpjWPccQhsAMfu/giphy.gif',
    finetuned: 'A black-hoodl is played with an expression on his face. He has been playing with another.',
    base: 'The first game was "The Last of Username" which I can\'t tell you? It\'s.',
  },
  {
    gif: 'https://media.giphy.com/media/xT9IgG50Lg7russbDa/giphy.gif',
    finetuned: 'A woman is looking at an image of herself that has been painted with white paintbrushes on them.',
    base: 'This is an excellent book by which i found of it\'s author was born but he had no idea.',
  },
  {
    gif: 'https://media.giphy.com/media/l0HlvtIPzPdt2usKs/giphy.gif',
    finetuned: 'A group of people were gathered together at an outdoor event. They all look alike but one is wearing.',
    base: 'The original meme is from "The Greatest Album" by David Wight of Love Books.',
  },
];

function buildCard(example) {
  const card = document.createElement('div');
  card.className = 'gif-card';

  const img = document.createElement('img');
  img.src = example.gif;
  img.alt = example.finetuned;
  img.loading = 'lazy';

  const captions = document.createElement('div');
  captions.className = 'gif-captions';

  captions.innerHTML = `
    <div class="caption-row">
      <span class="caption-label label-finetuned">Fine-tuned model</span>
      <span class="caption-text">"${example.finetuned}"</span>
    </div>
    <div class="caption-row">
      <span class="caption-label label-base">Base model</span>
      <span class="caption-text">"${example.base}"</span>
    </div>
  `;

  card.appendChild(img);
  card.appendChild(captions);
  return card;
}

const grid = document.getElementById('gif-grid');
EXAMPLES.forEach(ex => grid.appendChild(buildCard(ex)));
