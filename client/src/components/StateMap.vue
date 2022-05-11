<template>
<div>
    <h2>The State of {{ state.name }}</h2>

    <p v-if="state.visited">You have visited this state</p>
    <p v-else>You have not visisted the state yet</p>

    <!-- TO DOO MAP HERE -->
    <div id="map-container" v-if="dataReady">
        <l-map ref="map" v-on:ready="onMapReady" v-bind:center="mapCenter" v-vind:zoom="state.zoom">
            <l-tile-layer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; OpenStreetMap contributors">
            </l-tile-layer>
        </l-map>
    </div>
</div>
</template>

<script>

import {Lmap, LTileLayer } from '@vue-leaflet/vue-leaflet'  // LMap was wrong, changed to Lmap

export default {
    name: 'StateMap',
    comoponents: {
        Lmap, LTileLayer
    },
    data() {
        return {
            state: {},  //needs the visited property to send message
            dataReady: false,
            mapReady: false
            }
    },
    mounted() {
        this.state.name = this.$route.params.state
        this.fetchStateData()
    },
    methods: {
        fetchStateData() {
            this.$stateService.getOneState(this.state.name).then( state => {
                this.state = state
                this.dataReady = true
            }).catch( err => {
                // 404 not found and
                if ( err.response && err.response.status === 404 ) {
                    this.state.name = '?, please enter the state again'  // write this another way
                } else {
                    alert('Sorry, error fetching data about this state') //general message for user
                    console.error(err) // message for the developer
                }
                         // 505 server error 
            })
        },
        onMapReady() {
            this.mapReady = true
            this.setMapView()
        },
        setMapView() {
            if (this.mapReady && this.dataReady ) {
                //TO DO DO MAKE SURE MAP SHOWS AREA AND ZOOM LEVEL
                this.$refs.map.leafletObject.setView(this.mapCenter, this.state.zoom) 
            }
        }
    },
    computed: {
        mapCenter() {
            return [ this.state.lat, this.state.lon ]
        }
    }
}
</script>

<style scoped>
#map-container {
    height: 30rem; 
}
</style>