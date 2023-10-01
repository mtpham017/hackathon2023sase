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
    background-color: #2c6e49;
    color: white;
    padding: 1rem 0;
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
    color: white;
    transition: color 0.3s;
  }

  nav ul a:hover {
    color: #d1d1ba;
  }

  .login {
    background-color: #4c956c;
    color: #fefee3;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    margin-right: 20px; 
    transition: background-color 0.3s;
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
