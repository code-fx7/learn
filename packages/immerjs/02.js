const obj = {
  anotherProp: 'string',
  anotherObj: {
    anotherAnotherObj: {
      a: 5
    }
  }
}

const obj2 = {
  ...obj,
  anotherObj: {
    ...obj.anotherObj,
    anotherAnotherObj: {
      ...obj.anotherAnotherObj,
      a: 6
    }
  }
}

console.log(obj, obj2)

// obj = Das "Objekt" das geändert werden soll 
// draft = erstelle eine sichere Kopie von obj
const obj3 = immer.procuce(obj, draft => {
  // Ändere die sichere Kopie von anotherObj.anotherAnotherObj.a auf 6
  draft.anotherObj.anotherAnotherObj.a = 6
})

console.log({ obj3 }, { obj });
