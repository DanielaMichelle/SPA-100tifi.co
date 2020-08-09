
const getHash = () => 
  location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/';

export default getHash
//esto es para manejar la url de cada personaje  #/1/
// slice() -> elimina  eles ('n° de elemento')
// toLocaleLowerCase() -> me regresará todo el MINUSCULA
// split()[] -> para convertirlo a un ARRAY y quita el ('elemento=parametro') [que ele quiero]



// const getHash = () =>
// location.hash.slice('1').toLocaleLowerCase().split('/')[1] || '/';

// export default getHash
