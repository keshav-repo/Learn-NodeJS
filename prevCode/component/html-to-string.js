const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const { minify } = require('html-minifier-terser');

async function main(){
// Sample HTML content
const htmlContent = `
<header class="bg-gray-800 text-white py-4 px-4">
<h1 class="text-2xl font-bold">My Blog</h1>
</header>

<main class="container mx-auto px-4 py-8">
<article class="mb-8">
  <h2 class="text-xl font-bold mb-4">My First Blog Post</h2>
  <p>
    This is the content of my first blog post. Lorem ipsum dolor sit amet,
    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </p>
  <img src="image.jpg" alt="Blog post image" class="w-full rounded-lg" />
</article>

<article class="mb-8">
  <h2 class="text-xl font-bold mb-4">Another Blog Post</h2>
  <p>
    This is the content of another blog post. Lorem ipsum dolor sit amet,
    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </p>
</article>
</main>

<footer class="bg-gray-800 text-white py-4 px-4">
<p>Copyright &copy; 2023 My Blog</p>
</footer>
`;

// Parse the HTML content using jsdom
const dom = new JSDOM(htmlContent);

// Serialize the entire document back to a string
const serializedHTML = dom.serialize();

const minifiedHTML = await minify(serializedHTML, {
    collapseWhitespace: true,
    removeComments: true,
    removeRedundantAttributes: true,
    useShortDoctype: true,
    removeEmptyAttributes: true,
    minifyCSS: true,
    minifyJS: true,
});

console.log(minifiedHTML);

// If you want to convert only the body content to a string
const bodyContent = dom.window.document.body.outerHTML;

// console.log(bodyContent);

}

main();
