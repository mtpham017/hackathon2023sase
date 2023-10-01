<!-- layout.svelte -->
<script lang="ts">
  import type { PageData } from "./$types";
  import LogoutButton from "../components/logoutbutton.svelte";

  export let data : PageData
  $: isLoggedIn = data.session.user_id !== undefined

</script>

<style>
  nav {
    position: sticky;
    top: 0;
    background-color: #ffffff;
    color: rgb(255, 255, 255);
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 100; /* Ensure the navbar is on top of the content */
    
  }


  nav ul {
    list-style: none;
    display: flex;
    gap: 1rem;
  }

  nav ul a {
    font-size: 25px;
    text-decoration: none;
    color: #2c6e49;
    transition: color 0.3s;
    margin-right:10px;
  }

  nav ul a:hover {
    color: #1d4b31;
    text-decoration: underline;
    text-decoration-thickness: 3px;
    
  }

  .login {
    background-color: #2c6e49;
    color: #ffffff;
    border: none;
    padding: 10px 20px;
    border-radius: 30px;
    cursor: pointer;
    font-size: 1rem;
    margin-right: 25px; 
    transition: background-color 0.3s;
  }

  .signup {
    background-color: #fff;
    color: #000000;
    border: none;
    padding: 10px 13px;
    border-radius: 30px;
    cursor: pointer;
    font-size: 1rem;
    margin-left:82rem;
    transition: background-color 0.3s;
  }

  button:hover{
    background-color: #368b5b;;
  }

  .signup:hover{
    background-color: #bdbdbd;
  }


</style>

<header>
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/fridge">Fridge</a></li>
      </ul>
      {#if isLoggedIn}
        <LogoutButton/>
      {:else}
        <a href="/signup"> 
          <button class="signup">Sign up</button>
        </a>
        <a href="/login"> 
          <button class="login">Login</button>
        </a>
        
      {/if}
    </nav>
</header>

<slot />
