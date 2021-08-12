<template>
  <div>
    <head-picture></head-picture>
    <profile-position></profile-position>
  </div>
</template>

<script>
import HeadPicture from './profile_child/HeadPicture.vue'
import ProfilePosition from './profile_child/ProfilePosition.vue'
export default {
  components: { HeadPicture, ProfilePosition },
  name: "Profile",
  data () {
      return {
        
      }
    }
}
</script>

<style scoped>

</style>