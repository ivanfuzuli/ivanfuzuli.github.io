---
date: "2021-01-02"
title: "Statik sayfa oluşturucular ve neden Gatsby?"
image: "../images/writer-01.jpg"
---

Bu blogumun ikinci yazısı olacak. Biraz siteyi oluşturma amacım olan statik site yapıcılardan bahsetmek istiyorum. Aslında siteyi açma amacın tamamen Gatsby isimli statik sayfa oluşturucuyu öğrenmekti.

Gatsby React tabanlı bir statik site oluşturucudur. Peki nedir statik site oluşturucu? Statik site oluşturucu, herhangi bir veritabanına bağlı kalmadan girilen verileri html formatına çevirerek direk siteniz üzerinden arada hiçbir veritabanı, cache vs. olmadan yayın yapmanıza olanak tanıyan uygulama çatılarıdır.

Bunun için daha önce Jekyll kullanmıştım fakat bu sefer Gatsby'i denemek istedim.

## Gatsby'in öne çıkan özellikleri

### React tabanlı

Eğer bir önyüz geliştiriciyseniz React'i büyük olasılıkla kullanmışsınızdır. React'in sağladığı tüm olanakları Gatsby ile elde edebiliyorsunuz.

### İmaj Optimizasyonu mükemmel

Gatsby'deki en sevdiğim özellik imaj optimizasyonu oldu. Verdiğiniz imajı her çözünürlük için ayrı olarak derliyor. İmajları medium.com'daki gibi progressive olarak gösterebiliyor. Yani imaj tamamen yüklenmeden önce "blur"lu hali geliyor sonra tamamı.

### Gelişmiş plugin yapısı

Gatsby'in plugin sayısı gerçekten fazla bunun yanında yer yer React ekosistemini de kullanabiliyorsunuz.

### Doğuştan Offline Destekli

Gatsby progressive webb apps(PWA) desteği çok iyi ve bu desteği açmak için yapmanız gereken sadece offline pluginini entegre etmek. O da bir satır kodu içeri almaktan ibaret.

### Hosting Maliyeti yok

Gatsby'i tamamen ücretsiz olarak github pages üzerinde host edebiliyorsunuz.

## Kötü yanları

### Herkese uygun değil

Gatsby ve diğer statik site oluşturucular biraz daha ileri seviye kullanıcılara hitap ediyor. Son kullanıcının bunu kullanabilmesi neredeyse imankansız. Evet, araya _strapi_ gibi headless bir cms entegre edebilirsiniz ama bunun kurulumu için de yine ileri seviye bir kullanıcı gerekiyor.

### Geliştirmek emek ve zaman istiyor

Evet gatsby'in bir sürü plugini var fakat bu pluginleri entegre etmek emek ve zaman istiyor. Ayrıca gatbsy'in kendine has bir öğrenme eğirisi var.
