import track1 from "./assets/audio/bad.mp3";
import track2 from "./assets/audio/neverEnough.mp3";
import track3 from "./assets/audio/Never_Grow_Up.mp3";
import track4 from "./assets/audio/miliondream.mp3";

const tracks = [
  {
    id: 1,
    title: "Bad Boy",
    artist: "Bille Ailish",
    src: track1,
    lyricData: [
      { time: 14.42, text: "White shirt now red, my bloody nose" },
      { time: 17.39, text: "Sleeping, you're on your tippy toes" },
      { time: 20.9, text: "Creeping around like no one knows" },
      { time: 24.67, text: "Think you're so criminal" },
      { time: 27.9, text: "Bruises, on both my knees for you" },
      { time: 31.44, text: "Don't say thank you or please" },
      { time: 34.17, text: "I do what I want when I'm wanting to" },
      { time: 38.89, text: "My soul? So cynical" },
      { time: 41.94, text: "So you're a tough guy" },
      { time: 43.42, text: "Like it really rough guy" },
      { time: 45.16, text: "Just can't get enough guy" },
      { time: 46.96, text: "Chest always so puffed guy" },
      { time: 49.14, text: "I'm that bad type" },
      { time: 50.46, text: "Make your mama sad type" },
      { time: 52.18, text: "Make your girlfriend mad tight" },
      { time: 53.94, text: "Might seduce your dad type" },
      { time: 56.45, text: "I'm the bad guy, duh" },
      { time: 73.93, text: "I'm the bad guy" },
      { time: 75.93, text: "I like it when you take control" },
      { time: 77.92, text: "Even if you know that you don't" },
      { time: 81.65, text: "Own me, I'll let you play the role" },
      { time: 85.16, text: "I'll be your animal" },
      { time: 88.15, text: "My mommy likes to sing along with me" },
      { time: 93.14, text: "But she won't sing this song" },
      { time: 95.68, text: "If she reads all the lyrics" },
      { time: 99.14, text: "She'll pity the men I know" },
      { time: 102.14, text: "So you're a tough guy" },
      { time: 103.68, text: "Like it really rough guy" },
      { time: 105.44, text: "Just can't get enough guy" },
      { time: 107.42, text: "Chest always so puffed guy" },
      { time: 109.65, text: "I'm that bad type" },
      { time: 110.89, text: "Make your mama sad type" },
      { time: 112.4, text: "Make your girlfriend mad tight" },
      { time: 114.14, text: "Might seduce your dad type" },
      { time: 116.65, text: "I'm the bad guy, duh" },
      { time: 128.39, text: "I'm the bad guy, duh" },
      { time: 141.17, text: "I'm only good at being bad, bad" },
      { time: 158.39, text: "I like when you get mad" },
      { time: 163.39, text: "I guess I'm pretty glad that you're alone" },
      { time: 167.41, text: "You said she's scared of me?" },
      { time: 169.42, text: "I mean, I don't see what she sees" },
      { time: 172.18, text: "But maybe it's 'cause I'm wearing your cologne" },
      { time: 178.16, text: "I'm a bad guy" },
      { time: 185.08, text: "I'm a bad guy" },
      { time: 186.87, text: "Bad guy, bad guy" },
      { time: 189.39, text: "I'm a bad-" },
    ],
  },
  {
    id: 2,
    title: "Never Enough",
    artist: "Loren Allred",
    src: track2,
    lyricData: [
      { time: 15.41, text: "I'm trying to hold my breath" },
      { time: 20.88, text: "Let it stay this way" },
      { time: 25.39, text: "Can't let this moment end" },
      { time: 30.39, text: "You set off a dream with me" },
      { time: 36.14, text: "Getting louder now" },
      { time: 39.64, text: "Can you hear it echoing?" },
      { time: 45.88, text: "Take my hand" },
      { time: 49.38, text: "Will you share this with me?" },
      { time: 53.62, text: "'Cause darling without you" },
      { time: 59.12, text: "All the shine of a thousand spotlights" },
      { time: 62.89, text: "All the stars we steal from the nightsky" },
      { time: 66.38, text: "Will never be enough" },
      { time: 70.39, text: "Never be enough" },
      { time: 74.14, text: "Towers of gold are still too little" },
      { time: 77.63, text: "These hands could hold the world but it'll" },
      { time: 81.63, text: "Never be enough" },
      { time: 85.13, text: "Never be enough" },
      { time: 90.37, text: "For me" },
      { time: 92.39, text: "Never, never" },
      { time: 95.88, text: "Never, never" },
      { time: 99.63, text: "Never, for me" },
      { time: 102.9, text: "For me" },
      { time: 105.13, text: "Never enough" },
      { time: 108.62, text: "Never enough" },
      { time: 112.41, text: "Never enough" },
      { time: 115.38, text: "For me" },
      { time: 117.41, text: "For me" },
      { time: 119.13, text: "For me" },
      { time: 123.62, text: "All the shine of a thousand spotlights" },
      { time: 127.14, text: "All the stars we steal from the nightsky" },
      { time: 130.4, text: "Will never be enough" },
      { time: 133.87, text: "Never be enough" },
      { time: 137.9, text: "Towers of gold are still too little" },
      { time: 141.13, text: "These hands could hold the world but it'll" },
      { time: 145.88, text: "Never be enough" },
      { time: 148.38, text: "Never be enough" },
      { time: 155.61, text: "For me" },
      { time: 157.87, text: "Never, never" },
      { time: 161.13, text: "Never, never" },
      { time: 165.13, text: "Never, for me" },
      { time: 168.12, text: "For me" },
      { time: 170.63, text: "Never enough" },
      { time: 172.38, text: "Never, never" },
      { time: 174.13, text: "Never enough" },
      { time: 175.88, text: "Never, never" },
      { time: 177.63, text: "Never enough" },
      { time: 180.88, text: "For me" },
      { time: 182.9, text: "For me" },
      { time: 184.64, text: "For me" },
      { time: 193.88, text: "For me" },
    ],
  },
  {
    id: 3,
    title: "Never grow up",
    artist: "Taylor Swift ",
    src: track3,
    lyricData: [
      { time: 15.6, text: "Your little hand's wrapped around my finger" },
      { time: 19.0, text: "And it's so quiet in the world tonight" },

      {
        time: 23.3,
        text: "Your little eyelids flutter 'cause you're dreaming",
      },
      {
        time: 26.4,
        text: "So I tuck you in, turn on your favorite nightlight",
      },

      { time: 31.2, text: "To you, everything's funny" },
      { time: 34.5, text: "You got nothing to regret" },

      { time: 39.6, text: "I'd give all I have, honey" },
      { time: 42.8, text: "If you could stay like that" },

      { time: 46.0, text: "Oh, darling, don't you ever grow up" },
      { time: 49.5, text: "Don't you ever grow up, just stay this little" },

      { time: 54.1, text: "Oh, darling, don't you ever grow up" },
      { time: 57.3, text: "Don't you ever grow up, it could stay this simple" },

      { time: 62.4, text: "I won't let nobody hurt you" },

      { time: 66.5, text: "Won't let no one break your heart" },

      { time: 70.8, text: "And no one will desert you" },

      { time: 74.8, text: "Just try to never grow up" },

      { time: 83.2, text: "And never grow up" },

      { time: 85.2, text: "You're in the car, on the way to the movies" },
      { time: 89.7, text: "And you're mortified your mom's droppin' you off" },

      { time: 94.1, text: "At fourteen, there's just so much you can't do" },
      {
        time: 97.1,
        text: "And you can't wait to move out someday and call your own shots",
      },

      { time: 102.0, text: "But don't make her drop you off around the block" },
      { time: 105.7, text: "Remember that she's gettin' older, too" },

      { time: 110.8, text: "And don't lose the way that you dance around" },
      { time: 114.5, text: "In your PJs getting ready for school" },

      { time: 119.2, text: "Oh, darling, don't you ever grow up" },
      { time: 122.1, text: "Don't you ever grow up, just stay this little" },

      { time: 126.8, text: "Oh, darling, don't you ever grow up" },
      {
        time: 129.9,
        text: "Don't you ever grow up, it could stay this simple",
      },

      { time: 135.5, text: "And no one's ever burned you" },

      { time: 139.4, text: "Nothing's ever left you scarred" },

      { time: 143.6, text: "And even though you want to" },
      { time: 147.2, text: "Just try to never grow up" },

      {
        time: 154.5,
        text: "Take pictures in your mind of your childhood room",
      },
      {
        time: 161.1,
        text: "Memorize what it sounded like when your dad gets home",
      },

      { time: 167.3, text: "Remember the footsteps, remember the words said" },
      { time: 171.7, text: "And all your little brother's favorite songs" },

      {
        time: 175.6,
        text: "I just realized everything I have is, someday, gonna be gone",
      },

      { time: 192.4, text: "So, here I am in my new apartment" },
      { time: 195.6, text: "In a big city, they just dropped me off" },

      { time: 200.0, text: "It's so much colder than I thought it would be" },
      { time: 203.2, text: "So I tuck myself in and turn my nightlight on" },

      { time: 207.8, text: "Wish I'd never grown up" },

      { time: 214.2, text: "Wish I'd never grown up" },

      { time: 218.1, text: "Oh, I don't wanna grow up" },
      { time: 222.7, text: "Wish I'd never grown up, I could still be little" },

      { time: 227.3, text: "Oh, I don't wanna grow up" },
      {
        time: 230.7,
        text: "Wish I'd never grown up, it could still be simple",
      },

      { time: 238.5, text: "Oh, darling, don't you ever grow up" },
      { time: 241.4, text: "Don't you ever grow up, just stay this little" },

      { time: 246.0, text: "Oh, darling, don't you ever grow up" },
      {
        time: 248.9,
        text: "Don't you ever grow up, it could stay this simple",
      },

      { time: 254.5, text: "I won't let nobody hurt you" },

      { time: 258.7, text: "Won't let no one break your heart" },

      { time: 262.4, text: "And even though you want to" },
      { time: 266.1, text: "Please, try to never grow up" },

      { time: 269.5, text: "Oh, oh" },

      { time: 275.0, text: "Just never grow up" },

      { time: 277.9, text: "Oh" },

      { time: 282.9, text: "Just never grow up" },
    ],
  },
  {
    id: 4,
    title: "A Million Dreams",
    artist: "The Greatest Showman ",
    src: track4,
    lyricData: [
      { time: 14.63, text: "I close my eyes and I can see" },
      { time: 16.88, text: "The world that's waiting up for me" },
      { time: 20.63, text: "That I call my own" },
      { time: 24.36, text: "Through the dark, through the door" },
      { time: 29.88, text: "Through where no one's been before" },
      { time: 34.14, text: "But it feels like home" },
      { time: 37.4, text: "They can say, they can say it all sounds crazy" },
      { time: 44.16, text: "They can say, they can say I've lost my mind" },
      { time: 50.88, text: "I don't care, I don't care, so call me crazy" },
      { time: 59.15, text: "We can live in a world that we design" },
      { time: 65.1, text: "'Cause every night I lie in bed" },
      { time: 67.6, text: "The brightest colors fill my head" },
      { time: 71.09, text: "A million dreams are keeping me awake" },
      { time: 77.63, text: "I think of what the world could be" },
      { time: 80.91, text: "A vision of the one I see" },
      { time: 84.13, text: "A million dreams is all it's gonna take" },
      { time: 91.14, text: "A million dreams for the world we're gonna make" },
      { time: 96.13, text: "There's a house we can build" },
      { time: 104.65, text: "Every room inside is filled" },
      { time: 108.63, text: "With things from far away" },
      { time: 113.61, text: "The special things I compile" },
      { time: 117.64, text: "Each one there to make you smile" },
      { time: 121.63, text: "On a rainy day" },
      { time: 126.88, text: "They can say, they can say it all sounds crazy" },
      { time: 131.13, text: "They can say, they can say we've lost our minds" },
      {
        time: 137.91,
        text: "I don't care, I don't care if they call us crazy",
      },
      { time: 145.88, text: "Runaway to a world that we design" },
      { time: 152.66, text: "Every night I lie in bed" },
      { time: 155.63, text: "The brightest colors fill my head" },
      { time: 158.65, text: "A million dreams are keeping me awake" },
      { time: 165.63, text: "I think of what the world could be" },
      { time: 168.13, text: "A vision of the one I see" },
      { time: 171.89, text: "A million dreams is all it's gonna take" },
      { time: 178.38, text: "A million dreams for the world we're gonna make" },
      { time: 182.6, text: "However big, however small" },
      { time: 185.4, text: "Let me be part of it all" },
      { time: 189.61, text: "Share your dreams with me" },
      { time: 194.38, text: "You may be right, you may be wrong" },
      { time: 198.63, text: "But say that you'll bring me along" },
      { time: 202.38, text: "To the world you see" },
      { time: 204.88, text: "To the world I close my eyes to see" },
      { time: 209.89, text: "I close my eyes to see" },
      { time: 216.14, text: "Every night I lie in bed" },
      { time: 218.88, text: "The brightest colors fill my head" },
      { time: 222.38, text: "A million dreams are keeping me awake" },
      { time: 226.37, text: "A million dreams, a million dreams" },
      { time: 228.9, text: "I think of what the world could be" },
      { time: 231.64, text: "A vision of the one I see" },
      { time: 234.65, text: "A million dreams is all it's gonna take" },
      { time: 241.13, text: "A million dreams for the world we" },
    ],
  },
];

export default tracks;
