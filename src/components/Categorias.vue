<template>
    
      <v-list >
        <v-list-item class="d-xs-inline-block"  v-for="link in links" :key="link.text" @click="showOferta(`${link.text}`)">
          <v-list-item-content>
            <v-list-item-title >
              <v-chip dark color="primary">
                {{ link.text }}
              </v-chip>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    
</template>
<script>
export default {
  name: 'Categorias',
  data() {
    return {
      links: [
        { icon: 'mdi-receipt', text: 'Pregrados', route: 'pregrados' },
        // { icon: 'mdi-dns', text: 'Posgrados', route: 'posgrados' },
        { icon: 'mdi-home', text: 'Especializaciones', route: '/' },
        { icon: 'mdi-home', text: 'Maestrías', route: '/' },
        { icon: 'mdi-home', text: 'Doctorado', route: '/' },
      ]
    }
  },
  methods: {
    showOferta(categoria) {
      console.log('Es:' , categoria)
      categoria=this.acentos(categoria);
      this.$emit('showOferta', categoria)
    },
    acentos(categoria){
      return categoria.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }
  },
  watch: {
    
  },
}
</script>