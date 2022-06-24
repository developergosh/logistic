
function ref(name, login, password) {	// конструктор справочника типов автомобилей
    this.name = name			// название марки автомобиля name
    this.login = login			// модель model
    this.password = password				// URL-адрес файла с фотографией url
}

function info(regnum, owner, ref) {// конструктор списка автомобилей на стоянке
    this.regnum = regnum 	    // номер автомобиля
    this.owner = owner 		    // владелец
    this.ref =  ref		    // ссылка на справочник
}

uStore = new Array() // массив записей справочника типов автомобилей  - aref
uStore[0] = new ref("Darhan", "darhan", "u0")
uStore[1] = new ref("Алиев", "aliev", "u1")
uStore[2] = new ref("Ахметов", "Ahmetov",  "u2")
uStore[3] = new ref("Смаилов", "Smail", "u3")
uStore[4] = new ref("Мирлан", "Mirlan", "u4")
uStore[5] = new ref("Азамат", "Azamat", "u5")
uStore[6] = new ref("Олжас", "Zhas", "u6")
uStore[7] = new ref("Мадина", "Madina", "u7")
uStore[8] = new ref("Ерлан", "Erla", "u8")
uStore[9] = new ref("Санжар", "Sanzhik", "u9")
uStore[10] = new ref("Асет", "Aset", "u10")


arInfo = new Array()
arInfo[0] = new info("", "", uStore[0])
arInfo[1] = new info("Алматы", "газель 1 тонна", uStore[1])
arInfo[2] = new info("Кокшетау", "5 мест 20 кг", uStore[2])
arInfo[3] = new info("Костанай", "10 мест 50 кг", uStore[3])
arInfo[4] = new info("Актобе", "коробка 20 кг", uStore[4])
arInfo[5] = new info("Актау", "контейнер 20 тонн", uStore[5])
arInfo[6] = new info("Атырау", "7 мест 80 кг", uStore[6])
arInfo[7] = new info("Алматы", "1 газель 500кг", uStore[7])
arInfo[8] = new info("Атырау", "фура мест 20 тонн", uStore[8])
arInfo[9] = new info("Караганда", "2 мест 60 кг", uStore[9])
arInfo[10] = new info("Тараз", "2 газели 2 тонны", uStore[10])


strTab = "<TABLE BORDER=1> <TR>"
strTab +=" <TH>ФИО</TH><TH>Город</TH><TH>Груз</TH></TR>"
/* Формирование строк таблицы */
for(i=0;i<=arInfo.length-1;i++){
    strTab += "<TR><TD>" + arInfo[i].ref.name + "</TD><TD>" +arInfo[i].regnum
    strTab += "</TD><TD>" + arInfo[i].owner + "</TD></TR>"
}

strTab += "</TABLE>"
document.write(strTab)	// записываем строку strTab в HTML-документ
// и выполняем его