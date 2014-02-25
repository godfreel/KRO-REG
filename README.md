KRO-REG
=======

Registration page for orienteering events of "KRONAN-Grodno"

Mockups can be founded there:
http://ninjamock.com/s/vposdz

В системе возможны четыре типа пользователей:

	- Гость
	- Участник
	- Представитель клуба
	- Админ
	
Гость может посомтреть список соревнований. Кликнув по одному из них он может посмотреть список участников по группам(для не начавшихся соревнований) либо результаты(для прошедших). Гость может зарегистрироваться на соревнования, указав при этом все необходимые данные.

Участник может редактировать свой профайл. Участник может либо отказаться от участия в соревнованиях либо зарегистрироваться. Данные для регистрации берутся из профайла.

Представитель клуба может зарегистрировать одного или нескольких участников из своего клуба на соревнования. Представитель может редактировать списки участников своего клуба в профайле.

Админ может добавить соревнования (редактировать не начавшиеся) указав:

	- название соревнований
	- дата проведения
	- главный судья
	- контрольное время
	
	- для каждой доступной группы для соревнований:
		- длина(метров)
		- количество КП

У админа должен быть dropbox-аккаунт, на который админ сможет заливать бюллетни для соревнований. На этапе создания соревнования админ должен указать ссылку на Бюллетень.

запуск mongo:
mongod --dbpath ../db --smallfiles

[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/godfreel/kro-reg/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

