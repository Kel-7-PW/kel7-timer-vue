<template>
<v-container>
  <div class="container">
    <Navbar title="Stopwatch"/>
  </div>
  
  <v-btn
  class="ma-2 float-right button"
  dark
  @click="addNewRow"
  >
    <v-icon
    dark
    left
    >
    mdi-plus
    </v-icon>
    
    Add
  </v-btn>
    
  <v-container fluid>
    <v-row>
      <v-col
      v-for="(item, i) in items"
      :key="i"
      cols="12"
      >  
      <v-theme-provider root>
        <v-card 
        class="secondary" 
        elevation="8"
        >

          <v-card-title 
          v-text="item.title"
          class="justify-center"
          >
          title
          </v-card-title>              
          <v-container fluid>
            <v-row>
              
              <v-col
              cols="6"
              >
                <v-card height="260">
                  
                    <v-card-title >
                        <!-- {{dummy(400)}} -->
                    </v-card-title>
                
                  <v-card-actions class="justify-center">
                    <v-btn 
                    class="button"
                    @click="start(i)"
                    >
                      Start
                    </v-btn>
                    
                    <v-btn 
                    class="button"
                    >
                      Stop
                    </v-btn>
                    
                    <v-btn 
                    class="button"
                    >
                      Split
                    </v-btn>
                  </v-card-actions>
                  <v-simple-table >
                    <template v-slot:default>
                      <thead>
                        <tr>
                          <th class="text-left" >
                            Total
                          </th>
                          <th class="text-left" >
                            Last Difference
                          </th>
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
                </v-card>
                
              </v-col>

              <v-col
              cols="6"
              >

                  <v-data-table
                  height="200"
                  :headers="headers"
                  :items="splits"
                  :items-per-page="5"
                  class="elevation-1 align-center"
                  dense
                  ></v-data-table>
                
              </v-col>
            </v-row>
              
            <v-row>
              <v-col
              cols="4"
              >
                <v-form
                v-model="valid"
                >
                  <v-text-field
                    v-model="title"
                    label="Task Title"
                    >
                  </v-text-field>
                </v-form>
              </v-col>

              <v-col
              class="justify-center"
              >
                <v-btn>Change</v-btn>
              </v-col>
              
              <v-col
              class="align-center"
              >
                <v-btn
                class="ma-2 float-right button"
                dark
                @click="deleteRow(i, item)"
                >
                  <v-icon>
                  mdi-delete
                  </v-icon>
                </v-btn>
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

export default {
  name: 'App',
    components:{},
        data: () => ({
      items: [
                { 
                    id: 1,
                    title: 'Stopwatch',
                    timer: undefined,
                    last: null,
                    lastdiff: null,
                    isPlay:false,
                    countdown: 0,
                    pauseTime: 0,
                    startTime: 0,
                }
            ],
            headers: [
                {
                    text: 'Lap',
                    align: 'start',
                    sortable: false,
                    value: 'idSplit',
                },
                { 
                    text: 'Timestamp', 
                    value: 'time',
                    sortable: false, },
                { 
                    text: 'Difference', 
                    value: 'diff',
                    sortable: false, },
            ],
            splits: [
                {
                    idStopwatch: 1,
                    idSplit: 1,
                    time: null,
                    diff: null
                }
            ],
    }),

    methods: {
        //changeTitle(index, items) {
          //
        //},

        addNewRow() {
            this.items.push({
                    id: 2,
                    title: 'Stopwatch',
                    timer: undefined,
                    last: null,
                    lastdiff: null,
                    isPlay:false,
                    countdown: 0,
                    pauseTime: 0,
                    startTime: 0,
            });
        },

        deleteRow(index, items) {
          var idx = this.items.indexOf(items);
          console.log(idx, index);
          if (idx > -1) {
            this.items.splice(idx, 1);
          }
        }
    },
}
</script>