<template>
    <body>
        <div id="main">
        <div id="menubar">
            <!-- MENU -->
        </div>
        <main class="container" id="root">
            <!-- JS ROOT HTML -->
            <h1>Akbar Ganteng</h1>
        </main>
        </div>
    </body>
</template>
<script>
import axios from 'axios'

export default {
    data(){
        return{
            TOTAL_RENDER_COUNTDOWN:0,
            DELAY_SECOND:1000,
            active:0,
            statusBtn:{
                start: 'Start',
                continue: 'Continue',
                pause: 'Pause'
            },
            KEY_STORAGE : (index = active) => ({
                countdown: `countdown-${index}`,
                startTime: `startTime-${index}`,
                pauseTime: `pauseTime-${index}`,
                isPlay: `isPlay-${index}`,
                isPause: `isPause-${index}`,
                split: `split-${index}`,
                title: `title-${index}`,
            }),
            DOM : (index = active) => ({
                Timer: document.getElementsByName('timer')[index],
                Title: document.getElementsByName('title')[index],
                BtnStart: document.getElementsByName('btn-start')[index],
                BtnStop: document.getElementsByName('btn-stop')[index],
                BtnSplit: document.getElementsByName('btn-split')[index],
                BtnSave: document.getElementsByName('btn-save')[index],
                SplitContainer: document.getElementsByName('split-container')[index],
                Result: document.getElementsByName('result')[index],
                ResultTime: document.getElementsByName('result-time')[index],
                inputTitle: document.getElementsByName('inputTitle')[index],
            }),
            countdown : parseInt(localStorage.getItem(KEY_STORAGE(active).countdown)) || 0,
            startTime : localStorage.getItem(KEY_STORAGE(active).startTime),
            pauseTime : localStorage.getItem(KEY_STORAGE(active).pauseTime),
            isPlay : JSON.parse(localStorage.getItem(KEY_STORAGE(active).isPlay)) || false,
            isPause : JSON.parse(localStorage.getItem(KEY_STORAGE(active).isPause)) || false,
            isFinish : false,
            split : JSON.parse(localStorage.getItem(KEY_STORAGE(active).split)) || [],
            title : JSON.parse(localStorage.getItem(KEY_STORAGE(active).title)),

        }
    },
    methods: {
        render() {
            DOMRoot.innerHTML = renderCountdown()
        },
        clearStorage(index) {
            Object.keys(KEY_STORAGE(index)).map(keys => {
                localStorage.removeItem(KEY_STORAGE(index)[keys])
        })},
        didMount() {
            if (this.TOTAL_RENDER_COUNTDOWN > 0) {
                mapDataCountdown()
                getPlay(this.active)
                if (!this.startTime && !this.isPlay && !this.isPause) {
                this.countdown = 0
                DOM(this.active).BtnStart.innerText = this.statusBtn.start
                } else {
                    if (this.isPause) {
                        DOM(this.active).BtnStart.innerHTML = this.statusBtn.continue
                    } else {
                        newTime = calculateTimeDiff(this.startTime, Date.now())
                        this.countdown = newTime
                        DOM(this.active).BtnSplit.style.display = 'inline'
                        DOM(this.active).BtnStart.innerHTML = this.statusBtn.pause
                    }
                }
            }
        },
    },
    mounted(){
        axios
            .get('http://localhost:3000/api/film/')
            .then(response => {
                this.film = response.data
            })
            .catch(error => console.log(error))
    }
}
</script>
