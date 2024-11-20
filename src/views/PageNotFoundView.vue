<template>
  <main>
    <div class="error404">
      <h1>Désolé cette page n'existe pas !!</h1>
      <img
        src="https://res.cloudinary.com/dskfvpsiu/image/upload/v1732117219/error404_xqgzvd.png"
      />
      <RouterLink :to="{ name: 'home' }">Retourner à la page d'accueil</RouterLink>
    </div>
  </main>
</template>
<style scoped>
.error404 {
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
}
.error404 img {
  margin-top: 20px;
  margin-bottom: 20px;
  width: 600px;
  height: 600px;
}
.error404 a {
  color: var(--yellow);
  font-size: 20px;
}
</style>
