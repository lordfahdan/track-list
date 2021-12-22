<template>
  <v-layout mt-6 class="px-2">
    <v-flex xs-4>
      <Panel title="Song Metadata">
        <v-text-field
            label="Title"
            required
            :rules="[rules.required]"
            v-model="song.title"
        ></v-text-field>
        <v-text-field
            label="Artist"
            required
            :rules="[rules.required]"
            v-model="song.artist"
        ></v-text-field>
        <v-text-field
            label="Genre"
            required
            :rules="[rules.required]"
            v-model="song.genre"
        ></v-text-field>
        <v-text-field
            label="Album"
            required
            :rules="[rules.required]"
            v-model="song.album"
        ></v-text-field>
        <v-text-field
            label="Album Image Url"
            required
            :rules="[rules.required]"
            v-model="song.albumImageUrl"
        ></v-text-field>
        <v-text-field
            label="Youtube ID"
            required
            :rules="[rules.required]"
            v-model="song.youtubeId"
        ></v-text-field>
      </Panel>
    </v-flex>
    <v-flex xs8 class="text-center">
      <Panel title="Song Structure" class="ml-4 mb-4">
        <v-textarea
            label="Tab"
            required
            :rules="[rules.required]"
            v-model="song.tab"
        ></v-textarea>
        <v-textarea
            label="Lyrics"
            required
            :rules="[rules.required]"
            v-model="song.lyrics"
        ></v-textarea>
      </Panel>
      <div class="danger-alert mb-2">
        {{ error }}
      </div>
      <v-btn
        class="cyan"
        @click="create"
      >
        Create Song
      </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
import SongsServices from '@/services/ApiSongsServices'
import Panel from '@/components/Panel'
export default {
  data: () => ({
    song: {
      title: null,
      artist: null,
      genre: null,
      album: null,
      albumImageUrl: null,
      youtubeId: null,
      lyrics: null,
      tab: null,
    },
    error: null,
    rules: {
      required: (value) => !!value || 'Required.'
    }
  }),
  components: {
    Panel
  },
  methods: {
    create(){
      this.error = null
      const textFieldAreFilledIn = Object
        .keys(this.song)
        .every(key => !!this.song[key])

      if(!textFieldAreFilledIn){
        this.error = 'Please fill in all the required fields.'
        return
      }
      // call API
      SongsServices.post(this.song)
      .then((response) => {
        const data = response.data
        console.log(data)
        this.$router.push({
          name: 'Songs'
        })
      }).catch((err) => {
        console.log(err)
      });
    }
  }
}
</script>

<style>

</style>