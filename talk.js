const btn = document.querySelector(".talk");
const content = document.querySelector(".content");


//

const myName = [
  "Hi, my name is Oracle. I am a voice program that reads your horoscope traits at random. I am a playful experiment that explores an intriguing coexistence and interdependency between the human and the machine.  Tell me your horoscope sign and I will work out a possible prediction for you. ",
];

const whatCanYouDo = [
  "I am a voice program that reads your horoscope traits at random. I am a playful experiment that explores an intriguing coexistence and interdependency between the human and the machine.  Tell me your horoscope sign and I will work out a possible prediction for you. ",
];

const aries = [
  "At their core, Aries do what they want and do things their way. They are unafraid of conflict, highly competitive, honest and direct. An Aries is not weighed down by the freedom of choice, and is perhaps the sign that is least conflicted about what they want. They throw themselves at the world eagerly and without fear. It is one of their most commendable qualities, but also what causes them a great deal of pain and grief.",
  "Aries are driven by a desire to prove themselves and their strength. They naturally take charge and are competitive and ambitious. Aries are spontaneous and courageous. They have a sense of adventure and love to explore. They’re determined and bold, and are good at initiating new projects. They have high energy and can initiate quick actions. They can also be impatient, but are naturally active and don’t like to waste time.",
  "Aries tend to be impulsive, impatient, and hotheaded. They do not apologize for their anger. They say “I don’t care” and mean it. They don’t always have the best self-control, so they need to learn how to be more patient.",
  "Addicted to action and excitement, Aries are often the cause of their own turmoil. All Aries want to feel things intensely, which is why they can sometimes be prone to reckless risk-taking. It also means they are often reacting out of emotion rather than from a place of calm clear-headedness.",
  "Aries are incapable of hiding their emotions, and they demonstrate them physically. On their good days, Aries are incredibly loving. When they’re in a bad mood, they’re disastrous forces of nature. This is because they shift between extremes. They’ll push you away when they’re upset or feeling vulnerable, and then they’ll come running back when they start missing you.",
  "Aries takes an incredible amount of strength to love an Aries. To love an Aries, you have to become a resolute pillar amid a roiling sea. Aries can sometimes get carried away and end up hurting people they love. They need to be reminded that they are a leader, not a dictator. ",
];

const taurus = [
  "Taureans are the human equivalent of moss. A handmade wooden chair. They are normally satisfied with the way things are. They embody stability. Sitting in a patch of grass admiring the breeze. When everything else seems to be falling apart, Taureans are an oasis of calm, a rock of dependability. Practical knowledge and experience is their modus operandi.",
  "Taureans are oriented around the physical world. They tend to be grounded and logical. They love routine and they’re committed to their own comfort. They like to be in control. They’re patient and steady, and their materialism is an extension of their pursuit of stability.",
  "They like things to be predictable. They are perfectly happy eating the same meal over and over, or wearing the same outfit for a week straight. They would prefer things be consistent than chaotically good. They like to discover what they have the most fun doing, and then do it to the extreme.",
  "Tauruses have a regal quality about them. They are graceful and diligent laborers. They can be stubborn, bull-headed, and set in their ways, but they are also great listeners and very dependable.",
  "Taurus can absolutely go on forever. They never feel fatigued. They are like machines. And no matter what they throw at them, they will inevitably overcome their obstacles because they’ve already prepared for every contingency.",
  "Taureans aren’t careless with their affection. They fall in love one step at a time. They have very strong feelings. When they do fall in love, things get serious relatively quickly and last for a long time. They usually know their own minds and are more likely to fall in love because it feels right rather than because of an arbitrary “they’re cute” reason.",
];

const gemini = [
  "Geminis are very intelligent and pick up knowledge quickly. They are perceptive, analytical, and often very funny. They have an unreserved and childlike curiosity, always asking new questions. Geminis have an uncanny ability to size up a person’s character in a matter of seconds, even if they only just met them. If someone’s bluffing, they’ll be the first to notice. They are great communicators, very responsive and sensitive listeners.",
  "Geminis have an uncanny ability to size up a person’s character in a matter of seconds, even if they only just met them. If someone’s bluffing, they’ll be the first to notice. They are great communicators, very responsive and sensitive listeners.  ",
  "Geminis are versatile, comfortable being both introverts and extroverts. They are quick to adapt to the energy of a room. They can be the life of the party or a complete wallflower. They know how to bring dissimilar people together and make them get along. ",
  "Geminis are afraid of being alone. This is why they tend to have large social circles and always have a companion. They’re afraid of being trapped in their own minds. It’s not that Gemini aren’t creative or intelligent, it’s that they’re afraid of the power of their own imagination. They’re afraid of what they’ll find once they finally find themselves.",
  "They’re not afraid of their emotions, but they’re constantly worried about how they convey them, about their words being misconstrued, about unintentionally hurting someone’s feelings. This is a frequent misfortune of Geminis, and a result of how they externalize their insecurities.",
  "For the most part, Geminis fall in love fast. They are captivated by the glittering reflections of themselves that they see in other people. They are naturally curious about people who don’t quite fit into a tidy world of black and white. They’re easily seduced, flighty, and unpredictable. Geminis are driven by a fundamental curiosity about who other people are, and who they might be around them.",
  "They can be equally quick to fall out of love. Sometimes they’re so quick to abandon ship that they end up having multiple relationships in a short period of time, usually with different people. They are easily bored, and they often start relationships with the intention of having fun, rather than actually wanting to get involved with someone.",
];

const cancer = [
  "Cancers are weighed down by their own sorrows and the sorrows of those around them. They are frequently haunted by grief. It’s hard for them to share their pain with others, and they are often afraid to be vulnerable because they carry a fear that people will use their weaknesses against them. Cancers have learned to hide their pain to avoid burdening anyone else. They pretend they’re okay when they’re not.",
  "Cancer’s self-awareness is like the tides. They’re constantly moving in and out of focus. Their personality is layered. They have many moods, some of which are contradictory, but they also have a deep, core self that persists.  ",
  "Cancers are weighed down by their own sorrows and the sorrows of those around them. They are frequently haunted by grief. It’s hard for them to share their pain with others, and they are often afraid to be vulnerable because they carry a fear that people will use their weaknesses against them",
  "Cancers have learned to hide their pain to avoid burdening anyone else. They pretend they’re okay when they’re not. Their emotions are like an exposed nerve. They can feel everything. They tend to carry deep grudges because they can’t forget the emotional sting of a slight.",
  "Cancers fall in love easily. They may appear shy and reserved, but underneath this shield is a romantic who suffers from a bad case of the nerves. They don’t fall in love with a person, but with an ideal. They fall in love with what they’re hoping to find. They are looking for a complete and unconditional acceptance because they feel so inadequate and unfinished. ",
  "They want to be loved, but they don’t trust that it will last. They want to be touched, but don’t trust the intentions of the person touching them. They want to be protected, but they don’t trust that anyone will protect them.",
];

const leo = [
  "Leos are bold, warm, and loving. They are also the ultimate showmen. They can dazzle with the theatrical flair of a Broadway star and the charisma of a politician. They are captivating personalities. They have a way with words, and can speak eloquently on just about any topic, no matter how quickly they’ve just been introduced to it. Leos inject ambition into everything they do. They are ruled by the heart. They are brash and confident and trust their instincts. Their actions are natural and effortless.",
  "Leos have an unrelenting appetite for growth that is easily satiated by the praise of others. When they are hurting, it shows. They will use their anger as a protective wall to shield their vulnerabilities. They want to be perceived as unbreakable because they are scared of admitting vulnerability, needing things from other people, being incomplete.",
  "Leos have a reputation for being braggarts. To them this isn’t bragging, it’s sharing. Sharing their accomplishments with others makes them feel connected, and they expect the same in return from their friends. They want to be celebrated but they are equally happy to celebrate you. ",
  "Leos like to feel important. They don’t necessarily want to be worshipped, or be treated with reverence. They just want to be recognized for their authentic selves. The difference between admiration and worship is subtle, but it’s the difference between a Leo being preoccupied with themselves, or being focused on the good of the people they care about.",
  "Leos hate being bossed around. They are very much in charge of their own worlds and their own destiny. Leos are perpetually wounded by the acts of betrayal and abandonment. Their pride is a sword that they wield to protect their sovereignty.  ",
  "Leos are naturally energetic and passionate and often fall for partners that are equally enthusiastic. They are attracted to the same qualities in others that they see in themselves. They like partners that are confident and proactive. Who will go after what they want without apology.  ",
];

const virgo = [
  "Virgos are known for being perfectionists. Clean freaks. They are known for their attention to detail. They can find patterns where there are none. They can be finicky and critical to a fault. Virgos are also known for being intelligent, but because of their introverted nature they can sometimes have trouble expressing themselves. Talking to them may feel like floating on the surface of existence, and like you never know what they’re thinking and feeling deep inside.",
  "It’s true that Virgos are very particular, but that doesn’t necessarily mean that they keep neat spaces. Their particularities and habits don’t necessarily line up with traditional views of cleanliness. They could live in what looks like a Tasmanian devil-style dust storm ruin, but still impose a “no shoes in the house” or “no outside clothes on the bed” rule. Maybe their house looks cluttered, but they still know where everything is. Everything has its place.",
  "Everything has its place. Virgos prefer to exist in organized spaces, but put their service orientation over their own comfort. This can mean that a Virgo is too busy fixing the lives of those around them to put much work into providing for their own needs. They’re rarely motivated by their own self-interest.",
  "Their emphasis on thoughts and ideas can seem like a cover-up for their lack of emotional depth. In reality, they are a fortress unto themselves—the definition of self-containment. Virgos will be endlessly accepting of whatever you have to share, but may not see the value in spontaneously performing a similar excavation of themselves for anyone else.",
  "Virgos actively seek out messes—physical, interpersonal, emotional—in order to fix them.They like working on busy little behind-the-scenes tasks that make life run more smoothly for everyone. They need to keep going at full speed, because if they slow down, the unfolding chaos of the world catches up with them and their heads are filled with constant anxiety. ",
  "Virgos are afflicted with an absurd amount of expectation. Their love lives are often tumultuous because Virgos tend to be overly critical of other people. They’re not even trying to be mean, they just feel obligated to point out the flaws in others",
  "When Virgos find someone that they like, they start imagining how perfect their love could be and as time goes on, they begin to conflate the potential of the relationship with the actual relationship. The unfortunate reality is that everyone has flaws. Virgos tend to be much more interested in things and ideas than they are people and feelings. As a result, they can get easily bored and easily distracted. Their hearts are stagnated by their heads.",
];

const libra = [
  "Libras are difficult to really understand because they seem so contradictory on the surface. They’re simultaneously extroverted and introverted, strategic and spontaneous, focused and intuitive. This variability makes it difficult to pin down their true character. They are an entire constellation of personalities. Libras are different depending on who they're around.",
  "This is because Libras value empathy. They are receptive. They can be other people’s mirrors. Because of this, they have strong opinions about other people, but take a long time to understand themselves.  ",
  "They want to be admired not for their talents but for their charm. They want to be seen as the responsible figure who can balance out the turbulent elements around them. They feel an intense amount of guilt and shame when they are unhappy because they know that their unhappiness affects everyone around them.  ",
  "Libras are compassionate and empathetic people. They are willing to go out of their way to help others. They dislike conflict and avoid confrontations. These traits lead them to be manipulated by others. Libras also have a tendency to be indecisive. They are so concerned about other people's feelings that they let other people make decisions for them.",
  "Libras are very emotional, and easily hurt. Their internal world is turbulent and they work very hard to keep the balance. For all this hard work they put in they often feel that the world owes them something. It can be hard for them to verbalize their feelings. Libras must learn that the world can’t give them what they need unless they know how to ask for it.  ",
  "Libra’s problem isn’t boredom. Their problem is monotony. They despise any repetitive action. They hate being stuck in the same old patterns that other people seem to get stuck in. They crave variety and adventure and they can be immensely resourceful at finding ways to be challenged, amused, and inspired.  ",
];

const scorpio = [
  "Scorpios are difficult people to get to know. They are psychological trap doors. They socialize from behind a double-sided mirror, always scanning, reading you while you can only see your own reflection. They prefer to be the people asking the questions. They remove your skin with their perceptive scalpel and take inventory of your pulsing viscera. They probe and push. They know the little things that make you tick. Your pressure points. The subtle ways to procure the answer they’re seeking. They are keenly aware of power, its flows, and their position within its matrix.",
  "They have a ruthless view of the world. Eat or be eaten. Every human interaction is a meeting of opposing powerful forces. A clashing of wants and needs where somebody wins and somebody loses. Their knowledge of other people’s internal structures gives them an edge over the competition. They know how to play people against each other. They are forthcoming and evasive at the same time, depending on what is situationally beneficial. They are blunt, but not tactlessly so. They are intentional about the information they reveal. They’re not liars, they do not espouse falsehoods, but they are masters of opening windows on certain truths while concealing others behind heavy curtains.",
  "Scorpios aren’t afraid of most things other people fear. Not darkness. Not pain. Not death. They confront these truths head on. They know that death is inevitable. Instead of instilling fear, this knowledge is the whetstone that hones their appreciation for life. Scorpios teeter on the fine edge of the unknowable. Life is more interesting that way.  ",
  "Scorpios do fear vulnerability. The feeling of being known. Darkness can be a hiding place. Pain can be an excuse not to trust. When they open up, it gives other people power over them, and Scorpios need to be in control. The illusion of control over themselves and other people is the only thing that makes them feel secure in the face of an otherwise uncertain world.  ",
  "Scorpio's directness in establishing immediate intimacy causes people to fall for them quickly, but it takes them a while to open themselves up to someone enough to really fall in love. They think that love is the capacity for pain. Love means partially relinquishing some of their self-control and this is especially hard for a Scorpio.  ",
  "Scorpios are attracted to what’s beyond the surface. They want to be with someone who pushes their boundaries, who brings out their most intense desires and most profound fears. Intrigue. Passion. Lust. The need for completion. A darkly seductive energy. A screen for projection. An enigmatic intensity. The forbidden. The unknown.",
];

const sagittarius = [
  "Sagittarius is the ultimate empiricist. They will always choose principles over feelings and will often question who they are. They move from job to job, philosophy to philosophy, belief to belief. They are explorers of the human condition and are unafraid of change. Sagittarians feel like the world is their playground. They love to explore the unknown. They want to understand how the world works.",
  "On an unbounded quest to discover the whole of the universe inside of themselves, Sagittarians are unshackled from any particular worldly attachment. They are reckless in their pursuit of what they want, and often end up doing and experiencing things that defy conceptions of the possible.  ",
  "Sagittarius is an explorer. They are both the fearless adventurer and the jaded critic. They understand that knowledge comes in two forms: the shallow, disposable kind that comes from external sources, and the kind that comes from within. Sagittarius knows that external knowledge can be easily gained while internal knowledge is exponentially deeper and more powerful. They’re on a quest to delve into the depths of the universe inside the human mind. They don’t do this to prove that they have all the answers, but instead because they know that the journey is the destination.  ",
  "Sagittarians can be too aspirational. They want to believe so intensely that they can transcend the limitations of reality that it’s hard for them to accept the simple joys in life that lie before them. They’re so focused on achieving their goals that they don’t stop to appreciate the small victories along the way. Their high standards make them seem dismissive and arrogant.  ",
  "Sagittarians want to know everything. They can become lost in their endless quest for knowledge. Their curiosity can sometimes lead them to question the foundations of their beliefs. Questioning things is their way of forming a coherent worldview. It’s also a way of finding new ways to experience the world.  ",
  "Sagittarians are incredibly open, and this is what leads them to fall in love so quickly. They don’t see the point of caution because they feel they’ve already run the calculations and determined that the potential for reward outweighs the risk. They don’t need much time to decide if they want you.  ",
  "Sagittarius will often fall in love with the idea of a person. They are attracted to vibrancy. They’re also very independent, and often prone to wandering. They get bored easily. They are always looking for a new high, a new thrill, a new adventure. They are constantly seeking out the next great thing.  ",
];

const capricorn = [
  "Capricorns aren’t consumed by the need for attention, but are not immune to it. They simply don’t indulge in attention-seeking behavior. They don’t want attention for their looks or style or ingenuity. They don’t want to be admired, but they do want to be respected. They don’t want to be the center of attention. Instead it’s like they need to prove their own abilities to themselves.",
  "They are incredibly pragmatic. They are rule followers with a highly developed moral compass. From a young age it is impressed upon them that their whole sense of worth and meaning is based on their ability to hunker down and force their way to the finish. This turns them into achievement junkies.",
  "Their drive to succeed is a reflection of their fear of failure. The most stressful time in a Capricorn’s life is when they question their own authority. When a Capricorn is in a position of power, they are most stable. When they’re put in a position where they have to cater to someone else’s agenda, they can become a little unhinged.",
  "Capricorns collect responsibility. And they always seem to take it all on. Capricorns need to be the one to fix everything. Responsibility is their natural state. They have a “can do” attitude.",
  "They are the martyrs and the champions. They are the guardians and the judges. The team captains. The chief of chiefs. The general. The leader. But even as they lead the charge, Capricorns can feel like the loneliest people in the world. They wish to be completely self-sufficient, and are scared of depending on others.",
  "Capricorns don’t fall in love easily. It often takes some effort. Love is about making a proper emotional investment. They don’t like feeling emotionally dependent on anyone else so they often keep their distance. They can be awkward around romance. They can be awkward around expressing their feelings. It takes them a while to understand what their feelings are. Their romantic exploits are almost platonic partnerships.  ",
];

const aquarius = [
  "Aquarians are archetypical outcasts. This doesn’t mean they’re loners. In fact, they thrive in large groups—charming you with their peculiar senses of humor, intriguing you with fun facts about the history of disposable straws, or convincing you to join their reading group. The alienation they feel is often self-imposed—a result of their knee-jerk contrarianism, rather than a lack of social intelligence. They try to be weird. They hang grapefruit rinds from the wall and call it art, they pretend to actually like noise music, they saturate their internal monologues with SAT words.",
  "“Intelligence,” to them, means the ability to formulate the most unpopular opinion possible. If they were white sheep, they’d dye their wool black just to prove a point. They are destined to live their lives in direct opposition to the current world. In fact, they are world-builders. ",
  "An entire universe exists in their heads, and this universe adheres to its own set of logic that doesn’t map onto reality. They are not liars. They are utopians. They are not cold. They are rational. To them, emotions are just holes in their idealistic vessels. Why succumb to sensitivity when there is so much knowledge to acquire, so many problems to be solved, worlds to invent?",
  "They sometimes ask, “Why can’t I be normal?” but in reality, they find normalcy boring, and they stake their self worth on their ability to be interesting. They want to be unknowable. They want to evade definition. Definitions are binding little rules that other people use to restrict their movement, and they must resist anything that infringes on their freedom to drift. Between definitions, between the individual and the common, between themselves and humanity. The ultimate Aquarian struggle is resolving the tension between their need for community, and their need for complete detachment.",
  "Aquarians are always running little tests. They live their lives as one big science experiment, using the element of surprise to collect reactions and construct theories about the intricacies of human nature. They are walking abstract art pieces, shattering traditional perspectives with their complete disregard for convention. They are martyrs to the cause of “humanity”, and “freedom” is their only demand.  ",
  "Aquarians are attracted to intelligence. Inspiration is a romantic spark for them. Sharing the same sense of humor is the same thing as a connection. They aren’t necessarily attracted to people who share their interests, because there is a part of them that hates their interests, but they are drawn to people with niche pursuits that they don’t fully understand.  ",
];

const pisces = [
  "Describing a Pisces’ personality can be difficult because Pisces tend to evade distinction. Their behavior changes significantly based on who they’re around. Pisces are just permeable membranes that pensively let things flow through them. They are cerebral sea sponges. They are boundless. They tend to dilute themselves with larger personalities to avoid having to form coherent identities.",
  "Most of the qualities usually associated with Pisces (dreaminess, emotionality, imagination) are internal processes that are difficult to observe from the outside. This is because Pisces are primarily inward-facing. They are not self-absorbed, but they are absorbed in themselves.  ",
  "Ultimately, a Pisces wants to dissolve. To wrest themselves of a physical form and diffuse into everything they touch as love. To exist in the gossamer liminal layer that hangs just barely above the material. To live their life like a romantic poem. To understand that reality and fantasy are neighbors on the same infinite plane.  ",
  "Many Pisceans may doubt their intelligence because the society we live in places a higher emphasis on structured brains with the ability to mechanically analyze data and spit out information, while Pisces absorb and sift through sentiments. They can’t prove their argument because their opinion is based on a feeling. In fact, feeling is the very basis of the Pisces genius.  ",
  "Pisceans can sometimes come across as airheaded or forgetful. This is not due to mindlessness, but because of the particular orientation of their mindfulness. They are easily overstimulated, and have learned to cope by turning inward. Misplacing their keys or getting lost aren’t signs of their stupidity, but are instead a result of their detachment from the external world.  ",
  "Pisces have an elusive charm that can be alluring to some and frustrating to others. Their boundlessness causes them to attract other people with bad boundaries who take advantage of their compassion. Pisces need to learn that they are more than just a mop for other people’s emotional messes.",
];




// When voice get activated, it will run
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function () {
  console.log("voice is activated, you can to microphone");
};

recognition.onresult = function (event) {
  const current = event.resultIndex;

  const transcript = event.results[current][0].transcript;

  readOutLoud(transcript);
};

// add the listener to the btn

btn.addEventListener("click", () => {
  recognition.start();
});


function readOutLoud(message) {
  const speech = new SpeechSynthesisUtterance();

  speech.text = "Sorry, I didn't quite catch that. Please try again by clicking on the button and tell me your horoscope.";
  speech.lang = "en-AU";
  speech.voice = speechSynthesis.getVoices().filter(function (voice) {
    return voice.name === "en-AU-Standard-A";
  })[0];


  if (message.includes("who are you")) {
    const finalText = myName[Math.floor(Math.random() * myName.length)];
    speech.text = finalText;
  }

  if (message.includes("what can you do")) {
    const finalText = whatCanYouDo[Math.floor(Math.random() * whatCanYouDo.length)];
    speech.text = finalText;
  }

  if (message.includes("My horoscope is"&&"Aries")) {
    const finalText = aries[Math.floor(Math.random() * aries.length)];
    speech.text = finalText;
    console.log("reading aries")
  }

  if (message.includes("My horoscope is"&&"Taurus")) {
    const finalText = taurus[Math.floor(Math.random() * taurus.length)];
    speech.text = finalText;
    console.log("reading taurus")
  }

  if (message.includes("My horoscope is"&&"Gemini")) {
    const finalText = gemini[Math.floor(Math.random() * gemini.length)];
    speech.text = finalText; 
    console.log("reading gemini")
  }

  if (message.includes("My horoscope is"&&"Cancer")) {
    const finalText = cancer[Math.floor(Math.random() * cancer.length)];
    speech.text = finalText;
    console.log("reading cancer")
  }

  if (message.includes("My horoscope is"&&"Leo")) {
    const finalText = leo[Math.floor(Math.random() * leo.length)];
    speech.text = finalText;
    console.log("reading leo")
  }

  if (message.includes("My horoscope is"&&"Virgo")) {
    const finalText = virgo[Math.floor(Math.random() * virgo.length)];
    speech.text = finalText;
    console.log("reading virgo")
  }

  if (message.includes("My horoscope is"&&"Libra")) {
    const finalText = libra[Math.floor(Math.random() * libra.length)];
    speech.text = finalText;
    console.log("reading libra")
  }

  if (message.includes("My horoscope is"&&"Scorpio")) {
    const finalText = scorpio[Math.floor(Math.random() * scorpio.length)];
    speech.text = finalText;
    console.log("reading scorpio")
  }

  if (message.includes("My horoscope is"&&"Sagittarius")) {
    const finalText = sagittarius[Math.floor(Math.random() * sagittarius.length)];
    speech.text = finalText;
    console.log("reading sagittarius")
  }

  if (message.includes("My horoscope is"&&"Capricorn")) {
    const finalText = capricorn[Math.floor(Math.random() * capricorn.length)];
    speech.text = finalText;
    console.log("reading capricorn")
  }

  if (message.includes("My horoscope is"&&"Aquarius")) {
    const finalText = aquarius[Math.floor(Math.random() * aquarius.length)];
    speech.text = finalText;
    console.log("reading aquarius")
  }

  if (message.includes("My horoscope is"&&"Pisces")) {
    const finalText = pisces[Math.floor(Math.random() * pisces.length)];
    speech.text = finalText;
    console.log("reading pisces")
  }



  speech.volume = 1;
  speech.rate = 0.8;
  speech.pitch = 1;

  window.speechSynthesis.speak(speech);
}
