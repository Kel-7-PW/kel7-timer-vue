<template>
  <v-container>
    <div class="container">
      <Navbar title="Stopwatch" />
    </div>
    <!-- Button Add Stopwatch -->
    <v-btn class="ma-2 float-right button" dark @click="addNewRow">
      <v-icon dark left> mdi-plus </v-icon>

      Add
    </v-btn>
    <!-- End Button Stopwatch -->
    <v-container fluid>
      <v-row>
        <v-col v-for="(item, i) in items" :key="i" cols="12">
          <v-theme-provider root>
            <v-card class="secondary" elevation="8">
              <!-- Title Coloumn -->
              <v-card-title v-text="item.title" class="justify-center">
                title
              </v-card-title>
              <!-- End Title Coloumn -->
              <v-container fluid>
                <v-row>
                  <v-col cols="6">
                    <v-card height="260">
                      <!-- Timer Indikator -->
                      <v-card-title
                        v-text="item.timer"
                        class="justify-center y-2"
                      >
                        timer
                      </v-card-title>
                      <!-- End Timer Indikator -->
                      <v-card-actions class="justify-center">
                        <!-- Button Start Stop dan Split -->
                        <v-btn class="button"> Start </v-btn>

                        <v-btn class="button"> Stop </v-btn>

                        <v-btn class="button"> Split </v-btn>
                        <!-- End Button Start Stop dan Split -->
                      </v-card-actions>
                      <!-- Tabel Split -->
                      <v-simple-table>
                        <template v-slot:default>
                          <thead>
                            <tr>
                              <th class="text-left">Total</th>
                              <th class="text-left">Last Difference</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td v-text="item.last">last</td>
                              <td v-text="item.lastdiff">lastdiff</td>
                            </tr>
                          </tbody>
                        </template>
                      </v-simple-table>
                      <!-- End Tabel Split -->
                    </v-card>
                  </v-col>

                  <v-col cols="6">
                    <v-data-table
                      height="200"
                      :headers="headers"
                      :items="split"
                      :items-per-page="5"
                      class="elevation-1 align-center"
                      dense
                    ></v-data-table>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col cols="4">
                    <v-form v-model="valid">
                      <v-text-field v-model="title" label="Task Title">
                      </v-text-field>
                    </v-form>
                  </v-col>

                  <v-col class="justify-center">
                    <v-btn>Change</v-btn>
                  </v-col>

                  <v-col class="align-center">
                    <!-- Delete Stopwatch -->
                    <v-btn
                      class="ma-2 float-right button"
                      dark
                      @click="deleteRow(i, item)"
                    >
                      <v-icon> mdi-delete </v-icon>
                    </v-btn>
                    <!-- End Delete Stopwatch -->
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </v-theme-provider>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>


<script>
import Navbar from "./Navbar";
export default {
  name: "Stopwatch",

  components: {
    Navbar,
  },
  //Deklarasi Data
  data: () => ({
    items: [
      {
        title: "Stopwatch",
        timer: "0:00:00",
        last: "9:99:99",
        lastdiff: "0:00:99",
      },
    ],
    headers: [
      {
        text: "Lap",
        align: "start",
        sortable: false,
        value: "name",
      },
      {
        text: "Timestamp",
        value: "time",
        sortable: false,
      },
      {
        text: "Difference",
        value: "diff",
        sortable: false,
      },
    ],
    split: [],
  }),

  methods: {
    //changeTitle(index, items) {
    //
    //},


    //Add Stopwatch
    addNewRow() {
      this.items.push({
        title: "Stopwatch",
        timer: "0:00:00",
      });
    },
    //Delete Stopwatch
    deleteRow(index, items) {
      var idx = this.items.indexOf(items);
      console.log(idx, index);
      if (idx > -1) {
        this.items.splice(idx, 1);
      }
    },
  },
};
</script>