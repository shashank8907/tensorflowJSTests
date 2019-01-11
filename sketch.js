function setup(){
    noCanvas();


    const values = [];
    for(let i = 0; i<30; i++){

        values[i] = random(0,100)
    }
    const shape =[2,5,3]
    const data = tf.tensor(values,shape);
    console.log(data.toString());

}