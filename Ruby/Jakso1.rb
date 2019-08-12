#Jakso 1 tehtävät

#Tehtävä 1

puts "Moi maailma!"
puts "Tästä se sitten lähtee!"


#Tehtävä 2

muuttuja1 = "Tekstiä!"
muuttuja2 = 100

puts "Muuttujia voi laittaa tulosteisiin: #{muuttuja1}"
tulos = (muuttuja2 * 2) / 10

puts "Niillä voi myös laskea: #{tulos}"


#Tehtävä 3

#Pyydetään käyttäjältä syöte ja tulostetaan se
puts "Anna joku luku:"
luku = gets
bin = luku.to_i
hex = luku.to_i

puts "Antamasi luku on binaariarvoina " + bin.to_s(2)
puts "ja heksoina " + hex.to_s(16)


#Tehtävä 4

print "Anna jokin desimaaliluku: "; luku = gets

luku = luku.to_f
luku = luku * 10
luku = luku.round.to_i
luku = luku.to_f / 10

print "Luku on pyöristettynä " + luku.to_s


#Tehtävä 5

#Satunnaisluvun arvonta, 20-sivuinen noppa
tulos = rand(20) +1

puts "Noppa heitti tuloksen #{tulos}"