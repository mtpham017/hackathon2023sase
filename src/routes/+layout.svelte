<nav>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/fridge">Fridge</a></li>
    </ul>
    <button class="login">Login</button>
  </nav>
<slot/>

<style>
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
    font-size: 25px;
    text-decoration: none;
    color: white;
    transition: color 0.3s;
  }

  nav ul a:hover {
    color: #fefee3;
  }

  .login {
  background-color: #2c6e49;
  color: #fefee3;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  margin-right: 20px; /* Center horizontally with 'auto' for left and right margins */
  transition: background-color 0.3s;
}

</style>