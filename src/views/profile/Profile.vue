<template>
  <div>
    <head-picture></head-picture>
    <profile-position></profile-position>
  </div>
</template>

<script>
import HeadPicture from '../../components/HeadPicture.vue'
import ProfilePosition from '../../components/ProfilePosition.vue'
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