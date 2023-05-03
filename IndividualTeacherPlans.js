class IndividualPlans {
   #PlansArray = [];
   #size;

    constructor (newObjInf){
        this.PlansArray = newObjInf;
        this.Size = newObjInf.length;
    }
    #validForGet(obj, validCheck){
        if(validCheck.id  && obj.id !== validCheck.id)
            return false;
        else if(validCheck.description  && obj.description !== validCheck.description)
            return false
        else if(validCheck.createdAt  && obj.createdAt !== validCheck.createdAt)
            return false
        else if(validCheck.author  && obj.author !== validCheck.author)
            return false
        else if(validCheck.Subjects  && obj.Subjects !== validCheck.Subjects)
            return false
        else if(validCheck.teacher && obj.teacher !== validCheck.teacher)
            return false
        else
            return true
    }
    getObjs(skip, top, filterConfig){
        let tempArray = [];
        for (let i = skip, j = 0; i < skip+top ; i++){
            if(/*this.#validForGet(this.PlansArray[i],filterConfig)*/true){
                tempArray [j] = this.PlansArray[i];
                j++
            }

        }
        tempArray.sort(function(a,b){
            return new Date(a.createdAt) - new Date(b.createdAt);
        });
        return tempArray;
    }

    getObj(id) {
        return this.PlansArray.find(x => x.id === id);
    }
    validateObj(obj){
        if(!obj.id  || typeof obj.id != "number")
            return false;
        else if(!obj.description || typeof obj.description != "string")
            return false
        else if(!obj.createdAt || !(obj.createdAt instanceof Date))
            return false
        else if(!obj.author || typeof obj.author != "string")
            return false
        else if(!obj.Subjects || !Array.isArray(obj.Subjects))
            return false
        else if(!obj.teacher|| typeof  obj.teacher != "string")
            return false
        else
            return true
    }

    addObj (obj){
        this.PlansArray[this.Size] = obj;
        this.Size++;
        return true;
    }

    editObj(id, change){
        let index = this.PlansArray.findIndex(x => x.id === id);
        if (change.description){
            this.PlansArray[index].description = change.description;
        }
        if (change.createdAt){
            this.PlansArray[index].createdAt = change.createdAt;
        }
        if (change.author){
            this.PlansArray[index].author = change.author;
        }
        if(change.Subjects){
            this.PlansArray[index].Subjects = change.Subjects;
        }
        if(change.teacher){
            this.#PlansArray[index].teacher = change.teacher;
        }
    }

    removeObj(id){
        this.PlansArray.splice(this.PlansArray.findIndex(x => x.id === id), 1);
        this.Size--;
    }

    addAll (addObj){
        let n = this.Size;
        for (let i = this.Size, j = 0; i < n + addObj.length; i++, j++){
            this.PlansArray[i] = addObj[j];
            this.Size ++;
        }
        return this.PlansArray;
    }

    show(){
        for (let i = 0; i < this.Size; i++){
            console.log(this.PlansArray[i]);
        }
    }
};



const Plans = [
    {
        id: 1,
        description: 'индивидуальный учебный план преподавателя',
        createdAt: new Date('2023-04-19T19:00:00'),
        author: 'Вдовина Алёна Петровна',
        Subjects: [1,4],
        teacher: "Князев Степан Никитич",
    },

    {
        id: 2,
        description: 'индивидуальный учебный план преподавателя',
        createdAt: new Date('2000-04-19T19:00:00'),
        author: 'Вдовина Алёна Петровна',
        Subjects: [1,2],
        teacher: "Беляев Пётр Фёдорович",
    },

    {
        id: 3,
        description: 'индивидуальный учебный план преподавателя',
        createdAt: new Date('2023-04-19T19:00:00'),
        author: 'Вдовина Алёна Петровна',
        Subjects: [4,5],
        teacher: "Комарова Камила Алексеевна",
    },

    {
        id: 4,
        description: 'индивидуальный учебный план преподавателя',
        createdAt: new Date('2023-04-19T19:00:00'),
        author: 'Вдовина Алёна Петровна',
        Subjects: [6,8],
        teacher: "Сизов Платон Никитич",
    },

    {
        id: 5,
        description: 'индивидуальный учебный план преподавателя',
        createdAt: new Date('2023-04-19T19:00:00'),
        author: 'Вдовина Алёна Петровна',
        Subjects: [3,7],
        teacher: "Полякова Дарья Ивановна",
    },

    {
        id: 6,
        description: 'индивидуальный учебный план преподавателя',
        createdAt: new Date('2023-04-23T20:00:00'),
        author: 'Дмитриева Мария Ильинична',
        Subjects: [2,4],
        teacher: "Ермакова Майя Робертовна",
    },

    {
        id: 7,
        description: 'индивидуальный учебный план преподавателя',
        createdAt: new Date('2023-04-23T20:00:00'),
        author: 'Дмитриева Мария Ильинична',
        Subjects: [5,6],
        teacher: "Евдокимов Алексей Андреевич",
    },

    {
        id: 8,
        description: 'индивидуальный учебный план преподавателя',
        createdAt: new Date('2023-04-23T20:00:00'),
        author: 'Дмитриева Мария Ильинична',
        Subjects: [2,6,9],
        teacher: "Черных Екатерина Кирилловна",
    },

    {
        id: 9,
        description: 'индивидуальный учебный план преподавателя',
        createdAt: new Date('2023-04-23T20:00:00'),
        author: 'Дмитриева Мария Ильинична',
        Subjects: [1,3,5],
        teacher: "Васильева Анастасия Алексеевна",
    },

    {
        id: 10,
        description: 'индивидуальный учебный план преподавателя',
        createdAt: new Date('2023-04-23T20:00:00'),
        author: 'Дмитриева Мария Ильинична',
        Subjects: [7,8],
        teacher: "Егорова Василиса Эмильевна",
    },

    {
        id: 11,
        description: 'индивидуальный учебный план преподавателя',
        createdAt: new Date('2023-04-23T20:00:00'),
        author: 'Дмитриева Мария Ильинична',
        Subjects: [3,10],
        teacher: "Чернышев Павел Владимирович",
    },

    {
        id: 12,
        description: 'индивидуальный учебный план преподавателя',
        createdAt: new Date('2023-04-23T20:00:00'),
        author: 'Дмитриева Мария Ильинична',
        Subjects: [3,6,8],
        teacher: "Лаптев Владимир Маркович",
    },

    {
        id: 13,
        description: 'индивидуальный учебный план преподавателя',
        createdAt: new Date('2023-04-23T20:00:00'),
        author: 'Дмитриева Мария Ильинична',
        Subjects: [3,5],
        teacher: "Шульгин Сергей Савельевич",
    },

    {
        id: 14,
        description: 'индивидуальный учебный план преподавателя',
        createdAt: new Date('2023-04-23T20:00:00'),
        author: 'Вдовина Алёна Петровна',
        Subjects: [2,6,8],
        teacher: "Пономарева Мария Андреевна",
    },

    {
        id: 15,
        description: 'индивидуальный учебный план преподавателя',
        createdAt: new Date('2023-04-23T20:00:00'),
        author: 'Вдовина Алёна Петровна',
        Subjects: [1,5,6],
        teacher: "Воронкова Амелия Андреевна",
    },

    {
        id: 16,
        description: 'индивидуальный учебный план преподавателя',
        createdAt: new Date('2023-04-23T20:00:00'),
        author: 'Вдовина Алёна Петровна',
        Subjects: [7,10],
        teacher: "Краснова Вероника Владиславовна",
    },

    {
        id: 17,
        description: 'индивидуальный учебный план преподавателя',
        createdAt: new Date('2023-04-23T20:00:00'),
        author: 'Вдовина Алёна Петровна',
        Subjects: [9,10],
        teacher: "Антонова Анастасия Ивановна",
    },

    {
        id: 18,
        description: 'индивидуальный учебный план преподавателя',
        createdAt: new Date('2023-04-23T20:00:00'),
        author: 'Вдовина Алёна Петровна',
        Subjects: [4],
        teacher: "Семенов Максим Андреевич",
    },

    {
        id: 19,
        description: 'индивидуальный учебный план преподавателя',
        createdAt: new Date('2023-04-23T20:00:00'),
        author: 'Дмитриева Мария Ильинична',
        Subjects: [10],
        teacher: "Макаров Константин Артёмович",
    },

    {
        id: 20,
        description: 'индивидуальный учебный план преподавателя',
        createdAt: new Date('2023-04-23T20:00:00'),
        author: 'Дмитриева Мария Ильинична',
        Subjects: [3,4,5],
        teacher: "Соколова Алёна Антоновна",
    },

];
let individualPlans2023 = new IndividualPlans(Plans);
individualPlans2023.show()
// let newPlans = [{
//     id: 22,
//     description: 'индивидуальный учебный план преподавателя',
//     createdAt: new Date('2023-04-23T20:00:00'),
//     author: 'Дмитриева Мария Ильинична',
//     Subjects: [4,8],
// },
//     {
//         id: 23,
//         description: 'индивидуальный учебный план преподавателя',
//         createdAt: new Date('2023-04-23T20:00:00'),
//         author: 'Дмитриева Мария Ильинична',
//         Subjects: [7,9],
//     }];
// let newPlan = {
//     id: 21,
//     description: 'индивидуальный учебный план преподавателя',
//     createdAt: new Date('2023-04-23T20:00:00'),
//     author: 'Дмитриева Мария Ильинична',
//     Subjects: [3,5],
// }



let select = document.getElementById("selectTeacher");
alert("i am here");
let ObjIP = document.createElement('option');
for(let tempIP of individualPlans2023.getObjs(0,20)){
    ObjIP.value = "s1";
    ObjIP.textContent = tempIP.teacher;
    select.prepend(ObjIP);
}
/*
individualPlans2023.show();

console.log(individualPlans2023.getObjs(2, 4, {author:'Дмитриева Мария Ильинична'}));

console.log(individualPlans2023.getObj(11));

console.log(individualPlans2023.validateObj(newPlan));

individualPlans2023.addObj(newPlan);
individualPlans2023.show();
individualPlans2023.editObj(1,  {
    description: 'очень важный индивидуальный учебный план преподавателя',
    Subjects: [1,2,3],
});
individualPlans2023.show();

individualPlans2023.removeObj(5);
individualPlans2023.show();

console.log(individualPlans2023.addAll(newPlans));
individualPlans2023.show();

*/


