<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand logo" href="#">FIT <span> BOX </span></a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/signIn" class="nav-link active" aria-current="page"> ورود</router-link>
          </li>
          <li class="nav-item ">
            <router-link to="/" class="nav-link active" aria-current="page">صفحه اصلی</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/subscribe" class="nav-link active" aria-current="page"> اشتراک</router-link>
          </li>
          <li class="nav-item  nav-li">
            <router-link to="/" class="nav-link active" aria-current="page">درباره ما </router-link>
          </li>
          
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style>
.logo{
  font-size: 35px;
}
span{
  color: rgb(223, 223, 0);
}
</style>
