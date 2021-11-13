<template>
  <div class="intersecting-circles-spinner">
    <div class="spinnerBlock">
      <span class="circle"></span>
      <span class="circle"></span>
      <span class="circle"></span>
      <span class="circle"></span>
      <span class="circle"></span>
      <span class="circle"></span>
      <span class="circle"></span>
    </div>
  </div>
</template>

<script>
export default {
    name: "XSpinner",
}
</script>

<style scoped>
.intersecting-circles-spinner, .intersecting-circles-spinner * {
      box-sizing: border-box;
    }

.intersecting-circles-spinner {
    height: 100px;
    width: 100px;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.intersecting-circles-spinner .spinnerBlock {
    animation: intersecting-circles-spinners-animation 1200ms linear infinite;
    transform-origin: center;
    display: block;
    height: 70px;
    width: 70px;
}

.intersecting-circles-spinner .circle {
    display: block;
    border: 3px solid #111;
    border-radius: 50%;
    height: 100%;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
}

.intersecting-circles-spinner .circle:nth-child(1) {
    left: 0;
    top: 0;
}

.intersecting-circles-spinner .circle:nth-child(2) {
    left: calc(70px * -0.36);
    top: calc(70px * 0.2);
}

.intersecting-circles-spinner .circle:nth-child(3) {
    left: calc(70px * -0.36);
    top: calc(70px * -0.2);
}

.intersecting-circles-spinner .circle:nth-child(4) {
    left: 0;
    top: calc(70px * -0.36);
}

.intersecting-circles-spinner .circle:nth-child(5) {
    left: calc(70px * 0.36);
    top: calc(70px * -0.2);
}

.intersecting-circles-spinner .circle:nth-child(6) {
    left: calc(70px * 0.36);
    top: calc(70px * 0.2);
}

.intersecting-circles-spinner .circle:nth-child(7) {
    left: 0;
    top: calc(70px * 0.36);
}

@keyframes intersecting-circles-spinners-animation {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}
</style>