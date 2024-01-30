<template>
  <div class="footer bg-dark">
    <div class="footer-links">
      <a href="#"><i class="fab fa-github"></i></a>
      <a href="#"><i class="fab fa-instagram"></i></a>
      <a href="#"><i class="fab fa-facebook"></i></a>
      <a href="#"><i class="fab fa-twitter"></i></a>
      <a href="#"><i class="fab fa-linkedin"></i></a>
    </div>
    <div class="footer-copyright text-white">
      This website is made with love by Mickael Riss
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterApp'
}
</script>

<style>
  .footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100px;
    padding: 0px 50px;
    color: rgba(0,0,0,0.3);
  }
  .footer-links {
    display: flex;
    align-items: center;
  }
  .footer-links a {
    color: black;
    opacity: 0.15;
    text-decoration: none;
    font-size: 24px;
    padding: 0px 10px;
  }
  .footer-links a:hover {
    opacity: 1;
  }
  .footer .fa-heart {
    color: #D23333;
  }
</style>
