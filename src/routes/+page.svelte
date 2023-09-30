<svelte:head>
  <title>Virtual Kitchen Helper</title>
  <meta name="description" content="Your Virtual Kitchen Assistant - Make Cooking Easier" />
</svelte:head>

<div class="container">
  <header>
    <h1>Welcome to Virtual Kitchen Helper</h1>
    <p>Your Virtual Kitchen Assistant for identifying ingredients, sharing nutritional facts, recommending recipes, and more.</p>
  </header>

  <section class="about">
    <h2>About Virtual Kitchen Helper</h2>
    <p>
      Virtual Kitchen Helper is your all-in-one digital kitchen assistant. It helps you identify ingredients, shares nutritional facts, recommends delicious recipes based on what's in your pantry, and assists you in planning healthy and tasty meals.
    </p>
  </section>

  <section class="technologies">
    <h2>Technologies We Use</h2>
    <ul>
      <li>SvelteKit - A powerful web framework</li>
      <li>React - A popular JavaScript library</li>
      <li>VITE - For faster and better development</li>
      <li>OpenFoodRepository API - For ingredient data</li>
      <!-- Add more technologies as needed -->
    </ul>
  </section>

  <section class="get-started">
    <h2>Get Started</h2>
    <p>
      Start your culinary journey with Virtual Kitchen Helper. Discover new recipes, plan your meals, and make cooking easier and more enjoyable.
    </p>
    <button class="get-started-button">Get Started</button>
  </section>

  <footer>
    <p>&copy; 2023 Virtual Kitchen Helper. All rights reserved.</p>
  </footer>
</div>

<style>
  /* Style the container to center its contents */
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    text-align: center;
  }

  /* Style the header */
  header {
    margin-bottom: 2rem;
  }

  /* Style section headings */
  h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  /* Style lists */
  ul {
    list-style: disc;
    margin-left: 2rem;
  }

  /* Style the "Get Started" button */
  .get-started-button {
    background-color: #007BFF; /* Primary color */
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    margin-top: 1rem;
  }

  /* Style the footer */
  footer {
    margin-top: 2rem;
    color: #777;
  }
</style>
