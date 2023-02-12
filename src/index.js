const open = ['(', '[', '{', '1', '3', '5']

const config = {')': '(', ']':'[', '}':'{', '|': '|', '2': '1', '4':'3', '6':'5', '7':'7', '8':'8'}

const config1 = [['(', ')']];
const config2 = [['(', ')'], ['[', ']']];
const config3 = [['(', ')'], ['[', ']'], ['{', '}']];
const config4 = [['|', '|']];
const config5 = [['(', ')'], ['|', '|']];
const config6 = [['1', '2'], ['3', '4'], ['5', '6'], ['7', '7'], ['8', '8']];
const config7 = [['(', ')'], ['[', ']'], ['{', '}'], ['|', '|']];

module.exports = function check(str, bracketsConfig) {
    console.log(str)
    let list = []
    let simbol = 0
    let topelement = 0
    let count = 0
    let count2 = 0
    let list2 = []
    for (let i = 0; i < str.length; i++){
        if (open.includes(str[i])){
            list.push(str[i])
            
        }
        else if (str[i] === '8'|| str[i] ==='|' || str[i]==='7'){
                        list.push(str[i])
                        if (list[list.length - 2] === list[list.length - 1]){
                            list.pop()
                            list.pop()
                            
                        }
                    }
        else {
            if (list === []){ //закрывающая но лист пустой
                return false
            }
            else {
                if (list[list.length-1] === config[str[i]]){
                    list.pop() //закрывающая но в листе есть открывающие.закрывающая тогоже типа
                }
                else {
                    return false
                }
        }
        
       
}
 
}





return list.length === 0
}