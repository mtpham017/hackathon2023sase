<!-- App.svelte -->

<svelte:head>
  <title>Virtual Kitchen Helper</title>
  <meta name="description" content="Your Virtual Kitchen Assistant - Make Cooking Easier" />
</svelte:head>

<style>
  :global(body) {
    font-family: 'Your-Font-Here', sans-serif; 
    margin: 0;
    padding: 0;
  }
  

 
  section {
    height: 100vh; 
    scroll-snap-align: start;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }

  .header {
    background-color: #fff;
  }

 

  .header h1 {
    font-size: 2rem;
  }

  .aboutSect h2 {
    font-size: 1.5rem;
  }

  .start h2 {
    font-size: 2rem;
  }

 
  .start-button {
    background-color: #4c956c;
    color: #fefee3;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    margin-top: 1rem;
    transition: background-color 0.3s;
    text-align: center;
  }

  .start-button:hover {
    background-color: #2c6e49;
  }

  
  footer {
    color: #000000;
    text-align: center;
  }

</style>

<div class="container">
  
  <section class="header">
    <h1>Welcome to <span>Virtual Kitchen Helper</span></h1>
    <p>Your Virtual Kitchen Assistant for identifying ingredients, sharing nutritional facts, recommending recipes, and more.</p>
  </section>

  <section class="aboutSect">
    <h2>About Virtual Kitchen Helper</h2>
    <p>
      Virtual Kitchen Helper is your all-in-one digital kitchen assistant. It helps you identify ingredients, shares nutritional facts, recommends delicious recipes based on what's in your pantry, and assists you in planning healthy and tasty meals.
    </p>
  </section>

  <section class="start">
    <h2>Get Started</h2>
    <p>
      Start your culinary journey with Virtual Kitchen Helper. Discover new recipes, plan your meals, and make cooking easier and more enjoyable.
    </p>
    <button class="start-button">Get Started</button>
  </section>

  <footer>
    <p>&copy; 2023 Virtual Kitchen Helper. All rights reserved.</p>
  </footer>
</div>


