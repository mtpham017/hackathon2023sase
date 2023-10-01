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
    margin-right: 20px; 
    transition: background-color 0.3s;
  }


  button:hover{
    background-color: #1d4b31;;
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
        <a href="/login"> 
          <button class="login">Login</button>
        </a>
      {/if}
    </nav>
</header>

<slot />
