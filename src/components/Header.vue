<script>
import { ref } from 'vue'
import { useSearchStore } from '@/store'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const { setSearchQuery } = useSearchStore()
    const search = ref('')

    const handleSearch = () => {
      setSearchQuery(search.value)
      router.push({ name: 'mouvements' })
    }

    return {
      search,
      handleSearch,
    }
  },
}
// const GlobalStore = inject('GlobalStore')
// console.log(GlobalStore.userToken);

// const disconnnectUser = ()=>{
//  GlobalStore.changeUserInfos(null)
//  $cookies.remove('userInfo')
// }
</script>

<template>
  <header>
    <input type="text" v-model="search" placeholder="Search for a movement" @input="handleSearch" />

    <div class="profile">
      <div>
        <RouterLink :to="{ name: 'login' }">
          <!-- v-if="!GlobalStore.userInfos.value"> -->
          <font-awesome-icon :icon="['far', 'user']" />
          <p>Se connecter</p>
        </RouterLink>
        <div>
          <!--- v-else class="disconnect"> -->
          <!--   <div>
        <RouterLink :to="{name:'profile'}">
            <font-awesome-icon :icon="['far', 'user']" />
            <p>{{GlobalStore.userInfos.value.username}}</p>
          </RouterLink>
            </div>
          <font-awesome-icon :icon="['fas', 'sign-out-alt']" @click="disconnnectUser"/> -->
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
header input[type='text'] {
  padding: 10px;
  border-radius: 20px;
  border: none;
  width: 300px;
}
a {
  color: var(--yellow);
  text-decoration: none;
}
.username {
  margin-right: 10px;
}
svg {
  color: white;
  margin-left: 40px;
}
</style>
