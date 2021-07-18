// const fadeWrapper = document.querySelector('.fade')
// const fadeTargets = fadeWrapper.querySelectorAll('img')

// // // document.addEventListener('DOMContentLoaded', () => {
// //   fadeTargets.forEach( target => {
// //     target.classList.add('fade-in')

// //   })
// // // })

// function checkIfAllLoaded() {
//   return fadeTargets.length == Array.from(fadeTargets).filter(target => target.classList.contains('loaded')).length
// }

// fadeTargets.forEach(target => {
//   target.addEventListener('load', (e) => {
//     console.log(e, 'load')
//     e.target.classList.add('loaded')
//     if (checkIfAllLoaded()) {
//       fadeWrapper.classList.remove('fade')

//     }

//   })
// })