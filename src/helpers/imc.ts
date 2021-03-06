export type Level = {
    title: string;
    color: string;
    icon: 'down' | 'up';
    imc: number[];
    yourImc?: number;
}

export const levels : Level[] = [
    {title: 'Magreza', color: '#96A3AB', icon: 'down', imc:[ 0, 18.5] },
    {title: 'Normal', color: '#0EAD69', icon: 'up', imc:[ 18.6, 24.99] },
    {title: 'Sobrepeso', color: '#E2B039', icon: 'down', imc:[ 25, 29.99] },
    {title: 'Obesidade', color: '#C3423F', icon: 'down', imc:[ 30, 99] }
];

export const calculateImc = (height: number, weight: number) =>{
    let imc : number = (weight / (height * height));
    
    for (let i in levels){

        let levelCopy = { ...levels[i]};

        if(imc >= levels[i].imc[0] && imc <= levels[i].imc[1]){
            levelCopy.yourImc= parseFloat(imc.toFixed(2));
            return levelCopy;
        }
    }
    
    return null;
}