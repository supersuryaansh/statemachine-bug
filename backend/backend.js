const { IPC } = BareKit

function delay (ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

Bare.on('idle', function () {
  console.log('Bare is going idlllee....')
})

Bare.on('suspend', function (linger) {
  linger = Math.max(linger - 10_000, 0)
  console.log('Bare is asked to suspend')
  Bare.idle()
})

Bare.on('resume', function () {
  console.log('Bare is asked to resume')
})
