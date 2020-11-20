// Create a new object called loremIpsum by invoking the GenerateNewText constructor function
const loremIpsum = new GenerateNewText();

function GenerateNewText() {
  // property
  this.sentences = [
    "Welcome to MusicTown, may I service you?",
    "I really think MusicTown is torn on the revealing garment issue",
    "Damn the man. Let me explain it to you. Mitchells the man. Im the idiot. Youre the screw up. And we are all losers. Welcome to MusicTown.",
    "Me Joe, you Jane",
    "oh yeah, my wife left me for another woman and my girlfriend forced me to leave at gunpoint. Does this qualify me?",
    "Joe, is it ok if I leave the couch? Cause I'm gonna leave the couch now okay?",
    "My dad always said that there is 24 usable hours in every day.",
    "Empire Records, open til midnight, this is Mark",
    "You forgot your thingy",
    "I went to rock and roll heaven, and I wasn't on the guest list.",
    "Hey Lucas man, I hear you went to Vegas and you married a mobsters wife and now you have a hit on you and stuff. Is it true?",
    "I dont feel that I need to explain my art to you Warren.",
    "Is that with a C or with a K?",
    "You did have hair when you went in there, right?",
    "yeah. Its still in the sink if you want to glue it.",
    "Who knows where thoughts come from? They just appear.",
    "What's with you? Yesterday you were normal and today you're like the Chinese guy from the Karate Kid. What's with you today?",
    "What's with today today?",
    "Atlantic City? Is it coming BACK from Atlantic City?",
    "In the immortal words of The Doors, The time to hesitate is through",
    "Why dont you all just fade away.",
    "Joe, I can categorically say that you are not a bigger banana-head",
    "Isn't it customary to leave the scene after the committing the crime? Definitely an amateur.",
    "I do not regret the things I have done, but the things I did not do.",
    "Rap, metal, rap, metal and Whitney Houston.",
    "We mustn't dwell...no, not today. We CANT. Not on Rex Manning day",
    "You know that feeling when you get out of a warm bath...well...you make me feel like a warm bath?",
    "Who glued these quarters down?",
    "Damn the man. Save the Empire.",
    "I thought his name was Warren?",
    "Hey, Lucas. I've decided I'm going to start a band",
    "K, so I was thinking my band's name could be with a C. That way it's kind of that psychedelic, you know, trip thing.",
    "No. I did not win. So if you guys ever wonder if it was nice to know you, I tell you now that it was.",
    "only I didn't realise that it really was love because it was more than love and it wasn't just some stupid feeling in my stomach like everything else",
    "Joe, that's not true. It's in Atlantic City... I swear",
    "Well, that's good, because I have to tell Corey I love her by 1:37.",
    "In this life there are nothing but possibilities."
  ];
}

// Method to the GenerateNewText constructor function that generates a random sentence
GenerateNewText.prototype.getRandomSentence = function() {
  let randomSentence = this.sentences[
    Math.floor(Math.random() * this.sentences.length)
  ];
  return randomSentence;
};

// Method to the GenerateNewText constructor function that generates a paragraph from random sentences
GenerateNewText.prototype.getParagraph = function() {
  let paragraph = "";
  let minimumCharacterLength = 250;
  let firstSentence = true;
  while (paragraph.length < minimumCharacterLength) {
    if (firstSentence) {
      paragraph = paragraph.concat(this.getRandomSentence());
      firstSentence = false;
    } else {
      paragraph = paragraph.concat(" " + this.getRandomSentence());
    }
  }
  return paragraph;
};

// Method to the GenerateNewText constructor function that generates multiple paragraphs from paragraphs
GenerateNewText.prototype.getAllParagraphs = function(numberOfParagraphs) {
  let allParagraphs = [];
  // generate the number of paragraphs as specified by the user
  while (allParagraphs.length < numberOfParagraphs) {
    allParagraphs.push(this.getParagraph());
  }
  // convert array into HTML string
  let paragraphHTML = "";
  allParagraphs.forEach(function(paragraph) {
    paragraphHTML += "<p>" + paragraph + "</p>";
  });
  return paragraphHTML;
};

module.exports = loremIpsum;
