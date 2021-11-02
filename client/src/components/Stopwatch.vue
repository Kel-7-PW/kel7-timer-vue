<template>
    <body>
        <div id="app" class="ui text container">
        <div class="center aligned row">
            <h1 class="ui header">Vue Simple Stop Watch</h1>
            <div class="column">
            <p>
                Elapsed Time: {{ hours }} : {{ minutes | zeroPad }} :
                {{ seconds | zeroPad }} : {{ milliSeconds | zeroPad(3) }}
            </p>
            <button
                class="ui secondary button"
                @click="startTimer"
                :disabled="isRunning"
            >
                START
            </button>
            <button class="ui button" @click="pushTime" :disabled="!isRunning">
                LAP
            </button>
            <button class="ui button" @click="stopTimer" :disabled="!isRunning">
                STOP
            </button>
            <button class="ui basic button" @click="clearAll">CLEAR</button>
            <ul class="ui bulleted list" v-if="times.length">
                <li class="item">
                {{ item.hours }} : {{ item.minutes | zeroPad }} :
                {{ item.seconds | zeroPad }} :
                {{ item.milliSeconds | zeroPad(3) }}
                </li>
            </ul>
            </div>
            <!-- /.column -->
        </div>
        <!-- /.center aligned row -->
        </div>
    </body>
</template>
<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.2/vue.js"></script>
<script>
export default {
    el: "#app",
    data: {
        times: [],
        animateFrame: 0,
        nowTime: 0,
        diffTime: 0,
        startTime: 0,
        isRunning: false,
    },
    methods: {
        // 現在時刻から引数に渡した数値を startTime に代入
        setSubtractStartTime: function (time) {
        var time = typeof time !== "undefined" ? time : 0;
        this.startTime = Math.floor(performance.now() - time);
        },
        // タイマーをスタートさせる
        startTimer: function () {
        // loop()内で this の値が変更されるので退避
        var vm = this;
        vm.setSubtractStartTime(vm.diffTime);
        // ループ処理
        (function loop() {
            vm.nowTime = Math.floor(performance.now());
            vm.diffTime = vm.nowTime - vm.startTime;
            vm.animateFrame = requestAnimationFrame(loop);
        })();
        vm.isRunning = true;
        },
        // タイマーを停止させる
        stopTimer: function () {
        this.isRunning = false;
        cancelAnimationFrame(this.animateFrame);
        },
        // 計測中の時間を配列に追加
        pushTime: function () {
        this.times.push({
            hours: this.hours,
            minutes: this.minutes,
            seconds: this.seconds,
            milliSeconds: this.milliSeconds,
        });
        },
        // 初期化
        clearAll: function () {
        this.startTime = 0;
        this.nowTime = 0;
        this.diffTime = 0;
        this.times = [];
        this.stopTimer();
        this.animateFrame = 0;
        },
    },
    computed: {
        // 時間を計算
        hours: function () {
        return Math.floor(this.diffTime / 1000 / 60 / 60);
        },
        // 分数を計算 (60分になったら0分に戻る)
        minutes: function () {
        return Math.floor(this.diffTime / 1000 / 60) % 60;
        },
        // 秒数を計算 (60秒になったら0秒に戻る)
        seconds: function () {
        return Math.floor(this.diffTime / 1000) % 60;
        },
        // ミリ数を計算 (1000ミリ秒になったら0ミリ秒に戻る)
        milliSeconds: function () {
        return Math.floor(this.diffTime % 1000);
        },
    },
    filters: {
        // ゼロ埋めフィルタ 引数に桁数を入力する
        // ※ String.prototype.padStart() は IEじゃ使えない
        zeroPad: function (value, num) {
        var num = typeof num !== "undefined" ? num : 2;
        return value.toString().padStart(num, "0");
        },
    },
};
</script>
<style
    link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.13/semantic.min.css"
></style>
