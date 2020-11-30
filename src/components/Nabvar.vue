<template>


  <nav>
    <v-app-bar
      app
      color="white"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Universidad Católica de Pereira"
          class="shrink mr-2"
          contain
          src="https://www.ucp.edu.co/portal/wp-content/uploads/2015/09/logo-e1442507060938.png"
          transition="scale-transition"
          width="150"
        />

        
      </div>

      <v-spacer></v-spacer>
      <v-btn 
      fab
      dark
      text
      large
      color="grey"
      :href="facebook" target="_blank">
        <v-icon>mdi-facebook</v-icon>
      </v-btn>
      <v-btn 
      fab
      dark
      text
      large
      color="grey"
      :href="instagram" target="_blank">
        <v-icon>mdi-instagram</v-icon>
      </v-btn>
      <v-btn 
      fab
      dark
      text
      large
      color="grey"
      :href="youtube" target="_blank">
        <v-icon>mdi-youtube</v-icon>
      </v-btn>
      <v-btn 
      fab
      dark
      text
      large
      color="grey"
      :href="twitter" target="_blank">
        <v-icon>mdi-twitter</v-icon>
      </v-btn>
      <v-btn 
      fab
      dark
      text
      large
      color="grey"
      :href="linkedin" target="_blank">
        <v-icon>mdi-linkedin</v-icon>
      </v-btn>

    </v-app-bar>
    

  </nav>
</template>

<script>
export default {
  name: 'Nabvar',
  data() {
    return {
      facebook: 'https://www.facebook.com/ucatolicadepereira/',
      instagram: 'https://www.instagram.com/ucatolicadepereira/',
      linkedin: 'https://www.linkedin.com/school/ucatolicadepereira/mycompany/',
      twitter: 'https://twitter.com/UCatolicaPei',
      youtube: 'https://www.youtube.com/user/CanalUCP',
      links: [
        { icon: 'mdi-home', text: 'Dashboard', route: '/' },
        { icon: 'mdi-account_balance_wallet', text: 'Pregrados', route: 'pregrados' }
      ]
    }
  },
}
</script>