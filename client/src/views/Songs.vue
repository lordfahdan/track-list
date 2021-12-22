<template>
  <v-layout mt-6>
    <v-flex xs6 offset-xs3>
        <Panel title="Songs" class="text-center">
           <v-btn
              fab
              class="orange darken-2"
              absolute
              right
              middle
              slot="action"
              :to="{ name: 'Songs-Create' }"
            >
              <v-icon>mdi-plus</v-icon>
            </v-btn>
          <div class="song" v-for="song in songs" :key="'song' + song.id">

            <v-layout>
              <v-flex xs6>
                <div class="song-title">
                  {{ song.title }}
                </div>
                <div class="song-artist">
                  {{ song.artist }}
                </div>
                <div class="song-genre">
                  {{ song.genre }}
                </div>
                <v-btn
                  class="cyan"
                  :to="{name: 'Song', params: {songId: song.id}}"
                >
                  Create Song
                </v-btn>
              </v-flex>
              <v-flex xs6>
                <img class="album-image" :src="song.albumImageUrl">
              </v-flex>
            </v-layout>
          </div>
        </Panel>
    </v-flex>
  </v-layout>
</template>

<script>
import ApiSongsServices from '@/services/ApiSongsServices'
import Panel from '@/components/Panel'
export default {
  data: () => ({
    songs: []
  }),
  components: {
    Panel
  },
  mounted() {
    // do a request to the backend for all the songs
    ApiSongsServices.index()
    .then((response) => {
      const data = response.data
      this.songs = data
    })
    .catch((err) => {
      console.log(err)
    });
  }
}
</script>

<style scoped>
.song {
  padding: 20px;
  height: 330px;
  overflow: hidden;
}
.song-title{
  font-size: 30px;
}
.song-artist{
  font-size: 24px;
}
.song-genre{
  font-size: 18px;
}

.album-image {
  width: 70%;
  margin: 0 auto;
}
</style>