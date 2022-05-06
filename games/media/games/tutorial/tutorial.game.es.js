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
        <p>It dawned in Monta City, the city where our story begins.\
		Murillo wakes up at home and proceeds to have breakfast, when he finishes everything he decides to go out for a walk,\
		so he goes to get his hammer from the closet, but when he opens it he realizes that it is not there.\
		Murillo leaves the house in a hurry and looks for him throughout the neighborhood, although nobody knows anything.</p>\
		\
		<p>Suddenly you meet the Giant Noble Ibai who tells you that he has seen something,\
		but that in order to obtain this information, he will have to get the riddle right.</p>\
		\
		<center><img src='https://c.tenor.com/u0GH3fPRyT8AAAAC/ibai-gigante.gif' width='450' height='300'></center>\
        \
        <p class=dialogo>'What letter is next in the sequence U-D-T-C-C-S-S-O-N-?'</p>\
		\
		<p>The solution is <a href='./fallas'>M</a>.</p>\
        \
		<p>The solution is <a href='./aciertas'>D</a>.</p>",
		{
            actions: {
				'aciertas': "<p>After solving the puzzle, you receive the data\
								that a magician lives on the outskirts of the city\
								called Chapi who knows everything about the kingdom.</p>\
							\
							<p class='transient'><a href='magochapi'>You are going to see the Magician Chapi</a>.</p>",
							
				'fallas': "<p>After failing to solve the puzzle,\
								Murillo decides to go to the mine where the\
								Minero Suso, to see if he knows anything about it.</p>\
							\
							<p class='transient'><a href='mina'>You are going to see Miner Suso</a>.</p>"
            }
        }
    ),
	magochapi: new undum.SimpleSituation(
		"<h1>HOUSE OF THE MAGICIAN CHAPI</h1>\
		<p>You go to see the Magician Chapi and you call his house, although it scares you because it's a bit dark,\
		the door opens by itself and you carefully enter.</p>\
		\
		<p>Inside you come to a door and open it nervously, you see a chair with its back turned and the magician speaks to you:\
		\
		<p class=dialogo>'I know why you're here, but first you have to do a task for me.'</p>\
		\
		<p class='transient'><a href='bosque'>You accept the task</a>.</p>\
		\
		<p class='transient'><a href='mina'>You reject the task</a>.</p>"
	),
	mina: new undum.SimpleSituation(
		"<h1>MINE</h1>\
		<p>You go to the mine to ask Miner Suso if he knows anything about your hammer.</p>\
		\
		<p class=dialogo>'I have seen the Builder Javierlillo go by\
		through the tunnel that connects with Goblin Village and that he carried a hammer with him,\
		By the way, have this key, it may help you.'</p>\
		\
		<p class='transient'><a href='aldeaduende'>You go to the next city without finding an answer.</a>.</p>",
		{
			enter: function(character, system, to) {
                system.setQuality("Llave", 1);
            }
		}
	),
	bosque: new undum.SimpleSituation(
		"<h1>FOREST</h1>\
		<center><img src='media/img/bosque.jpg' width='450' height='300'></center>\
		<p>After 1 hour you get all the flowers, you see something flying,\
		at that moment someone pushes you into a bush, she is a red-haired girl and says:</p>\
		\
		<p class=dialogo>'Be more careful kid, they can catch and capture you, there are many evil things in this forest.'</p>\
		\
		<p><a href='./detalladamente'>You look closely that I attack you</a>.</p>\
		\
		<p class='transient'><a href='vueltacasamago'>You return to the magician's house</a>.</p>",
		{
			actions: {
				'detalladamente' : "<center><img src='media/img/murcielagos.jpg' width='400' height='250'></center>\
									<p>If you look closely and see that they are ferocious little bats\
									What will bats do in this forest?</p>"
			}
		}
	),
	
	vueltacasamago: new undum.SimpleSituation(
		"<h1>YOU COME BACK TO THE HOUSE OF THE MAGICIAN CHAPI</h1>\
		<p>The magician prepares some potions while you wait, anxiously you ask him where your hammer is.</p>\
		\
		<p>The wizard gives you a choice of 1 of the 4 potions he prepared.</p>\
		\
		<p class='transient'><a href='morada'>You choose the purple</a>.</p>\
		<p class='transient'><a href='naranja'>You choose the orange</a>.</p>\
		<p class='transient'><a href='negra'>You choose the black</a>.</p>\
		<p class='transient'><a href='azul'>You choose the blue</a>.</p>",
		{
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
		"<p>The Magician Chapi proceeds to explain what the potion will serve you:</p>\
		\
		<p class=dialogo>'You can throw, it will produce fury to fight and thus have speed and strength over your enemies.'</p>\
		\
		<p>The magician tells you that your next destination will be the Duende Village where you will have to look for the builder Javilillo,\
		but that you will have to be careful because there will be difficulties from that moment on.</p>\
		\
		<p class=transient><a href=aldeaduende></a>Go to Goblin Village</p>",
		{
			enter: function(character, system, to) {
                system.setQuality("morada", 1);
            }
		}
	),
	naranja: new undum.SimpleSituation(
		"<p>The Magician Chapi proceeds to explain what the potion will serve you:</p>\
		\
		<p class=dialogo>'You can throw, it will produce poison that does not kill it only weakens them.'</p>\
		\
		<p>The magician tells you that your next destination will be the Duende Village where you will have to look for the builder Javilillo,\
		but that you will have to be careful because there will be difficulties from that moment on.</p>\
		\
		<p class=transient><a href=aldeaduende></a>Go to Goblin Village</p>",
		{
			enter: function(character, system, to) {
                system.setQuality("naranja", 1);
            }
		}
	),
	negra: new undum.SimpleSituation(
		"<p>The Magician Chapi proceeds to explain what the potion will serve you:</p>\
		\
		<p class=dialogo>'You can throw, it produces dizziness and sleep.'</p>\
		\
		<p>The magician tells you that your next destination will be the Duende Village where you will have to look for the builder Javilillo,\
		but that you will have to be careful because there will be difficulties from that moment on.</p>\
		\
		<p class=transient><a href=aldeaduende></a>Go to Goblin Village</p>",
		{
			enter: function(character, system, to) {
                system.setQuality("negra", 1);
            }
		}
	),
	azul: new undum.SimpleSituation(
		"<p>The Magician Chapi proceeds to explain what the potion will serve you:</p>\
		\
		<p class=dialogo>'You can throw and freeze'</p>\
		\
		<p>The magician tells you that your next destination will be the Duende Village where you will have to look for the builder Javilillo,\
		but that you will have to be careful because there will be difficulties from that moment on.</p>\
		\
		<p class=transient><a href=aldeaduende></a>Go to Goblin Village</p>",
		{
			enter: function(character, system, to) {
                system.setQuality("azul", 1);
            }
		}
	),
	
	aldeaduende: new undum.SimpleSituation(
        "<h1>GOBLIN VILLAGE</h1>\
        <p>You arrive at the goblin village in search of your target, the builder Javilillo.</p>\
        <p>There you ask a goblin about him</p>\
        \
        <p class=dialogo>'My name is Xarly, be careful I'm a leprechaun jijijijiji'</p>\
        \
        <p>The Goblin Xarly runs away, so you keep looking for the Builder Javilillo</p>\
        \
        <p> After finding the builder, you see that the hammer he is carrying is not yours and ask him if he knows anything </ p> \
        \
        <p class=dialogo>'I saw a flock of bats with a hammer on them, they were heading to a cave, I don't know what they were up to...'</p>\
        \
        <p class=transient><a href=cueva>You go to the cave</a></p>"
    ),
    cueva: new undum.SimpleSituation(
        "<h1>CAVE</h1>\
        \
        <p>When you get to the cave you meet a red-haired girl, she asks you where you are going and tells her your story, she decides to accompany you and introduces herself:</p>\
		\
		<p class=dialogo>'I am Lidia the Valkyrie, I am a vigilante and I am going to defeat the witch, she will have your hammer, let's go get her'</p>\
		\
		<p class=transient><a href='./entrarcueva'>You enter the cave.</p>",
		{
			actions: {
                "entrarcueva": function(character, system, action) {
                    if(character.qualities.Llave == 1){
						system.write("<p><a href=tienesllave></a>Wait, there's some kind of slot.</p>");
					}else{
						system.write("<p><a href=notienesllave>What will the cave hide?</a></p>");
					}
				}
			}
		}
    ),
	tienesllave: new undum.SimpleSituation(
		"<p>The slot hid a door that gives access to a secret path, which can only be opened if you have the miner Suso's master key.</p>\
		\
		<p>Thanks to the miner's key you use a secret path created by him and avoid the dangers of the dark cave.</p>\
		\
		<p class=transient><a href=castillo>You continue on your way</a></p>"
	),
	notienesllave: new undum.SimpleSituation(
		"<p>You decide to advance through the cave facing all dangers.</p>\
		\
		<p>On the way you meet the rock thrower who challenges you to a fight.</p>\
		\
		<p>You fight against the rock thrower and the bats but since they are so strong and the rock thrower has so many rocks to throw you need to drink a potion.</p>\
		\
		<p class=transient><a href='./pocimas'>You take the potion</a></p>",
		{
			actions: {
                "pocimas": function(character, system, action) {
                    if(character.qualities.negra == 1){
						system.setQuality("negra", 0);
						system.write("<p>The chosen potion casts sleep and dizziness for your enemies. your enemies<a href=castillo>are defeated</a></p>");
					}else{
						if(character.qualities.azul == 1){
							system.setQuality("azul", );
							system.write("<p>The chosen potion throws ice and freezes your enemies. your enemies<a href=castillo>are defeated</a></p>");
							
						}else{
							if(character.qualities.morada == 1){
								system.setQuality("morada", 0);
								system.write("<p>The chosen potion gives you fury, that is, strength and speed to kill enemies. your enemies<a href=castillo>are defeated</a></p>");
							}else{
								if(character.qualities.naranja == 1){
									system.setQuality("naranja", 0);
									system.write("<p>The chosen potion throws poison to kill enemies. your enemies<a href=castillo>are defeated</a></p>");
								}
							}
						}
					
					}
				}
			}
		}
	),
	castillo: new undum.SimpleSituation(
		"<h1>CASTLE</h1>\
		<p>From a central tower, the witch Carmen introduces you to the Royal Arena where enemies will appear to defeat.\
		The enemies will be a bunch of skeletons ready to end your life but you will have to face them if you want to continue on your way to recover the hammer.</p>\
		\
		<p> The door slams shut, and an evil laugh is heard, from the stairs the witch Carmen makes her appearance and you realize that you fell into her trap.</ p> \
		\
		<center><img src='media/img/brujaCarmen.jpg' width='450' height='300'></center>\
		\
		<p>It's a fake trapdoor that drops you into the Arena.</p>\
		\
		<p class=transient><a href='arenareal'>Go to the Royal Arena</a></p>"
	),
	arenareal: new undum.SimpleSituation(
		"<h1>ROYAL ARENA</h1>\
		<p>From a central tower, the witch Carmen introduces you to the Royal Arena where enemies will appear to defeat.</p>\
		\
		<p>The enemies are a bunch of skeletons ready to end your life but you're going to have to face them if you want to continue on your way to get the hammer back.</p>\
		\
		<center><img src='media/img/esqueletos.jpeg' width='450' height='300'></center>\
		\
		<p class=transient><a href=fuerte></a>Perform strong attack</p>\
		\
		<p class=transient><a href=debil>Perform weak attack</a></p>"
	),
	fuerte: new undum.SimpleSituation(
		"<p>After performing the strong blow you kill most of them but, you will have to do another\
		attack if you want to finish them off completely.</p>\
		\
		<p class=transient><a href=atacar>Attack again</a></p>"
	),
	debil: new undum.SimpleSituation(
		"<p>You take out a few enemies but since they are many more, they attack you in the arm with which you will end up badly injured from the battle,\
		after a couple of seconds you recover and try to attack again to kill them all.</p>\
		\
		<p class=transient><a href=atacar>Attack again</a></p>"
	),
	atacar: new undum.SimpleSituation(
		"<p>After making another attack, all the skeletons have been defeated and the witch with a worried face returns to the castle. \
		We try to follow it and on the way you find a door.</p>\
		<p class=transient><a href=puerta>Open the door</a></p>"
	),
	puerta: new undum.SimpleSituation(
		"<p>TO BE CONTINUE...</p>"
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
    )
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

var check=document.querySelector(".check");
check.addEventListener('click',idioma);

undum.game.init=function idioma(){
	let id=check.checked;
	if(id==true){
		location.href="games/tutorial.en.html";
	}else{
		location.href="games/tutorial.es.html";
	}
}