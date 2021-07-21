Fortunes = ['Daikichi', 'Chukichi', 'Shokichi', 'kyo', 'daikyo']
Colors = ['Yellow', 'Green', 'Blue', 'Purple', 'Red', 'Orange', 'Pink', 'White', 'Black']
number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//Make your own fortune or thing you want to randomize here
//Note you can add as how many you wish
MAKEYOUROWNFORTUNE = ['ADDHERE']

const Fort = {
    TodaysFortune(name, array) {
        index = Math.floor(Math.random()*array.length)
        Fort[name] = array[index]
    },
    print(){
        for (const Fo in Fort){
            if (typeof(Fort[Fo]) != 'function') {
                console.log(`Your lucky ${Fo} Today is >>${Fort[Fo]}<<`)
            }
        }
    }
}

function CF(name, ar){
    Fort.TodaysFortune(name, ar)
}

function print(){
    Fort.print()
}


CF('Fortune', Fortunes)
CF('Color', Colors)
CF('Number', number)
//Update your fortune name here
CF('MAKEYOUROWNFORTUNE', MAKEYOUROWNFORTUNE)
print() //This function simply prints all 

