// ---------------------------------------------------------------------------
// Edit this file to define your game. It should have at least four
// sets of content: undum.game.situations, undum.game.start,
// undum.game.qualities, and undum.game.init.
// ---------------------------------------------------------------------------

/* A unique id for your game. This is never displayed. I use a UUID,
 * but you can use anything that is guaranteed unique (a URL you own,
 * or a variation on your email address, for example). */
undum.game.id = "be1c95b9-cbc7-48c6-8e6a-89837aa9113e";

/* A string indicating what version of the game this is. Versions are
 * used to control saved-games. If you change the content of a game,
 * the saved games are unlikely to work. Changing this version number
 * prevents Undum from trying to load the saved-game and crashing. */
undum.game.version = "1.0";

/* A variable that changes the fade out speed of the option text on
 * a mobile. */
undum.game.mobileHide = 2000

/* A variable that changes the options fade out speed. */
undum.game.fadeSpeed = 1500

/* A variable that changes the slide up speed after clicking on an
 * option. */
undum.game.slideUpSpeed = 500

/* The situations that the game can be in. Each has a unique ID. */
undum.game.situations = {
    start: new undum.SimpleSituation(
        "<h1>MONTACITY</h1>\
        <img src='https://clashroyale.mundoperfecto.net/wp-content/uploads/2016/12/Montapuercos-ba%C3%B1o-Clash-Royal-Wallpaper.jpg' width='300' height='200' class='float_right'>\
        <p>Amaneció en Monta City, ciudad donde comienza nuestra historia.\
		<a href='https://clashofclans.fandom.com/es/wiki/Montapuerco'target=”_blank”>Murillo</a> despierta en su casa y procede a desayunar, cuando termina de todo decide salir a dar una vuelta,\
		así que va a por su martillo al armario, pero al abrirlo se da cuenta de que no está.\
		Apresurado Murillo sale de casa y lo busca por todo el vecindario, aunque nadie sabe nada.</p>\
		\
		<p>De repente te encuentras al <a href='https://clashroyale.fandom.com/es/wiki/Gigante_noble'target=”_blank”>Gigante Noble Ibai</a> que te dice que ha visto algo,\
		pero que para obtener dicha información tendrá que acertar el acertijo.</p>\
		\
		<center><img src='https://c.tenor.com/u0GH3fPRyT8AAAAC/ibai-gigante.gif' width='450' height='300'></center>\
        \
        <p class=dialogo>'¿Qué letra es la siguiente en la secuencia U-D-T-C-C-S-S-O-N-?'</p>\
		\
		<p>La solucion es <a href='./fallas'>M</a>.</p>\
        \
		<p>La solucion es <a href='./aciertas'>D</a>.</p>",
		{
			enter: function(character, system, from) {
                system.setQuality('progresion',7);
			},
            actions: {
				'aciertas': "<p>Tras resolver el acertijo,recibes el dato\
							de que a  las afueras de la ciudad vive un mago\
							llamado Chapi que sabe todo lo del reino.</p>\
							\
							<p class='transient'><a href='magochapi'>Vas a ver al Mago Chapi</a>.</p>",
							
				'fallas': "<p>Tras no conseguir resolver el acertijo,\
						   Murillo decideS ir a la mina donde se encuentra el\
						   Minero Suso, para ver si sabe algo del tema.</p>\
							\
							<p class='transient'><a href='mina'>Vas a ver al Minero Suso</a>.</p>"
            }
        }
    ),
	magochapi: new undum.SimpleSituation(
		"<h1>CASA DEL MAGO CHAPI</h1>\
		<img src='https://pm1.narvii.com/6221/d1ac73e7cc95f0550397667e0872dd6e91f3a7db_hq.jpg' width='450' height='300' class='float_right'>\
		<p>Vas a ver al <a href='https://clashroyale.fandom.com/es/wiki/Mago'target=”_blank”>Mago Chapi</a> y llamas a su casa, aunque te da miedo porque es algo tenebrosa,\
		la puerta se abre sola y entras cuidadosamente.</p>\
		\
		<p>Dentro llegas a una puerta y abres con nervios, ves una silla de espalda y  el mago te habla:\
		\
		<p class=dialogo>'Se por lo que estás aquí pero antes debes hacer una tarea para mi.'</p>\
		\
		<p class='transient'><a href='bosque'>Aceptas la tarea</a>.</p>\
		\
		<p class='transient'><a href='mina'>No aceptas la tarea</a>.</p>",
		{
			enter: function(character, system, from) {
                system.setQuality('progresion',14);
			}
		}
	),
	mina: new undum.SimpleSituation(
		"<h1>MINA</h1>\
		<img src='https://esports.eldesmarque.com/wp-content/uploads/2022/04/minero-1.jpg' width='450' height='200' class='float_right'>\
		<p>Vas a la mina a preguntar al <a href='https://clashroyale.fandom.com/es/wiki/Minero'target=”_blank”>Minero Suso</a> si sabe algo de tu martillo.</p>\
		\
		<p class=dialogo>'He visto pasar al <a href='https://clashofclans.fandom.com/es/wiki/Constructor'target=”_blank”>Constructor Javierlillo</a>\
		por el túnel que conecta con Aldea Duende y que con él llevaba un martillo,\
		por cierto ten esta llave, es posible que te sirva.'</p>\
		\
		<p class='transient'><a href='aldeaduende'>Vas a la siguiente ciudad sin encontrar respuesta.</a>.</p>",
		{
			enter: function(character, system, to) {
                system.setQuality("Llave", 1);
				system.setQuality('progresion',28);
            }
		}
	),
	bosque: new undum.SimpleSituation(
		"<h1>BOSQUE</h1>\
		<center><img src='media/img/bosque.jpg' width='450' height='300'></center>\
		<p>Después de 1 hora consigues todas las flores, ves que se acerca algo volando,\
		en ese momento alguien te empuja a un arbusto, es una chica pelirroja y te dice:</p>\
		\
		<p class=dialogo>'Ten más cuidado chaval, ellos pueden atraparte y capturarte, hay muchas cosas malvadas en este bosque.'</p>\
		\
		<p><a href='./detalladamente'>Miras detalladamente que te ataco</a>.</p>\
		\
		<p class='transient'><a href='vueltacasamago'>Vuelves a casa del mago</a>.</p>",
		{
			enter: function(character, system, from) {
                system.setQuality('progresion',35);
			},
			actions: {
				'detalladamente' : "<center><img src='media/img/murcielagos.jpg' width='400' height='250'></center>\
									<p>Si miras detalladamente y observas que son pequeños murciélagos feroces\
									¿que haran en este bosque murcielagos?</p>"
			}
		}
	),
	
	vueltacasamago: new undum.SimpleSituation(
		"<h1>VUELVES A CASA DEL MAGO CHAPI</h1>\
		<img src='https://pm1.narvii.com/6221/d1ac73e7cc95f0550397667e0872dd6e91f3a7db_hq.jpg' width='450' height='300' class='float_right'>\
		<p>El mago prepara unas pócimas mientras esperas, ansioso le preguntas que dónde está tu martillo.</p>\
		\
		<p>El mago te da a elegir 1 de las 4 pócimas que preparó.</p>\
		\
		<p class='transient'><a href='morada'>Eliges la morada</a>.</p>\
		<p class='transient'><a href='naranja'>Eliges la naranja</a>.</p>\
		<p class='transient'><a href='negra'>Eliges la negra</a>.</p>\
		<p class='transient'><a href='azul'>Eliges la azul</a>.</p>",
		{
			enter: function(character, system, from) {
                system.setQuality('progresion',42);
			},
			actions: {
				"morada": function(character, system, action) {
                    system.setQuality("morada", 1);
                },
				"naranja": function(character, system, action) {
                    system.setQuality("naranja", 1);
                },
				"negra": function(character, system, action) {
                    system.setQuality("negra", 1);
                },
				"azul": function(character, system, action) {
                    system.setQuality("azul", 1);
                }
			}
		}
	),
	morada: new undum.SimpleSituation(
		"<p>El Mago Chapi procede a explicarte para que te servira la pocima:</p>\
		\
		<p class=dialogo>'Puedes arrojarla, producirá furia para luchar y asi tener rapidez y fuerza sobre tus enemigos.'</p>\
		\
		<p>El mago te dice que tu siguiente destino será la Aldea Duende donde tendrás que buscar al constructor Javilillo,\
		pero que tendrás que tener cuidado porque habrá dificultades a partir de ese instante.</p>\
		\
		<p class=transient><a href=aldeaduende>Ir a Aldea Duende</a></p>",
		{
			enter: function(character, system, to) {
                system.setQuality("morada", 1);
                system.setQuality('progresion',49);
            }
		}
	),
	naranja: new undum.SimpleSituation(
		"<p>El Mago Chapi procede a explicarte para que te servira la pocima:</p>\
		\
		<p class=dialogo>'Puedes arrojarla, producirá envenenamiento que no matara solo los debilitara.'</p>\
		\
		<p>El mago te dice que tu siguiente destino será la Aldea Duende donde tendrás que buscar al constructor Javilillo,\
		pero que tendrás que tener cuidado porque habrá dificultades a partir de ese instante.</p>\
		\
		<p class=transient><a href=aldeaduende>Ir a Aldea Duende</a></p>",
		{
			enter: function(character, system, to) {
                system.setQuality("naranja", 1);
				system.setQuality('progresion',49);
            }
		}
	),
	negra: new undum.SimpleSituation(
		"<p>El Mago Chapi procede a explicarte para que te servira la pocima:</p>\
		\
		<p class=dialogo>'Puedes arrojarla,producirá mareos y sueño.'</p>\
		\
		<p>El mago te dice que tu siguiente destino será la Aldea Duende donde tendrás que buscar al constructor Javilillo,\
		pero que tendrás que tener cuidado porque habrá dificultades a partir de ese instante.</p>\
		\
		<p class=transient><a href=aldeaduende>Ir a Aldea Duende</a></p>",
		{
			enter: function(character, system, to) {
                system.setQuality("negra", 1);
				system.setQuality('progresion',49);
            }
		}
	),
	azul: new undum.SimpleSituation(
		"<p>El Mago Chapi procede a explicarte para que te servira la pocima:</p>\
		\
		<p class=dialogo>'Puedes arrojarla,congelera'</p>\
		\
		<p>El mago te dice que tu siguiente destino será la Aldea Duende donde tendrás que buscar al constructor Javilillo,\
		pero que tendrás que tener cuidado porque habrá dificultades a partir de ese instante.</p>\
		\
		<p class=transient><a href=aldeaduende>Ir a Aldea Duende</a></p>",
		{
			enter: function(character, system, to) {
                system.setQuality("azul", 1);
				system.setQuality("progresion",49);
            }
		}
	),
	
	aldeaduende: new undum.SimpleSituation(
        "<h1>ALDEA DUENDE</h1>\
		<img src='https://c.tenor.com/LfeWEAwJb5QAAAAC/clash-of-clans.gif' width='450' height='300' class='float_right'>\
        <p>Llegas a la aldea duende en busca de tu objetivo, el constructor Javilillo.</p>\
        <p>Allí preguntas por él a un duende</p>\
        \
        <p class=dialogo>'Mi nombre es ,<a href='https://clashroyale.fandom.com/es/wiki/Duende'target=”_blank”>Xarly</a> cuidado soy un duende jijijijiji'</p>\
        \
        <p>El Duende Xarly sale corriendo, asi que tu sigues buscando al Constructor Javilillo</p>\
        \
        <p>Tras encontrar al constructor, ves que el martillo que lleva no es el tuyo y le preguntas si sabe algo</p>\
        \
        <p class=dialogo>'Vi a una bandada de murcielagos con un martillo encima, se dirigian a una cueva, nose que tramaran...'</p>\
        \
        <p class=transient><a href=cueva>Vas a la cueva</a></p>",
		{
			enter: function(character, system, from) {
                system.setQuality('progresion',56);
			}
		}
    ),
    cueva: new undum.SimpleSituation(
        "<h1>CUEVA</h1>\
		<img src='https://images.ecestaticos.com/YaH_t4AC4r7zquMK8_XxRpGfixE=/0x0:0x0/557x418/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fd98%2Ff29%2F4af%2Fd98f294afd1cc0623c9f4b8b5b257800.jpg' width='450' height='300' class='float_right'>\
        \
        <p>La llegar a la cueva te encuentras a una chica pelirroja, te pregunta a dónde vas y le cuenta tu historia, decide acompañarte y se presenta:</p>\
		\
		<p class=dialogo>'Yo soy <a href='https://clashroyale.fandom.com/es/wiki/Valquiria'target=”_blank”>Lidia la Valquiria</a>, soy una justiciera y voy a derrotar a la bruja, ella tendrá tu martillo, vayamos a por ella'</p>\
		\
		<p class=transient><a href='./entrarcueva'>Entras a la cueva.</p>",
		{
			enter: function(character, system, from) {
                system.setQuality('progresion',63);
			},
			actions: {
                "entrarcueva": function(character, system, action) {
                    if(character.qualities.Llave == 1){
						system.write("<p><a href=tienesllave>Espera, hay una especie de ranura.</a></p>");
					}else{
						system.write("<p><a href=notienesllave>¿Qué ocultara la cueva?</a></p>");
					}
				}
			}
		}
    ),
	tienesllave: new undum.SimpleSituation(
		"<p>La ranura escondia una puerta que da acceso a un camino secreto, que solo se puede abrir si tienes la llave maestra del minero Suso.</p>\
		<img src='https://tierrademisterios.com/wp-content/uploads/2019/02/tyty-1030x579.jpg' width='450' height='300' class='float_right'>\
		\
		<p>Gracias a la llave del minero utilizais un camino secreto creado por él y evitais los peligros de la tenebrosa cueva.</p>\
		\
		<p class=transient><a href=castillo>Continuais vuestro camino</a></p>",
		{
			enter: function(character, system, to) {
                system.setQuality("Llave", 0);
                system.setQuality('progresion',70);
			
            }
		}
	),
	notienesllave: new undum.SimpleSituation(
		"<p>Decidis avanzar por la cueva afrontando todos los peligros.</p>\
		\
		<p>En el camino te encuentras al lanzarrocas que te desafia a luchar.</p>\
		\
		<p>Luchais contra el <a href='https://clashroyale.fandom.com/es/wiki/Lanzarrocas'target=”_blank”>Manolos</a> y los murciélagos pero al ser ellos tan fuertes y Manolos al tener tantas rocas para lanzar necesitáis tomaros una poción.</p>\
		\
		<p class=transient><a href='./pocimas'>Coges la pocion</a></p>",
		{
			enter: function(character, system, to) {
                system.setQuality('progresion',70);
			
            },
			actions: {
                "pocimas": function(character, system, action) {
                    if(character.qualities.negra == 1){
						system.setQuality("negra", 0);
						system.write("<p>La pocion elegida tira sueño y mareos para tus enemigos. Tus enemigos <a href=castillo>son derrotados</a></p>");
					}else{
						if(character.qualities.azul == 1){
							system.setQuality("azul", );
							system.write("<p>La pocion elegida tira hielo y congela a tus enemigos. Tus enemigos <a href=castillo>son derrotados</a></p>");
							
						}else{
							if(character.qualities.morada == 1){
								system.setQuality("morada", 0);
								system.write("<p>La pocion elegida os da furia, es decir fuerza y rapidez para acabar con los enemigos. Tus enemigos <a href=castillo>son derrotados</a></p>");
							}else{
								if(character.qualities.naranja == 1){
									system.setQuality("naranja", 0);
									system.write("<p>La pocion elegida tira veneno para acabar con los enemigos. Tus enemigos <a href=castillo>son derrotados</a></p>");
								}
							}
						}
					
					}
				}
			}
		}
	),
	castillo: new undum.SimpleSituation(
		"<h1>CASTILLO</h1>\
		<img src='https://clashofclans.com/uploaded-images-blog/1290871650_1617709761.jpg?mtime=20210406114921' width='450' height='300' class='float_right'>\
		<p>Desde una torre central la bruja Carmen os presenta la Arena Real donde os aparecerán enemigos a derrotar.\
		Los enemigos serán un montón de esqueletos dispuestos a acabar con tu vida pero vas a tener que enfrentarte a ellos si quieres seguir en tu camino de recuperar el martillo.</p>\
		\
		<p>La puerta se cierra de un portazo, y se escucha una risa malvada, desde las escaleras la <a href='https://clashroyale.fandom.com/es/wiki/Bruja'target=”_blank”>Bruja Carmen</a> hace su aparición y os dais cuenta que caísteis en su trampa.</p>\
		\
		<center><img src='media/img/brujaCarmen.jpg' width='450' height='300'></center>\
		\
		<p>Es una trampilla falsa que os hace caer hacia la Arena.</p>\
		\
		<p class=transient><a href='arenareal'>Ir a la arena Real</a></p>",
		{
			enter: function(character, system, to) {
                system.setQuality('progresion',75);
			
            }
		}
	),
	arenareal: new undum.SimpleSituation(
		"<h1>ARENA REAL</h1>\
		<p>Desde una torre central la bruja Carmen os presenta la Arena Real donde os aparecerán enemigos a derrotar.</p>\
		\
		<p>Los enemigos son un montón de esqueletos dispuestos a acabar con tu vida pero vas a tener que enfrentarte a ellos si quieres seguir en tu camino de recuperar el martillo.</p>\
		\
		<center><img src='media/img/esqueletos.jpeg' width='450' height='300'></center>\
		\
		<p class=transient><a href=fuerte>Realizar ataque fuerte</a></p>\
		\
		<p class=transient><a href=debil>Realizar ataque debil</a></p>",
		{
			enter: function(character, system, to) {
                system.setQuality('progresion',80);
			
            }
		}
	),
	fuerte: new undum.SimpleSituation(
		"<p>Tras realizar el golpe fuerte acabas con la mayoría de ellos pero, tendrás que hacer otro\
		ataque si quieres acabar con ellos completamente.</p>\
		\
		<p class=transient><a href=atacar>Volver a atacar</a></p>",
		{
			enter: function(character, system, to) {
                system.setQuality('progresion',85);
			
            }
		}
	),
	debil: new undum.SimpleSituation(
		"<p>Te quitas unos pocos enemigos pero al ser ellos muchos más, te atacan en el brazo con lo que acabarás malherido de la batalla,\
		tras un par de segundos te recuperas e intentarás volver a atacar para acabar con todos ellos.</p>\
		\
		<p class=transient><a href=atacar>Volver a atacar</a></p>",
		{
			enter: function(character, system, to) {
                system.setQuality('progresion',85);
			
            }
		}
	),
	atacar: new undum.SimpleSituation(
		"<p>Tras realizar otro ataque, todos los esqueletos han sido derrotados y la bruja con cara de preocupación vuelve al castillo. \
		Intentamos seguirla y en el camino os encontráis una puerta.</p>\
		<p class=transient><a href=salatrofeos>Abrir puerta</a></p>",
		{
			enter: function(character, system, to) {
                system.setQuality('progresion',90);
			
            }
		}
	),
	salatrofeos: new undum.SimpleSituation(
				"<h1>SALA TROFEOS</h1>\
		<p>Abres la puerta y... no podías creer lo que veían tus ojos.</p>\
		\
		<p class=dialogo> '¡¡¡TODOS LOS OBJETOS ROBADOS POR LA BRUJA ESTABAN AHÍ!!!'</p>\
		\
		<center><img src='https://c.tenor.com/ovQ-hOlJ7x4AAAAC/hog-scream-scream-hog.gif' width='450' height='300'></center>\
		\
		<p>Ahí estaba, era su martillo, no podía creerlo, estaba justo al lado del hacha de la valquiria.</p>\
		\
		<p class=transient><a href='./cogemartillo'>Coger martillo</a></p>\
		\
		<center><img src='media/img/martillomonta.jpg' width='400' height='300'></center>\
		\
		<p>De repente todo tiembla y la valquiria te avisa de que la bruja ha tirado una pócima de terremoto para que no podais salir del castillo y quedar sepultados.</p>\
		\
		<p class=dialogo> 'Deberíamos coger todos los objetos robados y salir corriendo!!!'</p>\
		\
		<p>Cuando llegais a la puerta principal para salir se caen escombros y no podeis salir, pero cuando creeis que todo esta perdido aparece el minero Suso.</p>\
		\
		<center><img src='https://esports.eldesmarque.com/wp-content/uploads/2022/04/Minerin-1.jpg' width='450' height='300'></center>\
		\
		<p class=dialogo> 'El constructor javilillo me dijo que viniera a ayudaros, a mi tambien me robo la bruja Carmen mi casco especial'</p>\
		\
		<p>El minero Suso construye un camino por debajo del castillo y <a href=salir>salís</a> fuera de este.</p>",		
		{
			enter: function(character, system, to) {
                system.setQuality("objetosrobados", 1);
				system.setQuality('progresion',95);
            },
			actions: {
                "cogemartillo": function(character, system, to) {
					system.setQuality("martillo", 1);
				}
			}
		}
		

	),
	salir: new undum.SimpleSituation(
		"<h1>Vuelta a la normalidad</h1>\
		<p>Tras haber conseguido salir tras la ayuda del minero, el montapuercos Murillo pasa por todas las ciudades como Montacity\
		 y Aldea Duende devolviendo cada uno de los objetos robados a sus dueños.</p>\
		 <p>Después le haces una visita a tu amigo, el mago Chapi, que te ofrece una nueva poción para celebrarlo y pasáis allí el resto del día. Una vez que terminas le das las\
		 gracias a Lidia la valquiria y ya por último llegas a tu casa, después de un día duro para conseguir recuperar tu martillo.</p>\
		 <center><img src='https://www.fondoshd.mx/wallpapers/el-montapuercos-en-clash-royale-4340.jpg' width='400' height='300'></center>",
		 {
			enter: function(character, system, to) {
                system.setQuality("objetosrobados", 0);
				system.setQuality('progresion',100);
            }			
		 }
	),
    // NB: The 'hub' situation which is the main list of topics, is
    // defined wholly in the HTML file, and doesn't have an entry in
    // the game.situations dictionary in this file.

    // For variety, here we define a situation using the top-level
    // Situation type. This is a neat approach to generate text by
    // looking it up in the HTML document. For static text that makes
    // more sense than writing it longhand.
    situations: new undum.Situation({
        enter: function(character, system, from) {
            system.write($("#s_situations").html());
        },
        tags: ["topic"],
        optionText: "What Undum Games are Made Of",
        displayOrder: 1
    }),
    todo: new undum.SimpleSituation(
        "<p>Two things can happen in a situation. The character either\
        <a href='links'>leaves</a> the situation and enters another one, or\
        they carry out some <a href='./do-something'>action</a>. Actions may\
        perform some processing, they may display some results, but\
        ultimately they put the character back into the same situation\
        again.</p>\
        \
        <p>When you are designing your game, use situations to reflect a\
        change in what the character can do. So you would change situation if\
        the character pulls a lever to open a trapdoor, for example. Actions\
        are intended for situations where the character can examine things\
        more closely, or maybe top up their magic by drinking a potion.\
        Things that don't affect the state of the world around them.</p>\
        \
        <p>Situations generate content when they are <em>enter</em>ed,\
        <em>exit</em>ed, and when they receive an <em>act</em>ion (the\
        italicised words are the names of the three methods that do this).\
        You can write code to generate content in any way you like, so the\
        content that is displayed can be totally dynamic: taking into\
        account the current state of the character.\
        Content is just plain HTML, so you use regular HTML tags to make\
        things <strong>bold</strong> or <em>italic</em>, or to include\
        images. This gives you a lot of flexibility. For example, since Undum\
        targets HTML5 browsers, you could use the <em>audio</em> or\
        <em>video</em> tags to include rich media.</p>\
        \
        <p class='transient'>Make sure you've carried out the action above,\
        then <a href='hub'>return to the topic list</a>.</p>",
        {
            actions: {
                'do-something': "<p>You carried out the action, well done.\
                                 You'll notice that the links for this\
                                 situation are still active. This means you\
                                 can click to perform the action again.</p>"
            }
        }
    ),
    links: new undum.SimpleSituation(
        "<p>Between each chunk of new text, Undum inserts a discreet line\
        in the margin. This allows you to see at a glance everything that\
        has been output as a result of your last click.\
        It is particularly useful for small devices, or when\
        lots of content has appeared. The window also scrolls so the start\
        of the new content is as near to the top of the window as possible.\
        This is also designed to help you read more naturally.</p>\
        \
        <p>If you've been watching carefully, you will have noticed that\
        parts of the text have been disappearing when you move between\
        situations. This isn't a bug! One of the aims of Undum is to give\
        game designers the ability to make the transcript of\
        the game read as a coherent piece of narrative. However, you often\
        need chunks of text that do nothing but offer the reader choices.\
        Undum defines a special CSS class to add to your HTML for this\
        (remember generated content is just HTML). It is <em>transient</em>,\
        and can be applied to paragraphs, <em>div</em>s, or just\
        <em>span</em>s<span class='transient'> (such as this one)</span>.</p>\
        \
        <p>You may also have noticed that, when you move situations, all the\
        links in the previous situation turn into regular text. This is to\
        stop you backtracking and trying previous options when you've already\
        committed to one. In other H-IF systems, this is\
        done by completely removing the content from previous pages.\
        That prevents you going back and reading your story, however.</p>\
        \
        <p class='transient'>The 'Different Kinds of Links' topic has more\
        about these links.\
        Let's return to the <a href='hub'>topic list</a>.</p>",
        {
            heading: "Disappearing Content",
            diplayOrder: 2,
            tags: ["topic"]
        }
    ),
    sticky: new undum.SimpleSituation(
        "<p>There are three types of link in Undum. The first two we've seen\
        in previous topics:\
        links to change situation and links to carry out an action. When you\
        include a link in your output, Undum parses it and wires it up\
        correctly. If you create a link with a HTML <em>href</em> attribute\
        containing just a name ('ballroom', for\
        example) this will send the character to the situation with that\
        name. Links\
        with two components ('ballroom/view-painting', for example) send\
        the character to a new situation <em>and then</em> carry out the\
        named action ('view-painting' in this case). To carry out an action\
        in the current situation, you can replace the situation name with a\
        dot (so it would be './view-painting'). In all cases, if the\
        character is already in that situation, then the situation's\
        <em>enter</em> method won't be called again.</p>\
        \
        <img src='media/games/tutorial/woodcut2.png' class='float_left'>\
        <p>The third type of link, then, is a general hyperlink. If your\
        link doesn't consist of a single element or pair of elements, as\
        above, then Undum will guess that you have a normal hyperlink. As\
        <a href='http://news.bbc.co.uk' class='sticky'>in this link</a>.\
        If you have a link that <em>does</em> look like an Undum link, you\
        can still force Undum not to interpret it as an action or situation\
        move, by adding the CSS class <em>raw</em> to the HTML <em>a</em> tag.\
        links that don't have the <em>raw</em> class, but that are considered\
        to be non-Undum links (like the link above), will have <em>raw</em>\
        added to them before display. This could allow you to style external\
        links differently, as we have done here.</p>\
        \
        <p>In the last situation I said you can prevent links from being\
        turned into regular text when you move situations. This is done\
        by another CSS class: <em>sticky</em>. When you\
        <a href='oneshot'>leave this situation</a>, you'll notice the\
        external link stays active. This can allow you to have options that\
        stay valid throughout the narrative, for example, such as a spell to\
        teleport home.</p>",
        {
            tags: ["topic"],
            displayOrder: 3,
            heading: "Different Kinds of Links"
        }
    ),
    oneshot: new undum.SimpleSituation(
        "<p>There is one final option for links. If you give a link\
        the <em>once</em> CSS class, then that link will disappear\
        after it is clicked. This is  used (as in\
        <a href='./one-time-action' class='once'>this link</a>) for\
        actions that you only want to be possible once. There is no\
        point using 'once' on situation links because they'll be turned\
        into text as soon as you click them anyway (unless they are also\
        <em>sticky</em>, of course).</p><p>Once links are useful\
        for actions such as examining an object more carefully. You\
        don't want lots of repeated descriptions, so making the link\
        a <em>once</em> link is more user friendly.</p>\
        <p>If you have more than one link to the same action, then all\
        matching links will be removed, so you don't have to worry about\
        the player having an alternative way to carry out the action.</p>\
        <p class='transient'>After you've clicked the link, let's\
        <a href='hub'>move on</a>.</p>",
        {
            actions: {
                "one-time-action": "<p>As I said, one time actions are\
                                   mostly used to describe something in\
                                   more detail, where you don't want the\
                                   same descriptive text repeated over and\
                                   over</p>"
            }
        }
    ),
    qualities: new undum.SimpleSituation(
        "<p>Let's talk about the character.\
        The character is described by a series of <em>qualities</em>. These\
        are numeric values that can describe anything from natural abilities\
        to how much of a resource the character controls. Qualities are\
        shown in the box on the right of the text.</p>\
        \
        <p>The qualities there are those you started the game with. When you\
        <a href='quality-types'>go to the next situation</a>, keep your\
        eyes on the character panel. You'll notice I'll give you a boost to\
        your stamina quality. This process is animated and highlighted to\
        draw your attention to it. You could also get a boost of skill\
        by carrying out <a href='./skill-boost'>this action</a> as many\
        times as you like.</p>",
        {
            heading: "Qualities and the Character",
            tags: ["topic"],
            displayOrder: 4,
            actions: {
                "skill-boost": function(character, system, action) {
                    system.setQuality("skill", character.qualities.skill+1);
                }
            },
            exit: function(character, system, to) {
                system.setQuality("stamina", character.qualities.stamina+1);
            }
        }
    ),
    "quality-types": new undum.SimpleSituation(
        "<p>Not all the qualities in the character panel are displayed as\
        numeric. Internally they are all numeric, but different qualities\
        get to choose how to display themselves. So 'Luck', for example, is\
        displayed as words (based on the FUDGE RPG's adjective scale),\
        and 'Novice' is using just a check-mark.</p>\
        \
        <p>To see how Luck changes, try using this\
        <a href='./luck-boost'>luck-boosting action</a> or this\
        <a href='./luck-reduce'>luck-reducing action</a>. Notice that\
        luck uses a numeric bonus when it runs out of words. There are a range\
        of different display types provided with Undum, and you can easily\
        add your own too.</p>\
        \
        <p>When you <a href='character-text'>leave this situation</a>,\
        I'll set 'Novice' to zero. Watch\
        the character panel, and you'll see that Novice decides it doesn't\
        need to be displayed any more and will be removed. You will also see\
        that when the last\
        quality in a group is removed ('Novice' is in the 'Progress' group),\
        then the group heading is also removed. You can tell Undum what\
        group each quality belongs to, and what order they should be listed.\
        <p>",
        {
            actions: {
                "luck-boost": function(character, system, action) {
                    system.setQuality("luck", character.qualities.luck+1);
                },
                "luck-reduce": function(character, system, action) {
                    system.setQuality("luck", character.qualities.luck-1);
                }
            },
            exit: function(character, system, to) {
                system.setQuality("novice", 0);
            }
        }
    ),
    "character-text": new undum.SimpleSituation(
        "<h1>Character Text</h1>\
        <p>Above the list of qualities is a short piece of text, called\
        the character-text. This describes the character in some way. It\
        can be set by any action or when entering or leaving a situation.\
        It is just regular HTML content, as for all text in Undum. It can\
        also contain Undum links, so this is another place you can put\
        actions that the character can carry out over a long period of time.\
        </p>\
        <p class='transient'>Let's go back to the\
        <a href='hub'>topic list</a>. As you do, I'll change the\
        character text. Notice that it is highlighted, just the same as\
        when a quality is altered.</p>",
        {
            exit: function(character, system, to) {
                system.setCharacterText(
                    "<p>We're nearing the end of the road.</p>"
                );
            }
        }
    ),
    progress: new undum.SimpleSituation(
        "<p>Sometimes you want to make the change in a quality into a more\
        significant event. You can do this by animating the change in\
        quality. If you <a href='./boost-stamina-action'>boost your\
        stamina</a>, you will see the stamina change in the normal\
        way in the character panel. But you will also see a progress\
        bar appear and animate below.</p>",
        {
            tags: ["topic"],
            heading: "Showing a Progress Bar",
            displayOrder: 5,
            actions: {
                // I'm going indirect here - the link carries out an
                // action, which then uses doLink to directly change
                // the situation.  This isn't the recommended way (I
                // could have just changed situation in the link), but
                // it illustrates the use of doLink.
                "boost-stamina-action": function(character, system, action) {
                    system.doLink("boost-stamina");
                }
            },
            exit: function(character, system, to) {
                system.animateQuality(
                    'stamina', character.qualities.stamina+1
                );
            }
        }
    ),
    "boost-stamina": new undum.SimpleSituation(
        "<p>\
        <img src='media/games/tutorial/woodcut3.png' class='float_right'>\
        The progress bar is also useful in situations where the\
        character block is displaying just the whole number of a quality,\
        whereas some action changes a fraction. If the quality is displaying\
        the character's level, for example, you might want to show a progress\
        bar to indicate how near the character is to levelling up.</p>\
        \
        <p>After a few seconds, the progress bar disappears, to keep the\
        focus on the text. Undum isn't designed for games where a lot of\
        statistic management is needed. If you want a change to be part\
        of the permanent record of the game, then write it in text.</p>\
        \
        <p>Let's <a href='hub'>return to the topic list.</a></p>"
        ),
    // Again, we'll retrieve the text we want from the HTML file.
    "saving": new undum.Situation({
        enter: function(character, system, from) {
            system.write($("#s_saving").html());
        },
        tags: ["topic"],
        displayOrder: 6,
        optionText: "Saving and Loading"
    }),

    "implicit-boost": new undum.SimpleSituation(
        "<p>Your luck has been boosted<span class='transient'>, check the\
        list of options to see if they have changed</span>.</p>",
        {
            tags: ["example"],
            enter: function(character, system, from) {
                system.animateQuality("luck", character.qualities.luck+1)
                system.doLink('example-choices');
            },
            optionText: "Boost Your Luck",
            displayOrder: 1,
            canView: function(character, system, host) {
                return character.qualities.luck < 4;
            }
        }
    ),
    "implicit-drop": new undum.SimpleSituation(
        "<p>Your luck has been reduced<span class='transient'>, check the\
        list of options to see if they have changed</span>.</p>",
        {
            tags: ["example"],
            enter: function(character, system, from) {
                system.animateQuality("luck", character.qualities.luck-1)
                system.doLink('example-choices');
            },
            optionText: "Reduce Your Luck",
            displayOrder: 2,
            canView: function(character, system, host) {
                return character.qualities.luck > -4;
            }
        }
    ),
    "high-luck-only": new undum.SimpleSituation(
        "<p>Your luck is higher than 'fair'. The link to this \
        situation would not\
        have appeared if it were lower.</p>",
        {
            tags: ["example"],
            enter: function(character, system, from) {
                system.doLink('example-choices');
            },
            optionText: "High Luck Option",
            displayOrder: 3,
            canView: function(character, system, host) {
                return character.qualities.luck > 0;
            }
        }
    ),
    "low-luck-only": new undum.SimpleSituation(
        "<p>Your luck is lower than 'fair'. The link to this situation \
        appears whether\
        it is low or high, but can only be chosen if it is low. It does this\
        by defining a <em>canChoose</em> method.</p>",
        {
            tags: ["example"],
            enter: function(character, system, from) {
                system.doLink('example-choices');
            },
            optionText: "Low Luck Option (requires low luck to be clickable)",
            displayOrder: 3,
            canChoose: function(character, system, host) {
                return character.qualities.luck < 0;
            }
        }
    ),

    "last": new undum.SimpleSituation(
        "<h1>Where to Go Now</h1>\
        <p>So that's it. We've covered all of Undum. This situation is the\
        end, because it has no further links. The 'The End' message is\
        just in the HTML output of this situation, it isn't anything special\
        to Undum</p>\
        \
        <p>I've added an\
        inspiration quality to your character list. Its time for you to\
        crack open the game file and write your own story.</p>\
        <h1>The End</h1>",
        {
            tags: ["topic"],
            optionText: "Finish the Tutorial",
            displayOrder: 8,
            enter: function(character, system, from) {
                system.setQuality("inspiration", 1);
                system.setCharacterText(
                    "<p>You feel all inspired, why not have a go?</p>"
                );
            }
        }
    )
};



// ---------------------------------------------------------------------------
/* The Id of the starting situation. */
undum.game.start = "start";

// ---------------------------------------------------------------------------
/* Here we define all the qualities that our characters could
 * possess. We don't have to be exhaustive, but if we miss one out then
 * that quality will never show up in the character bar in the UI. */
undum.game.qualities = {
    skill: new undum.IntegerQuality(
        "Skill", {priority:"0001", group:'stats'}
    ),
    stamina: new undum.NumericQuality(
        "Stamina", {priority:"0002", group:'stats'}
    ),
    luck: new undum.FudgeAdjectivesQuality( // Fudge as in the FUDGE RPG
        "<span title='Skill, Stamina and Luck are reverently borrowed from the Fighting Fantasy series of gamebooks. The words representing Luck are from the FUDGE RPG. This tooltip is illustrating that you can use any HTML in the label for a quality (in this case a span containing a title attribute).'>Luck</span>",
        {priority:"0003", group:'stats'}
    ),

    inspiration: new undum.NonZeroIntegerQuality(
        "Inspiration", {priority:"0001", group:'inventario'}
    ),
    Llave: new undum.OnOffQuality(
        "Llave", {priority:"0002", group:'inventario', onDisplay:"&#10003;"}
    ),
	morada: new undum.OnOffQuality(
        "Pocima morada", {priority:"0003", group:'inventario', onDisplay:"&#10003;"}
    ),
	naranja: new undum.OnOffQuality(
        "Pocima naranja", {priority:"0004", group:'inventario', onDisplay:"&#10003;"}
    ),
	negra: new undum.OnOffQuality(
        "Pocima negra", {priority:"0005", group:'inventario', onDisplay:"&#10003;"}
    ),
	azul: new undum.OnOffQuality(
        "Pocima azul", {priority:"0006", group:'inventario', onDisplay:"&#10003;"}
    ),
	martillo: new undum.OnOffQuality(
		"Martillo", {priority:"0007", group:'inventario', onDisplay:"&#10003;"}
    ),
	objetosrobados: new undum.OnOffQuality(
        "Objetos robados", {priority:"0008", group:'inventario', onDisplay:"&#10003;"}
	),
	progresion: new undum.NumericQuality(
        "Progresion (%)", {priority:"0009", group:'stats'}
    ),
};



// ---------------------------------------------------------------------------
/* The qualities are displayed in groups in the character bar. This
 * determines the groups, their heading (which can be null for no
 * heading) and ordering. QualityDefinitions without a group appear at
 * the end. It is an error to have a quality definition belong to a
 * non-existent group. */
undum.game.qualityGroups = {
    stats: new undum.QualityGroup(null, {priority:"0001"}),
    inventario: new undum.QualityGroup('Inventario', {priority:"0002"})
};

// ---------------------------------------------------------------------------
/* This function gets run before the game begins. It is normally used
 * to configure the character at the start of play. */
undum.game.init = function(character, system) {
    //character.qualities.skill = 12;
    //character.qualities.stamina = 12;
    //character.qualities.luck = 0;
    //character.qualities.novice = 1;
    //character.qualities.inspiration = 0;
    system.setCharacterText("<p></p>");
};

document.getElementById("clickMe").onclick = function () { alert('Tienes que ayudar al montapuercos Murillo a completar la historia para recuperar su martillo y encontrar quien lo robo.'); };
	var el = document.getElementById("clickMe");
	if (el.addEventListener)
		el.addEventListener("click", doFunction, false);
	else if (el.attachEvent)
		el.attachEvent('onclick', doFunction);