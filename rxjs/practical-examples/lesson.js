// const observable = rxjs.Observable.create( observer => {
//   observer.next( 'hello' )
//   observer.next( 'world' )
// })

// observable.subscribe(value => document.write(value))

// ------------------------------------------------------


// const clicks = rxjs.fromEvent(document, 'click')

// clicks.subscribe(click => console.log(click))

// ------------------------------------------------------

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('resolved!')
//   }, 3000)
// });

// const obsvPromise = rxjs.from(promise)

// obsvPromise.subscribe(result => document.write(result))

// ------------------------------------------------------

// const timer = rxjs.timer(3000)

// timer.subscribe(done => document.write('ding!!!'))

// ------------------------------------------------------

// const interval = rxjs.interval(1000)

// interval.subscribe(int => document.write(new Date().getSeconds()))

// ------------------------------------------------------

// const mashup = rxjs.of('anything', ['you', 'want'], 23, true, {cool: 'stuff'})

// mashup.subscribe(value => document.write(value))

// -------------------------------------------------------

// const timer = rxjs.timer(1000)

// timer
//   .finalize(() => document.write('All done!'))
//   .subscribe()

// ------------------------------------------------------

// const interval = rxjs.interval(500)
//   .finalize(() => document.write('All done'))

// const subscription = interval.subscribe(x => document.write(x))

// setTimeout(() => {
//   subscription.unsubscribe()
// }, 3000)

// ------------------------------------------------------

// const numbers = rxjs.Observable.of(10, 100, 1000);

// numbers
//   .map(num => Math.log(num))
//   .subscribe(x => document.write(x))

// ------------------------------------------------------

// const jsonString = '{ "type":"Dog", "breed":"Pug" }'
// const apiCall = rxjs.of(jsonString);

// apiCall
//   .map(json => JSON.parse(json))
//   .subscribe(obj => {
//     document.write(obj.type)
//     document.write(obj.breed)
//   })

// ------------------------------------------------------

// const names = rxjs.Observable.of('Simon', 'Garfunkle')

// names
//   .do(name => document.write(name))
//   .map(name => name.toUpperCase())
//   .do(name => document.write(name))
//   .subscribe()

// ------------------------------------------------------

// const numbers = rxjs.Observable.of(-3, 5, 7, 2, -7, 9, -2)

// numbers
//   .filter(n => n >= 0)
//   .subscribe(n => document.write(n))

// ------------------------------------------------------

// const numbers = rxjs.Observable.of(-3, 5, 7, 2, -7, 9, -2)

// numbers
//   .first()
//   .subscribe(n => document.write(n))

// ------------------------------------------------------

// let mouseEvents = rxjs.fromEvent(document, 'mousemove')

// mouseEvents
//   .throttleTime(1000)
//   .subscribe(e => document.write(e.type))

// ------------------------------------------------------

// let clicks = rxjs.fromEvent(document, 'click')

// clicks
//   .map(e => parseInt(Math.random() *10))
//   .do(score => document.write(`Click scored + ${score}`))
//   .scan((highScore, score) => highScore + score)
//   .subscribe(highScore => document.write(`High Score ${highScore}`))

// ------------------------------------------------------

// let clicks = rxjs.fromEvent(document, 'click')

// clicks.switchMap(click => {
//   return rgjs.interval(500)
// })
// .subscribe(i => document.write(i))

// ------------------------------------------------------

// const interval = rxjs.interval(500)
// const notifier = rxjs.timer(2000)

// interval
//   .takeUntil(notifier)
//   .finalize(() => document.write('Complete!'))
//   .subscribe(i => document.print(i))

// ------------------------------------------------------

// const names = rxjs.of('Bob', 'Jeff', 'Doug', 'Steve')

// names
//   .takeWhile(name => name != 'Doug')
//   .finalize(() => document.write('Complete! I found Doug'))
//   .subscribe(i => document.write(i))

// ------------------------------------------------------

// const yin = rxjs.of('peanut butter', 'wine', 'rainbows')
// const yang = rxjs.of('jelly', 'cheese', 'unicorns')

// const combo = rxjs.zip(yin, yang)

// combo.subscribe(arr => document.write(arr))

// ------------------------------------------------------

// const yin = rxjs.of('peanut butter', 'wine', 'rainbows')
// const yang = rxjs.of('jelly', 'cheese', 'unicorns').delay(2000)

// const combo = rxjs.forkJoin(yin, yang)

// combo.subscribe(arr => document.write(arr))

// ------------------------------------------------------

// const observable = rxjs.create(observer => {
//   observer.next( 'good' )
//   observer.next( 'great' )
//   observer.next( 'grand' )

//   throw 'catch me!'

//   observer.next( 'wonderful' )
// })

// observable
//   .catch(err => document.write(`Error caught: ${err}`))
//   .subscribe(value => document.write(value))

// ------------------------------------------------------

// const observable = rxjs.create(observer => {
//   observer.next( 'good' )
//   observer.next( 'great' )
//   observer.next( 'grand' )
  
//    throw 'catch me!'
  
//     observer.next( 'wonderful' )
//   })
  
//   observable
//     .catch(err => document.write(`Error caught: ${err}`))
//     .retry(2)
//     .subscribe(value => document.write(value))

// ------------------------------------------------------

// const observable = rxjs.of('Hello')

// const subA = observable.subscribe(value => document.write(`Sub A: ${value}`))
// const subB = observable.subscribe(value => document.write(`Sub B: ${value}`))

// ------------------------------------------------------

// const subject = new rxjs.Subject()

// const subA = subject.subscribe(value => document.write(`Sub A: ${value}`))
// const subB = subject.subscribe(value => document.write(`Sub B: ${value}`))

// subject.next('Hello')

// setTimeout(() => {
//   subject.next('World')
// }, 1000)

// ------------------------------------------------------

// const observable = rxjs.fromEvent(document, 'click');

// const clicks = observable
//                   .do( _ => document.write('Do One Time!'))

// const subject  = clicks.multicast(() => new rxjs.Subject());

// const subA = subject.subscribe(c => document.write(`Sub A: ${c.timeStamp}`))
// const subB = subject.subscribe(c => document.write(`Sub B: ${c.timeStamp}`))


// subject.connect();

// ------------------------------------------------------

