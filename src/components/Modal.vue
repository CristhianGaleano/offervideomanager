<template>
    
   <div class="text-center">
    <v-dialog xs12
      v-model="dialog"
      width="880"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          small
          color="yellow"
          class="warming"
          v-bind="attrs"
          v-on="on"
        >
          Ver más
        </v-btn>
      </template>

      <v-card>
        <template>
          <iframe v-if="dialog" width="880" height="540" :src="programaSelected.script + '?version=3&enablejsapi=1'" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </template>
        <v-card-title class="headline grey lighten-2">
          {{ programaSelected.title }}
        </v-card-title>

        <v-card-text >
          <p class="my-2">{{ programaSelected.text }}</p>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-btn class="primary"  :href="solicitarasesoria" target="_blank">Solicitar asesoría</v-btn>
          <v-btn text outlined class="warning"  :href="programaSelected.page" target="_blank">Visitar sitio web</v-btn>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
            Cerrar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    programaSelected: {
      type: Object,
      required: true,
    }
  },
    data() {
      return {
        solicitarasesoria: 'https://wa.me/573013877446?text=Hola!%20Dejanos%20tu%20solicitud%20',
        dialog: false,
      }
    },
}
</script>