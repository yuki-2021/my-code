function fbls (n) {
    if(n<2) return 1;
    return fbls(n -2) * fbls(n -1)
}
onmessage =  function(e) {
    postMessage(fbls(e.data))
}