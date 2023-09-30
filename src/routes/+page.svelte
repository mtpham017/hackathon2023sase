<!-- App.svelte -->

<svelte:head>
  <title>Virtual Kitchen Helper</title>
  <meta name="description" content="Your Virtual Kitchen Assistant - Make Cooking Easier" />
</svelte:head>

<style>
  /* Global Styles */
  :global(body) {
    font-family: 'Your-Font-Here', sans-serif; /* Replace with your desired font */
    margin: 0;
    padding: 0;
  }

  /* Style section headings */
  section {
    padding: 80px 0;
  }

  .section-bg {
    background-color: #fefee3;
  }

  .section-header {
    text-align: center;
    padding-bottom: 30px;
  }

  .section-header h2 {
    font-size: 1rem;
    font-weight: 400;
    color: #7f7f90;
    text-transform: uppercase;
  }

  .section-header p {
    font-size: 2rem;
    font-weight: 400;
    color: #000;
  }

  .section-header p span {
    color: #4c956c;
  }

  /* Style the navigation bar */
  nav {
    background-color: #4c956c;
    color: white;
    padding: 1rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  nav ul {
    list-style: none;
    display: flex;
    gap: 1rem;
  }

  nav ul a {
    text-decoration: none;
    color: white;
    transition: color 0.3s;
  }

  nav ul a:hover {
    color: #fefee3;
  }

  /* Style the "Get Started" button */
  .get-started-button {
    background-color: #2c6e49;
    color: #fefee3;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    margin-top: 1rem;
    transition: background-color 0.3s;
  }

  .get-started-button:hover {
    background-color: #237d57;
  }

  /* Style the footer */
  footer {
    margin-top: 2rem;
    color: #777;
    text-align: center;
  }
</style>

<div class="container">
  <!-- Navigation bar -->
  <nav>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/">Fridge</a></li>
    </ul>
    <button class="get-started-button">Login</button>
  </nav>

  <header class="section-header">
    <h1>Welcome to <span>Virtual Kitchen Helper</span></h1>
    <p>Your Virtual Kitchen Assistant for identifying ingredients, sharing nutritional facts, recommending recipes, and more.</p>
  </header>

  <section class="about section-bg">
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

  <section class="get-started section-bg">
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

