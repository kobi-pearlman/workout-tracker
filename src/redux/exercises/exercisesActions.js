import { exercisesActionTypes } from "./exercisesTypes"


export const fetchExercises = ()=>{
    return async(dispath)=>{
        dispath(fetchExercisesStarts())
       try{ const data = await fetch('https://wger.de/api/v2/exerciseinfo/?language=2&&limit=1000&offset=0')
        const response = await data.json()
        dispath(fetchExercisesSuccess(response))
    }catch(error){
        console.log(error)
    }   
    }
}

const fetchExercisesStarts = ()=>({
    type:exercisesActionTypes.FETCH_EXERCISES_STATRTS
})

const fetchExercisesSuccess = (exercisesData)=>({
    type:exercisesActionTypes.FETCH_EXERCISES_SUCCESS,
    payload:convertExercisesToMap(exercisesData.results)
})

const convertExercisesToMap = (exercisesCollection)=>{
    const transformedCollection = exercisesCollection.map(exercise=>{
        const {category,description,equipment,name,id} = exercise;
        return {
            category,
            description,
            equipment,
            name,
            id
        }
    })
    

    // const exercises = {};
    //  transformedCollection.forEach(exer => {
    //     const categoryName = exer.category.name.toLowerCase();
    //     exercises[categoryName] = exercises[categoryName] ? [...exercises[categoryName], exer] : [exer]
    // })
    // return exercises
    

    return transformedCollection.reduce((accumulator,exercise)=>{
        const categoryName = exercise.category.name.toLowerCase();
        accumulator[categoryName] =  accumulator[categoryName] ? [...accumulator[categoryName], exercise] : [exercise];
        return accumulator 
    },{})
}