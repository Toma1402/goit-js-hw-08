import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

function onTime(data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
  console.log(data.seconds);
}

player.on('timeupdate', throttle(onTime, 1000));

player.setCurrentTime(localStorage.getItem('videoplayer-current-time') || 0);
