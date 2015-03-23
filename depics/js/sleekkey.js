function iOSversion() {
  if (/iP(hone|od|ad)/.test(navigator.platform)) {
    var v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
    return [parseInt(v[1], 10), parseInt(v[2], 10), parseInt(v[3] || 0, 10)];
  }
  else {
  	return 0;
  }
}
ver = iOSversion();
if (ver[0] >= 7) {
  if (ver[0] >= 8) {
  	document.getElementById('version').innerHTML='<p>Your device <strong>may be</strong> supported.</p><hr><p>If it is an A5 device (iPhone 4S, iPad 2, iPad mini, iPod touch (5th generation) then it will work.</p>';
  }
  else {
  	document.getElementById('version').innerHTML='<p>Your device <strong>is</strong> supported.</p>';
  }
}
else {
  document.getElementById('version').innerHTML='<p>Your device <strong>is not</strong> supported.</p>';
}