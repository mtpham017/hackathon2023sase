<!-- App.svelte -->

<svelte:head>
  <title>Sha'Mo</title>
  <meta name="description" content="Your Virtual Kitchen Assistant - Make Cooking Easier" />
</svelte:head>

<style>
  :global(body) {
    font-family: 'Gabarito', sans-serif; 
    margin: 0;
    padding: 0;
    
    
  }

  .container{
    aspect-ratio: 960/300;
    width: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size:cover;
    background-image: url(/src/lib/images/blurry-gradient-haikei.svg);
    
  }
  section {
    height: 100vh; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .header {
    font-family: 'Gabarito';
    font-weight: 500;
    
  }

  .header h1 {
    font-size: 5rem;
    margin-bottom: 5px;
  }
  .header p {
    font-size: 25px;
    text-align: center;
  }
  

  .aboutSect h2 {
    
    font-size: 4rem;
    padding-right: 70rem;
    margin-bottom: 5px;
  }
  .aboutSect p{
    margin-left: 99px;
    padding-right: 60rem;
    font-size: 25px;
    max-width: 800px;
    text-align: left;

  }

  .start h2 {
    font-size: 3rem;
    margin-bottom: 5px;
  }
  .start p{
    font-size: 23px;
    margin-bottom: 10px;
    max-width: 800px;
    text-align: center;
  }

 
  .start-button {
    background-color: #4c956c;
    color: #ffffff;
    border: none;
    padding: 10px 20px;
    border-radius: 30px;
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
    padding-bottom: 1px;
  }

  @media screen and (max-width: 768px) {
    
    .container {
      aspect-ratio: 1; 
    }

    .header h1 {
      font-size: 3rem;
    }

    .aboutSect h2 {
      font-size: 3rem;
    }

    .aboutSect p,
    .start p {
      font-size: 18px;
    }

    .start-button {
      font-size: 0.8rem;
    }
  }

  
</style>



<div class="container">
  
  <section class="header">
    <h1>Welcome to Sha'Mo</h1>
    <p>Your Virtual Kitchen Assistant for identifying ingredients, sharing nutritional facts, recommending recipes, and more.</p>
  </section>
  
  <section class="aboutSect">
    <h2>About Sha'Mo</h2>
    <p>
      Sha'Mo is your all-in-one digital kitchen assistant. It helps you identify ingredients, shares nutritional facts, recommends delicious recipes based on what's in your pantry, and assists you in planning healthy and tasty meals.
    </p>
  </section>
  
  
  <section class="start">
    <h2>Get Started</h2>
    <p>
      Start your culinary journey with Virtual Kitchen Helper. Discover new recipes, plan your meals, and make cooking easier and more enjoyable.
    </p>
    <a href = "/signup">
      <button class="start-button">Get Started</button>
    </a>
  </section>

  <footer>
    <p>&copy; 2023 Virtual Kitchen Helper. All rights reserved.</p>
  </footer>

</div>


