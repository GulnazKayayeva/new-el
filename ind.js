let body = document.querySelector('body')
let p = document.createElement('div')


let cour = [
    {
        id: Math.random(),
        course: 'Frontend dasturlash',
        days: "Вторник-Четверг-Суббота",
        time: '15.00 - 16.30',
        procent: 20
    },
    {
        id: Math.random(),
        course: 'Арабский язык',
        days: "Вторник-Четверг-Суббота",
        time: '13.30 - 15.00',
        procent: 1
    },
    {
        id: Math.random(),
        course: 'Frontend',
        days: "Вторник-Четверг-Суббота",
        time:'9.00 - 10.30',
        procent:77
    },
    {
        id: Math.random(),
        course: 'New course',
        days:
        "Вторник-Четверг-Суббота",
        time: '18.00 - 19.30', 
        procent:10
    },
    {
        id: Math.random(),
        course: 'Английский язык',
        days:
        "Понедельник -пятница",
        time: '17.00 - 18.30',
        procent:40
    },
    {
        id: Math.random(),
        course: 'Ментальная арифметика',
        days:
        "Вторник-Суббота",
        time: '13.00 - 16.30', 
        procent:59
    },
    {
        id: Math.random(),
        course: 'Графический дизайн',
        days: "Вторник - четверг - суббота",
        time: '16.30 - 18.00',
        procent: 20
    },
    {
        id: Math.random(),
        course: 'Grafik Dizayn',
        days: "Понедельник - среда - пятница",
        time:  '13.30 - 15.00', 
        procent: 74
    },
    {
        id: Math.random(),
        course: 'Путь в Digital',
        days: "Понедельник - среда - пятница",
        time: '16.30 - 18.00',
        procent: 65
    },
    {
        id: Math.random(),
        course: '3D-modellashtirish',
        days: "Понедельник - среда - пятница",
        time:  '10.30 - 12.00', 
        procent: 25
    },
    {
        id: Math.random(),
        course: 'SMM',
        days: "Вторник-четверг-суббота",
        time: '18.00 - 19.30', 
        procent: 0
    }
]

for(let item of cour){
    let it = document.createElement('div')
    let h = document.createElement('h3')
    let fill = document.createElement('div')
    let pol = document.createElement('div')    
    let days = document.createElement('p')
    let time = document.createElement('p')
    let button = document.createElement('button')

    h.innerHTML = `${item.course}`
    it.classList.add('item')
    pol.classList.add('pol')
    fill.classList.add('fill')
    fill.style.width = `${item.procent}%`
    days.innerHTML = `Дни: ${item.days}`
    time.innerHTML = `Время: ${item.time}`
    button.innerHTML = 'Записаться'

    pol.append(fill)
    it.append(h,pol,days,time,button)
    p.append(it)
    

}

p.classList.add('dad')

body.prepend(p)

