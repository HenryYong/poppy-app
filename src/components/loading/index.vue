<template>
    <div class="poppy-loading">
        <div class="loading-item top"></div>
        <div class="loading-item right"></div>
        <div class="loading-item bottom"></div>
        <div class="loading-item left"></div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss">
    @import './../../styles/conf';

    .poppy-loading {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        height: 100%;
        &:before {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            background-color: rgba(255,255,255,.9);
        }
        .loading-item {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) rotate(45deg);
            width: 16px;
            height: 16px;
            background-color: #1ba9cc;
            transition: all linear .2s;
            transform-origin: center center;
            &.top {
                top: calc(50% - 28px);
                animation: loadingTop ease-in-out 3.5s infinite;
            }
            &.right {
                left: calc(50% + 28px);
                animation: loadingRight ease-in-out 3.5s infinite;
            }
            &.bottom {
                top: calc(50% + 28px);
                animation: loadingBottom ease-in-out 3.5s infinite;
            }
            &.left {
                left: calc(50% - 28px);
                animation: loadingLeft ease-in-out 3.5s infinite;
            }
        }
    }

    @keyframes loadingTop {
        from {
            top: calc(50% - 28px);
            transform: translate(-50%, -50%) rotate(45deg);
        }
        12.5% {
            top: calc(50% - 10px);
            transform: translate(-50%, -50%) rotate(135deg);
        }
        25% {
            top: calc(50% - 28px);
            transform: translate(-50%, -50%) rotate(225deg);
        }
        37.5% {
            top: calc(50% - 10px);
            transform: translate(-50%, -50%) rotate(315deg);
        }
        50% {
            top: calc(50% - 28px);
            transform: translate(-50%, -50%) rotate(405deg);
        }
        62.5% {
            top: calc(50% - 10px);
            transform: translate(-50%, -50%) rotate(315deg);
        }
        75% {
            top: calc(50% - 28px);
            transform: translate(-50%, -50%) rotate(225deg);
        }
        82.5% {
            top: calc(50% - 10px);
            transform: translate(-50%, -50%) rotate(135deg);
        }
        to {
            top: calc(50% - 28px);
            transform: translate(-50%, -50%) rotate(45deg);
        }
    }

    @keyframes loadingRight {
        from {
            left: calc(50% + 28px);
            transform: translate(-50%, -50%) rotate(45deg);
        }
        12.5% {
            left: calc(50% + 10px);
            transform: translate(-50%, -50%) rotate(135deg);
        }
        25% {
            left: calc(50% + 28px);
            transform: translate(-50%, -50%) rotate(225deg);
        }
        37.5% {
            left: calc(50% + 10px);
            transform: translate(-50%, -50%) rotate(315deg);
        }
        50% {
            left: calc(50% + 28px);
            transform: translate(-50%, -50%) rotate(405deg);
        }
        62.5% {
            left: calc(50% + 10px);
            transform: translate(-50%, -50%) rotate(315deg);
        }
        75% {
            left: calc(50% + 28px);
            transform: translate(-50%, -50%) rotate(225deg);
        }
        82.5% {
            left: calc(50% + 10px);
            transform: translate(-50%, -50%) rotate(135deg);
        }
        to {
            left: calc(50% + 28px);
            transform: translate(-50%, -50%) rotate(45deg);
        }
    }

    @keyframes loadingBottom {
        from {
            top: calc(50% + 28px);
            transform: translate(-50%, -50%) rotate(45deg);
        }
        12.5% {
            top: calc(50% + 10px);
            transform: translate(-50%, -50%) rotate(135deg);
        }
        25% {
            top: calc(50% + 28px);
            transform: translate(-50%, -50%) rotate(225deg);
        }
        37.5% {
            top: calc(50% + 10px);
            transform: translate(-50%, -50%) rotate(315deg);
        }
        50% {
            top: calc(50% + 28px);
            transform: translate(-50%, -50%) rotate(405deg);
        }
        62.5% {
            top: calc(50% + 10px);
            transform: translate(-50%, -50%) rotate(315deg);
        }
        75% {
            top: calc(50% + 28px);
            transform: translate(-50%, -50%) rotate(225deg);
        }
        82.5% {
            top: calc(50% + 10px);
            transform: translate(-50%, -50%) rotate(135deg);
        }
        to {
            top: calc(50% + 28px);
            transform: translate(-50%, -50%) rotate(45deg);
        }
    }

    @keyframes loadingLeft {
        from {
            left: calc(50% - 28px);
            transform: translate(-50%, -50%) rotate(45deg);
        }
        12.5% {
            left: calc(50% - 10px);
            transform: translate(-50%, -50%) rotate(135deg);
        }
        25% {
            left: calc(50% - 28px);
            transform: translate(-50%, -50%) rotate(225deg);
        }
        37.5% {
            left: calc(50% - 10px);
            transform: translate(-50%, -50%) rotate(315deg);
        }
        50% {
            left: calc(50% - 28px);
            transform: translate(-50%, -50%) rotate(405deg);
        }
        62.5% {
            left: calc(50% - 10px);
            transform: translate(-50%, -50%) rotate(315deg);
        }
        75% {
            left: calc(50% - 28px);
            transform: translate(-50%, -50%) rotate(225deg);
        }
        82.5% {
            left: calc(50% - 10px);
            transform: translate(-50%, -50%) rotate(135deg);
        }
        to {
            left: calc(50% - 28px);
            transform: translate(-50%, -50%) rotate(45deg);
        }
    }
</style>

