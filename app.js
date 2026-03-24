// All 10 caption pairs from actual test runs on the "surprise" Giphy search.
// Fine-tuned = Patricijia/smolvlm-gif-descriptor
// Base       = HuggingFaceTB/SmolVLM-256M-Instruct
const EXAMPLES = [
  {
    gif: 'https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif',
    finetuned: 'A man is standing on fire hydroid, then reacting with surprise.',
    base: 'The image is an edited copy of a photograph taken by someone named John Doherty on October 2.',
  },
  {
    gif: 'https://media.giphy.com/media/26ufdipQqU2lhNA4g/giphy.gif',
    finetuned: 'A group of three men is walking around the corner on his way. He looks like he was running.',
    base: 'This is an exercise game where you have to complete your own health by doing as much of it on.',
  },
  {
    gif: 'https://media.giphy.com/media/3o7TKSjRrfIPjeiVyM/giphy.gif',
    finetuned: 'A group of people with heads turned around their shoulders up close together as if they had been walking down.',
    base: 'The collage is made up of photoshopped els for each other person who has been doing this.',
  },
  {
    gif: 'https://media.giphy.com/media/xT9IgG50Lg7russbDa/giphy.gif',
    finetuned: 'A group of three men were playing chess. The first woman played one game, then another came down.',
    base: 'The image shows were an art exhibition series of famous works by renowned artists such as Van Gingd.',
  },
  {
    gif: 'https://media.giphy.com/media/l2JhpjWPccQhsAMfu/giphy.gif',
    finetuned: 'The first word is "like". Text: TRAITORS "Who Doesn\'t Like Surprises?"',
    base: '"The original this is my first I amd ofe" as well that was found by me.',
  },
  {
    gif: 'https://media.giphy.com/media/l0HlvtIPzPdt2usKs/giphy.gif',
    finetuned: '"I am I don\'t. The first is an ordinary that does not know." This means another.',
    base: 'The first game was "The Last of Username" which I can\'t tell you? It\'s. Text: Surprise! Surprise!',
  },
  {
    gif: 'https://media.giphy.com/media/3o6Zt6ML6BklcajjsA/giphy.gif',
    finetuned: 'A black-hooded figure is played with an expression on his face. He has been playing with another.',
    base: 'The first image shows were all about ten years old but now they\'re only have been running for twenty.',
  },
  {
    gif: 'https://media.giphy.com/media/l3vR85wkDmwD3omts/giphy.gif',
    finetuned: 'A collage of pictures taken by a group. The picture is titled and shows multiple people.',
    base: 'This is an excellent book by which i found of it\'s author was born but he had no idea. Text: Canal+ SURPRISE,',
  },
  {
    gif: 'https://media.giphy.com/media/l46Cy1rHbQ92uuLXa/giphy.gif',
    finetuned: 'A woman is looking at an image of herself that has been painted with white paintbrushes on them.',
    base: 'super arial red hat blue yellow white black green pale orange light darkened tan saturday sund.',
  },
  {
    gif: 'https://media.giphy.com/media/l0IypeKl9NJhPFMrK/giphy.gif',
    finetuned: 'A group of people were gathered together at an outdoor event. They all look alike but one is wearing.',
    base: 'The original meme is from "The Greatest Album" by David Wight of Love Books. Text: TRAITORS "Who Doesn\'t Like Surprises?"',
  },
];

function buildCard(example, index) {
  const card = document.createElement('div');
  card.className = 'gif-card';

  const img = document.createElement('img');
  img.src = example.gif;
  img.alt = example.finetuned;
  img.loading = index < 4 ? 'eager' : 'lazy';

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
EXAMPLES.forEach((ex, i) => grid.appendChild(buildCard(ex, i)));
